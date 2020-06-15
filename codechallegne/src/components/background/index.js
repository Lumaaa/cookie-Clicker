import React, { PureComponent } from 'react'
import backgroundImg from './background.png'
import styles from './styles.css'

export default class Background extends PureComponent {

    render() {
        return(
            <img src={backgroundImg} alt="" className={styles.back}/>
        )
    }
}