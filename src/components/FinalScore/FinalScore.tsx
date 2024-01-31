import ThankYouImg from "../../assets/illustration-thank-you.svg"
import styles from "./FinalScore.module.css"

interface FinalScoreProps {
    selectedValue: number
}

export const FinalScore: React.FC<FinalScoreProps> = ({ selectedValue }): JSX.Element => {
    return (
        <>
            <img src={ThankYouImg} alt="mobile-image" className={styles.image} />

            <div className={styles.textContainer}>
                <p>You selected {selectedValue} out of 5</p>
            </div>

            <h3 className={styles.title}>Thank you!</h3>

            <p className={styles.text}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </>
    )
}
