import RoomList from "@/components/room-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Rooms - Sea Castle Boutique Hotel",
  description:
    "Discover our luxurious rooms with stunning ocean views at Sea Castle Boutique Hotel in Camps Bay, Cape Town.",
};

export default function RoomsPage() {
  return <RoomList />;
}
