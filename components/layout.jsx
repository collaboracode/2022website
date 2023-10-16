import { useState, useEffect } from 'react';

import Footer from './footer';
import { SiteNav } from './navbar';

export default function Layout(props) {
  const { children } = props;
  const [scrollPos, setScrollPos] = useState(0);
  const [snakeToggle, setSnakeToggle] = useState(false);

  useEffect(() => {
    document.body.className = 'scrollBarOne'
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPos(position);
      if (Math.random() < .5) {
        setSnakeToggle(!snakeToggle)
        document.body.className = snakeToggle ? 'scrollBarOne' : 'scrollBarTwo'
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
    <>
      <SiteNav />
      <div className='main-content z-10'>{children}</div>
      <Footer />
    </>
  )
}
