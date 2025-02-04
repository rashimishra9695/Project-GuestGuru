import { useState,useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';



function Bookingscreen({match}) {
    const [room , setroom] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const{roomid}=useParams();
    useEffect(()=>{
        const fetchRoomData=async() => { 
    try{
        setLoading(true);
        const {data}= await axios.post("/api/rooms/getroombyid",{roomid});
        setroom(data);
        setLoading(false);
        
    }catch(error){
        setLoading(false);
        setError(true);
    }
};

    

    return (
    


        <div className="row justify-content-center mt-5" >

            <div className="row p-5 mb-5 bs" data-aos='flip-right' duration='2000'>
        
                  <div className="col-md-6 my-auto">
                  </div>
                  <div className="col-md-6 text-right">
                       <div>
                       <h1><b>Booking Details</b></h1>
                       <hr />

                       <p><b>Name</b> : {}</p>
                       <p><b>From Date</b> : {}</p>
                       <p><b>To Date</b> : {}</p>
                       <p><b>Max Count </b>: {}</p>
                       <div className='mt-5'>
                           <h1>Amount</h1>
                           <hr />
                           <p>Total Days : </p>
                           <p>Rent Per Day : </p>
                           <h1>Total Amount : {} /-</h1>
                           </div>
                       </div>
                       </div>
                       </div>
                       </div>




    ) 
}


export default Bookingscreen
