import { ParentProps } from 'solid-js'
import styles from './Cards.module.css'

export const Cards = ({ children }: ParentProps) => {
  return <div class={styles.cards}>{children}</div>
}
