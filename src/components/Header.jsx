import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight, HiEllipsisVertical } from "react-icons/hi2";
import { GifState } from "../context/Context";
import GifSearch from "./GifSearch";

function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  

    const toggleCategories = () => {
      setShowCategories(!showCategories);
    };

    const showCategory = () => {
      if (window.innerWidth < 1024) {
        toggleCategories();
      }
    };
    
    const { gf,favorites } = GifState()
    const fetchGifCategories =async () => {
        const { data } = await gf.categories()
        setCategories(data)
    }
    useEffect(() => {
        fetchGifCategories()
    }, [])
    
  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" className="w-8" alt="logo" />
          <h1 className="text-4xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-2 items-center">
          {/* Rendering Categories */}
          {categories?.slice(0, 5)?.map((category) => {
            return (
              <Link
                to={`/${category.name_encoded}`}
                key={category.name}
                className="px-4 py-1 hover:gradient  border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            );
          })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={` 
               py-0.5 ${
                 showCategories ? "gradient" : ""
               }   border-b-4 hidden lg:block`}
              src="/menu.png"
            />
          </button>
          {favorites.length > 0 && (
            <div className="h-9 rounded bg-gray-700 px-6 pt-1.5 cursor-pointer">
              <Link to="/favorites">Favorite GIFs</Link>
            </div>
          )}

          <button onClick={showCategory}>
            <HiBars3BottomRight
              size={30}
              className="lg:hidden  block text-sky-400"
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute top-14 right-0 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => {
                return (
                  <Link
                    to={`/${category.name_encoded}`}
                    key={category.name}
                    className="font-bold"
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

          {/* Search */}
          <GifSearch/>
    </nav>
  );
}

export default Header;
