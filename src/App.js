import React from "react"
import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setData as setDataFromRedux} from "./redux/reducers/data"
import Main from "./components/pages/Main"
import Stat from "./components/pages/Stat"
import Plan from "./components/pages/Plan"
import Head from './components/views/global/Head'
import Error from './components/pages/Error'

const router = createBrowserRouter([
  { 
    path: "*", 
    element: <Root/>, 
    errorElement: <Error/> 
  },
])

function Root() {

  const data = useSelector(state => state.dataReducer.data)
  const dispatch = useDispatch()

  const setData = (param) => {
    dispatch(setDataFromRedux(param))
  }

  return (
    <React.Fragment>
      <Head></Head>
      <Routes>
        <Route path="/main" element={<Main action={setData}></Main>}/>
        <Route path="/stat/:viewType" element={<Stat statData={data}></Stat>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path={"*"} element={<Main action={setData}></Main>}/>
      </Routes>
    </React.Fragment>
  )
}

export default function App() {
  return <RouterProvider router={router}/>
}
