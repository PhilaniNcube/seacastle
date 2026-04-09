"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Tv,
  Waves,
  Bath,
  Wind,
  Refrigerator,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { rooms } from "@/data/rooms";
import BookingWidget from "@/components/booking-widget";
import BookingButton from "@/components/booking-button";

type RoomDetailProps = {
  room: {
    name: string;
    slug: string;
    roomId?: string;
    description: string;
    images: string[];
    attributes: {
      view: string;
      bathroom: string;
      breakfast_included: boolean;
    };
  };
};

export default function RoomDetail({ room }: RoomDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + room.images.length) % room.images.length
    );
  };

  const otherRooms = rooms.filter((r) => r.slug !== room.slug);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <Link
          href="/rooms"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Rooms
        </Link>
      </div>

      {/* Hero Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={room.images[currentImageIndex]}
                alt={`${room.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-between px-4">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-0 hover:bg-background"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-0 hover:bg-background"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {room.images.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-primary-foreground w-6"
                    : "bg-primary-foreground/50"
                }`}
              />
            ))}
            {room.images.length > 8 && (
              <span className="text-primary-foreground text-xs self-center ml-1">
                +{room.images.length - 8}
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {room.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative w-20 h-14 flex-shrink-0 rounded-sm overflow-hidden transition-all ${
                index === currentImageIndex
                  ? "ring-2 ring-accent"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Room Details */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="text-accent tracking-[0.2em] uppercase text-sm font-medium">
              {room.attributes.view}
            </span>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl font-light tracking-tight">
              {room.name}
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-normal"
              >
                <Waves className="h-4 w-4 mr-2" />
                {room.attributes.view}
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-normal"
              >
                <Bath className="h-4 w-4 mr-2" />
                {room.attributes.bathroom} Bathroom
              </Badge>
              {room.attributes.breakfast_included && (
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-normal"
                >
                  <Coffee className="h-4 w-4 mr-2" />
                  Breakfast Included
                </Badge>
              )}
            </div>

            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              {room.description}
            </p>

            {/* Amenities */}
            <div className="mt-12">
              <h2 className="font-serif text-2xl font-light mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Wind, label: "Air Conditioning" },
                  { icon: Tv, label: "Satellite TV" },
                  { icon: Coffee, label: "Tea & Coffee" },
                  { icon: Refrigerator, label: "Bar Fridge" },
                  { icon: Bath, label: "Private Bathroom" },
                  { icon: Waves, label: "Ocean Views" },
                ].map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-center gap-3 p-4 bg-secondary/50 rounded-sm"
                  >
                    <amenity.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-secondary/50 rounded-sm p-8 border border-border">
              <h3 className="font-serif text-2xl font-light mb-4">
                Book This Room
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Check availability and rates for your preferred dates.
              </p>

              {/* Room-Specific Availability Widget */}
              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  Check Availability
                </p>
                <BookingWidget roomId={room.roomId} />
              </div>

              {/* Room-Specific Booking Button Widget */}
              <div className="mb-6">
                <BookingButton roomId={room.roomId} label="Book This Room" />
              </div>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                Best rate guaranteed when booking direct
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light mb-8">
            Explore Other Rooms
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherRooms.slice(0, 3).map((otherRoom) => (
              <Link
                key={otherRoom.slug}
                href={`/rooms/${otherRoom.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={otherRoom.images[0]}
                    alt={otherRoom.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary-foreground/70 text-xs tracking-wider uppercase">
                      {otherRoom.attributes.view}
                    </span>
                    <h3 className="mt-1 font-serif text-xl text-primary-foreground">
                      {otherRoom.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
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
