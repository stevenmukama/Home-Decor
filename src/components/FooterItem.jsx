import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const footerSections = [
	{
		title: 'Product',
		links: [
			{ href: '/textile', text: 'Textile' },
			{ href: '/new-arrival', text: 'New Arrival' },
		],
	},
	{
		title: 'Information',
		links: [
			{ href: '/faq', text: 'FAQ' },
			{ href: '/support', text: 'Support' },
		],
	},
	{
		title: 'Company',
		links: [
			{ href: '/blog', text: 'Blog' },
			{ href: '/careers', text: 'Careers' },
		],
	},
];

const socialIcons = [
	{ src: '/assets/Google.svg', alt: 'Google' },
	{ src: '/assets/IG.svg', alt: 'Instagram' },
	{ src: '/assets/Behance.svg', alt: 'Behance' },
];

const FooterItem = ({ FooterItemColor }) => (
	<div>
		<div className='container px-4 mx-auto my-8 mt-8 shadow-black'>
			<div className='flex items-center justify-between max-md:flex-col max-md:text-center'>
				<div>
					<img
						src='/assets/Logo place.svg'
						alt='logo'
						className='w-48'
					/>
				</div>
				{footerSections.map((section, index) => (
					<div
						key={index}
						className='max-md:py-3'>
						<h3 className='mb-2 font-bold'>{section.title}</h3>
						<ul>
							{section.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<Link
										to={link.href}
										className='text-gray-500 hover:underline'>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
				<div>
					<h3 className='mb-6 font-bold'>Subscribe</h3>
					<form className='flex items-center justify-center'>
						<input
							type='email'
							placeholder='Your email'
							className='w-full p-2 rounded'
						/>
						<button className='flex items-center justify-center px-1 bg-gray-800 rounded-e-lg'>
							<ArrowRightIcon className='w-6 h-6 text-white' />
						</button>
					</form>
				</div>
			</div>
		</div>
		<div className={`flex justify-center gap-4 py-2 ${FooterItemColor} `}>
			{socialIcons.map((icon, index) => (
				<img
					key={index}
					src={icon.src}
					alt={icon.alt}
					className='p-2 bg-white rounded-full'
				/>
			))}
		</div>
	</div>
);

FooterItem.propTypes = {
	FooterItemColor: PropTypes.string,
};

export default FooterItem;
