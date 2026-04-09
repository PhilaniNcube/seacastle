import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, Coffee, ArrowRight } from "lucide-react";
import { rooms } from "@/data/rooms";

export default function RoomList() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-accent tracking-[0.2em] uppercase text-sm font-medium">
            Accommodations
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl font-light tracking-tight">
            Our Rooms
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Each room at Sea Castle has been thoughtfully designed to offer 
            comfort and elegance with stunning views of the Atlantic Ocean.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <Link
                key={room.slug}
                href={`/rooms/${room.slug}`}
                className="group block"
              >
                <article className="bg-card rounded-sm overflow-hidden border border-border transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-0">
                        <Waves className="h-3 w-3 mr-1" />
                        {room.attributes.view}
                      </Badge>
                      {room.attributes.breakfast_included && (
                        <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-0">
                          <Coffee className="h-3 w-3 mr-1" />
                          Breakfast
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-light group-hover:text-accent transition-colors">
                      {room.name}
                    </h2>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {room.description}
                    </p>
                    <div className="mt-6 flex items-center text-accent text-sm font-medium">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-accent tracking-[0.2em] uppercase text-sm font-medium">
            Reservations
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light tracking-tight">
            Ready to Book?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Check availability for your preferred dates and secure your seaside escape.
          </p>
          
          {/* Availability Widget Placeholder */}
          <div className="mt-10 p-10 bg-background rounded-sm border border-border">
            <p className="text-muted-foreground text-sm">
              Booking widget will appear here
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Embed your RoomRaccoon availability widget in this section
            </p>
            <Link
              href="https://booking.roomraccoon.co.za/primi-seacastle/en/"
              target="_blank"
            >
              <Button
                size="lg"
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground tracking-wide uppercase text-sm px-8"
              >
                Book Direct
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl font-light">Sea Castle</h3>
          <p className="mt-4 text-primary-foreground/70 text-sm">
            15 Strathmore Lane, Camps Bay, Cape Town 8040
          </p>
          <p className="mt-2 text-primary-foreground/70 text-sm">
            +27 (21) 879-8509 | seacastle@primi-hotels.com
          </p>
          <p className="mt-8 text-primary-foreground/50 text-xs">
            Sea Castle Boutique Hotel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
