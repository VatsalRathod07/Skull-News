import React from 'react'

const About = () => {
  return (
    <section className="py-5 sm:py-10 px-5">
      <div className="flex flex-col gap-5">
        <img src="https://images.unsplash.com/photo-1677350787420-d3309b8a1eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" 
        className="object-cover h-[500px]"/>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <h6 className="capitalize font-black">new anime for 2023 is being confirmed and what's been revealed so far has us excited for what's to come!</h6>

          <p className="text-sm font-medium">Exciting news for anime fans in 2023! Confirmed releases include Jujutsu Kaisen S2, Classroom of the Elite S3, and Dr. Stone S3.</p>

          <p className="text-sm font-medium">Additionally, the anime MF Ghost, a continuation of Initial D, is set to debut. Stay tuned for further updates on upcoming 2023 anime releases.</p>

        </div>
      </div>
    </section>
  )
}

export default About