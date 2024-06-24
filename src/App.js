import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Event from './pages/Event'
import EventDetails from './pages/EventDetails'
import EditEvent from './pages/EditEvent'
import NewEvent from './pages/NewEvent'
import EventLayout from './pages/EventLayout'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          {
            path: '',
            element: <Event />,
          },
          {
            path: 'new',
            element: <NewEvent />,
          },
          {
            path: ':eventId/edit',
            element: <EditEvent />,
          },
          {
            path: ':eventId',
            element: <EventDetails />,
          },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={routes}></RouterProvider>
}

export default App
