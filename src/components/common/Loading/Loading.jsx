import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Styles from './Loading.module.css';

const Loading = ({ children }) => {
	return (
		<span className={Styles.loading}>
			<FontAwesomeIcon icon={faSpinner} /> {children}
		</span>
	);
};

export default Loading;
