import Head from 'next/head'
import { Button, ButtonGroup, Media } from 'reactstrap';
import Image from 'next/image'

const imgStyle = {
    maxHeight: 64,
    maxWidth: 64
  }

export default function Resources() {
    return (
    <div>
      
      <Media>
      <Media left href="https://javascript.info">
        <Media object src="https://javascript.info/img/site_preview_en_512x512.png" style={imgStyle} alt="Generic placeholder image" />
        
      </Media>
      <Media body>
        <Media heading>
          https://javascript.info/
        </Media>
        The Modern JavaScript Tutorial
        How it's done now. From the basics to advanced topics with simple, but detailed explanations.
      </Media>
    </Media>
    </div>
    )
}