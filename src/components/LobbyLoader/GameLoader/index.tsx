import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getImageSource } from "../../../utils/helper";

interface IGameLoader {
    table: ITable;
}

const GameLoader:React.FC<IGameLoader> = ({table}) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        {showLoader &&
            <div className={styles.loaderBox}>
                <div className={styles.loaderBackground}  style={{
                backgroundImage: `url(${getImageSource(table.tableId)})`
            }}></div>
                <div className={styles.loaderColorWrapper}></div>
                <>
                    <div className={styles.info}>
                        <p className={styles.tableName}>{table.tableName}</p>
                        <div className={styles.limitsBlock}>
                            <span className={styles.arrowReverse}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="11" viewBox="0 0 56 11"><defs><filter id="LineR" x="0" y="0" width="56" height="11" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur><feFlood flood-color="red"></feFlood><feComposite operator="in" in2="blur"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs><g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#LineR)"><path id="LineR-2" data-name="LineR" d="M1,0,2,47H0Z" transform="translate(51.5 4.5) rotate(90)" fill="#f9c700"></path></g></svg>
                            </span>
                            <p className={styles.limits}>
                                 {table.currencyId} {table.minStake} - {table.maxStake}
                            </p>
                            <span className={styles.arrow}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="11" viewBox="0 0 56 11"><defs><filter id="LineR" x="0" y="0" width="56" height="11" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur><feFlood flood-color="red"></feFlood><feComposite operator="in" in2="blur"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs><g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#LineR)"><path id="LineR-2" data-name="LineR" d="M1,0,2,47H0Z" transform="translate(51.5 4.5) rotate(90)" fill="#f9c700"></path></g></svg>
                            </span>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.lineChild}></div>
                        </div>
                    </div>
                </>
            </div>
        }
    </>
    )
}

export default GameLoader;