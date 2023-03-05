import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './components/Layout';
import Robots from './components/Robots';
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="robots" element={<Robots />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
    </Routes>
  )
}

export default App
