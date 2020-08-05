import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Header(){
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const myTimer = () =>{
      setTime(new Date())
    }
    let timer = setInterval(myTimer, 30000)

    return () => {
      clearInterval(timer)
    }
  }, [time])

  return(
    <div className="header bg-dark">
      <div className="title h2 text-light font-weight-bold d-flex align-items-center">{`Hello User! It is ${moment(time).format('LLLL')}`}</div>
    </div>
  )
}

export default Header;
