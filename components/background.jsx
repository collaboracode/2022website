import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import styles from '../styles/background.module.scss'
export default function Background() {

  const [season, setSeason] = useState("summer")

  
  // Sets the background image based on the current season on the client side
  useEffect(() => {
    const getSeason = d => Math.floor((d.getMonth() / 12 * 4)) % 4
    function whatHemisphere() {
      let y = new Date()
      if (y.getTimezoneOffset == undefined) return null
      y = y.getFullYear()
      let jan = -(new Date(y, 0, 1, 0, 0, 0, 0).getTimezoneOffset())
      let jul = -(new Date(y, 6, 1, 0, 0, 0, 0).getTimezoneOffset())
      let diff = jan - jul
      if (diff < 0) return 'N'
      if (diff > 0) return 'S'
      return null
    }
    if (whatHemisphere() === "N") {
      // northern
      setSeason(['winter', 'spring', 'summer', 'autumn'][getSeason(new Date())])
    }
    else {
      // southern
      setSeason(['summer', 'autumn', 'winter', 'spring'][getSeason(new Date())])
    }
  }, [])

  return (
    <Container className='lg-container mt-5 main-text'>
      <div
        // id='HeroContainer'
        className={styles.HeroContainer}
      >
        <Image
          // id='HeroBg'
          className={`${styles.HeroBg} next-image`}
          src={`/${season}.jpg`}
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