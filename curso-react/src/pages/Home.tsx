import {Navbar} from "../components/Navbar.tsx";
import {Section} from "../components/Section.tsx";

export function Home(){
    const divStyle = {
        color: 'red',
        background: 'black',
        padding: 10
    };
    return(
        <>
            <div>
                <h1 style={divStyle}>Esta é a tela de Home</h1>
            </div>
            <Navbar />
            <Section />
        </>
    )
}