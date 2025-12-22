"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Tv,
  Waves,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";



type RoomDetailProps = {
  room: {
    name: string;
    description: string;
    images: string[];
    attributes: {
      view: string;
      bathroom: string;
      breakfast_included: boolean;
    };
  };
}


export default function RoomDetail({room}: RoomDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + room.images.length) % room.images.length
    );
  };

  const handleBookNow = () => {
    // Implement booking logic here
    console.log("Booking initiated for", room.name);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>{room.name}</CardTitle>
          <CardDescription>{room.attributes.view}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video mb-6">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  src={room.images[currentImageIndex]}
                  alt={`${room.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-background/80 px-2 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {room.images.length}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Waves className="h-4 w-4" />
                {room.attributes.view}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Tv className="h-4 w-4" />
                Satellite TV
              </Badge>
              {room.attributes.breakfast_included && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Coffee className="h-4 w-4" />
                  Breakfast Included
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">{room.description}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Link
            href="https://booking.roomraccoon.co.za/primi-seacastle/en/"
            target="_blank"
          >
            <Button onClick={handleBookNow} className="">
              <CalendarDays className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
