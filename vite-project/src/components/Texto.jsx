import React from 'react';
import styles from "./Modulo.texto.css";

const Texto = (props) => {
  return (
    <div>
      {props.children}
    <button className={styles.texto}>{props.nombre}</button>
    </div>
    
    
  )
}

export default Texto