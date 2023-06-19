import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comments } from '../Comments'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles['personal-info']}>
          <Avatar
            src={author.avatarUrl}
          />
          <div>
            <h5>{author.name}</h5>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </div>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href='#'>{line.content}</a></p>
          }
        })}
        <p>
          <a href='#'>#novoprojeto</a> {' '}
          <a href='#'>#nlw</a> {' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>
      <Comments />
    </div>
  )
}
