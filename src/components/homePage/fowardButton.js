import styled from "styled-components"
import { SlArrowRight } from "react-icons/sl";

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 52px;
    font-weight: 400;
    cursor: pointer;

    &:hover{
        font-size: 58px;
    }
`

function FowardButton({onClick}){
    return(
        <ButtonContainer onClick={onClick}>
            <SlArrowRight />
        </ButtonContainer>
    )
}

export default FowardButton