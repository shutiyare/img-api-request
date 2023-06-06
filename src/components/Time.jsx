import React from 'react'
import './Time.css'
import { useEffect, useState } from 'preact/hooks';
function Time() {
    const maantay=new Date().toLocaleTimeString();
    var h;
    var m;
    var s;
    var dl;
        function updateTime(){
          const now =new Date();
        const hour=now.getHours();
        let minute=now.getMinutes() ;
        const second=now.getSeconds();
        let hours= hour >12 ? `${hour-12}` : `${hour}`
        h=hours;
        var saacad= hours <=9 ? `0${hours}` : `${hours}` ;
        let minutes= minute <=9 ? '0'+ minute : minute;
        m=minutes;
        let seconds= second <=9 ? '0'+second : second;
        s=seconds;
        let DayNight= hour <12 ? 'AM' : 'PM';
        dl=DayNight;
        }
       
        setInterval(updateTime(),1000);
        // const letter=updateTime();
  return (
    <div>
      <div className="timer">
        <p className="hour">{ h } :</p>
        <p className="min">{m} :</p>
        <p className="sec">{s} </p>
        <p className="ap">{dl}</p>
      </div>
      <p className='cade'>{maantay}</p>
    </div>
  )
}

export default Time
