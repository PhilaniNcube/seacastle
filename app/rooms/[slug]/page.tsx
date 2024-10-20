import RoomDetail from "@/components/room-detail";
import {rooms} from "@/data/rooms";

const RoomPage = ({params:{slug}}:{params:{slug:string}}) => {

  const room = rooms.find((room) => room.slug === slug);

  if (!room) {
    return <div>Room not found</div>;
  }


  return <div>
    <RoomDetail room={room} />
  </div>;
};
export default RoomPage;
