import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Loading from './components/Loading';
import Texting from './components/Texting';
import Horizontal from './components/Horizontal';
// import Contact from './components/Contact';
import Lenis from '@studio-freight/lenis';
import BTS from './components/BTS';
import Works from './components/Works';
import Intro from './components/Intro';
import aos from 'aos';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Funny from './components/Funny';
import { MdArrowOutward } from "react-icons/md";
import Mobilehor from './components/Mobilehorizontal';
import Tabhor from './components/Tabhor';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import Cntct from './pages/Contactpage';
import Categ from './components/Categ';
const Displayworks = lazy(() => import('./pages/Displayworks'));
const Archives = lazy(() => import('./pages/Archives'));
const Contact = lazy(() => import('./components/Contact'));




function App() {
  const location = useLocation(); // Get location for AnimatePresence
  const [isLoading, setIsLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); 

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true); // Trigger fade-up animation
      setTimeout(() => {
        setIsLoading(false); // Remove loading screen after fade-up completes
      }, 1500); 
    }, 10000);
  }, []);



  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      smoothTouch: true, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up
    };
  }, []);

  useEffect(() => {
    aos.init({
      once: false, // Ensures animation happens only once (can be changed if needed)
      mirror: false, // Do not animate elements on scroll up (keeps it smoother on mobile)
      anchorPlacement: 'top-bottom', // Animations trigger when top of element hits bottom of viewport
    });
  }, []);

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,  
      });
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mouse.x - 7.7,
      y: mouse.y - 7.7
    }
  };

  // Page transition animation for fade-up
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };
  
  const[isMobile,setIsMobile]=useState(window.innerWidth<768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  const[isTab,setIsTab]=useState(window.innerWidth>768 && window.innerWidth<1024);

  useEffect(() => {
    const handleResize = () => {
      setIsTab(window.innerWidth >= 769 && window.innerWidth <= 1025);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])



  return (
    <div className='appDiv'>
      <div className="smooth-wrapper">
        <div className="smooth-content">
          <motion.div
           className="cursor"
           variants={variants}
           animate="default"
          ></motion.div>
          {
            isLoading ? (
              <Loading fadeOut={fadeOut} />
            ) : (
              <div className='body2'>
                {/* AnimatePresence for transitions */}
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path='/' element={
                      <motion.div {...pageTransition}>
                        <Hero />
                        <div className="intronav" data-aos="fade-up">
                          <p>{`${day}/${month}`}</p>
                          <section className="animation">
                            <div className="first"><div>Videographer</div></div>
                            <div className="second"><div>Cinematographer</div></div>
                            <div className="third"><div>FilmMaker</div></div>
                          </section>
                          <p>أبو ظبي</p>
                        </div>
                        {/* <Intro /> */}
                        <Texting />
                        <BTS />
                        {isMobile?(
                          <><Link to={'/categ'} id='workmobhead'  >SEE MY WORKS<MdArrowOutward />
</Link>
<div className="spacing"></div></>
                        ):null}
                        {isMobile?(<Mobilehor/>):null}<Texting />
                        {isMobile?null:(
                          <>{isTab?null:(<center>Have enquiries? Contact me via <a href="mailto:thameeeeem2002@gmail.com" id='links'> email</a></center>)       }</>)
                        }
                        {isMobile?null:(
                          <>{isTab?null:(<Funny/>)}</>)}
                        {isMobile?(<Contact/>):null}
                        {isTab?(<Contact/>):null}
                      </motion.div>} />
<Route path='/categ' element={
  <Suspense fallback={<div>Loading...</div>}>
    <motion.div {...pageTransition}>
      <Categ/>
    </motion.div>
  </Suspense>
} />


                     <Route path='/archives' element={
                                            <Suspense fallback={<div>Loading...</div>}>
                      <motion.div {...pageTransition}>
                        <Archives/>
                      </motion.div>
                      </Suspense>
                    } />
                      <Route path='/contactpage' element={
                      <Suspense fallback={<div>Loading...</div>}>
                      <motion.div {...pageTransition}>
                      {/* <p style={{marginTop:'50px',color:'gray',position:'relative'}} ><Link to={'/'}><IoReturnDownBackOutline /></Link>CONNECT</p> */}
                        <Contact/>
                      </motion.div>
                      </Suspense>
                    } />                    
                     </Routes>
                </AnimatePresence>
              </div>
            )
          }
        </div></div></div>);}
export default App;


