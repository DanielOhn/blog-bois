import React, { Component } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import Dark from "../img/dark.js"
import Light from '../img/light.js'

class Theme extends Component {
	state = {
		darkTheme: false,
	};

	componentDidMount() {
		const val = localStorage.getItem('theme')
		
		val === 'dark' ? this.setState({ darkTheme: false }) : this.setState({ darkTheme: true })
	}

	handleClick = (toggleTheme, theme) => {
		const { darkTheme } = this.state;

		this.setState({
			darkTheme: !darkTheme,
		});

		darkTheme ? theme='dark' : theme='light'

		this.setState({
			value: theme,
		})

		toggleTheme(theme)
	}

	render() {
		const { darkTheme } = this.state;

		return (
			<ThemeToggler>
				{({ theme, toggleTheme }) => (	
					<div>
						{darkTheme ? (
							<Dark onClick={() => this.handleClick( toggleTheme, theme )} />
						) : (
							<Light onClick={() => this.handleClick( toggleTheme, theme )} />
						)}
					</div>
				)}
			</ThemeToggler>
		)
	}
}

export default Theme