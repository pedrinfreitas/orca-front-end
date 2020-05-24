import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
// import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';

import homeSite from '../../assets/img/home.svg';

// import './styles.css';
import * as CSS from './styled';


export default function home() {


	return (
		<>
			<NavBar pagina={"home"} />

			<CSS.Home_div>

					<div className="main_container">
						<section className="home-bg">
							<div className="home">
								<div className="home-info">
									<h1>Home</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores sit quis voluptatibus aut dolorem ea nemo! Doloremque itaque numquam, vel porro unde dolor? Aut aspernatur accusantium dolor eveniet tenetur!</p>

								</div>

								<div className="home-img">
									<img src={homeSite} alt="home-site" />
								</div>

							</div>
						</section>
					</div>
	
		</CSS.Home_div>


		</>
	);
}