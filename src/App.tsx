import { Card } from './components/Card/Card'
import styles from "./App.module.css"

function App() {

  return (
    <main className={styles.pageContainer}>
      <Card />
      <footer className={styles.footer}>
        <p>
          Challenge by <a href="https://www.frontendmentor.io/profile/rockop11" target='_blank'><span className={styles.span}>Frontend Mentor</span></a>. Coded by <a href="https://github.com/rockop11" target='_blank' className={styles.link}>Rocko P11</a>
        </p>
      </footer>
    </main>
  )
}

export default App
