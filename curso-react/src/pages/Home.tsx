import {Navbar} from "../components/Navbar.tsx";
import {Section} from "../components/Section.tsx";

export function Home(){
    return(
        <>
            <div>
                <h1>Esta é a tela de Home</h1>
            </div>
            <Navbar />
            <Section />
        </>
    )
}