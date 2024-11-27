import React from 'react'
import Heading from '../components/Heading'
import Slider from '../components/Slider'

const Screenshot = () => {
  return (
    <>     
     <Heading title="App Screenshots" description="There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration in some form, by injected humour randomised." />
    <div className="flex">
        <Slider />
    </div>
    </>

  )
}

export default Screenshot