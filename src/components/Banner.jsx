import React from 'react'

const Banner = () => {
  return (
    <section className="py-5 sm:py-10 px-5">
      <div className="relative flex flex-col">
        <img src="https://dthezntil550i.cloudfront.net/ps/latest/ps2203240609522280023348980/0da2aecb-05b9-4dca-bd41-e431af2b67a5.png" alt="" className="object-cover h-[500px]" />
        <h4 className="absolute text-white font-semibold bottom-0 z-10 p-4 bg-black bg-opacity-70">
          Studio Pierrot has finally released the preview synopsis and images for Bleach TYBW episode 19. The episode, titled The White Haze, is set to be released on Saturday, August 12, 2023, at 11 pm JST.
        </h4>
      </div>
    </section>
  )
}

export default Banner