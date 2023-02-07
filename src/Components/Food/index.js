import style from "./style.module.css"

export function Food(props) {
    const { name, img, calories, servings, deletar} = props

    return (
    <div className={style.container}>
        <p style={{fontSize: "20px", fontWeight: "bolder"}} > {name} </p>
        <hr></hr>
        <img src={img} />
        <p><strong>Calories:</strong> {calories}</p>
        <p><strong>Servings:</strong> {servings}</p>
        <button onClick={deletar} >Delete</button>
    </div>
    )
    
}