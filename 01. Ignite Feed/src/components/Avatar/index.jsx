import styles from './Avatar.module.css'

export function Avatar({ withBorder, src }) {
  return (
    <img
      src={src}
      className={withBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}

Avatar.defaultProps = {
  withBorder: true
}