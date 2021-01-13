import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {getFilteredCategory} from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category() {
    const {name} = useParams()
    const [meals, setMeals] = useState([])
    const {goBack} =useHistory()

    useEffect(()=> {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name])

    return(
       <>
           <button onClick={goBack} className="btn">Go Back</button>
           {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
       </>
    )
}
export default Category