import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import Cart from '../src/components/Cart'
import Footer from './components/Footer';
import { ProductsData } from './api/Api';
import{
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom'

const Layout = () => {
 return (
  <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
 )
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      { 
      path:'/',
      element: <Home/>,
      loader:ProductsData,
    },
    {
      path:'/cart',
      element:<Cart/>,
    }
    ]
  }
])

function App() {
  return (
    <div className='font-bodyFont'>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
