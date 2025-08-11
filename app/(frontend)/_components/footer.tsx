export default function Footer() {
	return (
		<footer className="text-center bg-body-tertiary">
			<div className="container pt-4">
				<section className="mb-4">
					<a
						data-mdb-ripple-init
						className="btn btn-link btn-floating btn-lg text-body m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><i className="fab fa-facebook-f"></i></a>
					<a
						data-mdb-ripple-init
						className="btn btn-link btn-floating btn-lg text-body m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><i className="fab fa-twitter"></i></a>
					<a
						data-mdb-ripple-init
						className="btn btn-link btn-floating btn-lg text-body m-1"
						href="#!"
						role="button"
						data-mdb-ripple-color="dark"
						><i className="fab fa-instagram"></i></a>
					<a>discord</a>
					<a>whatsapp notam</a>
				</section>
			</div>
			<div className="text-center p-3">
				© 2025 Todos los derechos reservados
			</div>
		</footer>
	)
};