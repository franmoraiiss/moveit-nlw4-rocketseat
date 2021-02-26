import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

   const { 
      minutes,
      seconds, 
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
   } = useContext(CountdownContext);
  
   // 25 -> '25' -> '2' '5' -> padStart colocar o '0' no começo quando não tiver 2 casas,
   // ou seja, quando o minuto for menor que 10 split divide cada caractere da string em um array
   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


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

         { hasFinished ? (
            <button 
               disabled
               className={styles.countdownButton}
            >
               Ciclo encerrado
            </button>
         ) : (
            <>
               { isActive ? (
                  <button 
                     type="button" 
                     className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                     onClick={resetCountdown}
                  >
                     Abandonar Ciclo
                  </button>
               ) : (
                  <button 
                     type="button" 
                     className={styles.countdownButton}
                     onClick={startCountdown}
                  >
                     Iniciar Ciclo
                  </button>
               ) }
            </>
         ) }

      </div>
   );
}