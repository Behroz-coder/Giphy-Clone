import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Category from "./pages/Category"
import Search from "./pages/Search"
import SingleGif from "./pages/SingleGif"
import Favorite from "./pages/Favorite"
import Home from "./pages/Home"
import GifProvider from "./context/Context"



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
      path: '/',
      element: <Home />
      },
      {
      path: '/:category',
      element: <Category />
      },
      {
      path: '/search/:query',
      element: <Search />
      },
      {
      path: '/:type/:slug',
      element: <SingleGif />
      },
      {
      path: '/favorites',
      element: <Favorite />
      },
      
    ]
  }
])


function App() {
 
  

  return (
    <>
      <GifProvider>

        <RouterProvider router={router} />
        
      </GifProvider>
     
    </>
  );
}

export default App
