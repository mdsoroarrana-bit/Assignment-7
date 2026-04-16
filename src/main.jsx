import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter} from 'react-router';
import Homepage from './compontis/page/Homepage.jsx';
import Timeline from './compontis/page/Timeline.jsx';
import Stats from './compontis/page/Stats.jsx';
import MainLayout from './compontis/Layout/MainLayout.jsx';
import Errorpage from './compontis/errorpage/Errorpage.jsx';
import FriendDetails from './compontis/FriendDetails/FriendDetails.jsx';
import { RouterProvider } from 'react-router/dom';

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
      {
        path: "frienddetails/:id",
        Component: <FriendDetails/>,
        loader: () => fetch("/friend-data.json")
      }
    ],
    errorElement: <Errorpage/>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
