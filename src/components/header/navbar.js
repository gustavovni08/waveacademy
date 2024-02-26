import { useState } from "react";
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import NavContainer from "./navcontainer";


const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: ${(props) => (props.showNavBar ? '90px' : '0px')};

  @media screen and (max-width:600px) {
    top: ${(props) => (props.showNavBar ? '50px' : '0px')};
  }
`

const NavBarOn = styled.div`
 display: ${(props) => (props.showNavBar ? "block" : "none")};
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const NavBarOff = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
    cursor: pointer;
    border-radius: 8px;
    width: 200px;

    &:hover{
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    }
`


const NavBarFont = styled.p `
    font-weight: 400;
    font-size: 22px;
`


function Navbar(){

const [showNavBar, setShowNavBar] = useState(false)

const alternarNavBar = () =>{

    if(showNavBar === true){
        setShowNavBar(false)
    } else {
        setShowNavBar(true)
    }

}

return(
    <NavBarContainer showNavBar={showNavBar}>
        <NavBarOff
        onClick={alternarNavBar}
        showNavBar={showNavBar}
        >
            <NavBarFont>
            Cursos
            </NavBarFont>
            {showNavBar ? <SlArrowUp /> : <SlArrowDown />}
        
        </NavBarOff>

        <NavBarOn showNavBar={showNavBar}>
            <NavContainer nome="Vue" />
            <NavContainer nome="React" />
            <NavContainer nome="Angular" last="true"/>
        </NavBarOn>

    </NavBarContainer>
   
)


}

export default Navbar