import Head from 'next/head'
import Link from 'next/link'
import { Button, ButtonGroup, Media, Card, CardBody, CardGroup, CardTitle, CardSubtitle, CardText, CardImg, Container, Row } from 'reactstrap';
// import Image from 'next/image'
import styles from '../styles/resources.module.scss'
import Resource from '../components/resource';

export default function Resources() {
  return (

    <Container className='page-container'>
      {/*Below is the testing of the Card Group component*/}
      <h2 className={styles.Heading}>
        <span className={styles.Declaration}>var </span>
        <span className={styles.FnName}>beginner </span>
        <span className={styles.Assignment}>= </span>
        {/* <span className={styles.ParenAndBrace}>() </span> */}
        {/* <span className={styles.Arrow}>{'=> '}</span> */}
        <span className={styles.ParenAndBrace}>{'['}</span>
      </h2>
      <Row>
        <CardGroup className={styles.CardGroup}>
          <Resource
            title="Javascript.info"
            subTitle="The Modern Javascript Tutorial"
            imgAlt="Javascript.Info"
            imgSrc="https://avatars.githubusercontent.com/u/49552305?s=280&v=4"
            link="https://javascript.info/"
            text="How it's done now. From the basics to advanced topics with simple, but detailed explanations."
          />
          <Resource
            title="W3 Schools"
            subTitle="HTML, CSS & Javascript Tutorials"
            imgAlt="W2 Schools"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png"
            link="https://www.w3schools.com/"
            text="Learn to Code. With the world's largest web developer site."
          />
          <Resource
            title="MDN"
            subTitle="Quality webdocs"
            imgAlt="image for MDN"
            imgSrc="https://hacks.mozilla.org/files/2018/10/mdn-bizcard-1200x700.png"
            link="https://developer.mozilla.org/en-US/"
            text="How it's done now. From the basics to advanced topics with simple, but detailed explanations."
          />
          <Resource
            title="Codecademy HTML & CSS"
            subTitle=""
            imgAlt="Codecademy"
            imgSrc="data:image/png;base64,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"
            link="https://www.codecademy.com/catalog/language/html-css"
            text="Quick reasonable free course with exercises."
          />
          <Resource
            title="Free Code Camp"
            subTitle="Learn to code — for free."
            imgAlt="Free Code Camp"
            imgSrc="https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15.fit_scale.size_1028x578.v1627670281.png"
            link="https://freecodecamp.org/"
            text=""
          />
        </CardGroup>
      </Row>

      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{']'}</span></h2>
      <h2 className={styles.Heading}>
        {/* {'let intermediate = () => {'} */}
        <span className={styles.Declaration}>let </span>
        <span className={styles.FnName}>intermediate </span>
        <span className={styles.Assignment}>= </span>
        {/* <span className={styles.ParenAndBrace}>() </span> */}
        {/* <span className={styles.Arrow}>{'=> '}</span> */}
        <span className={styles.ParenAndBrace}>{'['}</span>
      </h2>
      <Row>
        <CardGroup>
          <Resource
            title="DevDocs"
            subTitle="Compilation of many resources altogether"
            imgAlt="DevDocs Image"
            imgSrc="https://media.licdn.com/dms/image/C4E0BAQGUu9vdcyP0nQ/company-logo_200_200/0/1649790508655?e=2147483647&v=beta&t=pwgb8NXl7_KKBoDiC4nw3-S_Lspg-871y3tykGXkg0g"
            link="https://devdocs.io/"
            text=""
          />
          <Resource
            title="Coolors"
            subTitle="The super fast color palettes generator"
            imgAlt=""
            imgSrc="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2015/05/coolors-color-scheme-generator-photography.jpg"
            link="https://coolors.co"
            text=""
          />
          <Resource
            title="Chrome Dev Tools"
            subTitle="Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser."
            imgAlt=""
            imgSrc="https://i1.wp.com/css-tricks.com/wp-content/uploads/2018/02/chrome-devtools.jpg?fit=1200%2C600&ssl=1"
            link="https://developer.chrome.com/docs/devtools/"
            text=""
          />
          <Resource
            title="regexr"
            subTitle="A site that helps you write regex"
            imgAlt="An image for a site that helps you write regex"
            imgSrc="https://regexr.com/assets/card.png"
            link="https://regexr.com/"
            text=""
          />
          {/* <Resource
            imgAlt={"Card image cap"}
            imgSrc={"https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}
            title={"Community"}
            subTitle={"Welcome to the workspace"}
            text={"To crush is also to create, and from squashing comes spice. Stay vigilant. The battle for seconds is always sudden and fierce"}
            link={"#"}
          /> */}
          <Resource
            imgAlt="React"
            imgSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            title="React Learn"
            subTitle="Modern React Documentation"
            text=""
            link="https://beta.reactjs.org/learn"
          />
        </CardGroup>
      </Row>
      {/* <Row>
        <CardGroup>
        </CardGroup>
      </Row> */}
      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{']'}</span></h2>
      <h2 className={styles.Heading}>
        {/* {'const advanced = _ => {'} */}
        <span className={styles.Declaration}>const </span>
        <span className={styles.FnName}>advanced </span>
        <span className={styles.Assignment}>= </span>
        {/* <span className={styles.ParenAndBrace}>() </span> */}
        {/* <span className={styles.Arrow}>{'=> '}</span> */}
        <span className={styles.ParenAndBrace}>{'['}</span>
      </h2>
      <Row>
        <CardGroup>
          <Resource
            imgAlt={"Threejs logo"}
            imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png"}
            title={"Threejs"}
            subTitle={"3d in the browser made easier"}
            text={""}
            link={"https://threejs.org/"}
          />
          <Resource 
        imgAlt="React three fiber logo"
        imgSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--X44rapOx--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/9kjpidmkgshr43g1srfi.jpg"
        title="React three fiber"
        subTitle="Threejs in react"
        text=""
        link="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
        />
        </CardGroup>
      </Row>
      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{']'}</span></h2>
      {/* <h2 className={`${styles.Heading} ${styles.Comment}`}>{'// Miscellaneous'}</h2> */}
    </Container>
  )


}