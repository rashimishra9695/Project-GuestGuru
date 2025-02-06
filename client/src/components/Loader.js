import React from 'react'
import HashLoader from "react-spinners/HashLoader";

function Loader() {
    let [loading, setLoading] = useState(true);
 
    return (
        <div className="sweet-loading">
         <HashLoader
        color="black"
        loading={loading}
        css=''
        size={80}
        
      />   
        </div>
    )
}

export default Loader
