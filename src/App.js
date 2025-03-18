import React, { useState } from "react"
import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom"
import Main from "./components/pages/Main"
import Stat from "./components/pages/Stat"
import Plan from "./components/pages/Plan"
import Head from './components/views/global/Head'

const router = createBrowserRouter([
  { path: "*", element: <Root/> },
])

function Root() {

  const [ data, setData ] = useState([])

  return (
    <React.Fragment>
      <Head></Head>
      <Routes>
        <Route path="/main" element={<Main action={setData}></Main>}/>
        <Route path="/stat" element={<Stat statData={data}></Stat>}/>
        <Route path="/plan" element={<Plan/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default function App() {
  return <RouterProvider router={router}/>
}
