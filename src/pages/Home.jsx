import React, { useEffect } from 'react'
import { GifState } from '../context/Context'
import Gif from '../components/Gif'
import Filter from '../components/Filter'

function Home() {

  const { gf, gifs, setGifs, filter } = GifState()
  
  const fetchTrendingGifs = async() => {
    const { data } = await gf.trending({
      limit: 25,
      type: filter,
      rating:"g",
    })
    setGifs(data)
  }
  useEffect(() => {
    fetchTrendingGifs()
  },[filter])
  return (
    
      <div>
        <img
          src="/banner.gif"
          alt="earth banner"
          className="mt-2 rounded w-full h-20"
        ></img>
      {/* // FilterGifs */}
      <Filter showTrending/>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {gifs.map((gif) => {
          return <Gif gif={gif } key={gif.title}/>;
        })}
      </div>
    
      </div>
  );
}

export default Home