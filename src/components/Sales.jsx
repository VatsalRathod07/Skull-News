import React, { useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { latestnews } from './Release'

export const Categories = [
  {
    id: '1',
    title: 'Isekai'
  },
  {
    id: '2',
    title: 'Shonen'
  },
  {
    id: '3',
    title: 'Horror'
  },
  {
    id: '4',
    title: 'Sci-Fi'
  },
  {
    id: '5',
    title: 'Fantasy'
  },
  {
    id: '6',
    title: 'Mecha'
  },
  {
    id: '7',
    title: 'Josei'
  },
  {
    id: '8',
    title: 'Seinen'
  },
  {
    id: '9',
    title: 'Shojo'
  }
]

const Sales = () => {

  const [selectedCategory, setSelectedCategory] = useState(null); // Keep track of the selected category

  const toggleCategory = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null); // Deselect the category if already selected
    } else {
      setSelectedCategory(categoryId); // Select the category
    }
  };

  return (
    <section className="py-5 sm:py-10 px-5 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <p className="max-w-xl font-semibold">Discover moments that move us. Stay updated with our heartfelt stories and breaking news that touch the soul.</p>

        <a href="/" className="font-semibold items-center gap-1 hidden sm:flex">
          See More
          <BsArrowUpRight />
        </a>
      </div>

      <div className="flex flex-wrap justify-start gap-2 md:gap-4 md:justify-start lg:justify-start">
        {Categories.map((category) => {
          const isSelected = category.id === selectedCategory; // Check if the category is selected

          return (
            <a
              href="/"
              className=""
              key={category.id}
              onClick={(e) => {
                e.preventDefault();
                toggleCategory(category.id); // Call the toggle function on click
              }}
            >
              <p
                className={`border-2 border-black py-1 px-5 rounded-full hover:bg-black hover:text-white capitalize font-medium text-base transition duration-500 ease-in-out ${isSelected ? 'bg-black text-white' : ''}`}>
                {category.title}
              </p>
            </a>
          );
        })}
      </div>

      <div className='flex flex-col gap-5 items-center'>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {latestnews.map((news) => {
            return (
              <a href="/" className="flex flex-col gap-2 bg-[whitesmoke] rounded-md p-3 transition ease-in-out duration-300 hover:scale-105" key={news.id}>
                <img src={news.image} alt={news.title} className="w-full object-cover h-[200px] rounded-md" />
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

export default Sales