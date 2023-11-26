import './App.css';
import BestSellers from './components/BestSellers';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Product from './components/product';

const router = createBrowserRouter([
    {
        path: "/",
        element: <BestSellers/>,
    },
    {
      path: "/product/:productId",
      element: <Product/>,
    }
]);



function App() {
  return (
    <div className='appContainer'>
    <Header/>
    <hr className="divider" />
    <RouterProvider router={router} />

    </div>
  
  );
}

export default App;
