"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type BookingWidgetProps = {
  roomId?: string;
};

export default function BookingWidget({ roomId }: BookingWidgetProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Set today's date
    const date = new Date();
    const today = formatDate(date);
    
    // Set tomorrow's date
    date.setDate(date.getDate() + 1);
    const tomorrow = formatDate(date);
    
    setStartDate(today);
    setEndDate(tomorrow);
  }, []);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleCheckAvailability = () => {
    const roomHash = roomId ? `#${roomId}` : '';
    const bookingUrl = `https://booking.roomraccoon.co.za/primi-seacastle/en/?dateStart=${startDate}&dateEnd=${endDate}${roomHash}`;
    window.open(bookingUrl, '_blank');
  };

  return (
    <div className="RoomRaccoon-BookingEngine RoomRaccoon-BookingEngine--availability-widget">
      <div className="availability-widget flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-center">
        <span className="availability-widget-date availability-widget-date--from flex flex-col gap-2 w-full sm:w-auto">
          <label htmlFor={`startDate-${roomId || 'general'}`} className="font-medium text-sm">From:</label>
          <input
            id={`startDate-${roomId || 'general'}`}
            name="dateStart"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-3 py-2 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent w-full"
          />
        </span>
        <span className="availability-widget-date flex flex-col gap-2 w-full sm:w-auto">
          <label htmlFor={`endDate-${roomId || 'general'}`} className="font-medium text-sm">To:</label>
          <input
            id={`endDate-${roomId || 'general'}`}
            name="dateEnd"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-3 py-2 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent w-full"
          />
        </span>
      </div>
      <Button
        onClick={handleCheckAvailability}
        className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground tracking-wide uppercase text-sm px-8 w-full sm:w-auto"
        size="lg"
      >
        Check Availability
      </Button>
    </div>
  );
}
