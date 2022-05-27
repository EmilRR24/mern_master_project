import React from 'react';
import ReactDOM from 'react-dom';
import '../components/3dcover.css';

const slides = [
{
  title: "Swagg",
  subtitle: 'Kris',
//   DIDNT USE DESCRIPTON BUT LEFT INCASE MORE ATTRIBUTES WANTED
//   description:'https://www.twitch.tv/swagg',
  link:"https://www.twitch.tv/swagg",
  image:
  "https://www.tubefilter.com/wp-content/uploads/2021/06/underscore-gaming.jpg" },

{
  title: "Pewdiepie",
  subtitle:'Felix Kjellberg',
//   description: "https://www.twitch.tv/pewdiepie",
  link:"https://www.twitch.tv/pewdie",
  image:
  "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2019/10/22/28463b1c-f4cd-11e9-87ad-fce8e65242a6_image_hires_215309.JPG" },

{
  title: "Ninja",
  subtitle: "Richard Blevins",
//   description: "https://www.twitch.tv/ninja",
  link:"https://www.twitch.tv/ninja",
  image:
  "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/5c8a818aba585616e0000035.jpeg" },

{
  title: "Shroud",
  subtitle: "Michael Gresiek",
//   description: "https://www.twitch.tv/shroud",
  link:"https://www.twitch.tv/shroud",
  image:
  "https://cdn.vox-cdn.com/thumbor/2aBBUfl11j5KGBw_Ke6Ubip_HlA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19316022/1054359868.jpg.jpg" },

  
{
    title: "TimTheTatman",
    subtitle: "Timothy Betar",
    // description: "https://www.twitch.tv/timthetatman",
    link:"https://www.twitch.tv/timthetatman",
    image:
    "https://www.dexerto.com/wp-content/uploads/2021/09/01/Image-from-iOS.jpg" },

{
    title: "NICKMERCS",
    subtitle: "Nicholas Kolcheff",
    // description: "https://www.twitch.tv/nickmercs",
    link:"https://www.twitch.tv/nickmercs",
    image:
    "https://tdalabamamag.com/wp-content/uploads/2020/09/Nick-Mercs-e1600203254135.jpg" },

{
    title: "Syndicate",
    subtitle: "Tom Cassell",
    // description: "https://www.twitch.tv/syndicate",
    link:"https://www.twitch.tv/syndicate",
    image:
    "https://influencermatchmaker.co.uk/sites/default/files/2020-02/syndicate%60.JPG" },

{
    title: "summit1g",
    subtitle: "Jaryd Lazar",
        // description: "https://www.twitch.tv/summit1g",
    link:"https://www.twitch.tv/summit1g",
    image:
    "https://gumlet.assettype.com/afkgaming%2Fimport%2Fmedia%2Fimages%2F90335-3f3f52965663321a1359ac31b766c4c1.jpg?format=auto" },

{
    title: "Auronplay",
    subtitle: "Rual genes",
            // description: "https://www.twitch.tv/summit1g",
    link:"https://www.twitch.tv/auronplay",
    image:
        "https://i.kym-cdn.com/entries/icons/mobile/000/040/250/3-auronplay.jpg" },

{
    title: "TommyInnit",
    subtitle: "Thomas Simons",
                    // description: "https://www.twitch.tv/summit1g",
    link:"https://www.twitch.tv/tommyinnit",
    image:
        "https://yt3.ggpht.com/ytc/AKedOLT6khfYW5nRXTfGFdRXAFJb5pQrw3uZb3we-AbT5Q=s900-c-k-c0x00ffffff-no-rj" },

{
    title: "SypherPk",
    subtitle: "Ali Hassan",
                            // description: "https://www.twitch.tv/summit1g",
    link:"https://www.twitch.tv/sypherpk",
    image:
        "https://www.prosettings.com/site/wp-content/uploads/2018/04/SypherPK.jpg" },

{
    title: "pokimane",
    subtitle: "Imane Anys",
            // description: "https://www.twitch.tv/summit1g",
    link:"https://www.twitch.tv/pokimane",
    image:
        "https://s.yimg.com/ny/api/res/1.2/Mt._p4GVmZaAkn3kL6Gm0w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/uu/api/res/1.2/OQ0Q6CRLu7yjpyo3kVRifw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/kotaku_564/381e56b00aef37fabaed9ea21ad00901" },

{
    title: "Alanzoka",
    subtitle: "Alan Ferrira",
        // description: "https://www.twitch.tv/summit1g",
    link:"https://www.twitch.tv/alazoka",
    image:
        "https://www.apexskins.net/wp-content/uploads/2019/02/7919cc39e469cfc63854a9da9d9bcfce.jpg" }]

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined };


    let el = ref.current;

    const handleMouseMove = e => {
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
  slideIndex: 0 };


const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length };

  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
      state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1 };

  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return /*#__PURE__*/(
    React.createElement("div", {
      ref: ref,
      className: "slide",
      "data-active": active,
      style: {
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1 } }, /*#__PURE__*/


    React.createElement("div", {
      className: "slideBackground",
      style: {
        backgroundImage: `url('${slide.image}')` } }), /*#__PURE__*/

    React.createElement("a", {
        href:slide.link,
        className: "aLink"
    },

    React.createElement("div", {
      className: "slideContent",
      style: {
        backgroundImage: `url('${slide.image}')` } }, /*#__PURE__*/

    React.createElement("div", { className: "slideContentInner" }, /*#__PURE__*/
    React.createElement("h2", { className: "slideTitle" }, slide.title), /*#__PURE__*/
    React.createElement("h4", { className: "slideSubtitle" }, slide.subtitle), /*#__PURE__*/
    React.createElement("p", { className: "slideDescription" }, slide.description))))));




}

function Carousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return /*#__PURE__*/(
    React.createElement("div", { className: "slides" }, /*#__PURE__*/
    React.createElement("button", { onClick: () => dispatch({ type: "PREV" }) }, "\u2039"),

    [...slides, ...slides, ...slides].map((slide, i) => {
      let offset = slides.length + (state.slideIndex - i);
      return /*#__PURE__*/React.createElement(Slide, { slide: slide, offset: offset, key: i });
    }), /*#__PURE__*/
    React.createElement("button", { onClick: () => dispatch({ type: "NEXT" }) }, "\u203A")));

}
export default Carousel;
// const elCarousel = document.getElementById("carousel");
// ReactDOM.render( /*#__PURE__*/React.createElement(Carousel, null), elCarousel);

