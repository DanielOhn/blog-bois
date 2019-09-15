import React from "react"

const Light = props => {
	return (
		<button onClick={props.onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="36px"
				height="36px"
				viewBox="0 0 24 24"
				aria-labelledby="sunIconTitle"
				stroke="white"
			>
				{" "}
				<title id="sunIconTitle">Sun</title>
				<circle cx="12" cy="12" r="5" />{" "}
				<path d="M12 5L12 3M12 21L12 19M5 12L2 12 5 12zM22 12L19 12 22 12zM16.9497475 7.05025253L19.0710678 4.92893219 16.9497475 7.05025253zM4.92893219 19.0710678L7.05025253 16.9497475 4.92893219 19.0710678zM16.9497475 16.9497475L19.0710678 19.0710678 16.9497475 16.9497475zM4.92893219 4.92893219L7.05025253 7.05025253 4.92893219 4.92893219z">
					{" "}
					<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="rotate"
						from="0 12 12"
						to="360 12 12"
						additive="sum"
						dur="18s"
						repeatCount="indefinite"
					/>
				</path>
			</svg>
		</button>
	)
}

export default Light
