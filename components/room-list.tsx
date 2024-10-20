import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Users, Waves, Coffee } from "lucide-react";
import {rooms} from "@/data/rooms";



export default function RoomList() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Rooms</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.slug} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle>{room.name}</CardTitle>
              <CardDescription className="mt-2">
                {room.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Bed className="h-3 w-3" />
                  2 Guests
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Waves className="h-3 w-3" />
                  {room.attributes.view}
                </Badge>
                {room.attributes.breakfast_included && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Coffee className="h-3 w-3" />
                    Breakfast
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 mt-auto">
              <div className="flex items-center justify-between w-full">

                <Button asChild>
                  <Link href={`/rooms/${room.slug}`}>View Details</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
