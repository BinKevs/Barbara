import aroundTheWorldFandB from "../assets/aroundTheWorldFandB.jpg";
import { AiOutlineAmazon } from "react-icons/ai";
import { IconContext } from "react-icons";
function Order() {
  return (
    <div className="min-h-[70vh] bg-black md:mt-[88px] mt-[82px]">
      <div className="mx-auto w-[80%] text-white ">
        <div className="">
          <div className="text-7xl font-bold py-6 uppercase text-white">
            Order Details
          </div>
          <div className="flex xl:flex-row flex-col xl:space-x-12 pt-[100px] ">
            <div className="my-auto">
              <img className="w-[480px] " src={aroundTheWorldFandB} alt="" />
            </div>
            <div className="flex xl:flex-row flex-col flex-wrap justify-center xl:space-x-8 my-auto text-white">
              <div>
                <div class="min-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                      Kindle
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                      $2.99
                    </h5>
                    <div class="mb-3 font-normal space-y-4">
                      <div>Print length : 36 pages</div>
                      <div> Language: English </div>
                      <div> File size : 943 KB</div>
                      <div> KB ASIN : B09FRY2XMD</div>
                    </div>
                    <a
                      href="https://www.amazon.com/Around-World-Lines-James-Anstead-ebook/dp/B09FRY2XMD/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                      target="_blank"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="min-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                      Hardcover
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight">
                      $15.99
                    </h5>
                    <div class="mb-3 font-normal space-y-4">
                      <div>Print length : 48 pages</div>
                      <div>Language: English </div>
                      <div>ISBN-10 : 164753724X</div>
                      <div>ISBN-13 : 978-1647537241</div>
                    </div>
                    <a
                      href="https://www.amazon.com/Around-World-Lines-James-Anstead/dp/164753724X/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                      target="_blank"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="min-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                      Paperback
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                      $9.99
                    </h5>

                    <div class="mb-3 font-normal space-y-4">
                      <div> Print length : 48 pages</div>
                      <div> Language: English </div>
                      <div> ISBN-10 : 1647537169</div>
                      <div> ISBN-13 : 978-1647537166</div>
                    </div>
                    <a
                      href="https://www.amazon.com/Around-World-Lines-James-Anstead/dp/1647537169/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                      target="_blank"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
