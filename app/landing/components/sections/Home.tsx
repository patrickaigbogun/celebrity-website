// import Image from "next/image";

type Props = {};
export default function Home({}: Props) {
	return (
		<section className="px-4 pt-0 my-1" id="home">
			<div className="px-4 py-5 my-5">
				{/* <Image
					className="d-block mx-auto mb-4"
					src="/logo-dark-wbg.svg"
					alt="Your logo"
					width={150}
					height={100}
				/> */}
				
				<div className="container mx-auto">

					<h1 className=" display-5 text-center fw-bold my-2">Page Title</h1>
					<p className="my-5 text-center fs-2" >Message my private telegram page or speak to my manager to talk more with me</p>
					<p className=" lead mt-0 mb-3 text-center fs-5">
				This platform was created by my team , 
				To reach out to my great fans that has been with me and supported me through my career,
				 couldn’t find away to appreciate you all for following me through this journey this is my 
				 official page for reaching out to my team and I personally
				</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button
							type="button"
							className=" shadow btn btn-dark btn-lg px-4 gap-3">
							<a className="text-decoration-none text-reset" href="#contact">Send a Message</a>
						</button>
						<button
							type="button"
							className="shadow btn btn-outline-dark btn-lg gap-3 px-4">
							<a className="text-decoration-none text-reset" href="#">Telegram</a>
							<svg className="bi" width="24" height="24">
								<use xlinkHref="#telegram" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
