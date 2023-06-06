import React, { useEffect, useState } from 'react'
import './Time.css'

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR'));
  const hour=time[0]
  
  function refreshTimeState() {
    setTime(new Date().toLocaleTimeString('fr-FR'));
  }
  
  useEffect(() => {
    const timer_unique_identifier = setInterval(refreshTimeState, 1000);
    return function cleanupTimerResources() {
      clearInterval(timer_unique_identifier);
    };
  }, []);
  return (
    <div>
      {/* <p>{hour}</p> */}
      <div className="timer">
        <p className="hour">{ hour } :</p>
        <p className="min">{time.split(':')[1]} :</p>
        <p className="sec">{time.split(':')[2]} </p>
        <p>PM</p>
      </div>
      {/* <p className='cade'>{time}</p> */}
    </div>
  )
}

export default Time
