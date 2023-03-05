import Robots from "../Robots";
import Header from "../Header";
import Footer from "../Footer";
import {Outlet} from "react-router-dom"
import './index.css'

function Layout() {
  return (
    <div className="App">
      <Header/>
      <main>
          <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
