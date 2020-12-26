import { render } from "@testing-library/react"
import React from "react"
import { Link } from "react-router-dom";
import  {useSelector, useDispatch}  from "react-redux"
import styles from "./DailyCalorieIntake.module.css"
import dailyRateSelector from "../../redux/dailyRate/dailyRateSelector"
import { useCallback } from "react";
import changeFilter from "../../redux/dailyRate/dailyRateActions"


const DailyCalorieIntake = () => {
    const calories = useSelector(dailyRateSelector.getCalories);
  const products = useSelector(dailyRateSelector.getProducts);

  // filter part

  const value = useSelector(dailyRateSelector.getFilter)
  const dispatch = useDispatch();
  const onChange = useCallback(event =>dispatch(changeFilter(event.target.value)), [dispatch])

  //end of filter part

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </p>
      <div className={styles.container}>
        <p className={styles.caloriesText}>
  <span className={styles.caloriesValue}>{calories}</span> ккал
        </p>
        <p className={styles.productsTitle}>
          Продукты, которые вам не рекомендуется употреблять
        </p>
        {/* filter */}
        <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
       {/* filter end*/}
        <ol className={styles.productsList}>
  {products.map((product, id) => <li key = {id} className={styles.productsItem}>{product}</li>)}
          
          
        </ol>
        <Link to= "/auth/register" className={styles.button}>
          Начать худеть
        </Link>
      </div>
    </div>
  )
}

export default DailyCalorieIntake
