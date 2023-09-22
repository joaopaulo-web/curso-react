import City from "../assets/city.jpg";

// Constante responsável por setar a largura e a altura dos elementos.
const imgSize = {
    width: '200px',
    height: '200px'
};

//Função responsável por retornar ao App.tsx uma div com classe flex e duas imagens. Nessas duas imagens, é passada a constante imgSize através do atributo style. A segunda imagem é chamada através do import la linha.
export function Sizeimg() {
    return (
        <div className={'flex'}>
            <img style={imgSize} src="/img1.jpg" alt="Paisagem"/>
            <img style={imgSize} src={City} alt="Cidade"/>
        </div>
    )
}