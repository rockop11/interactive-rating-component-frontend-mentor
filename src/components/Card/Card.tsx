import { useState } from "react"
import { ScoreForm } from "../ScoreForm/ScoreForm"
import { FinalScore } from "../FinalScore/FinalScore"
import styles from "./Card.module.css"

export interface IScore {
  value: number
}

export const Card: React.FC = (): JSX.Element => {

  const scores: IScore[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
  ]

  const [selectedValue, setSelectedValue] = useState<number>(0)
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setSelectedValue(parseInt(button.name))
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSelected(true)
  }

  return (
    <article className={styles.cardContainer}>
      {
        !isSelected ?
          (<ScoreForm
            scores={scores}
            buttonHandler={buttonHandler}
            submitHandler={submitHandler}
            selectedValue={selectedValue}
          />)
          : (<FinalScore
            selectedValue={selectedValue} />)
      }
    </article>
  )
}
