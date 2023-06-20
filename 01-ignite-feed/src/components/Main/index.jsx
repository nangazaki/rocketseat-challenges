import styles from './Main.module.css'
import { Sidebar } from '../Sidebar'
import { Post } from '../Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nangazaki.png',
      name: 'Helder Cambuta',
      role: 'Programador Web'
    },
    publishedAt: new Date('2023-06-18 16:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/CristinoCg.png',
      name: 'Cristino CG',
      role: 'Game Developer'
    },
    publishedAt: new Date('2023-06-16 16:00:00'),
    content: [
      { type: 'paragraph', content: 'Falaee, TodoListners 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
  }
]

export function Main() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <main className={styles.posts}>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
  )
}