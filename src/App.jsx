import './App.css';

import Commons from "./components/commons";
import Cursor from "./components/Cursor";
import Landing from "./components/Landing";
import Landing2 from "./components/Landing2";
import Spline from '@splinetool/react-spline';
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Trippyscroll from "./components/Trippyscroll"

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter


import { useRef, useEffect } from 'react';
import  { HeroParallax } from "../src/components/ui/hero-parallax";
import  { FeaturesSection } from "../src/components/Services";
import {RevealLinks} from "./components/RevealLink"

function App() {
  const stickyElement = useRef({});

  useEffect(() => {
    console.log("YouTube Icon Ref:", stickyElement.current.youtubeIcon);
    console.log("TikTok Icon Ref:", stickyElement.current.tiktokIcon);
    console.log("Facebook Icon Ref:", stickyElement.current.facebookIcon);
    console.log("Instagram Icon Ref:", stickyElement.current.instagramIcon);
    console.log("WebMinds Logo Ref:", stickyElement.current.WebMindsLogo);
  }, []);

  return (
    <>
    <Router>
      <Commons ref={stickyElement} />
      <Cursor stickyElement={stickyElement} />
      <Landing />
      <HeroParallax products={products} />
      <Spline scene="https://prod.spline.design/yiyXGJDlZ91KMVbs/scene.splinecode" />
      <FeaturesSection/>
      <FAQ/>
      <RevealLinks/>
      <Trippyscroll/> 
      <Landing2/>
      <Footer/>
      </Router>
    </>
  );
}

export const products = [
  {
    title: "WebD",
    link: "https://gomoonbeam.com",
    thumbnail: "/assets/thumbnails/crane.webp"
  },
  {
    title: "Lolins",
    link: "https://cursor.so",
    thumbnail: "/assets/thumbnails/lolins.webp"
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/assets/thumbnails/WebD.jpg"
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/assets/thumbnails/artisan.webp"
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/assets/thumbnails/artisan.webp"
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/assets/thumbnails/artisan.webp"
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/assets/thumbnails/timber.webp"
  },
  {
    title: "timber",
    link: "https://ui.aceternity.com",
    thumbnail: "/assets/thumbnails/furnish.webp"
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/assets/thumbnails/Color.webp"
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/assets/thumbnails/artisan.webp"
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/assets/thumbnails/artisan.webp"
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/assets/thumbnails/LEF.webp"
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/assets/thumbnails/bijou.webp"
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/assets/thumbnails/jimmu.webp"
  },
];

export default App;
