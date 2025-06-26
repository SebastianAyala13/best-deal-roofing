'use client';

import Image from 'next/image';

export default function ReviewSection() {
  return (
    <section className="py-16 bg-white text-slate-900" id="reviews">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Real Reviews from Real Homeowners</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Texas */}
          <div className="border rounded-lg p-6 shadow-md">
            <Image src="/google-logo.png" alt="Google Reviews" width={80} height={20} />
            <p className="mt-4 text-sm italic text-gray-700">“After a major storm in Houston, Best Deal Roofing came the next day and had everything fixed in 24 hours. They even helped with my insurance!”</p>
            <p className="mt-3 font-semibold text-yellow-600">– Alicia R., Texas ⭐⭐⭐⭐⭐</p>
          </div>

          {/* Florida */}
          <div className="border rounded-lg p-6 shadow-md">
            <Image src="/facebook-logo.png" alt="Facebook Reviews" width={80} height={20} />
            <p className="mt-4 text-sm italic text-gray-700">“We just bought our home in Miami and needed a full roof replacement. Fast, affordable and super professional. 10/10.”</p>
            <p className="mt-3 font-semibold text-yellow-600">– James T., Florida ⭐⭐⭐⭐⭐</p>
          </div>

          {/* California */}
          <div className="border rounded-lg p-6 shadow-md">
            <Image src="/linkedin-logo.png" alt="LinkedIn Reviews" width={80} height={20} />
            <p className="mt-4 text-sm italic text-gray-700">“Reliable roofing company in California. Great communication and they cleaned up everything after the job. Our HOA was impressed.”</p>
            <p className="mt-3 font-semibold text-yellow-600">– Carla G., California ⭐⭐⭐⭐⭐</p>
          </div>

          {/* Georgia */}
          <div className="border rounded-lg p-6 shadow-md">
            <Image src="/google-logo.png" alt="Google Reviews" width={80} height={20} />
            <p className="mt-4 text-sm italic text-gray-700">“They explained every step and gave us a better quote than 2 other companies. Our home in Atlanta looks amazing now.”</p>
            <p className="mt-3 font-semibold text-yellow-600">– David P., Georgia ⭐⭐⭐⭐⭐</p>
          </div>

          {/* North Carolina */}
          <div className="border rounded-lg p-6 shadow-md">
            <Image src="/facebook-logo.png" alt="Facebook Reviews" width={80} height={20} />
            <p className="mt-4 text-sm italic text-gray-700">“I’m a single mom and was scared of roofing scams. Best Deal Roofing was kind, honest, and super transparent. Highly recommended.”</p>
            <p className="mt-3 font-semibold text-yellow-600">– Jessica M., North Carolina ⭐⭐⭐⭐⭐</p>
          </div>

          {/* Nevada */}
          <div className="border rounded-lg p-6 shadow-md">
            <Image src="/linkedin-logo.png" alt="LinkedIn Reviews" width={80} height={20} />
            <p className="mt-4 text-sm italic text-gray-700">“As a realtor, I’ve worked with many contractors. These guys are on another level. Quick, clean and competitive prices.”</p>
            <p className="mt-3 font-semibold text-yellow-600">– Robert S., Nevada ⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
    </section>
  );
}
