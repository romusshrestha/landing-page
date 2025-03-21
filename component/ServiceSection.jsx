import { Activity, ChevronRight,Microscope, Pill, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ServiceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="services">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm">Our Services</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Medical Care</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          We offer a wide range of medical services to meet the needs of our patients.
        </p>
      </div>
    </div>
    
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
      {/* Primary Care Card */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 hover:scale-105 transition duration-200">
        <div className="flex flex-col space-y-1.5 pb-4">
          <div className="flex justify-center">
            <Stethoscope className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Primary Care</h3>
        </div>
        <div>
          <p className="text-muted-foreground">Comprehensive healthcare for patients of all ages.</p>
        </div>
      </div>

      {/* Emergency Care Card */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 hover:scale-105 transition duration-200">
        <div className="flex flex-col space-y-1.5 pb-4">
          <div className="flex justify-center">
            <Activity className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Emergency Care</h3>
        </div>
        <div>
          <p className="text-muted-foreground">24/7 emergency services for critical medical needs.</p>
        </div>
      </div>

      {/* Laboratory Card */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 hover:scale-105 transition duration-200">
        <div className="flex flex-col space-y-1.5 pb-4">
          <div className="flex justify-center">
            <Microscope className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Laboratory</h3>
        </div>
        <div>
          <p className="text-muted-foreground">Advanced diagnostic testing and laboratory services.</p>
        </div>
      </div>

      {/* Pharmacy Card */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 hover:scale-105 transition duration-200">
        <div className="flex flex-col space-y-1.5 pb-4">
          <div className="flex justify-center">
            <Pill className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Pharmacy</h3>
        </div>
        <div>
          <p className="text-muted-foreground">On-site pharmacy with prescription and OTC medications.</p>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <Link href="#" className="group inline-flex items-center text-sm font-medium text-primary hover:scale-105 transition duration-200">
        View All Services
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
</section>

  )
}
