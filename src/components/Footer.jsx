import React from 'react'
import { Categories } from './Sales'

const Footer = () => {
  return (
    <section className="py-7 px-5 flex flex-col sm:gap-0 gap-5 sm:flex-row justify-between items-center bg-black">

      <h6 className="font-semibold text-lg text-white">&copy;Skull.News 2023</h6>

      <div className="flex gap-5 justify-between text-white">
        <a href='/' className="text-lg font-semibold">
          Instgram
        </a>
        <a href='/' className="text-lg font-semibold">
          Twitter
        </a>
        <a href='/' className="text-lg font-semibold">
          Facebook
        </a>
      </div>
    </section>
  )
}

export default Footer