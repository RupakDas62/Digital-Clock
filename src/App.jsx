import './App.css'
import React, { useEffect, useState } from "react"

function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return (
    <>
      <h1> Digital Clock Made By Rupak Das</h1>
      <div className='outer'>
        <div className='inner'>
          <div className='hour'>&nbsp;{hour <10  ? '0' +  hour : hour }&nbsp;</div>&nbsp;: &nbsp;
          <div className='minute'>&nbsp;{minute <10  ? '0' + minute : minute }&nbsp;</div>&nbsp;: &nbsp;
          <div className='second'>&nbsp;{ second <10 ? '0' + second : second }&nbsp;</div>
        </div>
      </div>
    </>
  )
}

export default App
