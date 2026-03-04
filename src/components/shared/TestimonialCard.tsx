import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Quote className="w-8 h-8 text-secondary/30 mb-4" />
      <p className="italic text-gray-600 mb-6">{testimonial.quote}</p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover bg-gray-200"
        />
        <div>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-gray">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
