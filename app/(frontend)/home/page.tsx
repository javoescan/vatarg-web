import { Button, Image, Table } from "react-bootstrap";
import "./page.css";
import { event, onlineATC, onlineFlights, topControllers, topPilots } from "./temp_dataset";

export default function Home() {
	return (
		<div className="home">
			<Image 
				src={event.image}
				alt="banner"
				width={'100%'}
				style={{maxHeight: '300px' }}
			/>
			{/* LEFT CONTAINER */}
			<div className="d-flex flex-column flex-lg-row justify-content-between p-5 pt-4">
				<div className="home-left-container">
					<div className="home-us mb-4">
						<p className="section-header">¿Qué es VATSIM Argentina?</p>
						<div className="border-blue p-2">
							<p>
								VATSIM Argentina es la división de VATSIM encargada de gestionar el espacio aéreo virtual
								argentino dentro de la red en donde podes participar como piloto volando o como controlador en algunas
								de las dependencias del pais. Organizamos eventos masivos, realizamos entrenamiento tanto
								para pilotos como para controladores. Es completamente gratuita, ¡unite a nuestra comunidad!
							</p>
							<Button className="btn-secondary w-100" href="/division/first-steps">Unirse</Button>
						</div>
					</div>
					<div className="home-events mb-4">
						<p className="section-header">Siguiente evento</p>
						<div className="home-event">
							<Image src="/images/events/event.jpeg" alt="event" className="home-event"/>
						</div>
					</div>
					<div className="home-ranking">
						<p className="section-header">Ranking</p>
						<div className="home-ranking-data d-flex flex-column flex-lg-row">
							<Table striped bordered hover className="me-5">
								<thead>
									<tr>
										<th>#</th>
										<th>Piloto</th>
										<th>Tiempo</th>
									</tr>
								</thead>
								<tbody>
									{
										topPilots.map((item, index) => 
											<tr key={item.id}>
												<td>{index + 1}</td>
												<td>{item.name} - {item.id}</td>
												<td>{item.hours}</td>
											</tr>
										)
									}
								</tbody>
							</Table>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>#</th>
										<th>Controlador</th>
										<th>Tiempo</th>
									</tr>
								</thead>
								<tbody>
									{
										topControllers.map((item, index) => 
											<tr key={item.id}>
												<td>{index + 1}</td>
												<td>{item.name} - {item.id}</td>
												<td>{item.hours}</td>
											</tr>
										)
									}
								</tbody>
							</Table>
						</div>
					</div>
				</div>

				{/* RIGHT CONTAINER */}
				<div className="mt-3 mt-lg-0 ms-lg-5 pb-5 home-right-container">
					<div className="home-online-atc mb-4">
						<p className="section-header">ATC Online</p>
						<div className="home-online-list">
							{
								onlineATC.length ? onlineATC.map((item) => 
									<div key={item.position} className="home-online-item border-blue">
										<Image src={"/images/icons/connected.png"} alt="connected" height={10} width={10} /> 
										<p className="home-online-item-text ms-2">{item.position} {item.frequency} - {item.controller}</p>
									</div>
								) : <div className="home-online-item border-blue">No hay controladores conectados</div>
							}
						</div>
					</div>
					<div className="home-online-flights">
						<p className="section-header">Vuelos Online</p>
						<div className="home-online-list">
							{
								onlineFlights.length ? onlineFlights.map((item) => 
									<div key={item.callsign} className="home-online-item border-blue">
										<Image src={"/images/icons/plane.png"} alt="radar" height={20} width={20} /> 
										<p className="home-online-item-text ms-2">{item.callsign} {item.from}{"->"}{item.to} - {item.pilot}</p>
									</div>
								) : <div className="home-online-item border-blue">No hay pilotos conectados</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
