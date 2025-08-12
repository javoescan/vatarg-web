import { Image } from "react-bootstrap";

export default function Home() {
	return (
		<div className="">
			<Image 
				src="/images/pages/home/banner.gif" 
				alt="banner"
				width={'100%'}
				style={{maxHeight: '300px' }}
			/>
			<div className="d-flex flex-column flex-lg-row justify-content-between p-5">
				<div id="home-main-left-container" style={{backgroundColor: 'red'}}>
					<div style={{height: 200, width: 650}}></div>
				</div>
				<div className="mt-3 mt-lg-0" id="home-main-right-container" style={{backgroundColor: 'black'}}>
					<div style={{height: 500, width: 200}}></div>
				</div>
			</div>
		</div>
	);
}
