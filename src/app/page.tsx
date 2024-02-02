"use client"
import Image from 'next/image';
import styles from './page.module.css'
import powered from '@/assets/powered.png'
import leftArrowImage from '@/assets/leftarrow.png'
import { useState } from 'react';
import { levels, calculateImc, Level } from '@/_helpers/imc'
import { GridItem } from '@/components/GridItem'

const Page = () => {
  const [heighField, setHeighField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);


  const handleCalculateButton = () => {
    if (heighField && weightField) {
      setToShow(calculateImc(heighField, weightField));
    } else {
      alert('Digite todos os campos!')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeighField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headContainer}>
          <Image
            src={powered}
            className={styles.powered}
            alt=""
          />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={styles.title}>Calcule o seu IMC.</h1>
          <p>O IMC, ou Índice de Massa Corporal, é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.</p>

          <input
            type='number'
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heighField > 0 ? heighField : ''}
            onChange={e => setHeighField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            type='number'
            placeholder='Digite o seu peso. Ex: 75.3 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem
                  key={key}
                  item={item}
                />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <Image
                  alt=''
                  src={leftArrowImage}
                  className={styles.rightArrowIMG}
                />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Page;