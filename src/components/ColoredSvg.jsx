import PropTypes from 'prop-types';

const ColoredSvg = ({ color }) => {
	return (
		<div className='absolute inset-0 z-0'>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 1440 1024'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g clipPath='url(#clip0_505_8027)'>
					<rect
						width='1440'
						height='1024'
						fill='white'
					/>
					<g clipPath='url(#clip1_505_8027)'>
						<rect
							x='0.000244141'
							y='136'
							width='1440'
							height='513'
							fill={color}
						/>
					</g>
					<circle
						cx='1198.82'
						cy='1226.82'
						r='592.015'
						transform='rotate(-13.6262 1198.82 1226.82)'
						fill={color}
					/>
					<mask
						id='mask0_505_8027'
						style={{ maskType: 'alpha' }}
						maskUnits='userSpaceOnUse'
						x='131'
						y='1032'
						width='720'
						height='720'>
						<circle
							cx='490.886'
							cy='1392'
							r='359.1'
							transform='rotate(-13.6262 490.886 1392)'
							fill='black'
						/>
					</mask>
					<g mask='url(#mask0_505_8027)'></g>
				</g>
				<defs>
					<clipPath id='clip0_505_8027'>
						<rect
							width='1440'
							height='1024'
							fill='white'
						/>
					</clipPath>
					<clipPath id='clip1_505_8027'>
						<rect
							width='1440'
							height='516'
							fill='white'
							transform='matrix(-1 0 0 1 1440 136)'
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

ColoredSvg.propTypes = {
	color: PropTypes.string.isRequired,
};

export default ColoredSvg;
