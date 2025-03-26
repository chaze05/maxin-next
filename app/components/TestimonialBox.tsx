import React from 'react'


interface TestimonialProps{
    image:string,
    name:string,
    position:string,
    message:string,
    rate:string
}

const testimonials: TestimonialProps[] = [
    {
      image: "https://example.com/images/user1.jpg",
      name: "John Doe",
      position: "Software Engineer",
      message: "This platform has been amazing for my career. The tools and resources are top-notch!",
      rate: "5",
    },
    {
      image: "https://example.com/images/user2.jpg",
      name: "Jane Smith",
      position: "Marketing Specialist",
      message: "I love how easy it is to connect with professionals in my field. Highly recommend!",
      rate: "4.5",
    },
    {
      image: "https://example.com/images/user3.jpg",
      name: "Samuel Lee",
      position: "Product Manager",
      message: "Great experience! The customer service is excellent, and I always find what I need.",
      rate: "4.8",
    },
    {
      image: "https://example.com/images/user4.jpg",
      name: "Emily Clark",
      position: "UX Designer",
      message: "Fantastic community and excellent resources for learning and growing in my field.",
      rate: "5",
    },
    {
      image: "https://example.com/images/user5.jpg",
      name: "Michael Brown",
      position: "Data Scientist",
      message: "The best platform for professionals. The features are very user-friendly!",
      rate: "4.9",
    },
  ];
  

const TestimonialBox: React.FC<TestimonialProps> = ({image,name,position,message,rate}) => {
  return (
    <div>TestimonialBox</div>
  )
}

export default TestimonialBox