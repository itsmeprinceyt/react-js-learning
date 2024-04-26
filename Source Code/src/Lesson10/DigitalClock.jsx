import React, {useState,useEffect} from 'react';

function DigitalClock(){
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const IntervalID = setInterval(()=>{
            setTime(new Date())
        },1000);
        return ()=>{
            clearInterval(IntervalID);
        }
    },[]);

    function formateTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // if hours modulus 12 is zero then it is false hence it will assign the next or operator digit which is 12. 

        return `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)} ${meridiem}`
    }
    function fixZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    return(<>
        <div className="clock">
            This is a Digital Clock: <span>{formateTime()}</span>
        </div>
    
    </>);
}

export default DigitalClock;