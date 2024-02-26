import styled from "styled-components"
import FormContainer from "./formContainer"

const StyledFormContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10001;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);

    width: 100%;
    height: 100%;
`

function FormSection(props){

    const {onClick, curso} = props

    return(
        <StyledFormContainer>
            <FormContainer onClick={onClick} curso={curso}/>
        </StyledFormContainer>
    )
    
}

export default FormSection