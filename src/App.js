import Header from "./component/Header"
import PageNation from "./component/PageNation"
import Blogs from "./component/Blogs"
import { useContext, useEffect } from "react"
import { AppContext } from "./context1/AppContext"
import "./App.css"

export default function App() {
  const{fetchBloagPosts}=useContext(AppContext)
  useEffect(()=>{
    fetchBloagPosts()
  },[])
  return(
    <div className="w-full h-full  flex flex-col justify-center items-center gap-y-4 ">
      <Header />
      <Blogs   />
    <PageNation />
    </div>
  )
}
