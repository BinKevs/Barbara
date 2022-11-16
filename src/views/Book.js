// import aroundTheWorld from "../assets/aroundTheWorldWithBG.jpg";

import Typewriter from "typewriter-effect";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Book() {
  return (
    <>
      <div className="h-full bg-[#FEFCF0] flex mt-[88px]">
        <div className="w-[80%] m-auto flex flex-col xl:flex-row xl:space-x-8 py-[40px]">
          <div className="flex">
            <div className="flex flex-col xl:flex-row xl:space-x-8 xl:p-0 p-4 my-auto">
              <img
                className="xl:max-w-[300px]"
                src="https://m.media-amazon.com/images/P/1638710066.01._SCLZZZZZZZ_SX500_.jpg"
                alt=""
              />
              <img
                className="xl:max-w-[300px]"
                src="https://m.media-amazon.com/images/I/712AKM0-1uL.jpg"
                alt=""
              />
            </div>
          </div>
          {/* https://youronlinepublicist.com/wp-content/uploads/2018/08/Bull-Vaulter-3D-600x400.jpg */}
          <div className="space-y-8">
            <div className="text-5xl">
              Bull Vaulter: Alena of the Isle of Green
            </div>
            <div>
              <div className="text-2xl my-4">Now Available</div>
              <a
                href="https://www.amazon.com/Bull-Vaulter-Alena-Isle-Green-ebook/dp/B091THW56C/ref=cm_cr_arp_d_product_top?ie=UTF8"
                target="_blank"
                rel="noreferrer"
              >
                <div class="border-2 border-black rounded-lg bg-[#FEFCF0] text-md px-5 md:py-2.5 py-3.5 max-w-[250px] my-4">
                  <img
                    className="pt-2 "
                    src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="text-lg">
              Bull Vaulter is an absorbing novel, particularly appropriate for
              our time, set in 2100 B.C.E. that interweaves adventure, passion,
              love, wisdom, and Women's Goddess Spirituality as practiced some
              four-thousand years ago on Keft (Ancient Crete) and Kalliste
              (Santorini).
              <br />
              <br />
              Ms. Tieken was inspired by the writings of the late UCLA
              Archeologist/Mythologist, Dr. Marija Gimbutas, and the excavations
              of Akrotiri on Santorini by Dr. Christos Doumas and the late Dr.
              Spyridon Marinatos as chronicled in Dr. Charles Pellegrino's
              novel, Unearthing Atlantis, An Archaeological Odyssey.
              <br />
              <br />
              Join Alena, famed Bull Vaulter from Keft, as she sails to the
              Peloponnesus for a stellar performance with her fellow vaulters
              from their island culture, meets (under the most horrid
              circumstances) the Kurgan warrior, Jahal, studies with the famed
              healer, Aesclevius, and his herbalist wife, Myra, and discovers
              the special talents bestowed upon her by the Goddess. Alena's is
              an exhilarating journey that vividly describes the contrasting
              cultures of that Bronze Age period as it follows Crete's famous
              bull vaulter on her path to fulfill her fated destiny.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
