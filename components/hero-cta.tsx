"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackExternalLink, trackNavigation } from "@/lib/gtm";

export function HeroCTA() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link
        href="https://booking.roomraccoon.co.za/primi-seacastle/en/"
        target="_blank"
        onClick={() =>
          trackExternalLink({
            url: "https://booking.roomraccoon.co.za/primi-seacastle/en/",
            linkText: "Check Availability",
            linkType: "booking",
          })
        }
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
        onClick={() =>
          trackNavigation({
            destination: "/rooms",
            linkText: "Explore Rooms",
          })
        }
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
  );
}
