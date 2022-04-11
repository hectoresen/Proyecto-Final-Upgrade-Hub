import React from 'react'
import './Carousel.scss';

const CarouselContainer = () => {

const slides = [
  {
    title: "Moda",
    subtitle: "Hombre",
    image:
      "http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2018/10/portada-wp-modahombre.jpg"
  },
  {
    title: "Moda",
    subtitle: "Mujer",
    image:
      "https://i2.wp.com/ellashablan.com/wp-content/uploads/2016/12/marcas-ropa-mujer.jpg"
  },
  {
    title: "Complementos",
    subtitle: "",
    image:
      "https://theluxonomist.es/wp-content/uploads/2021/12/bolso-moda-complementos.jpg"
  },
  {
    title: "Sneakers",
    subtitle: "Ella / El",
    image:
      "https://media.revistagq.com/photos/5ca5f975b73808e4ff819508/16:9/w_1280,c_limit/zapatillas_basicas_para_hombre_moda_tendencias_2831.jpg"
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
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

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
        </div>
      </div>
    </div>
  );
}


  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className='carousel-container'>
          <div className="slides">
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


export default CarouselContainer