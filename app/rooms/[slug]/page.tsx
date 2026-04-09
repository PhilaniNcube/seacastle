import RoomDetail from "@/components/room-detail";
import { rooms } from "@/data/rooms";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((room) => room.slug === slug);

  if (!room) {
    return {
      title: "Room Not Found - Sea Castle",
    };
  }

  return {
    title: `${room.name} - Sea Castle Boutique Hotel`,
    description: room.description,
    openGraph: {
      title: `${room.name} - Sea Castle Boutique Hotel`,
      description: room.description,
      images: [room.images[0]],
    },
  };
}

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = rooms.find((room) => room.slug === slug);

  if (!room) {
    notFound();
  }

  return <RoomDetail room={room} />;
}
