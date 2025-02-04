import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';

function Homescreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchRooms = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/rooms/getallrooms');
            console.log("Fetched data:", data);
            // Access the rooms array from the data object
            if (data.rooms && Array.isArray(data.rooms)) {
                setRooms(data.rooms);
            } else {
                console.error("Fetched data does not contain an array of rooms");
            }
            setLoading(false);
        } catch (error) {
            setError(true);
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div className="container">
        
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error occurred!</h1>
            ) : (
                rooms.map((room) => {
                    return <div className="col md-9 mt-2">
                        <Room room={room}/>
                        </div>
                })
            )}
          </div>  
    
    );
}

export default Homescreen;
