// src/pages/AboutPage.js
import PageContent from '../components/PageContent';

const AboutPage = () => {
	return (
		<PageContent
			title='About Page'
			color='bg-red-500'
			nextPage='/contact'
			nextPageText='Go to Contact Page'
		/>
	);
};

export default AboutPage;
