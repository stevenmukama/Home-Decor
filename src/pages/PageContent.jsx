import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FooterItem from "@/components/Footer";

const cards = [
  { title: "Clients", content: "10+" },
  { title: "Products", content: "10+" },
  { title: "XP Years", content: "1" },
];
const productImages = ["/Product1.png", "/product2.png", "/product3.png"];
const PageContent = ({
  title,
  item1,
  imageProp,
  color,
  item2,
  images,
  alt,
  buttonColor1,
  bgColor1,
  textCard1,
  numberColor1,
  buttonColor2,
  bgColor2,
  bgColor3,
  subscribeBgColor1,
}) => {
  return (
    <div className="relative overflow-hidden top-20">
      <div className={`gap-10 py-8 ${color} px-8`}>
        <h1 className="mb-4 py-12 text-4xl md:text-[90px] font-bold text-white">
          {title}
        </h1>
        <p className="mb-4 text-lg md:text-xl text-white">{item1}</p>
        <p className="mb-4 text-lg md:text-xl text-white">{item2}</p>
      </div>
      <div className="absolute top-[-81px] right-0 z-40 px-8">
        <img
          src={imageProp}
          alt={alt}
          className="object-cover object-center w-auto h-48 md:h-[718.2px] rounded-full"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <h1 className="px-8 mt-4 text-3xl font-bold text-center">
            CHANGE COLOR THEME
          </h1>
          <div className="flex flex-wrap md:flex-nowrap gap-4 px-8 mt-8 justify-center">
            {images?.map((image, index) => (
              <Link key={index} to={image.link} className="cursor-pointer">
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="object-cover object-center w-24 h-24 md:w-48 md:h-48"
                />
              </Link>
            ))}
          </div>
          <button
            className={`px-8 py-4 block mx-auto mt-8 ${buttonColor1} text-white rounded w-fit`}
          >
            Get Started
          </button>
        </div>
        <div
          className={`py-10 w-full md:w-1/2 ${bgColor1} rounded-tl-full rounded-tr-full relative md:right-[-110px]`}
        ></div>
      </div>
      <h1 className="mt-8 mb-8 text-3xl md:text-5xl font-bold text-center">
        About Us
      </h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 px-8 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-1/4 px-4 py-16 mb-8 text-center bg-white rounded-lg shadow-lg"
          >
            <h2 className={`text-xl md:text-[36px] font-bold ${textCard1}`}>
              {card.title}
            </h2>
            <p
              className={`text-4xl md:text-8xl mt-8  font-bold ${numberColor1}`}
            >
              {card.content}
            </p>
          </div>
        ))}
      </div>
      <Link
        className={`px-8 py-4 block text-xl md:text-[36px] rounded-lg mb-8 mx-auto mt-8 ${buttonColor2} text-white font-bold rounded w-fit`}
        to={"/product"}
      >
        see more
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Featured Products
      </h1>
      <div className="flex flex-wrap gap-4 px-8 mt-8 justify-center">
        {productImages.map((image, index) => (
          <div key={index} className="flex-1 max-w-xs">
            <Link to={"product"}>
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="object-cover object-center w-full h-auto min-w-40"
              />
            </Link>
          </div>
        ))}
      </div>
      <button
        className={`px-8 py-4 block text-xl md:text-[36px] rounded-lg mb-8 mx-auto mt-8 ${buttonColor2} text-white font-bold rounded w-fit`}
      >
        <div className="flex gap-2">
          Shop
          <img src="/public/arrowIcon.svg" />
        </div>
      </button>
      <div className={`${bgColor2} py-8 mb-8`}>
        <h1 className="mb-8 text-3xl md:text-4xl font-bold text-center text-white">
          What our clients say
        </h1>
        <div className="flex px-4 md:px-8 flex-wrap md:flex-nowrap gap-8 text-xl md:text-2xl justify-center">
          <div className="px-10 py-10 mx-auto text-center bg-white">
            <img src="/Vector.svg" />
            <h1 className="px-6">
              Torem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
          </div>
          <div className="px-10 py-10 bg-white">
            <img src="/Vector.svg" />
            <h1 className="px-6">
              Torem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4 px-8 mt-8 text-white">
            <div className={`${bgColor3} w-fit rounded-full`}>
              <img src="/profile-circle.svg" className="w-16 p-1" />
            </div>
            <div className="pt-2">
              <h1 className="text-xl font-bold">Desireé T.</h1>
              <p className="text-sm">Designer</p>
            </div>
          </div>
          <div className="flex gap-4 px-8 mt-8 text-white">
            <div className={`${bgColor3} w-fit rounded-full`}>
              <img src="/profile-circle.svg" className="w-16 p-1" />
            </div>
            <div className="pt-2">
              <h1 className="text-xl font-bold">Desireé T.</h1>
              <p className="text-sm">Designer</p>
            </div>
          </div>
          <div />
        </div>
      </div>
      <div className="flex gap-8 mb-8">
        <img src="/emailImg.png" className="" />
        <div className="flex-col items-center justify-center w-1/2 pt-8 text-center">
          <h1 className="block mx-auto text-4xl font-bold">
            Enter E-mail to get 20% off
          </h1>
          <div className="px-8 py-2 bg-[#D9D9D9] flex gap-2 w-full rounded-lg mt-8">
            <img src="/sms.svg" className="w-[51px] h-[51px]" />
            <p className="text-[32px] font-bold text-[#7A7878]"> Your email</p>
          </div>
          <button
            className={`px-10 py-3 rounded-lg text-white mt-8 ${subscribeBgColor1} font-bold `}
          >
            Subscribe{" "}
          </button>
        </div>
      </div>
      <FooterItem />
    </div>
  );
};

PageContent.propTypes = {
  title: PropTypes.string,
  nextPage: PropTypes.string,
  nextPageText: PropTypes.string,
  item1: PropTypes.string,
  imageProp: PropTypes.string,
  color: PropTypes.string,
  item2: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  alt: PropTypes.string,
  buttonColor1: PropTypes.string,
  bgColor1: PropTypes.string,
  textCard1: PropTypes.string,
  numberColor1: PropTypes.string,
  buttonColor2: PropTypes.string,
  bgColor2: PropTypes.string,
  bgColor3: PropTypes.string,
  subscribeBgColor1: PropTypes.string,
};

export default PageContent;
