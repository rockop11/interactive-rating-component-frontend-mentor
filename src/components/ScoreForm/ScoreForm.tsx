import StarIcon from "../../assets/icon-star.svg"
import { IScore } from "../Card/Card"
import styles from "./ScoreForm.module.css"

interface ScoreProps {
    scores: IScore[],
    selectedValue: number,
    buttonHandler: (e: React.MouseEvent<HTMLButtonElement>) => void,
    submitHandler: (e: React.FormEvent) => void
}

export const ScoreForm: React.FC<ScoreProps> = ({ scores, buttonHandler, submitHandler, selectedValue }) => {
    return (
        <>
            <div className={styles.iconContainer}>
                <img src={StarIcon} alt="star-icon" />
            </div>

            <h3 className={styles.title}>How did we do?</h3>

            <p className={styles.text}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className={styles.buttonContainer}>
                {scores.map((item) => (
                    <button
                        key={item.value}
                        name={`${item.value}`}
                        className={selectedValue === item.value ? styles.selectedScore : styles.scoreButton}
                        onClick={buttonHandler}
                    >
                        {item.value}
                    </button>

                ))}
            </div>

            <button type="submit" className={styles.submitButton} onClick={submitHandler}>Submit</button>
        </>
    )
}
