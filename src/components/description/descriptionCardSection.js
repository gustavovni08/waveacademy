import DescriptionCard from "./descriptionCard"
import styled from "styled-components"

const StyledSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 325px;
    background-color: #B62BE7;
`

function DescriptionCardSection(props){

    const  {curso, tempo, nivel, descricao, img} = props

    return(
        <StyledSection>
            <DescriptionCard
            curso={curso}
            tempo={tempo}
            nivel={nivel}
            descricao={descricao}
            img={img}
            />
        </StyledSection>
        
    )
}

export default DescriptionCardSection