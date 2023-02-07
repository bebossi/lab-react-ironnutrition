import style from "./style.module.css";
import { Input } from "antd";
import { useState } from "react";
import {Food} from "../Food/index.js";

export function AddFood(){

    const [ form, setForm] = useState({name: "", image:"", calories: "0", servings: "0"});
    const [food, setFood] = useState([]);

    function handleForm(e){
        setForm({...form, [e.target.id]: e.target.value })
    };

    function handleSubmit(e){
        e.preventDefault();

        setFood([...food, form])
    };

    function handleDelete(index){
        const clone = [...food]
        clone.splice(index, 1)
        setFood(clone)
    };

    return (
        <>
    <form className={style.form} onSubmit={handleSubmit}  >

        <label htmlFor="name" >Name</label>
        <Input id="name" type="text" value={form.name} onChange={handleForm}  ></Input>

        <label htmlFor="image"  >Image</label>
        <Input id="image" type="text" value={form.image} onChange={handleForm}></Input>

        <label htmlFor="calories"  >Calories</label>
        <Input id="calories" type="number" value={form.calories} onChange={handleForm} ></Input>

        <label htmlFor="servings" >Servings</label>
        <Input id="servings" type="number" value={form.servings} onChange={handleForm} ></Input>

        <button>Create</button>
    </form>

    {food.map((currentFood, index) => {
            return (
                <Food name={currentFood.name} img={currentFood.image} calories={currentFood.calories} servings={currentFood.servings} 
                deletar={() => {
                    handleDelete(index)
                }} />
            )
        })}
    </>
    )
}