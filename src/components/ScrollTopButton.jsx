import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';

const ScrollTopButton = () => {

	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			window.pageYOffset > 200 ? setScroll(true) : setScroll(false);
		};
	}, [])

	const handleClick = () => {
		window.scroll(0, 0);
	};

	return (
		<React.Fragment>
			{scroll ? <button className='scroll-top-btn' onClick={handleClick}><FontAwesomeIcon icon={faChevronUp} /></button> : null }
		</React.Fragment>
	);
	

};

export default ScrollTopButton;
