import React from 'react';

const Heading = ({ large, children }) => {
	if (large) {
		return <h2>{children}</h2>;
	} else {
		return <h3>{children}</h3>;
	}
};

export default Heading;
