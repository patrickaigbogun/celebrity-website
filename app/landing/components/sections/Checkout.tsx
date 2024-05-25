import React from "react";
import Checkoutmodal from "./checkoutmodal";

export default function Checkout() {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg" className="svg">
        <symbol
        id="telegram"
				viewBox="0 0 24 24">
          <title>Telegram</title>
				<path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
        </symbol>
      </svg>
			<div
				className="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5" id="staticBackdropLiveLabel">
								Payment
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<Checkoutmodal />
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-outline-secondary">
                Telegram
								<svg className="bi" width="24" height="24">
									<use xlinkHref="#telegram" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
