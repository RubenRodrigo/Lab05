import { Part } from "./Part"

export const Content = ({parts}) => {
    

    return(
        <div>
            <div>
                {
                    parts.map(part => <Part key={part.id} part={part} />)
                }
            </div>
        </div>
    )
}