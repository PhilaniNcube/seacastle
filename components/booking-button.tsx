"use client";

import { Button } from "@/components/ui/button";
import { trackBookNow } from "@/lib/gtm";

type BookingButtonProps = {
  roomId?: string;
  roomName?: string;
  label?: string;
  location?: string;
};

export default function BookingButton({ 
  roomId, 
  roomName,
  label = "Book Now",
  location = "unknown"
}: BookingButtonProps) {
  const handleBookNow = () => {
    // Track event
    trackBookNow({
      roomId,
      roomName,
      location,
    });

    const roomHash = roomId ? `#${roomId}` : '';
    const bookingUrl = `https://booking.roomraccoon.co.za/primi-seacastle/en/${roomHash}`;
    window.open(bookingUrl, '_blank');
  };

  return (
    <Button
      onClick={handleBookNow}
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground tracking-wide uppercase text-sm px-8"
      size="lg"
    >
      {label}
    </Button>
  );
}
