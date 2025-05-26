import { useState } from 'react'
import { createRoutesFromElements, Route, Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import Github, { githubinfoLoader } from './components/Github/Github.jsx'

function App() {
  const [count, setCount] = useState(0)

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />
  //       },
  //       {
  //         path: "about",
  //         element: <About />
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />
  //       }
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} >
        </Route>
        <Route path='user/:userid' element={<User />} />
        <Route
          loader={githubinfoLoader}
          path='github'
          element={<Github />} />

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
