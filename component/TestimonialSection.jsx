import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: "Robert Thompson",
    role: "Cardiac Patient",
    quote: "The care I received at MediCare Hospital was exceptional. Dr. Johnson and her team truly cared about my recovery."
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Mother of Patient",
    quote: "Dr. Rodriguez was amazing with my son. She took the time to explain everything and made him feel comfortable during his treatment."
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Rehabilitation Patient",
    quote: "After my stroke, the rehabilitation team at MediCare helped me regain my independence. I'm grateful for their expertise and encouragement."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Patients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Read about the experiences of our patients and their families.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
