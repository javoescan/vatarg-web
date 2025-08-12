import { Image } from "react-bootstrap";

export default function Home() {
	return (
		<div className="">
			<Image 
				src="/images/pages/home/banner.gif" 
				alt="banner"
				width={'100%'}
				style={{maxHeight: '400px' }}
			/>
		</div>
	);
}
