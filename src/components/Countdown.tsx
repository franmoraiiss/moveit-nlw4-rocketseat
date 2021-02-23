import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
   const [time, setTime] = useState(25 * 60);
   const [active, setActive] = useState(false);

   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   // 25 -> '25' -> '2' '5' -> padStart colocar o '0' no começo quando não tiver 2 casas, ou seja, quando o minuto for menor que 10
   //split divide cada caractere da string em um array
   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   function startCountdown() {
      setActive(true);
   }

   useEffect(() => {
      if(active && time > 0) {
         setTimeout(() => {
            setTime(time - 1);
         }, 1000);
      }
   }, [active, time]);

   return(
      <div>
         <div className={styles.countdownContainer}>
            <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
               <span>{secondLeft}</span>
               <span>{secondRight}</span>
            </div>
         </div>

         <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
         >
            Iniciar um ciclo
         </button>
      </div>
   );
}