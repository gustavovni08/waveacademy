import CallToActionButton from "./callToActionButton"
import styled from "styled-components"

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450px;
    margin: auto;

    @media screen and (max-width:600px) {
        height:250px;
    }
`

function SectionCallToAction({onClick}){
    return(
        <Section>
            <CallToActionButton onclick={onClick}/>
        </Section>
        
    )
}

export default SectionCallToAction