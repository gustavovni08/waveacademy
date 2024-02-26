import styled from "styled-components"
import CardCurso from "./cardCurso"
import BackButton from "./backButton"
import FowardButton from "./fowardButton"
import { useState } from "react"

import reactImg from "../../assets/reactjs.png"
import vueImg from "../../assets/vuejs.png"
import angularImg from "../../assets/angularjs.png"

const StyledSection = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 325px;
    background-color: #fff;

`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 60px;

`
const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
    font-weight: 400;
`



function CarrouselSection(){

    const [index, setIndex] = useState(0)

    const voltar = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? cursos.length - 1 : prevIndex - 1
        );
    };

    const avancar = () => {
        setIndex((prevIndex) =>
            prevIndex === cursos.length - 1 ? 0 : prevIndex + 1
        );
    };


    const cursos = [
        {
            img: reactImg,
            title: 'react',
        },
        {
            img: angularImg,
            title: 'angular',
        },
        {
            img: vueImg,
            title: 'vue',
        },
    ]



    return(
        <SectionContainer>
            <SectionHeader>
                Cursos
            </SectionHeader>
            <StyledSection>
                <BackButton onClick={voltar}/>
                <CardCurso
                img={cursos[index].img}
                title={cursos[index].title}
                />
                <FowardButton onClick={avancar}/>
            </StyledSection>
        </SectionContainer>

    )
}

export default CarrouselSection