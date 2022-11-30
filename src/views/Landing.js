// import HollywoodBookReviewLogo from "../assets/HollywoodBookReviewLogo.png";
// import authorJames from "../assets/authorJamesRemoveBg.png";
import bullVauterImage from "../assets/bullVauterImage.jpg";
import { Outlet, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";

function Landing() {
	return (
		<>
			<div className=" md:mt-[88px] mt-[92px] bg-[#FEFCF0] lg:h-screen flex">
				<div className=" w-[95%] mx-auto my-auto pb-[88px] ">
					<div className="flex flex-col lg:flex-row justify-center">
						<div className="text-5xl lg:w-[30%] my-auto font-normal">
							<span className="text-[#DB723F] font-bold">
								Bull Vaulter
							</span>
							<div className="text-[#753536]">
								Alena of the
								Isle of Green
							</div>
						</div>
						<div className="lg:w-[40%]">
							<img
								src="https://as1.ftcdn.net/v2/jpg/00/94/20/12/1000_F_94201267_qTtmC14hkFSRuEaMWK6sa3TrwQipodhU.jpg"
								alt=""
							/>
						</div>
						<div className="text-5xl lg:w-[30%] my-auto text-right">
							<span className="text-[#DB723F]">
								Barbara
							</span>{" "}
							<span className="text-[#753536]">
								Tieken
							</span>
						</div>
					</div>
					<div>
						<div className="lg:text-5xl text-4xl text-center my-4">
							Now Available
						</div>
						<a
							href="https://www.amazon.com/Bull-Vaulter-Alena-Isle-Green-ebook/dp/B091THW56C/ref=cm_cr_arp_d_product_top?ie=UTF8"
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
			<div>
				<img
					className=""
					src={bullVauterImage}
					alt=""
				/>
			</div>
			<div className=" bg-black">
				<div className="text-white w-[95%] mx-auto py-20">
					<div className="lg:text-7xl md:text-5xl text-4xl flex  justify-between pb-4 md:w-[80%] mx-auto">
						<div className="my-auto">
							Barbara Tieken
						</div>
						<div className=" md:min-w-[380px] min-w-[180px] max-w-[380px]">
							<img
								className=""
								src="https://m.media-amazon.com/images/I/41wkWL1eiAL._SX450_.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="">
						<div className="md:text-3xl sm:text-2xl text-lg flex flex-col text-justify md:w-[50%] w-[70%] mx-auto">
							<div className="">
								Barbara Tieken,
								author of Bull
								Vaulter, Alena
								of the Isle of
								Green, has now
								returned to her
								childhood home
								in Texas where
								she writes a
								weekly column
								for Historic Old
								Town Shiner in
								The Shiner
								Gazette. Barbara
								has been
								described as “a
								friend of all
								who fly, be it
								bird or spirit.”
								An avid
								environmentalist,
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#FEFCF0] py-8">
				<div className="w-[70%] mx-auto ">
					<div>
						<div className="lg:text-7xl text-4xl  py-6 uppercase text-black">
							The US Review of Books
						</div>

						<div className="text-black text-lg lg:w-[50%] w-[80%]">
							One horrible night in
							the ancient
							Peloponnesus, members of
							an invading tribe double
							rape a fourteen-year-old
							girl. The attack leaves
							her injured and
							pregnant. But Alena is
							tough beyond her years.
							She is a bull vaulter,
							rigorously trained to
							execute acrobatic feats
							on the back of a
							galloping bull—her
							matriarchal society's
							symbol of strength and
							rebirth.
							<Link
								to="reviews"
								className="text-xl my-4 text-[#753536] flex"
							>
								Read More{" "}
								<IconContext.Provider
									value={{
										size: "1.8em",
									}}
								>
									<AiOutlineRight />
								</IconContext.Provider>
							</Link>
						</div>
					</div>
					<div>
						<div className="lg:text-7xl text-4xl py-6 uppercase text-black">
							Pacific Book Review
						</div>
						<div className="text-black font-light text-lg lg:w-[50%] w-[80%] ">
							Set in 2100 B.C.E, Bull
							Vaulter: Alena of the
							Isle of Green is one of
							those uncommon pieces of
							fiction literature which
							features convincing
							insights built on
							meticulous research –
							while still providing
							readers a rich and
							riveting narrative.
							<Link
								to="reviews"
								className="text-xl text-[#753536] flex"
							>
								Read More{" "}
								<IconContext.Provider
									value={{
										size: "1.8em",
									}}
								>
									<AiOutlineRight />
								</IconContext.Provider>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Landing;
