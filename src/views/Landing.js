import aroundTheWorldVideo from "../assets/spaceEarthTemplate.mp4";
import HollywoodBookReviewLogo from "../assets/HollywoodBookReviewLogo.png";
import authorJames from "../assets/authorJamesRemoveBg.png";
import { Outlet, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";

function Landing() {
  return (
    <>
      <div className=" md:mt-[88px] mt-[82px] bg-[#FEFCF0] h-screen flex">
        <div className=" w-[95%] mx-auto my-auto pb-[88px] ">
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="text-5xl lg:w-[30%] my-auto font-normal">
              <span className="text-[#DB723F] font-bold">Bull Vaulter</span>
              <div className="text-[#753536]">Alena of the Isle of Green</div>
            </div>
            <div className="lg:w-[40%]">
              <img
                src="https://as1.ftcdn.net/v2/jpg/00/94/20/12/1000_F_94201267_qTtmC14hkFSRuEaMWK6sa3TrwQipodhU.jpg"
                alt=""
              />
            </div>
            <div className="text-5xl lg:w-[30%] my-auto text-right">
              <span className="text-[#DB723F]">Barbara</span>{" "}
              <span className="text-[#753536]">Tieken</span>
            </div>
          </div>
          <div>
            <div className="text-5xl text-center my-4">Now Available</div>
            <a
              href="https://www.amazon.com/MegaQuake-2023-Timelines-Events-Apocalyptic-ebook/dp/B09W1XVVMV/ref=cm_cr_arp_d_product_top?ie=UTF8"
              target="_blank"
              rel="noreferrer"
            >
              <div class="border-2 border-black rounded-lg bg-[#FEFCF0] text-md px-5 md:py-2.5 py-3.5 max-w-[250px] my-4 mx-auto">
                <img
                  className="pt-2 "
                  src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
