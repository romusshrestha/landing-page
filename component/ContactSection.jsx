import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-gradient-to-r from-blue-50 to-teal-50" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Have questions or need assistance? Our team is here to help.
              </p>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-muted-foreground">
                    Main: (555) 123-4567
                    <br />
                    Emergency: (555) 911-0000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday-Friday: 8am-8pm
                    <br />
                    Saturday: 9am-5pm
                    <br />
                    Sunday: Closed (Emergency services available 24/7)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-[400px] w-full">
            <Image
              src="/contact.avif"
              width={600}
              height={400}
              alt="Map of hospital location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
