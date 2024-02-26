import DescriptionCardSection from "../components/description/descriptionCardSection";
import SectionCallToAction from "../components/descriptionButton/sectionCallToAction";
import FormSection from "../components/form/formSection";
import Header from "../components/header/header";
import img from "../assets/angularjs.png"

import { useState } from "react";

function React(){

    const [showForm, setShowForm] = useState(false)

    const  exibirForm = () => {
        setShowForm(true)
    }

    const fecharForm = () => {
        setShowForm(false)
    }

    const nomeDocurso = "Angular 101"
    const tempo = "14"
    const nivel = "avançado"
    const descricao = "No curso de Angular.js, os participantes mergulham profundamente neste framework robusto da Google. Com um enfoque concentrado em conceitos avançados de arquitetura front-end, os alunos aprendem a construir aplicações web escaláveis e de alto desempenho, capacitando-os a se destacarem em um cenário competitivo de desenvolvimento web."

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

            {showForm && (<FormSection onClick={fecharForm} curso="angular"/>)}
            
        </div>

    )
}

export default React