import { useState } from 'react'

import { Comment } from './Comment'
import styles from './Comments.module.css'

export function Comments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: {
        name: 'Otoniel Emanuel',
        avatarUrl: 'https://github.com/euotiniel.png',
      },
      comment: 'Excelente post, foi muito útil! 👏🏿',
      publishedAt: new Date('2023-06-18 19:00:00'),
      claps: 1,
    }
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleNewCommentText() {
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment() {
    event.preventDefault()

    const id = comments.length + 1

    const newComment = {
      id: id,
      author: {
        name: 'Usuário Anónimo',
        avatarUrl: 'https://i.pinimg.com/originals/87/83/5a/87835a5836cc873180d111d5413be34a.jpg',
      },
      comment: newCommentText,
      publishedAt: Date.now(),
      claps: 0,
    }

    setComments([...comments, newComment])
    setNewCommentText('')
  }

  function deleteComment(id) {
    const commentWithoutDeletedOne = comments.filter(comment => comment.id !== id)

    setComments(commentWithoutDeletedOne)
  }

  return (
    <div className={styles.wrapper}>
      <span>Deixe seu feedback!</span>

      <form onSubmit={handleCreateNewComment}>
        <textarea
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentText}
          placeholder='Escreva um comentário...'
        />

        <footer>
          <button type='submit' disabled={newCommentText.length === 0}>
            Comentar
          </button>
        </footer>
      </form>

      {comments.map((comment) => {
        return (
          <Comment
            id={comment.id}
            key={comment.id}
            author={comment.author}
            publishedAt={comment.publishedAt}
            comment={comment.comment}
            claps={comment.claps}
            onDeleteComment={deleteComment}
          />
        )
      })}
    </div>
  )
}
