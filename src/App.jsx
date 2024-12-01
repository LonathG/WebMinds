import './App.css';

import Commons from "./components/commons";
import Cursor from "./components/Cursor";
import Landing from "./components/Landing";
import Landing2 from "./components/Landing2";
import Spline from '@splinetool/react-spline';
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Trippyscroll from "./components/Trippyscroll";

import { Link, Element, scroller } from 'react-scroll'; // For smooth scrolling

import { useRef, useEffect } from 'react';
import { HeroParallax } from "../src/components/ui/hero-parallax";
import { FeaturesSection } from "../src/components/Services";
import { RevealLinks } from "./components/RevealLink";

// Array of products to pass to HeroParallax
export const products = [
  {
    title: "Crane Auto",
    link: "",
    thumbnail: "/assets/thumbnails/crane.webp"
  },
  {
    title: "Lolins",
    link: "https://cursor.so",
    thumbnail: "/assets/thumbnails/lolins.webp"
  },
  {
    title: "WebMinds Designers",
    link: "https://userogue.com",
    thumbnail: "/assets/thumbnails/WebD.jpg"
  },
  {
    title: "Kaveeshwara",
    link: "https://editorially.org",
    thumbnail: "/assets/thumbnails/kavee.webp"
  },
  {
    title: "Artisan Antiques",
    link: "https://editrix.ai",
    thumbnail: "/assets/thumbnails/artisan.webp"
  },
  {
    title: "Artisan Antiques",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/assets/thumbnails/artisan.webp"
  },
  {
    title: "Timbershapes",
    link: "https://algochurn.com",
    thumbnail: "/assets/thumbnails/timber.webp"
  },
  {
    title: "Furnishings",
    link: "https://ui.aceternity.com",
    thumbnail: "/assets/thumbnails/furnish.webp"
  },
  {
    title: "Colorverse",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/assets/thumbnails/Color.webp"
  },
  {
    title: "Artisan Antiques",
    link: "https://smartbridgetech.com",
    thumbnail: "/assets/thumbnails/artisan.webp"
  },
  {
    title: "Elemental Architecture",
    link: "https://renderwork.studio",
    thumbnail: "/assets/thumbnails/archi.webp"
  },
  {
    title: "Little England Farm",
    link: "https://cremedigital.com",
    thumbnail: "/assets/thumbnails/LEF.webp"
  },
  {
    title: "Bijou",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/assets/thumbnails/bijou.webp"
  },
  {
    title: "Jimmu",
    link: "https://invoker.lol",
    thumbnail: "/assets/thumbnails/jimmu.webp"
  },
  {
    title: "Lolins",
    link: "https://cursor.so",
    thumbnail: "/assets/thumbnails/lolins.webp"
  },
];

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
      <div className="App">
        {/* Common components */}
        <Commons ref={stickyElement} />
        <Cursor stickyElement={stickyElement} />

        {/* Full-Page Scrolling Sections */}
        <div className="sections">
          <Element name="Landing">
            <Landing />
          </Element>

          <Element name="Work">
            <HeroParallax products={products} />
          </Element>

          <Element name="Spline">
          <div className=" relative w-full h-screen min-xs:h-96">
            <Spline scene="https://prod.spline.design/yiyXGJDlZ91KMVbs/scene.splinecode" />
          </div>          
          </Element>

          <Element name="Services">
            <FeaturesSection />
          </Element>

          <Element name="FAQ">
            <FAQ />
          </Element>



          <Element name="Socials">
            <RevealLinks />
          </Element>

          <Element name="Trippyscroll">
            <Trippyscroll />
          </Element>

          <Element name="Contact">
            <Landing2 />
          </Element>

          <Element name="Footer">
            <Footer />
          </Element>
        </div>
      </div>
    </>
  );
}

export default App;
