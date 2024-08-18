import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({getCurrentLocation, cities, setCity, index, setIndex}) => {
  const changeBtnColor = (i, item) => {
    // console.log(index, i, item);
    if(i === null){
      getCurrentLocation();
      setIndex(i);
      // setCity(item);
    }else {
      setIndex(i);
      setCity(item);
    }
  }
  return (
    <div>
        <Button variant={index === null ? "warning" : "info"} onClick={()=>changeBtnColor(null)}>Current</Button>
        {cities.map((item, i)=>(
          // <Button variant={setIndex === index ? "warning" : "info"} key={index} onClick={()=>setCity(item)}>{item}</Button>
          <Button variant={index === i ? "warning" : "info"} key={i} onClick={()=>changeBtnColor(i, item)}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton