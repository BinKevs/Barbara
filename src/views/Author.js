// import authorJames from "../assets/authorJames.jpg";

function Author() {
  return (
    <>
      <div className="bg-[#FEFCF0] md:mt-[88px] mt-[82px]">
        <div className="mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/2 my-auto lg:order-first order-last">
            <div className="p-8">
              <div className="lg:text-5xl text-4xl">Barbara Tieken</div>
              <div className="lg:text-2xl text-xl">
                Barbara Tieken, author of Bull Vaulter, Alena of the Isle of
                Green, has now returned to her childhood home in Texas where she
                writes a weekly column for Historic Old Town Shiner in The
                Shiner Gazette. Barbara has been described as “a friend of all
                who fly, be it bird or spirit.” An avid environmentalist, 2010
                and 2015 performance poet at Trails and Vistas’ Art Hike in the
                Sierra Nevada, published poet and essayist, teacher, former
                Mayor and City Councilwoman of New Braunfels, Texas, Barbara
                wrote this historical fiction novel while she and her late
                husband lived in Newport, Oregon, high on a hill overlooking the
                beautiful Pacific.
                <br />
                <br />
                Barbara continues to be inspired by the writings of the late
                UCLA Archaeologist/Mythologist Dr. Marija Gimbutas, and the
                excavations of Akrotiri on Santorini by the late Dr. Spyridon
                Marinatos and Dr. Christos Doumas as chronicled by Dr. Charles
                Pellegrino’s Unearthing Atlantis, An Archaeological Odyssey.
                Barbara’s long desire has been to bring this highly-evolved,
                peaceful, Goddess-worshiping, life-affirming, navigational
                culture that dominated the Aegean and Mediterranean for
                thousands of years on Keft (Crete) and Kalliste (Santorini) to a
                wider reading audience.
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#CED0C5] h-[calc(100vh-88px)] flex my-auto">
            <img
              src="https://m.media-amazon.com/images/I/41wkWL1eiAL._SX450_.jpg"
              className="my-auto ml-auto p-4 w-[600px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
