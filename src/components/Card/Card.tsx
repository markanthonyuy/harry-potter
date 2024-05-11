import { A } from '@solidjs/router'
import styles from './Card.module.css'
type CardProps = {
  image: string
  name: string
  id: string
}
export const Card = ({ image, name, id }: CardProps) => {
  return (
    <A href={`/character/${id}`} class={styles.card}>
      <div class={styles.image}>
        {image && <img src={image} width="163" height="230" />}
      </div>
      <div class={styles.info}>
        <p class={styles.name} title={name}>
          {name}
        </p>
      </div>
    </A>
  )
}
