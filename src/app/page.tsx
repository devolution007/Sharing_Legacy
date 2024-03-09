"use client"
import Image from 'next/image';
// import Head from "next/head";
import NavBar from './components/header';
import Mainsection from './components/homepage';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gift from './components/gift';
import Legacyplaque from './components/Legacy Plaque';
import LegacyGift from './components/Legacy Gift';
import Checkout from './components/checkout';
import Helpsupport from './components/help_support'
import Mainprofile from './dashboard/mainprofile';
import Profile from './dashboard/profile';
import Login from './dashboard/login';
import Register from './dashboard/register';
import EditMarker from './dashboard/editMarker';

export default function Home() {
  if (typeof window !== 'undefined') {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<Mainsection />} />
            <Route path='/Gift' element={<Gift />} />
            <Route path='/Legacyplaque' element={<Legacyplaque />} />
            <Route path='/LegacyGift' element={<LegacyGift />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/helpandsupport' element={<Helpsupport />} />
            <Route path='/mainprofile' element={<Mainprofile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/editmarker' element={<EditMarker />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}
