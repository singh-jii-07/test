import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar/>
    <Home/>
    <Footer/>
    </div>
  },
  {
    path: "about",
    element: <div>
      <Navbar/>
   <About/>
   <Footer/>
  </div>
  },
  {
    path: "country",
    element: <div>
      <Navbar/>
    <Country/>
    <Footer/>
  </div>
  },
  {
    path: "contact",
    element: <div>
      <Navbar/>
  <Contact/>
  <Footer/>
  </div>
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
