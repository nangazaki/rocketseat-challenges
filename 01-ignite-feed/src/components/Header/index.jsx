import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={igniteLogo} />
        Ignite Feed
      </div>

    </header>
  )
}
