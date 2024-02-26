import styled from "styled-components"
import logo from "../../assets/logo.png"
import Navbar from "./navbar"

import { useNavigate } from "react-router-dom";

    const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 14px;
    max-height: 200px;
    border-bottom: solid 0.1px #d9d9d9;
    box-shadow: 0 2px 4px rgba(1, 1, 1, 0.1);

    position: relative;
    z-index: 1000;

@media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly;
    max-height: 400px;
}

`

const LogoContainer = styled.div`
    padding: 10px;
    cursor: pointer;

`

const Logo = styled.img`
    max-height: 200px;

@media screen and (max-width: 600px){
    position: relative;
    top: 20px;
}

`


function Header() {
    const navigate = useNavigate();

    const irParaHomePage = () => {
        navigate('/');
    };

    return (
        <HeaderStyle>
            <LogoContainer onClick={irParaHomePage}>
                <Logo src={logo} alt="logo da wave academy" />
            </LogoContainer>
            <Navbar />
        </HeaderStyle>
    );
}


export default Header