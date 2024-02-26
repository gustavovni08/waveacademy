import styled from "styled-components"

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #B62BE7;

    padding: 14px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

    width: 400px;
    height: 75px;

    font-weight: bold;
    font-size: 24px;
    color: #fff;

    cursor:pointer;

    &:hover{
        background-color:#D857EA;
    }

    @media screen and (max-width: 600px) {
        width: 300px;
    }
`

function CallToActionButton({onclick}){
    return(
        <Button onClick={onclick}>
            APRENDER
        </Button>
    )
}

export default CallToActionButton