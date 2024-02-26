import styled from "styled-components"

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #B62BE7;

    padding: 14px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    border: solid 0.1px #0000;

    width: 350px;
    height: 45px;

    font-weight: bold;
    font-size: 18px;
    color: #fff;

    cursor:pointer;

    &:hover{
        background-color:#D857EA;
    }

    @media screen and (max-width: 600px) {
        width: 200px;
    }
`

function SubmmitButton({onClick}){

    return( 
        <StyledButton onClick={onClick}>
        ENVIAR
        </StyledButton>
    )



}

export default SubmmitButton