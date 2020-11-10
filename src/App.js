import styled from 'styled-components'
// import golpeEstao from './img/golpe-de-estado.png'
// import noticias from './img/NOTICIAS.png'
// import editorial from './img/editorial.png'
// import despedida from './img/DESPEDIDA.png'
// import congreso from './img/congreso.png'
// import calendario from './img/calendario.png'

function App() {
  return (
    <Wrapper>
      <ContainerMaster>
        <UlLista>
          <a target="_blank" href="https://larepublica.pe/politica/2020/11/10/congreso-da-un-zarpazo-y-declara-la-vacancia-de-martin-vizcarra/">
            <LiOpciones> 
              <ImgGolpeEstado src="https://lh3.googleusercontent.com/-gBhrp7Oj5hA/X6rTF-0mp2I/AAAAAAAAAAU/RBro1j7U-S0lO3Pk4Bx3qnWbzAYANR-QgCK8BGAsYHg/s0/2020-11-10.png"/>
              <TituloOpciones>Golpe de Estado</TituloOpciones>
            </LiOpciones>
          </a>
          <a target="_blank" href="https://larepublica.pe/tag/vacancia-presidencial/">
            <LiOpciones>
              <ImgNoticias src="https://lh3.googleusercontent.com/-L2aO59GrBQY/X6rRpju1xuI/AAAAAAAAAAI/9RUn58e89cE_lGE2kbPZAOZTR25wobtvwCK8BGAsYHg/s0/2020-11-10.png"/>
              <TituloOpciones>Noticias</TituloOpciones>
            </LiOpciones>
          </a>
          <a target="_blank" href="https://larepublica.pe/opinion/2020/11/10/golpe-de-estado-editorial/">
            <LiOpciones>
              <ImgEditorial src="https://lh3.googleusercontent.com/-ewhV01gA-2M/X6rTHX0dZ3I/AAAAAAAAAAY/Ygl43cVpr3IrpB2_C0YEXGqamJLpmwaRQCK8BGAsYHg/s0/2020-11-10.png"/>
              <TituloOpciones>Editorial</TituloOpciones>
            </LiOpciones>
          </a>
          <a target="_blank" href="https://larepublica.pe/politica/2020/11/10/martin-vizcarra-advierte-al-congreso-la-historia-y-el-pueblo-juzgaran/">
            <LiOpciones>
              <ImgEditorial src="https://lh3.googleusercontent.com/-97sWAZzjS1E/X6rTIENv1zI/AAAAAAAAAAc/ZBcXSr_NuRoObtV0Duiz35F2MUGD4iuIACK8BGAsYHg/s0/2020-11-10.png"/>
              <TituloOpciones>Despedida de Vizcarra</TituloOpciones>
            </LiOpciones>
          </a>
          <a target="_blank" href="https://informativos.larepublica.pe/votacion-vacancia-martin-vizcarra/">
            <LiOpciones>
              <ImgEditorial src="https://lh3.googleusercontent.com/-qY53-Oo7GfU/X6rTJnkFTtI/AAAAAAAAAAg/QYCk3yDsIGEAbgtgY6nQS1uUD4CdMyYugCK8BGAsYHg/s0/2020-11-10.png"/>
              <TituloOpciones>Así fue la votación</TituloOpciones>
            </LiOpciones>
          </a>
          <a target="_blank" href="https://larepublica.pe/politica/2020/11/09/vacancia-del-presidente-martin-vizcarra-en-vivo-ultimas-noticias-tras-aprobacion-del-congreso/">
            <LiOpcionFinal>
              <ImgCronologia src="https://lh3.googleusercontent.com/-bgeXlCuNeRw/X6rTKdm0S5I/AAAAAAAAAAk/eTteB_e5lCUSJkx8vyo_kCnibMlKO1jTwCK8BGAsYHg/s0/2020-11-10.png"/>
              <TituloOpciones>Cronología</TituloOpciones>
            </LiOpcionFinal>
          </a>
        </UlLista>
      </ContainerMaster>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`

const ContainerMaster = styled.div`
  width : 974px;
  height : 78px;
  margin : 5 auto ;
  padding: 5px 0;
  border-top : 1px solid #C7C9D3 ;
  border-bottom : 1px solid #C7C9D3 ;
  @media(max-width: 750px) {
    height: 53px;
  }
`
const UlLista = styled.ul`
  display: flex;
  align-items: center;
  width: 964px;
  height: 66px;
  margin: 0 15px;
  & a {
    text-decoration: none;
    color: black;
  }
  @media(max-width: 750px) {
    height: 41px;
  }
`
const LiOpciones = styled.li`
  height: 66px;
  width: 159px;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid #F0F0F0;
  &:hover{
    opacity: 0.6;
  }
  @media(max-width: 750px) {
    height: 46px;
    & img {
      height: 35px;
      width: 35px;
    }
  }
`
const ImgGolpeEstado = styled.img`
  height: 55px;
  width: 55px;
  `
const TituloOpciones = styled.p`
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-family: 'Roboto',sans-serif;
  padding: 20px 10px;
  height: 78px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  @media(max-width: 750px) {
    height: 53px;
  }
`
const ImgNoticias = styled.img`
  height: 55px;
  width: 55px;
  margin-left: 5px;
`
const ImgEditorial = styled.img`
  height: 55px;
  width: 55px;
  margin-left: 5px;
`
const ImgCronologia = styled.img`
  height: 55px;
  width: 55px;
  margin-left: 5px;
`
const LiOpcionFinal = styled.li`
  height: 66px;
  width: 159px;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    opacity: 0.6;
  }
  @media(max-width: 750px) {
    height: 46px;
    & img {
      height: 35px;
      width: 35px;
    }
  }
`
export default App;
