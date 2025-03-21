import { Quote } from 'lucide-react';
import React from 'react';

const TestimonialCard = ({ name, role, quote }) => {
  return (
    <div className="rounded-lg border shadow-sm hover:scale-105 transition duration-200">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full  p-2">
            <Quote/>
          </div>
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm ">{role}</p>
          </div>
        </div>
        <p className=" text-muted-foreground">"{quote}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
