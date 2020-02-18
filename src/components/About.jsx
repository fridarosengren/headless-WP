import React, { useEffect, useState } from 'react';
import Heading from './common/Heading';

const About = () => {

	const [aboutData, setAboutData] = useState([]);

	useEffect(() => {
		// Get About page from api and set state
		const url = 'https://fridarosengren.com/portf/wp-json/wp/v2/pages/7';
		fetch(url).then(res => res.json()).then(
			res => {
				setAboutData(res);
			},
			err => {
				console.log(err);
			}
		)

	}, []);

	const content = aboutData.content && aboutData.content.rendered
    const title = aboutData.title && aboutData.title.rendered

	return (
		<section id="about">
			<Heading large>{title}</Heading>
			<div dangerouslySetInnerHTML={{__html: content}} />
		</section>
	);
};

export default About;
