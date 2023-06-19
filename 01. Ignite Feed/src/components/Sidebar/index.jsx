import { Avatar } from '../Avatar'
import { PencilSimpleLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles['sidebar-wrapper']}>
      <div>
        <img
          className={styles.cover}
          src='https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=50'
        />
        <Avatar
          className={styles.profile}
          src='https://github.com/nangazaki.png'
        />
      </div>
      <div className={styles.main}>
        <h4>Helder Cambuta</h4>
        <span>Programador Web</span>
      </div>
      <footer>
        <a href='#'>
          <PencilSimpleLine size={22} weight='bold' />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
