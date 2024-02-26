import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const NavContainerStyle = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 14px;

    background-color: #fff;

    font-size: 22px;
    font-weight: 400;
  
    border-top: 0.01px solid #000;
    border-radius: ${(props) => (props.last ? '0px 0px 8px 8px' : '0px')};

    cursor: pointer;

    &:hover{
        background-color: #d9d9d9;
    }
`

function NavContainer(props){

    const {nome, last} = props
    const navigate = useNavigate();

    const navegar = () => {
        // Redireciona para a rota desejada quando o botão é clicado
        navigate(`/${nome}`);
      };

    return(
        <NavContainerStyle last={last} onClick={navegar}>
            <p>
                {nome}
            </p>
        </NavContainerStyle>
    )

}

export default NavContainer