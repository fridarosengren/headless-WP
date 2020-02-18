import React, { useEffect, useState } from 'react';
import Heading from './common/Heading';
import { Link } from 'react-router-dom';
import Loading from './common/Loading';

const Home = () => {
	const [ postData, setPostData ] = useState([]);

	useEffect(() => {
		// Get posts from api and set state
		const url = 'https://fridarosengren.com/portf/wp-json/wp/v2/posts?_embed';
		fetch(url).then((res) => res.json()).then(
			(res) => {
				setPostData(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}, []);

	return (
		<React.Fragment>
			<section id="presentation">
				<h2>Hello!</h2>
				<p>I'm Frida</p>
			</section>
			<section id="selected-work">
				<Heading large>Selected work</Heading>
				{(!postData[0]) && <Loading>Loading work...</Loading>}
				<div className="flex-container">
					{postData.map((post, index) => {
						return (
							<div className="flex-item-projects" key={index}>
								<Link to={`/project/${post.id}`}>
									<figure>
										<img src={post._embedded['wp:featuredmedia'][0].source_url} alt="" />
										<figcaption>
											<span className="project-title">{post.title.rendered}</span>
											<br />
											<span className="tags">This is some text that is displayed</span>
										</figcaption>
									</figure>
								</Link>
							</div>
						);
					})}
				</div>
			</section>
		</React.Fragment>
	);
};

export default Home;
