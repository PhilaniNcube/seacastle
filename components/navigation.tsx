"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ExternalLink } from "lucide-react";

const routes = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Gallery", path: "/gallery" },
  {
    name: "Surf Cam",
    path: "https://www.surfline.com/surf-report/camps-bay/617b196682a9fb124a873a62?camId=619e31b778e5f7038a984f7a&pageSection=liveCam",
    external: true,
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/seacastle-logo.webp"
              alt="Sea Castle"
              width={915}
              height={192}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                target={route.external ? "_blank" : undefined}
                rel={route.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "text-sm tracking-wide uppercase transition-colors flex items-center gap-1",
                  isScrolled ? "text-foreground" : "text-white",
                  pathname === route.path
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {route.name}
                {route.external && <ExternalLink className="h-3 w-3" />}
              </Link>
            ))}
            <a
              href="https://booking.roomraccoon.co.za/primi-seacastle/en/"
              target="_blank"
              className="RoomRaccoonButton1 RoomRaccoonButton1-en"
              style={{ position: "relative", fontSize: "15px", lineHeight: "36px", padding: "7px 13px", border: "none", borderRadius: "5px", background: "#258175", color: "#fff", cursor: "pointer", textDecoration: "none" }}
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader className="text-left">
                  <SheetTitle className="font-serif text-2xl font-normal">
                    Sea Castle
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-1">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      target={route.external ? "_blank" : undefined}
                      rel={route.external ? "noopener noreferrer" : undefined}
                      className={cn(
                        "px-4 py-3 text-sm tracking-wide uppercase transition-colors flex items-center gap-1 rounded-md",
                        pathname === route.path
                          ? "bg-secondary text-foreground font-medium"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                      )}
                    >
                      {route.name}
                      {route.external && <ExternalLink className="h-3 w-3" />}
                    </Link>
                  ))}
                  <div className="mt-6 px-4">
                    <Link
                      href="https://booking.roomraccoon.co.za/primi-seacastle/en/"
                      target="_blank"
                      className="block"
                    >
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground tracking-wide uppercase text-sm">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
