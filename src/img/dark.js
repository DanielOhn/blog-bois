import React from "react"

const Dark = props => {
	return (
		<button onClick={props.onClick}>
			<svg
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				width="36px"
				height="36px"
				viewBox="0 0 24 24"
				aria-labelledby="moonIconTitle"
			>
				{" "}
				<title id="moonIconTitle">Moon</title>{" "}
				<path d="M10.423839,3 C10.1490474,3.80837289 10,4.67486099 10,5.57616098 C10,9.99443898 13.581722,13.576161 18,13.576161 C18.9013,13.576161 19.7677881,13.4271135 20.576161,13.152322 C19.5038921,16.3066875 16.516978,18.576161 13,18.576161 C8.581722,18.576161 5,14.994439 5,10.576161 C5,7.05918297 7.26947343,4.07226889 10.423839,3 Z">
					{" "}
					<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="rotate"
						values="-30 12 12; 30 12 12; -30 12 12"
						dur="16s"
						repeatCount="indefinite"
					/>
				</path>
			</svg>
		</button>
	)
}

export default Dark