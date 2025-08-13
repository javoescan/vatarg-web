import { Image } from "react-bootstrap";
import './page.css';

export default function Home() {
	return (
		<div className="">
			<Image 
				src="/images/pages/home/banner.gif" 
				alt="banner"
				width={'100%'}
				style={{maxHeight: '300px' }}
			/>
			<div className="d-flex flex-column flex-lg-row justify-content-between p-5 pt-4">
				<div className="home-left-container">
					<div className="home-events">
						<p className="section-header">Siguiente evento</p>
						<div className="home-event">
							<Image src="/images/events/event.jpeg" alt="event" className="home-event"/>
						</div>
					</div>
				</div>
				<div className="mt-3 mt-lg-0 ms-lg-5 home-right-container">
					<p className="section-header">ATC Online</p>
					<div className="home-online-atc-list">
						<p className="home-online-atc-item">SAEF_CTR 134.500 - Javier Escandarani</p>
						<p className="home-online-atc-item">SACF_CTR 128.800 - Giulano Viola</p>
						<p className="home-online-atc-item">SAMF_CTR 126.600 - Mariano Lopez</p>
					</div>
				</div>
			</div>
		</div>
	);
}
