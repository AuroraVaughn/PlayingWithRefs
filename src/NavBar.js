import React from "react";
import { render } from "react-dom";
import { NavLink } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import styled, { keyframes } from "styled-components";
const Title = styled(NavLink)`
text-decoration: none;
  height: 100%;
  font-size: 45px;
  padding: 4px;
  margin: 4px;
  color: ${props => (props.theme ? props.theme.textColor : "pink")};
  background-color: ${props => props.theme ? props.theme.bannerColor : "#4AA045"};
  align-self: center;
  justify-self: center;
`

// "http://www.clker.com/cliparts/L/o/0/6/B/W/TextRef-md.png"


const NavBar = styled.nav`
  position: relative;
  display: flex;
  width:100%;
  max-height: 80px
  width: 100%
  border: solid;
  border-radius: 6px;
  border-color: ${props => (props.theme ? props.theme.textColor : "pink")}
  background: ${props => (props.theme ? props.theme.bannerColor : "pink")}
`
const ImageButton = styled.img`
posistion: relative;
width: 100px;

transition: all .2s ease-in-out
  &:hover { transform: scale(1.1)
  }
`
const ImageText = styled.span`
text-shadow: -1px 0px 8px rgba(138, 129, 150, 1);
font-weight: bold;
    color:${props => props.color ? props.color : "white"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);`
/*************   STYLE ANY COMPONENT   ******************/
const UnstyledButton = props => (
  <ThemeProvider theme={props.theme ? props.theme : {}}>
    <NavLink style={{ position: "relative" }} to={props.to ? props.to : "/textRefs"}>
      <ImageButton
        alt={`Nav item for ${props.children}`}
        src={props.image} />
      <ImageText color={props.color}>{props.children}</ImageText>
    </NavLink>
  </ThemeProvider>
)

const StyledButton = styled(UnstyledButton).attrs({
  textColor: props => props.textColor || "white"
})`
 position: relative;
 align-self: center;
 justify-self: center;
 max-height: 90px;
 max-width: 80px;
 &:hover {
  transform: scale(1.1);

    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`

/*************   Adding new props to the component  ******************/
const Input = styled.input.attrs({
  type: 'seeds',
  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
}) `
color: yellow;
`

/******** ********/


const themeObject = {
  buttonRef: {
    mainColor: "yellow",
    bannerColor: "yellow",
    textColor: "black"
  },
  TextRef: {
    mainColor: "pink",
    bannerColor: "pink",
    textColor: "#368d8b"
  }
};

const textRef = "http://moziru.com/images/letter-clipart-scroll-11.png"
const buttonRef = "http://images.clipartpanda.com/button-clipart-vintage-button-clipart-1.jpg"
const StyledNavBar = props => (
  <ThemeProvider theme={themeObject.TextRef}>
    <NavBar>
      <Title to={"/"}>Aurora's Example</Title>
      <StyledButton color={"black"} to={"/textRefs"} image={textRef}>Text Ref</StyledButton>
      <StyledButton to={"/buttonRefs"} image={buttonRef}>Button Refs</StyledButton>
    </NavBar>
  </ThemeProvider>
)

export default StyledNavBar