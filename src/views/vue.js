import DescriptionCardSection from "../components/description/descriptionCardSection";
import SectionCallToAction from "../components/descriptionButton/sectionCallToAction";
import FormSection from "../components/form/formSection";
import Header from "../components/header/header";
import img from "../assets/vuejs.png"

import { useState } from "react";

function React(){

    const [showForm, setShowForm] = useState(false)

    const  exibirForm = () => {
        setShowForm(true)
    }

    const fecharForm = () => {
        setShowForm(false)
    }

    const nomeDocurso = "Vue 101"
    const tempo = "6"
    const nivel = "básico"
    const descricao = "O curso de Vue.js é uma jornada prática e direcionada para dominar este framework JavaScript moderno. Com uma combinação equilibrada de teoria e prática, os participantes desenvolvem habilidades para criar interfaces de usuário dinâmicas e responsivas, destacando-se em um mercado de desenvolvimento web em constante evolução."

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

            {showForm && (<FormSection onClick={fecharForm} curso="vue"/>)}
            
        </div>

    )
}

export default React