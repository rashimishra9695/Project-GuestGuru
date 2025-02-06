import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Bookingscreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [room, setRoom] = useState(null);
  const { roomid } = useParams();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/rooms/getroombyid/${roomid}`); 
        setRoom(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching room details");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomid]);

  return (
    <div>
      <h1>Booking Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : room ? (
        <div>
          <h1>Room ID: {room.roomid}</h1>
          <p>Room Name: {room.name}</p>
          <p>Description: {room.description}</p>
          <p>Price per Day: ${room.rentperday}</p>
        </div>
      ) : (
        <p>No room details available</p>
      )}
    </div>
  );
}

export default Bookingscreen;
