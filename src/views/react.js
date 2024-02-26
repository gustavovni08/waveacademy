import DescriptionCardSection from "../components/description/descriptionCardSection";
import SectionCallToAction from "../components/descriptionButton/sectionCallToAction";
import FormSection from "../components/form/formSection";
import Header from "../components/header/header";
import img from "../assets/reactjs.png"

import { useState } from "react";

function React(){

    const [showForm, setShowForm] = useState(false)

    const  exibirForm = () => {
        setShowForm(true)
    }

    const fecharForm = () => {
        setShowForm(false)
    }

    const nomeDocurso = "React 101"
    const tempo = "8"
    const nivel = "médio"
    const descricao = "Bem-vindo à nossa jornada de descoberta e aprendizado em React.js! Este curso é o ponto de partida ideal para aqueles que desejam explorar o poder e a flexibilidade deste popular framework de JavaScript."

    return(
        <div>
            <Header/>
            <DescriptionCardSection
            curso={nomeDocurso}
            tempo={tempo}
            nivel={nivel}
            descricao={descricao}
            img={img}
            />
            <SectionCallToAction
            onClick={exibirForm}/>

            {showForm && (<FormSection onClick={fecharForm} curso="react"/>)}
            
        </div>

    )
}

export default React