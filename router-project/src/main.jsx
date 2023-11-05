import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './ContactUs.jsx'
import User from './User.jsx'
import Github, { githubInfoLoader } from './Github.jsx'

const router = createBrowserRouter(
  // [
  //   {
  //     path: '/',
  //     element: <Layout></Layout>,
  //     children: [
  //       {
  //          path: '',
  //          element: <Home></Home>
  //       },
  //       {
  //         path: 'about',
  //         element: <About></About>
  //      },
  //      {
  //       path: 'contact',
  //       element: <Contact></Contact>
  //      },
  //      {
  //       path: 'user:/userid',
  //       element: <User />,
  //      }
  //     ]
  //   }
  // ]

  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='user/:userid' element={<User></User>}></Route>
      <Route path='github' loader={githubInfoLoader} element={<Github></Github>}></Route>
    </Route>
    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
