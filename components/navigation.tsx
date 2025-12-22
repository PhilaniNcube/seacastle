"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { ExternalLink } from "lucide-react";

const routes = [
  { name: "Gallery", path: "/gallery" },
  { name: "Rooms", path: "/rooms" },
  // { name: "Kitchen", path: "/kitchen" },
  { 
    name: "Surf Cam", 
    path: "https://www.surfline.com/surf-report/camps-bay/617b196682a9fb124a873a62?camId=619e31b778e5f7038a984f7a&pageSection=liveCam",
    external: true
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-thin text-primary">
              Sea Castle
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="flex items-baseline space-x-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  target={route.external ? "_blank" : undefined}
                  rel={route.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1",
                    pathname === route.path
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {route.name}
                  {route.external && <ExternalLink className="h-3 w-3" />}
                </Link>
              ))}
              <Link
                href="https://booking.roomraccoon.co.za/primi-seacastle/en/"
                target="_blank"
              >
                <Button variant="default" className="mt-4">
                  <CalendarDays className="mr-2 h-4 w-4" /> Book Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Guesthouse Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our guesthouse website
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-2">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      target={route.external ? "_blank" : undefined}
                      rel={route.external ? "noopener noreferrer" : undefined}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1",
                        pathname === route.path
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {route.name}
                      {route.external && <ExternalLink className="h-3 w-3" />}
                    </Link>
                  ))}
                  <Link
                    href="https://booking.roomraccoon.co.za/primi-seacastle/en/"
                    target="_blank"
                  >
                    <Button variant="default" className="mt-4">
                      <CalendarDays className="mr-2 h-4 w-4" /> Book Now
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
