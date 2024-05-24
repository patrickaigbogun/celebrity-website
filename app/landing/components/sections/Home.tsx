import Image from "next/image";

type Props = {}
export default function Home({}:Props) {
	return (
		<section className="px-4 pt-0 my-1 text-center" id="home">

			<div className="px-4 py-5 my-5 text-center">
				<Image
					className="d-block mx-auto mb-4"
					src="/logo-dark-wbg.svg"
					alt="Your logo"
					width={150}
					height={100}
				/>
				<h1 className="display-5 fw-bold">Home</h1>
				<div className="col-lg-6 mx-auto">
					<p className="mb-4 fs-4 fw-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Illum, incidunt doloribus! Dolor nobis modi cumque quis
						eligendi minus sequi ipsum voluptates dolore vitae,
						aspernatur enim nostrum blanditiis consequatur
						distinctio autem.
					</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button
							type="button"
							className="btn btn-dark btn-lg px-4 gap-3">
							Explore
						</button>
						<button type="button" className="btn btn-outline-dark btn-lg gap-3 px-4">
							Telegram
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
