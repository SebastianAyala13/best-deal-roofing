// src/app/page.tsx
'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Form from './components/Form';
import WhyChooseUs from './components/WhyChooseUs';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      <Header />

      <AnimatedSection animation="fade-up">
        <section id="hero">
          <Hero />
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-right">
        <section id="form-section">
          <Form />
        </section>
      </AnimatedSection>

      <AnimatedSection animation="zoom-in">
        <section id="benefits">
          <WhyChooseUs />
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-left">
        <section id="video">
          <VideoSection />
        </section>
      </AnimatedSection>

      <AnimatedSection animation="slide-up">
        <section id="testimonials">
          <Testimonials />
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up">
        <section id="footer">
          <Footer />
        </section>
      </AnimatedSection>
    </main>
  );
}
