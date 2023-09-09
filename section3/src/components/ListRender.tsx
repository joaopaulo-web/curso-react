import {useState} from "react";
const ListRender = () => {

    const [list] = useState(["Matheus", "Joao", "Sarah", "Fernanda"])
    return(
        <div>
            <ul>
                {list.map((item) => (
                    <li>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default  ListRender