"use client";

import { Button } from "@/components/ui/button";

type BookingButtonProps = {
  roomId?: string;
  label?: string;
};

export default function BookingButton({ roomId, label = "Book Now" }: BookingButtonProps) {
  const handleBookNow = () => {
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
