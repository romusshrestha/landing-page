import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import DoctorCard from './DoctorCard';

const DoctorsSection = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Cardiologist",
      image: {
        src: "/doctor.avif",
        width: 400,
        height: 300
      }
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Neurologist",
      image: {
        src: "/doctor.avif",
        width: 400,
        height: 300
      }
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Pediatrician",
      image: {
        src: "/doctor.avif",
        width: 400,
        height: 300
      }
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-gradient-to-r from-blue-50 to-teal-50" id="doctors" >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm ">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Specialists</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our team of experienced doctors is dedicated to providing the highest quality care.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="#" className="group inline-flex items-center text-sm font-medium text-primary">
            View All Doctors
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
