import React, { useEffect, useReducer, useRef, useState } from 'react'

import {
  UncontrolledCarousel,
} from 'reactstrap'
import styles from '../styles/slider.module.scss'
// import { userAgent } from 'next/server'
// todo give credit to OG creator of this.

let theSlides = [];

function useTilt(active) {
  const [willMove, setWillMove] = useState(false)

  const ref = useRef(null);
  useEffect(() => {
    // console.log(navigator.userAgent.toLowerCase().indexOf('firefox'))
    // if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
    //   setWillMove(true)
    // }
    const isNotFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') === -1
    // const isNotAppleGarbageBrowser = navigator.userAgent.toLowerCase().indexOf('safari') === -1
    const isNotSafari = !(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    // maybe trash talk their choice in device?
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
    setWillMove(isNotFirefox && !isMobile && isNotSafari)
  }, [active, ref.current])

  useEffect(() => {
    if (!ref.current || !active) {
      // setWillMove(navigator.userAgent.toLowerCase().indexOf('firefox') === -1)
      return;
    }


    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (willMove) {

        if (!el) {
          return;
        }

        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }

        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);

      };
    }

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };

  }, [active, willMove]);

  return ref;

}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  let slides = theSlides;
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  // const [willMove, setWillMove] = useState(true)
  // useEffect(() => {
  //   console.log(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
  //   if (!navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  //     setWillMove(false)
  //   }
  // }, [])
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <div
      ref={ref}
      className={styles.slide}
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className={styles.slideBackground}
      />
      <div
        className={styles.slideContent}
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className={styles.slideContentInner}>
          <h2 className={styles.slideTitle}>{slide.title}</h2>
          <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
          <p className={styles.slideDescription}>{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Slider({ slides }) {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  const [mobile, setMobile] = useState(false)
  theSlides = slides;
  useEffect(() => {
    setMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
  }, [])
  console.log("slides",slides)
  return (
    <>
      {
        //* isMobile ? <caorusel/> : Slider component
        mobile ? (
          <UncontrolledCarousel
            items={[
              {
                altText: slides[0].title,
                caption: slides[0].description,
                key: 1,
                src: slides[0].image
              },
              {
                altText: slides[1].title,
                caption: slides[1].description,
                key: 2,
                src: slides[1].image
              },
              {
                altText: slides[2].title,
                caption: slides[2].description,
                key: 3,
                src: slides[2].image
              }
            ]}
          />
        ) : (
          <div className={styles.sliderContainer}>
            <div className={styles.slides}>
              <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
              {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
              })}
              <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
            </div>
          </div>
        )
      }
    </>
    // <div className={styles.sliderContainer}>
    //   <div className={styles.slides}>
    //     <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
    //     {[...slides, ...slides, ...slides].map((slide, i) => {
    //       let offset = slides.length + (state.slideIndex - i);
    //       return <Slide slide={slide} offset={offset} key={i} />;
    //     })}
    //     <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    //   </div>
    // </div>

  );
}







