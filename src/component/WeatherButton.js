import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
        <Button variant="warning">Current</Button>
        <Button variant="warning">Seoul</Button>
        <Button variant="warning">New York</Button>
        <Button variant="warning">Paris</Button>
        <Button variant="warning">London</Button>
    </div>
  )
}

export default WeatherButton