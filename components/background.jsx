import Image from 'next/future/image'
import { Container } from 'reactstrap'
import styles from '../styles/background.module.scss'
export default function Background() {
  return (
    <Container className='lg-container mt-5 main-text'>
      <div
        // id='HeroContainer'
        className={styles.HeroContainer}
      >
        <Image
          // id='HeroBg'
          className={`${styles.HeroBg} next-image`}
          src='/winter.jpg'
          alt='Collaboracode - Community, Collaboration, Code'
          // width="100%"
          // height="100%"
          // layout="responsive"
          layout="raw"
          fill
        />
        <Image
          // id='HeroImg'
          className={styles.HeroImg}
          src="/puzzle_render-1.webp"
          alt="Collaboracode - Community, Collaboration, Code"
          // width="500"
          // height="500"
          // layout="responsive"
          layout="raw"
          fill
        />
      </div>
    </Container>
  )
}