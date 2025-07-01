'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    image: '/projects/project1.jpg',
    title: 'Re-roof in Dallas, TX',
    description: 'Replaced old asphalt shingles with high-quality GAF materials.',
  },
  {
    image: '/projects/project2.jpg',
    title: 'Full Replacement in Miami, FL',
    description: 'New metal roofing system installed with thermal insulation.',
  },
  {
    image: '/projects/project3.jpg',
    title: 'Storm Damage Repair - Houston',
    description: 'Emergency repair after wind and hail damage.',
  },
  {
    image: '/projects/project4.jpg',
    title: 'New Construction - Austin, TX',
    description: 'Custom roofing design for a modern family home.',
  },
  {
    image: '/projects/project5.jpg',
    title: 'Before & After – San Antonio',
    description: 'Dramatic transformation from damaged to brand-new.',
  },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-slate-800">
          Completed Roofing Projects
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="rounded-xl shadow-xl"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white p-4 text-left">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
