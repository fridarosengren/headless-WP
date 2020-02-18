import React, {useEffect, useState} from 'react';
import NavBar from '../navigation/NavBar';
import Styles from './Header.module.css';

const Header = () => {

    const [headerStyles, setHeaderStyles] = useState(true);

    const handleScroll = () => {
        window.pageYOffset > 100 ? setHeaderStyles(false) : setHeaderStyles(true)
    }

    // Run scroll check on scroll
    useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		// Remove listener needed?
            // return () => {
            //     window.removeEventListener('scroll', listen);
            // }
    });

	return (
		<header className={headerStyles ? Styles.header : `${Styles.header} ${Styles.sticky}`}>
			<div className={Styles.container}>
				<div className={Styles.logo}>
					<a href="https://fridarosengren.com">
						<h1>Frida Rosengren</h1>
					</a>
				</div>
				<NavBar />
			</div>
		</header>
	);
};

export default Header;
