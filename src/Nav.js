import React, { useEffect, useState } from 'react';
import './Nav.css';
import netflix from './images/netflix.png';

function Nav() {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, []);
	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className='nav__contents'>
				<img className='nav__logo' src={netflix} alt='' />
				<img
					className='nav__avatar'
					src='https://cdn.discordapp.com/avatars/551956038459457539/943d6c9d60c052884d158d8d8faac6eb.png?size=240'
					alt=''
				/>
			</div>
		</div>
	);
}

export default Nav;
