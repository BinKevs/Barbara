import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";
function ContactUs() {
  return (
    <>
      <section class="bg-black text-white md:mt-[88px] mt-[82px]">
        <div class="py-8 lg:py-16 px-4 mx-auto w-[80%] md:text-left text-center ">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold ">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-gray-300 ">
            For any inquries Let us know.
          </p>
          <div className=" font-Montserrat text-center  mb-10 flex md:flex-row justify-between align-middle flex-col md:space-y-0 space-y-3">
            <div className="">
              <div className="bg-white w-[80px] rounded-lg mb-3 mx-auto flex justify-center">
                <IconContext.Provider value={{ color: "black", size: "3em" }}>
                  <AiOutlineMail />
                </IconContext.Provider>
              </div>
              <div className=" space-y-3">
                <div className="text-xl font-bold">Email Us:</div>

                <div className="text-gray-400 text-xl ">
                  info@stonehengeliterary.com
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-white w-[80px] rounded-lg mb-3 mx-auto flex justify-center">
                <IconContext.Provider value={{ color: "black", size: "3em" }}>
                  <IoMdCall />
                </IconContext.Provider>
              </div>
              <div className=" space-y-3">
                <div className="text-xl font-bold">Call Us:</div>
                <div className="text-gray-400 text-xl ">855-674-2878 </div>
              </div>
            </div>
            <div className="">
              <div className="bg-white w-[80px] rounded-lg mb-3 mx-auto flex justify-center">
                <IconContext.Provider value={{ color: "black", size: "3em" }}>
                  <BiCurrentLocation />
                </IconContext.Provider>
              </div>
              <div className=" space-y-3">
                <div className="text-xl font-bold">Address:</div>
                {/* <div className="text-gray-400">
                  Happy to assist you on our office
                </div> */}
                <div className="text-gray-400 text-xl max-w-[250px] mx-auto">
                  1846 E Innovation Park Dr STE 100 Oro Valley, Arizona City,
                  AZ, United States
                </div>
              </div>
            </div>
            {/* <div>
              <div></div>
              <div>
                <div>Call us:</div>
                <div>Call us to speak to a member of our team.</div>
                <div>+1 (646) 786-5060</div>
              </div>
            </div> */}
          </div>

          <form
            class="space-y-8 "
            action="https://formsubmit.co/info@stonehengeliterary.com"
            method="POST"
            target="_blank"
          >
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium ">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#2A4C9A] focus:border-[#2A4C9A] block w-full p-2.5 text-black"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#2A4C9A] focus:border-[#2A4C9A] block w-full p-2.5 text-black"
                placeholder="Example@gmail.com"
              />
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium ">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#2A4C9A] focus:border-[#2A4C9A] text-black"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium ">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#2A4C9A] focus:border-[#2A4C9A] text-black"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit hover:bg-black hover:text-white hover:border-white hover:border-2 focus:ring-4 focus:outline-none focus:ring-white"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
