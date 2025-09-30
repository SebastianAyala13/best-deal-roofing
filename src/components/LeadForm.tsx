'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Declaraciones globales para TrustedForm
declare global {
  interface Window {
    TrustedForm?: {
      getCertUrl?: () => string;
    };
  }
}

export default function LeadForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [tfToken, setTfToken] = useState('');
  const [isNotEligible, setIsNotEligible] = useState(false);
  const tfHiddenRef = useRef<HTMLInputElement>(null);
  const hasSubmitted = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Log para verificar cuántas instancias se montan
  useEffect(() => {
    console.log('🔧 LeadForm component mounted - timestamp:', new Date().toISOString());
    return () => {
      console.log('🔧 LeadForm component unmounted - timestamp:', new Date().toISOString());
    };
  }, []);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_address: '',
    phone_home: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    repair_or_replace: '',
    ownership: '',
    consent_language: true,
  });

  // TrustedForm Integration
  useEffect(() => {
    if (!tfHiddenRef.current) return;
    
    console.log('🔧 Setting up TrustedForm token capture...');
    
    // Ya cargamos el script global en layout.tsx con field=trusted_form_cert_id
    const applyFromGlobal = () => {
      try {
        // Verificar si TrustedForm está disponible
        if (!window.TrustedForm) {
          console.log('🔧 TrustedForm not yet available');
          return false;
        }
        
        if (!window.TrustedForm.getCertUrl) {
          console.log('🔧 TrustedForm.getCertUrl not yet available');
          return false;
        }
        
        const val = window.TrustedForm.getCertUrl();
        console.log('🔧 TrustedForm.getCertUrl() returned:', val);
        
        if (val && val !== 'NOT_PROVIDED' && val.length > 10) {
          console.log('✅ TrustedForm token captured:', val.substring(0, 50) + '...');
          if (tfHiddenRef.current) tfHiddenRef.current.value = val;
          setTfToken(val);
          return true;
        } else {
          console.log('🔧 TrustedForm token not ready yet:', val);
        }
      } catch (error) {
        console.error('❌ Error getting TrustedForm token:', error);
      }
      return false;
    };

    // Intentar inmediatamente
    applyFromGlobal();
    
    // Observer para cambios en el campo hidden
    const obs = new MutationObserver(() => {
      if (tfHiddenRef.current?.value && tfHiddenRef.current.value !== 'NOT_PROVIDED') {
        console.log('✅ TrustedForm token updated via observer:', tfHiddenRef.current.value.substring(0, 50) + '...');
        setTfToken(tfHiddenRef.current.value);
      }
    });
    
    obs.observe(tfHiddenRef.current, { attributes: true, attributeFilter: ['value'] });
    
    // Polling cada 500ms por hasta 15 segundos
    let attempts = 0;
    const maxAttempts = 30;
    const id = setInterval(() => {
      attempts++;
      console.log(`🔧 TrustedForm polling attempt ${attempts}/${maxAttempts}`);
      if (applyFromGlobal() || attempts >= maxAttempts) {
        clearInterval(id);
        if (attempts >= maxAttempts) {
          console.warn('⚠️ TrustedForm token not captured after 15 seconds');
          console.log('🔧 Final TrustedForm state:', {
            available: !!window.TrustedForm,
            getCertUrl: !!(window.TrustedForm && window.TrustedForm.getCertUrl),
            currentValue: tfHiddenRef.current?.value
          });
        }
      }
    }, 500);
    
    return () => { 
      obs.disconnect(); 
      clearInterval(id); 
    };
  }, []);

  async function waitForTrustedFormToken(maxWaitMs = 8000) {
    // Espera hasta 8s con polling cada 200ms para capturar token
    const start = Date.now();
    const poll = async () => {
      const hiddenVal = tfHiddenRef.current?.value || '';
      let fromApi = '';
      try { 
        if (window.TrustedForm && window.TrustedForm.getCertUrl) {
          fromApi = window.TrustedForm.getCertUrl() || '';
          console.log('🔧 waitForTrustedFormToken - getCertUrl returned:', fromApi);
        }
      } catch (error) {
        console.error('❌ Error getting TrustedForm token in poll:', error);
      }
      
      const val = hiddenVal || fromApi;
      console.log('🔧 waitForTrustedFormToken - checking values:', { hiddenVal, fromApi, final: val });
      
      if (val && val !== 'NOT_PROVIDED' && val.length > 10) {
        console.log('✅ TrustedForm token found in poll:', val.substring(0, 50) + '...');
        if (!hiddenVal && tfHiddenRef.current) tfHiddenRef.current.value = val;
        setTfToken(val);
        return val;
      }
      
      if (Date.now() - start >= maxWaitMs) {
        console.warn('⚠️ TrustedForm token timeout after', maxWaitMs, 'ms');
        console.log('🔧 Timeout state:', {
          hiddenVal,
          fromApi,
          TrustedFormAvailable: !!window.TrustedForm,
          getCertUrlAvailable: !!(window.TrustedForm && window.TrustedForm.getCertUrl)
        });
        return '';
      }
      await new Promise(r => setTimeout(r, 200));
      return poll();
    };
    return poll();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Verificar elegibilidad cuando cambie la propiedad
    if (name === 'ownership') {
      if (value === 'no') {
        setIsNotEligible(true);
        alert(language === 'es'
          ? 'Lo sentimos, este formulario es solo para propietarios de vivienda.'
          : 'Sorry, this form is only for homeowners.');
      } else {
        setIsNotEligible(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevenir envío si no es elegible
    if (isNotEligible) {
      console.log('🚫 Form submission blocked - not eligible (not homeowner)');
      return;
    }
    
    // Prevenir envíos duplicados
    if (hasSubmitted.current || isSubmitting) {
      console.log('🚫 Form submission blocked - already submitted or submitting');
      return;
    }
    
    console.log('🚀 Form submission started - hasSubmitted:', hasSubmitted.current, 'isSubmitting:', isSubmitting);
    hasSubmitted.current = true;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Esperar por el token de TrustedForm
      const trustedFormToken = await waitForTrustedFormToken();
      
      // TCPA Text completo
      const tcpaText = "By clicking Submit, You agree to give express consent to receive marketing communications regarding Home Improvement services by automatic dialing system and pre-recorded calls and artificial voice messages from Home Services Partners at the phone number and E-mail address provided by you, including wireless numbers, if applicable, even if you have previously registered the provided number on the Do not Call Registry. SMS/MMS and data messaging rates may apply. You understand that my consent here is not a condition for buying any goods or services. You agree to the Privacy Policy and Terms & Conditions.";

      // Payload completo para Zapier
      const payload = {
        // Datos del formulario
        ...formData,
        
        // Metadatos y tracking
        trusted_form_cert_id: trustedFormToken || 'NOT_PROVIDED',
        landing_page: window.location.href,
        tcpaText: tcpaText,
        
        // Constantes de campaña
        lp_response: 'JSON',
      };

      console.log('🚀 Sending payload to API:', {
        ...payload,
        trusted_form_cert_id: payload.trusted_form_cert_id.length > 50 ? 'TOKEN_PROVIDED' : payload.trusted_form_cert_id
      });

      const response = await fetch('/api/zapier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('✅ Form submitted successfully');
        
        // Disparar Custom Event para GTM (solo una vez)
        if (typeof window !== 'undefined' && window.dataLayer) {
          const eventData = {
            event: 'lead_submit',
            form_id: 'lead_form',
            form_type: 'roofing_quote',
            lead_data: {
              first_name: formData.first_name,
              last_name: formData.last_name,
              email: formData.email_address,
              phone: formData.phone_home,
              service: formData.repair_or_replace,
              zip_code: formData.zip_code,
              address: formData.address,
              city: formData.city,
              state: formData.state
            }
          };
          
          window.dataLayer.push(eventData);
          console.log('✅ Custom GTM event pushed: lead_submit');
          console.log('📊 Event data:', eventData);
          console.log('📈 Total dataLayer events:', window.dataLayer.length);
        }
        
        setSubmitStatus('success');
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        const errorText = await response.text();
        console.error('❌ API Error Response Text:', errorText);
        let errorData: Record<string, unknown> = {};
        try {
          errorData = JSON.parse(errorText) as Record<string, unknown>;
        } catch {}
        console.error('❌ API Error Response:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });
        throw new Error(`Submission failed: ${response.status} - ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      hasSubmitted.current = false; // Reset para permitir reintento
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="lead-form" className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-md mx-auto">
      {/* TrustedForm Hidden Field */}
      <input
        ref={tfHiddenRef}
        type="hidden"
        name="trusted_form_cert_id"
        id="trusted_form_cert_id"
      />

      {isNotEligible ? (
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
            {language === 'es' ? 'No puedes continuar' : 'You cannot proceed'}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {language === 'es'
              ? 'Este formulario está destinado solo para propietarios de vivienda. Si no eres el dueño, no puedes completar esta solicitud.'
              : 'This form is only for homeowners. If you are not the owner, you cannot complete this request.'}
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 text-center">
            {language === 'es' ? 'Obtén tu Cotización Gratuita' : 'Get Your Free Bathroom Quote'}
          </h2>
          
          <p className="text-xs text-gray-600 mb-4 text-center">
            {language === 'es' 
              ? 'Completa el formulario y nuestro equipo se pondrá en contacto contigo.'
              : 'Fill out the form and our team will contact you shortly.'
            }
          </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-1.5" data-tf-element-role="offer">
        {/* First Name */}
        <div>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            placeholder={language === 'es' ? 'Nombre' : 'First Name'}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            placeholder={language === 'es' ? 'Apellido' : 'Last Name'}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            required
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email_address"
            value={formData.email_address}
            onChange={handleInputChange}
            placeholder={language === 'es' ? 'Correo Electrónico' : 'Email Address'}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone_home"
            value={formData.phone_home}
            onChange={handleInputChange}
            placeholder={language === 'es' ? 'Número de Teléfono' : 'Phone Number'}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            required
          />
        </div>

        {/* Address */}
        <div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder={language === 'es' ? 'Dirección Completa' : 'Full Address'}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            required
          />
        </div>

        {/* City */}
        <div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder={language === 'es' ? 'Ciudad' : 'City'}
            className="w-full px-3 py-1.5 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            required
          />
        </div>

        {/* State & Zip */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder={language === 'es' ? 'Estado' : 'State'}
            className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
          <input
            type="text"
            name="zip_code"
            value={formData.zip_code}
            onChange={handleInputChange}
            placeholder={language === 'es' ? 'Código Postal' : 'ZIP Code'}
            className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>

        {/* Repair or Replace */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">
            {language === 'es' ? '¿Qué necesitas?' : 'What do you need?'}
          </p>
          <div className="flex gap-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="repair_or_replace"
                value="repair"
                checked={formData.repair_or_replace === 'repair'}
                onChange={handleInputChange}
                className="mr-1 text-teal-500 focus:ring-teal-500"
                required
              />
              <span className="text-sm text-gray-700">
                {language === 'es' ? 'Reparación' : 'Repair'}
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="repair_or_replace"
                value="replace"
                checked={formData.repair_or_replace === 'replace'}
                onChange={handleInputChange}
                className="mr-1 text-teal-500 focus:ring-teal-500"
                required
              />
              <span className="text-sm text-gray-700">
                {language === 'es' ? 'Reemplazo' : 'Replace'}
              </span>
            </label>
          </div>
        </div>

        {/* Ownership */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">
            {language === 'es' ? '¿Eres el propietario?' : 'Are you the homeowner?'}
          </p>
          <div className="flex gap-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="ownership"
                value="yes"
                checked={formData.ownership === 'yes'}
                onChange={handleInputChange}
                className="mr-1 text-teal-500 focus:ring-teal-500"
                required
              />
              <span className="text-sm text-gray-700">
                {language === 'es' ? 'Sí' : 'Yes'}
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="ownership"
                value="no"
                checked={formData.ownership === 'no'}
                onChange={handleInputChange}
                className="mr-1 text-teal-500 focus:ring-teal-500"
                required
              />
              <span className="text-sm text-gray-700">
                {language === 'es' ? 'No' : 'No'}
              </span>
            </label>
          </div>
        </div>

        {/* TCPA Consent Text */}
        <div className="space-y-1">
          <div data-tf-element-role="consent-language" className="text-[10px] leading-tight text-gray-600">
            By clicking Submit, You agree to give express consent to receive marketing communications regarding Home Improvement services by automatic dialing system and pre-recorded calls and artificial voice messages from{' '}
            <span data-tf-element-role="consent-advertiser-name">
              <a className="underline" href="/partners" target="_blank" rel="noreferrer">Home Services Partners</a>
            </span> at the phone number and E-mail address provided by you, including wireless numbers, if applicable, even if you have previously registered the provided number on the Do not Call Registry. SMS/MMS and data messaging rates may apply. You understand that my consent here is not a condition for buying any goods or services. You agree to the{' '}
            <a className="underline" href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> and{' '}
            <a className="underline ml-1" href="/terms-conditions" target="_blank" rel="noreferrer">Terms & Conditions</a>.
          </div>
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          name="submit"
          data-tf-element-role="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center text-sm cursor-pointer"
          value={isSubmitting ? 'Submitting...' : 'Submit'}
        />

        {/* Status Messages */}
        {submitStatus === 'error' && (
          <div className="text-red-600 text-sm text-center">
            {language === 'es' 
              ? 'Error al enviar el formulario. Por favor intenta de nuevo.' 
              : 'Error submitting form. Please try again.'
            }
          </div>
        )}
      </form>

          {/* TrustedForm Debug Info (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 rounded text-xs">
              <p>TrustedForm Token: {tfToken ? 'Captured' : 'Waiting...'}</p>
              <p className="truncate">URL: {tfToken}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
