import React from 'react';
import './Nav.css';
import netflix from './images/netflix.png';

function Nav() {
	return (
		<div className='nav'>
			<img src={netflix} alt='' />
			<img
				src='https://cdn.discordapp.com/avatars/551956038459457539/943d6c9d60c052884d158d8d8faac6eb.png?size=240'
				alt=''
			/>
			<h1>This is the nav</h1>
		</div>
	);
}

export default Nav;
