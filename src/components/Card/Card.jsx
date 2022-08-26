import React from 'react';
import './Card.css';

const Card = ({title, description, img}) => {
	return (
		<div className='card'>
			<div className="card-element">
				<div className="card-about">
                	<a href="" className='img-card'>
						<img src={img} alt='' className='card__image' />
					</a>
					<a href="">
					<p className='card__title'>{title}</p>
					</a>
					<a href="">
						<p className='card__desc'>{description}</p>
					</a>
				</div>
            </div>
		</div>
	)
}

export default Card;