import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-S'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='employees' />
			<div className=''>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;