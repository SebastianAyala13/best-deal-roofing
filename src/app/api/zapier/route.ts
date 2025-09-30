import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extraer IP address de headers
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Payload completo enviado a Zapier
    const payload = {
      // Constantes de campaña
      lp_campaign_id: body.lp_campaign_id ?? process.env.NEXT_PUBLIC_LP_CAMPAIGN_ID ?? 'Provided',
      lp_campaign_key: body.lp_campaign_key ?? process.env.NEXT_PUBLIC_LP_CAMPAIGN_KEY ?? 'Provided',
      lp_s1: body.lp_s1 ?? process.env.NEXT_PUBLIC_LP_S1 ?? 'Provided',
      lp_s2: body.lp_s2 ?? process.env.NEXT_PUBLIC_LP_S2 ?? 'primebathpros',
      lp_response: 'JSON',
      
      // Datos de contacto y dirección
      city: body.city ?? '',
      state: body.state ?? '',
      zip_code: body.zip_code ?? '',
      first_name: body.first_name ?? '',
      last_name: body.last_name ?? '',
      address: body.address ?? '',
      phone_home: body.phone_home ?? '',
      email_address: body.email_address ?? '',
      
      // Metadatos y tracking
      ip_address: ip,
      trusted_form_cert_id: body.trusted_form_cert_id ?? 'NOT_PROVIDED',
      landing_page: body.landing_page ?? '',
      
      // Servicio y consentimiento
      repair_or_replace: body.repair_or_replace ?? '',
      ownership: body.ownership ?? '',
      tcpaText: body.tcpaText ?? '',
      consent_language: !!body.consent_language,
    };

    // Enviar a Zapier
    const zapierUrl = process.env.ZAPIER_HOOK_URL;
    
    // Log para debugging (remover en producción)
    console.log('🚀 Sending to Zapier:', {
      ...payload,
      trusted_form_cert_id: payload.trusted_form_cert_id.length > 50 ? 'TOKEN_PROVIDED' : payload.trusted_form_cert_id
    });
    console.log('📡 Zapier URL:', zapierUrl ? 'CONFIGURED' : 'NOT_CONFIGURED');
    
    if (!zapierUrl) {
      console.error('❌ ZAPIER_HOOK_URL not configured in environment variables');
      throw new Error('ZAPIER_HOOK_URL not configured');
    }

    const zapierResponse = await fetch(zapierUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('📊 Zapier Response Status:', zapierResponse.status);
    console.log('📊 Zapier Response OK:', zapierResponse.ok);

    const responseBody = await zapierResponse.text();
    console.log('📄 Zapier Response Body:', responseBody);
    if (!zapierResponse.ok) {
      console.error('❌ Zapier Error Response:', responseBody);
      throw new Error(`Zapier responded with status: ${zapierResponse.status} - ${responseBody}`);
    }

    type ZapierResult = Record<string, unknown> | string;
    let zapierResult: ZapierResult;
    try {
      zapierResult = JSON.parse(responseBody) as Record<string, unknown>;
    } catch {
      console.warn('⚠️ Zapier response was not valid JSON, returning raw text');
      zapierResult = responseBody;
    }

    console.log('✅ Zapier Success Response:', zapierResult);

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      zapier_response: zapierResult,
    });

  } catch (error) {
    console.error('Zapier API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit lead',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
