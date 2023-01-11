import React, { useEffect, useReducer, useRef, useState } from 'react'
import styles from '../styles/slider.module.scss'
// import { userAgent } from 'next/server'


let theSlides = [];

function useTilt(active) {
  const [willMove, setWillMove] = useState(false)

  const ref = useRef(null);
  useEffect(() => {
    // console.log(navigator.userAgent.toLowerCase().indexOf('firefox'))
    // if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
    //   setWillMove(true)
    // }
    setWillMove(navigator.userAgent.toLowerCase().indexOf('firefox') === -1)
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
  theSlides = slides;
  return (
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

  );
}







