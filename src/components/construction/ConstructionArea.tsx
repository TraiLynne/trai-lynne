import styles from "./construction.module.css"

export default function ConstructionArea() {
  return (<div className={styles.constructionArea}>
      <div className={styles.constructionTape}>
        <p className={styles.text}>Under Construction</p>
      </div>
    </div>
  );
}