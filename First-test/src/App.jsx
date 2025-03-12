import "./App.css";
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./Components/Nav/Navbar";
import Dashboard from"./pages/Dashboard"
const router=createBrowserRouter([
{
  path:"/",
  element:<div>
 <Navbar/>
 {/* <Home/>{bhaiya isko import kr rahe the to kuch erroe aa rahaa tha is liye imprt nhi kiye yahi pe likh diye hai} */}
 <h1 className="h1">
  Home Page
 </h1>
  </div>
},
{
  path:"/daskboard",
  element:<div>
  <Navbar/>
  <Dashboard/>
  </div>
}

])
function App() {
  return <>
  <RouterProvider router={router} />
  </>;
}

export default App;
