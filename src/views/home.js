import DescriptionCardSection from "../components/description/descriptionCardSection"
import Header from "../components/header/header"
import CarrouselSection from "../components/homePage/carrousekSection"

function Home(){

    const title = "Quem Somos"
    const description = "A Wave Academy oferece cursos de tecnologia online gratuitos para impulsionar sua carreira como desenvolvedor. Ao se inscrever em um de nossos cursos, você adquire habilidades relevantes e atualizadas para se destacar no mercado. Não perca a oportunidade de dar um upgrade na sua carreira - junte-se à Wave Academy hoje mesmo!"
    return(
        <div>
            <Header/>
            <DescriptionCardSection
            curso={title}
            descricao={description}
            />
            <CarrouselSection/>
        </div>
    )
}

export default Home