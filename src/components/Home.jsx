import React from 'react'

const Home = () => {
  return (
    <section className="py-5 sm:py-10 px-5">
      <div className="flex flex-col md:flex-col lg:flex-row items-center w-full gap-5">
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/38ef5148805911d88a8607377b6d9aad1e0401512f8118d9dbdf532c3bddaa89._RI_TTW_.jpg" alt="" className=" md:w-screen lg:w-full md:h-full lg:h-screen object-cover" />
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <p className="font-extrabold text-base md:max-w-full lg:max-w-md uppercase tracking-widest">Step into a world where imagination knows no bounds, as anime characters spring to life with vibrant stories and mesmerizing visuals. </p>
            <img src="https://images.unsplash.com/photo-1674448417295-088682b6adec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFydXRvJTIwdXp1bWFraXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="h-full lg:h-[360px] md:w-screen lg:w-full object-cover" />
            <p className="font-medium text-base md:max-w-full lg:max-w-md uppercase tracking-wider">The official website for the Naruto anime franchise announced on Sunday that FLOW will perform the opening and ending theme songs for the four "brand-new" episodes for the anime. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home