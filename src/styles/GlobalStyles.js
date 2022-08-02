import styled from 'styled-components/macro'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
		--primary: #8DB9BC;
		--secondary: #D6EAE3;
		--tertiary: #37767A;
		--background: #e4f1ed;
		--white: #FFFFFF;
		--black: #202020;
		--grey: #F4F4F4;
		padding: 0; 
		margin: 0 auto;
   		box-sizing: border-box;
		font-family: 'Jost', sans-serif;
  		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: greyscale;
  }
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`

export const OuterWrapper = styled.main`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	position: relative;
`

export const HeadingOne = styled.h1`
	font-size: 1.4rem;
	text-transform: uppercase;
`

export const HeadingTwo = styled.h1`
	font-size: 1rem;
	margin: 0;
`

// export const InnerWrapper = styled.section`
// 	width: 80%;
// 	margin: ${(props) => props.margin};
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	@media screen and (min-width: 768px) {
// 		margin: ${(props) => props.tabletMargin};
// 	}
// 	@media screen and (min-width: 1024px) {
// 		width: 70%;
// 		margin: ${(props) => props.desktopMargin};
// 	}
// `
