import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, email, id, handleDelete }) => {
	return (
		
		<section className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-S'>
			<Link to={`/view/${id}`}>
				<img src={`https://robohash.org/${id}?size=200x200`} alt='employees' />
				<div className=''>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</Link>
		</section>

	)
}

export default Card;