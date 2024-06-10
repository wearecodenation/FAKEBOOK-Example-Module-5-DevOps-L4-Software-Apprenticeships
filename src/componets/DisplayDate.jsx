import React from "react";
import { useEffect, useState} from "react"; 

const DisplayDate = ()=> {

    const [date, setDate] = useState()

    useEffect (() =>{
         getDate()
      },[])

    function getDate () {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        setDate(`${month}/${date}/${year}`)
    }
    return (
        <div>
            <p>Todays Date - {date}</p>
        </div>

    )
}


export default DisplayDate