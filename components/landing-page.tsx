"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import { ArrowRight, MapPin, Phone, Mail, Waves, Coffee, Tv, Bath } from "lucide-react";
import BookingWidget from "@/components/booking-widget";
import { trackExternalLink, trackNavigation } from "@/lib/gtm";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={rooms[0].images[0]}
            alt="Sea Castle Boutique Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-primary-foreground/80 tracking-[0.3em] uppercase text-sm mb-4">
            Camps Bay, Cape Town
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-light tracking-tight text-balance max-w-4xl">
            Sea Castle
          </h1>
          <p className="mt-6 text-primary-foreground/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            A boutique retreat where the Atlantic Ocean meets timeless elegance
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://booking.roomraccoon.co.za/primi-seacastle/en/" 
              target="_blank"
              onClick={() => trackExternalLink({
                url: 'https://booking.roomraccoon.co.za/primi-seacastle/en/',
                linkText: 'Check Availability',
                linkType: 'booking',
              })}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground tracking-wide uppercase text-sm px-8 py-6"
              >
                Check Availability
              </Button>
            </Link>
            <Link 
              href="/rooms"
              onClick={() => trackNavigation({
                destination: '/rooms',
                linkText: 'Explore Rooms',
              })}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 tracking-wide uppercase text-sm px-8 py-6"
              >
                Explore Rooms
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent tracking-[0.2em] uppercase text-sm font-medium">
              Welcome
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light tracking-tight text-balance">
              Your Seaside Sanctuary
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              Nestled along the pristine shores of Camps Bay, Sea Castle offers an intimate 
              escape where every detail has been thoughtfully curated. Wake to the sound of 
              waves, savor breakfast with panoramic ocean views, and experience the warmth 
              of South African hospitality.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Waves, label: "Ocean Views", desc: "Breathtaking Atlantic vistas" },
              { icon: Coffee, label: "Breakfast", desc: "Complimentary daily" },
              { icon: Bath, label: "Private Bath", desc: "En-suite bathrooms" },
              { icon: Tv, label: "Modern Amenities", desc: "Satellite TV & WiFi" },
            ].map((amenity) => (
              <div key={amenity.label} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center">
                  <amenity.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-medium text-foreground">{amenity.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-accent tracking-[0.2em] uppercase text-sm font-medium">
                Accommodations
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light tracking-tight">
                Our Rooms
              </h2>
            </div>
            <Link href="/rooms">
              <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
                View All Rooms
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <Link
                key={room.slug}
                href={`/rooms/${room.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary-foreground/70 text-xs tracking-wider uppercase">
                      {room.attributes.view}
                    </span>
                    <h3 className="mt-1 font-serif text-xl text-primary-foreground">
                      {room.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-accent tracking-[0.2em] uppercase text-sm font-medium">
            Reservations
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light tracking-tight text-balance">
            Plan Your Stay
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Check availability and secure your seaside escape at Sea Castle Boutique Hotel
          </p>
          
          <div className="mt-12 p-12 bg-secondary/50 rounded-sm border border-border">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-accent tracking-[0.2em] uppercase text-sm font-medium">
                Location
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light tracking-tight">
                Find Us
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Located in the heart of Camps Bay, Sea Castle is just steps away from the 
                famous white-sand beach and a short drive from Cape Town&apos;s top attractions.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Address</h3>
                    <p className="mt-1 text-muted-foreground">
                      15 Strathmore Lane, Camps Bay<br />
                      Cape Town, 8040
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="mt-1 text-muted-foreground">+27 (21) 879-8509</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="mt-1 text-muted-foreground">seacastle@primi-hotels.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-sm overflow-hidden">
              <Image
                src={rooms[1].images[0]}
                alt="Camps Bay Location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-light">Sea Castle</h3>
              <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
                A boutique retreat in Camps Bay where luxury meets the sea.
              </p>
            </div>
            <div>
              <h4 className="text-sm tracking-wider uppercase text-primary-foreground/50 mb-4">
                Quick Links
              </h4>
              <div className="space-y-3">
                <Link href="/rooms" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Our Rooms
                </Link>
                <Link href="/gallery" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Gallery
                </Link>
                <Link href="https://booking.roomraccoon.co.za/primi-seacastle/en/" target="_blank" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm tracking-wider uppercase text-primary-foreground/50 mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-primary-foreground/70">
                <p>15 Strathmore Lane, Camps Bay</p>
                <p>Cape Town, 8040</p>
                <p>+27 (21) 879-8509</p>
                <p>seacastle@primi-hotels.com</p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/50 text-sm">
              Sea Castle Boutique Hotel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
