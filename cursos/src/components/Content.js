import { Part } from "./Part"

export const Content = ({parts}) => {
    
    // Usamos esta funcion para devolver el atributo exercises del objeto en la iteracion.
    const amount = (item) => {
        return item.exercises
    }

    // Usamos esta función para devolver los valores prev y next sumados
    const sum = (prev, next) => {        
        return prev + next
    }

    const total = parts.map(amount).reduce(sum)
    return(
        <div>
            <div>
                {
                    parts.map(part => <Part key={part.id} part={part} />)
                }
            </div>
            <div>
                <h5>La suma de ejercicios es: {total}</h5>
            </div>
        </div>
    )
}