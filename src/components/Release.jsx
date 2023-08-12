import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

export const latestnews = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'therefore ill clothes pull sunlight here',
    description: 'treated previous between consist middle great collect thread worth alone effort second queen soil month unless.'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'therefore ill clothes pull sunlight here',
    description: 'train afraid shut reader double arm wool brave sang divide signal go chemical shop soft colony.'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'therefore ill clothes pull sunlight here',
    description: 'writer private shop shine pen honor wide unknown managed way particular related kill change see which.'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    title: 'therefore ill clothes pull sunlight here',
    description: 'teeth remove town shout visitor level take circus glad author face bent nodded hidden particles count.'
  }
]

const Release = () => {
  return (
    <section className="py-5 sm:py-10 px-5 flex flex-col gap-10">
      <div className="flex flxcol sm:flex-row gap-5 sm:gap-0 justify-between items-center">
        <p className="max-w-none sm:max-w-xl font-semibold">Discover moments that move us. Stay updated with our heartfelt stories and breaking news that touch the soul.</p>

        <a href="/" className="font-semibold items-center gap-1 hidden sm:flex">
          See More
          <BsArrowUpRight />
        </a>
      </div>

      <div className='flex flex-col gap-5 items-center'>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {latestnews.map((news) => {
            return (
              <a href="/" className="flex flex-col gap-2 bg-[whitesmoke] rounded-md p-3 transition ease-in-out duration-300 hover:scale-105" key={news.id}>
                <img src={news.image} alt={news.title} className="w-full object-cover h-[200px] rounded-md"/>
                <p className='capitalize font-bold text-base'>{news.title}</p>
                <p className="text-sm">{news.description.length > 50 ? `${news.description.substring(0, 70)}...` : news.description}</p>
              </a>
            )
          })}
        </div>

        <a href="/" className="font-semibold flex items-center gap-1 sm:hidden mt-2 border-none outline-none text-white bg-black px-6 py-2">
          See More
          <BsArrowUpRight />
        </a>

      </div>
    </section>
  )
}

export default Release