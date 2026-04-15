import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './compontis/page/Homepage.jsx';
import Timeline from './compontis/page/Timeline.jsx';
import Stats from './compontis/page/Stats.jsx';
import MainLayout from './compontis/Layout/MainLayout.jsx';
import Errorpage from './compontis/errorpage/Errorpage.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "stats",
        element: <Stats></Stats>,
      },
      
    ],
    ErrorAliment : <Errorpage></Errorpage>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <RouterProvider router={router} />,
    
  </StrictMode>,
)
