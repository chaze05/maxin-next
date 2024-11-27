import React from 'react'

interface HeadingProps{
    title:string,
    description:string | null
}
const Heading:React.FC<HeadingProps>  = ({title,description=''}) => {
  return (
    <div className="container-fluid bg-white py-10">
        <div className="container text-center flex-col justify-center mx-auto">
        <h2 className="font-bold text-3xl text-blue-800 relative text-center before:left-0 
                        before:absolute before:h-[3px] before:-bottom-2 before:right-0 before:mx-auto before:w-[40px] before:bg-blue-900">{title}</h2>
            <p className=" text-center px-10 text-black max-w-2xl mx-auto my-7">{description}</p>
        </div>
    </div>
  )
}

export default Heading;