import React from 'react';
import './Nav.css';
import netflix from './images/netflix.png';

function Nav() {
	return (
		<div className='nav'>
			<div className="nav__contents">
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
