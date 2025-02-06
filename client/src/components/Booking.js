import React, { useEffect , useState } from 'react'
import axios from "axios";
function Bookingscreen({match}) {
    const[loading, setloading]=useState(true);
    const[error, seterror]=useState(false);
    const[success, setsuccess]=useState(false); 
    const[room , setroom]=useState()
    const roomid=match.params.roomid
    useEffect(async() => {
        
        try {
            setloading(true);
            const data = await (await axios.post("/api/rooms/getroombyid" , {roomid})).data;
            console.log(data);
            setroom(data);
            setloading(false);
            settotalAmount(data.rentperday * totalDays)
          } catch (error) {
            console.log(error);
            setloading(false);
          }
          
    }, [])


    


        
        
    }

    return (
        <div className='m-5'>
            
            {loading ? (<h1>Loading......</h1>) : error ? (<h1>Error...</h1>) : (

                <div className="row p-3 mb-5 bs" data-aos='flip-right' duration='2000'>

                      <div className="col-md-6 my-auto">
                        
                         <div>
                         <h1> {room.name}</h1>
                           <img src={room.imageurls[0]} style={{height:'400px'}} />
                         </div>

                      </div>
                      <div className="col-md-6 text-right">
                           <div>
                           <h1><b>Booking Details</b></h1>
                           <hr />

                
                           
            
                           <p><b>Max Count </b>: {room.maxcount}</p>
                           </div>
                           
                           <div className='mt-5'>
                           <h1><b>Amount</b></h1>
                           <hr />
                           <p>Total Days : <b>{totalDays}</b></p>
                           <p>Rent Per Day : <b>{room.rentperday}</b></p>
                           <h1><b>Total Amount : {totalAmount} /-</b></h1>

                        
            
                           </div>
                          

                           
                      </div>

                </div>

            )}
        
        </div>
    )


export default Bookingscreen;
