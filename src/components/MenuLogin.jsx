"use client";
/** @format */

import Image from "next/image";
import Image_Google from "../../assets/images/google.png";
import Image_Twitch from "../../assets/images/twitch.png";
export default function ({ close }) {
	return (
		<div
			key={2e74}
			className='bg-modal-hover'
			onClick={e => {
				e.stopPropagation();
				if (close) {
					document
						.querySelector(".bg-modal-hover")
						.classList.add("to-close");
					setTimeout(close, 300);
				}
			}}
		>
			<div
				className='modal-login'
				onClick={e => {
					e.stopPropagation();
				}}
			>
				<div className='modal-login--body'>
					<div className='modal-login-title'>
						<h1>Login with Yoth</h1>
					</div>
					<div>
						<div className='modal-login-content'>
							<div className='modal-login-item'>
								<div className='modal-login-item-login'>
									<Image
										src={Image_Google}
										style={{ background: "#eee" }}
										alt="google"
									/>
								</div>
							</div>
							<div className='modal-login-item'>
								<div
									className='modal-login-item-login'
									style={{ background: "#eee" }}
								>
									<Image src={Image_Twitch} alt="twitch"/>
								</div>
							</div>
							<img />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
