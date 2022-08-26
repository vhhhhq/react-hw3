import React from 'react';
import './Manga.css';

const Manga = ({title, description, img}) => {
	return (
		<div className="body-manga">
            <div className="blog-post">
                <div className="post">
                    <a href="" className='img-manga'>
                        <img src={img} alt='' className='post-image man-image' />
                    </a>
                    <div className="post-content">
                        <h3>{title}</h3>
                        <span className='date'>{description}</span>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Manga;