'use client';

import Hero from './components/Hero';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Form from './Form';
import { useEffect } from 'react';
import TrustSection from './components/TrustSection';
import ReviewSection from './components/ReviewSection';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <WhyChooseUs />
      <TrustSection />

      {/* Form with video background visible */}
      <section
        id="form-section"
        className="py-20 px-4 backdrop-blur-md bg-white/20"
      >
        <Form />
      </section>

      <ReviewSection />

      {/* Testimonials with transparent blur background */}
      <section className="py-16 px-4 backdrop-blur-md bg-white/20" id="testimonials">
        <Testimonials />
      </section>

      {/* FAQ Section with video background visible */}
      <section
        id="faq"
        className="py-16 px-4 backdrop-blur-md bg-white/20 text-slate-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 drop-shadow-md">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <details>
            <summary className="font-semibold cursor-pointer">
              How do I know if my roof needs to be replaced?
            </summary>
            <p className="text-gray-700">
              If you see curling shingles, leaks, or missing tiles after a
              storm, it’s time to consider a replacement.
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              Are your roofing services licensed and insured?
            </summary>
            <p className="text-gray-700">
              Yes, we are fully licensed and insured in multiple U.S. states.
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              Do you offer free estimates?
            </summary>
            <p className="text-gray-700">
              Absolutely! Just fill out our contact form and we’ll call you
              with a no-obligation estimate.
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              How long does a typical roof replacement take?
            </summary>
            <p className="text-gray-700">
              Most residential roof replacements are completed in just one day,
              depending on weather and roof size.
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              What types of roofing materials do you offer?
            </summary>
            <p className="text-gray-700">
              We offer asphalt shingles, metal roofing, tile, and
              energy-efficient options tailored to your home.
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              Is financing available for roof projects?
            </summary>
            <p className="text-gray-700">
              Yes, we offer flexible financing options so you can protect your
              home without stress.
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              Do you provide emergency roof repair services?
            </summary>
            <p className="text-gray-700">
              Absolutely. Our team is available for storm damage and urgent
              leaks 24/7 in many service areas.
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              Can I schedule an inspection even if I’m not sure I need repairs?
            </summary>
            <p className="text-gray-700">
              Of course. Our inspections are free and no-obligation. We’re
              happy to give honest feedback.
            </p>
          </details>
        </div>
      </section>

      <Footer />

      {/* Invisible SEO Footer Text */}
      <p className="sr-only">
        Best Deal Roofing is a trusted and licensed roofing contractor offering
        full roof replacements, emergency roof repairs, and free estimates
        across the United States including Texas, Florida, and California.
      </p>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if my roof needs to be replaced?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "If you see curling shingles, leaks, or missing tiles after a storm, it’s time to consider a replacement.",
                },
              },
              {
                "@type": "Question",
                "name": "Are your roofing services licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, we are fully licensed and insured in multiple U.S. states.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you offer free estimates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Absolutely! Just fill out our contact form and we’ll call you with a no-obligation estimate.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}