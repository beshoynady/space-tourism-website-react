import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/Layout';
import Crew from './component/crew/Crew';
import Technology from './component/technology/Technology';
import Home from './component/home/Home';
import Destination from './component/destination/Destination';


// import Moon from '././component/destination/destination_component/moon/Moon.jsx'
// import Mars from '././component/destination/destination_component/mars/Mars.jsx'
// import Europa from '././component/destination/destination_component/europa/Europa.jsx'
// import Titan from '././component/destination/destination_component/titan/Titan.jsx'


function App() {
  const routes= createBrowserRouter([
    {path:'/', element:<Layout/> ,children:[
      {index:true, element:<Home/>},
      {path:'/crew', element:<Crew/>},
      {path:'/destination', element:<Destination/>},
      {path:'/technology', element:<Technology/>}
    ]}
  ])
    
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
