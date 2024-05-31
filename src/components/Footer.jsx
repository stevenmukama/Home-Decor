import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="py-4 text-gray-800">
      <div className="flex bg-gray-500">
        <div className="flex items-center justify-center flex-1 text-3xl text-white">
          <p>Get notified for New arrivals</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-2 p-4">
          <input
            type="text"
            placeholder="Your email"
            className="px-8 py-1 font-bold w-72"
          />
          <span className="px-10 py-1 font-bold text-center text-white bg-orange-600 rounded-lg text-md w-fit">
            Subscribe
          </span>
        </div>
      </div>
      <div className="container px-4 mx-auto my-8">
        <div className="flex justify-between">
          <div>
            <img src="/src/assets/Logo place.svg" alt="logo" className="w-48" />
          </div>
          <div>
            <h3 className="mb-2 font-bold">Product</h3>
            <ul>
              <li>
                <a href="/textile" className="text-gray-500 hover:underline">
                  Textile
                </a>
              </li>
              <li>
                <a
                  href="/new-arrival"
                  className="text-gray-500 hover:underline"
                >
                  New Arrival
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-bold">Information</h3>
            <ul>
              <li>
                <a href="/faq" className="text-gray-500 hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-500 hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-bold">Company</h3>
            <ul>
              <li>
                <a href="/blog" className="text-gray-500 hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-500 hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-bold">Subscribe</h3>
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded"
              />
              <button className="flex items-center justify-center px-1 py-2 bg-gray-800 rounded-e-lg">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 flex justify-center gap-4 py-2">
        <img
          src="/src/assets/Google.svg"
          className="bg-white p-2 rounded-full"
        />
        <img src="/src/assets/IG.svg" className="bg-white p-2 rounded-full" />
        <img
          src="/src/assets/Behance.svg"
          className="bg-white p-2 rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer;
