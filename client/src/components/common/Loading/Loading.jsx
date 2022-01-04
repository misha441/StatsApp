import React from "react";
import styles from "./Loading.module.scss"
import preloader from './../../../assets/loading/loading.svg'

export function Loading(props) {
    return (
        <div className={styles.preloader}>
            <img  className={styles.preloader__img} src={preloader} alt=""/>
        </div>
    )
}

export default Loading;