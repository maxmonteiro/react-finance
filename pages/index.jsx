import styles from '../styles/initial.module.scss'
import Header from "@/source/components/Header/Header";
import AllCards from "@/source/components/CategoryCard/AllCards";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
    </main>
  )
}
