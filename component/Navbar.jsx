import { Heart, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b  backdrop-blur ">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 ml-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MediCare Hospital</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#doctors"
              className="text-sm font-medium hover:text-primary"
            >
              Doctors
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4 mr-2">
            <Link href="#appointment" className="hidden md:block border-1 rounded px-4 py-2 bg-black text-white hover:bg-white hover:text-black">
              <button>Book Appointment</button>
            </Link>
            <button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <Menu/>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
