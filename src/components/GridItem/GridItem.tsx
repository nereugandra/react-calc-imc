import { Level } from "@/_helpers/imc";
import styles from './GridItem.module.css'
import upImage from '@/assets/up.png'
import downImage from '@/assets/down.png'
import Image from "next/image";

type Props = {
    item: Level
};
export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <Image src={item.icon === 'up' ? upImage : downImage} alt="" className={styles.gridIconImg} />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }
            <div className={styles.gridInfo}>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </div>
        </div>
    );
}