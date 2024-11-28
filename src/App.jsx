import './App.css';
import Commons from "./components/commons";
import Cursor from "./components/Cursor";
import Landing from "./components/Landing";
import Spline from '@splinetool/react-spline';
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

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
      <Cursor stickyElement={stickyElement} />
      <Commons ref={stickyElement} />
      <Landing />
      <HeroParallax products={products} />
      <Spline scene="https://prod.spline.design/yiyXGJDlZ91KMVbs/scene.splinecode" />
      <FeaturesSection/>
      <FAQ/>
      <RevealLinks/>
      <Footer/>
    </>
  );
}

export const products = [
  { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png" },
  { title: "Cursor", link: "https://cursor.so", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
  { title: "Rogue", link: "https://userogue.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png" },
  { title: "Editorially", link: "https://editorially.org", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png" },
  { title: "Editrix AI", link: "https://editrix.ai", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png" },
  { title: "Pixel Perfect", link: "https://app.pixelperfect.quest", thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png" },
  { title: "Algochurn", link: "https://algochurn.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png" },
  { title: "Aceternity UI", link: "https://ui.aceternity.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png" },
  { title: "Tailwind Master Kit", link: "https://tailwindmasterkit.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png" },
  { title: "SmartBridge", link: "https://smartbridgetech.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png" },
  { title: "Renderwork Studio", link: "https://renderwork.studio", thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png" },
  { title: "Creme Digital", link: "https://cremedigital.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png" },
  { title: "Golden Bells Academy", link: "https://goldenbellsacademy.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png" },
  { title: "Invoker Labs", link: "https://invoker.lol", thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png" },
];

export default App;
