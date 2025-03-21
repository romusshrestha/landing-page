import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm ">
              Trusted Healthcare
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Health Is Our Top Priority
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Providing compassionate care and cutting-edge medical services to
              our community for over 25 years.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#">
                <button className="border-1 rounded px-4 py-2 text-white bg-black hover:bg-white hover:text-black">Book an Appointment</button>
              </Link>
              <Link href="#">
                <button className="border-1 rounded px-4 py-2 text-white bg-black hover:bg-white hover:text-black">Our Services</button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <Image
              src="/hospital.avif"
              width={550}
              height={550}
              alt="Hospital team of doctors"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
