import React from 'react';
import Card from './Card';


const CardList = ({ robots, handleDelete }) => {

	return (
		<section>
			{
				robots.map((user, i) => {
					return (
						<Card
							key={i}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
							handleDelete = {(id) =>this.handleDelete(id)}
						/>
					)
				})
			}
		</section>
	);
}
export default CardList;