import City from "../assets/city.jpg";

const imgSize = {
    width: '200px',
    height: '200px'
};

export function Sizeimg() {
    return (
        <div className={'flex'}>
            <img style={imgSize} src="/img1.jpg" alt="Paisagem"/>
            <img style={imgSize} src={City} alt="Cidade"/>
        </div>
    )
}