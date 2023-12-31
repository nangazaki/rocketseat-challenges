import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { HandsClapping, Trash } from 'phosphor-react'
import styles from './Comments.module.css'

export function Comment({ id, author, publishedAt, comment, claps, onDeleteComment }) {
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [localClaps, setLocalClaps] = useState(claps)

  function handleLocalClaps() {
    setLocalClaps((state) => {
      return state + 1
    })
  }

  function handleDeleteComment() {
    onDeleteComment(id)
  }

  return (
    <div className={styles['comment-wrapper']}>
      <Avatar withBorder={false} src={author.avatarUrl} />

      <div>
        <div className={styles['comment-content']}>
          <header>
            <div>
              <strong>{author.name}</strong>
              <span>{publishedDateRelativeToNow}</span>
            </div>
            <span className={styles['delete-comment']} onClick={handleDeleteComment} aria-label='Deletar comentário'>
              <Trash size={22} />
            </span>
          </header>
          <div>
            <p>{comment}</p>
          </div>
        </div>

        <button onClick={handleLocalClaps}>
          <HandsClapping size={20} />
          Aplaudir • {localClaps}
        </button>
      </div>
    </div>
  )
}
