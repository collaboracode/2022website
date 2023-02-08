import Head from 'next/head'
import Link from 'next/link'
import { Button, ButtonGroup, Media, Card, CardBody, CardGroup, CardTitle, CardSubtitle, CardText, CardImg, Container } from 'reactstrap';
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
        title="Codecademy HTML & CSS"
        subTitle=""
        imgAlt="Codecademy"
        imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAn1BMVEUUHDr///8AABwAACwACTF9f4oACjOkpq0SGjkAACMAACbOz9MAACrW1tkAAC4ADDJydIEAAB83O1AMFjff4OIAACj4+PiDhZAFEjRXW2uKjJYAAAC0tbvk5eebnaUAABvAwcZhZHNNUGIdJEAAABAAABbHyMxqbHq5ur+SlJ2qq7Kdn6ctMkp2eYUaIT4AAAxARFg7QFQvNEsmK0VJTV/mjt/KAAAF/ElEQVR4nO2ZiXLiOBRFbWQayTEWwguCAGENGMie//+2eU+yU9M96UkgVUOYvqcqQZYsYx1recJBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwaNjoRe+47Pyd20z6RzZ/sLc7DE+nG5773MxJ3T9V29adr23WOZgZt4aEQR6I20Bb2sw9OypIk/SlD9z7WZpNEfO3evjGf0Zb1t+PpT94+oc0Ot+Pqf+vtM9rsMAwn6u85n9AmRmGYq3895YL5rLb8FG1daDtKm5Qy/TO0ZWmSaJ8nRZJE0qcjpVTRaJNRXdBok1okwu8WLNUX/gKyUPfLN21vlYIoTaV2B1wv5W+NlXLPjCr/h43+Oo22uD8d7+5ibreQo/F4ZN0aYAa0i5guvLZIc4FO37RZ09uN9wsjg6w1nI7HnY2hS2WWorpwNPDaoogqDdKIUqNptbrbjdtGc73pQdC3T0r+djHdbuWZTRxFrc3sXORfDm1QDPwu4I6evxpzau+1pZu6oKi12cfS7xci+zjxZZOlDAqXrrWJutJGBIZ3ZO6kul5biA5dXVD3/nXN+e54bWLKzrgphZ5zw3inOrTZK6dnPacte+YDVjK3TpuyzT5rFi+a+rdxWtHHtrNwgzR7aiotrHEneGP+o68PVNoKorswrNKPb/b74LXF3B9WrW34ag21cbRaz7nR3BluHwrh5raEet58zQUT47St9tT6hZiHV0LGuypprVmeia/CcHAjEqetoPE6XK97nGZt3XjFjyVcrCJ6Mh1hcvf1t2G4vLxBysPvthXI9EXLJWlZBcEN5ads4NHWKyn57K7T9JpELCPWdj3hkSyjl4JaLARN+IaaL9nOWtYBCB1c3VAlutCPFhU826BFF9ipQC+4a0Y0lDsJPbWuObeJo3DakspNMRQ3BJY6w7YgDdTRFi0qTGStLeYGTquK8uaJ00a95kDzOXcTGb+0q+qGtN3f+HnKa8toQdG+0mJN2hT5pAlhEAXS8vQoEzr7ga42uqwNhdNW7N/uW1PHGyeBa9ycu5yp4zZD3XD/4iemXtFoq2M36deO61pb3mgzfZq0nnyl+S/apFuMY+p7B/rTFzVGa23Tf2hLaGkdut5GefNaW+d5khOTufhFm1tS8nzltJU0+fksp2366CsN39Wm6ZFMaSRf1DpaaxM0w+wTjl6DjKacK2q1IgN9/veU1dtLRQUtCn7VSvmV9Jo08Ai1MlCTsNRG8dR+z2sK2VEzHqSaltm6Umbe0xbQjEf57ejcIo7DadM0jsp1JF56NGqo3zzHRcCLIscSswcVT5w2+v9caCF2hfTaSNJI2WKhsxZN7+vMXtO6eM/u9g+GwxW/ei4Tneidku9r40mU4p7LGqN1AMI9JL8bleE05ZCh7OxLHqu8rIblFbcrV4LjjapXlWF+71bSG45kR4+jcPLC9duPQ94duLJw4uJaCmF2rhINwzxrvastO7jA79wejsRry+ppOywTmTUBaUpNbLtkzoujLMrmpIPTFptZnbE1g7dXDPeSwxA2x9pk+lZp2Wjb/6QtMHQHG31uD0dSb65033WPmaBwQzobM8177OR12+1WqtMZRbTX9D7GIqv3pK2py+goqUas53ZfllJKU+XlZJfdzvZpkN27zhruYqkmZUmeoqos2zqgx1POeP9+k7vl+rJotvKZWm7mNvYxWNzvx/VsYwsVp5KCWVeQzXsLLml+ARHFprqT3PhUHZ5ELIyR7sCoJCsK3i9JFVAlReFfQLl8ycgY7lzSGKpo1cIHipeF10ZdRGZau0+XtvJdMh25Ej9I+Wc1LaLMC86y30zrUuvfvom2w3HpdiIXhntzlf44ksS9uWqOotOjh2jEY/vCgrbgS6+X19MmeXrUxdq64sKij+BL2vgXEM/gZG1Svx7U5Vn7Um+rmuTd6fGDtB+9pP2exK0TiQPRJC8t6gIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAOfkLBrh2pAgbBw0AAAAASUVORK5CYII="
        link="https://www.codecademy.com/catalog/language/html-css"
        text="Quick reasonable free course with exercises."
        />
      <Resource
        title="Free Code Camp"
        subTitle="Learn to code — for free."
        imgAlt="Free Code Camp"
        imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV8AAACPCAMAAABqIigoAAAAolBMVEUKCiIKCiP///8AAAAAABsAAB0AABcAABMAAA4AABEAAAMAABUAABkGBiBjYm6urrM/P04AAAiBgIlJSVORkZi4uL3T09f29vfNzdDw8PKkpKp6eoIxMEInJjnm5ujGxsqLi5IAACGzs7iZmaBWVmHg4ONCQk+pqa9oaHI1NURxcXoODim/v8NcXWZQUFx7e4MeHjEWFy05OUUzMkQjIjcAACVSZ2mzAAAJw0lEQVR4nO2c6XbiOBOGsWR5wQiwA3Ywu81iHLOlZ+7/1r5XXsCZQDqdjJvp89Xzow9C1va6VKoS3d1q/Z+h/V4evdzfDunbLKRvs5C+zUL6Ngvp2yykb7OQvs1C+jYL6dsspG+zkL7NQvo2C+nbLKRvs5C+zUL6Ngvp2zCkL0EQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEF8kqXFOXdF08M4XN6v/P6/0RFt+14NN77d+zfQtUH2nIUT92vNpYG30+a885PnnDQTNwWWNt7ut1+wcR4OrgLXBxJ9f9X+Vt/fQkxHLMf7ksCSr6L1aLSODh+ZJ+DPbHdLQsdcZLPRyI+n7jeMWMcqQusyqalzrRJ9rI1/vetvwn02S3erHmN9/ddbSzRnbKReUWZ/KDD0vTWAswqqDryvCyw55L1qaIX7mrHYT4wl1o1WvwP5wtjZ1Q3oNPj1OWg8Ymx81g0tCVj04S68ra8UI+YfNEM/hYztv+wnecaGtf3D56xbW4y7YsH0C8bzb6A/sZl68caKJc5Pn37XGnuvy4WUy/aBsZflB4/e1teN2Yg7UkrBQ+Z/dRe7HpvpV+ejrJn1awcCj9H3x+6rIYS9wtC6ruOYgryawEdMVFiuUc5HCtttu85FOk2YKJvFaqwBW5eiwGZSp6pHA3F5Pm8vL/pKXX1RdK9h2yyKrSw5Y6b6conzDsddOb4jllbbkS3dRR9qwq46UtGBfdVTnAL2VPe4r/A2s5qgkq/Z4hEeQt/1U+ZP+v3NWc1GQxl0+HQQdgt32nFfvXAbpqd2MV3BJynK40k+fbiHXqmvvWBHM68/bnu9sHuuZJsstr0wEZW+jrVZoIOuptYrrdnFK+AFvaBP6+xFWZaFe0sJ6IxPL3Evdfkm3KaagHQR5/oq7G29absSEJsg4zXfjbcO6u7O2WObNCXifYyEVWT8Wt6H6s+5+sbarMsH4lzQznlelofKhPmQxeUypJZosiW0qr44b4STFaUgmef68n3ZYbBAvTRheaXXELs9bJAfq/br5RL2zbbq+W2aN7Gl7bEkDIoHtqWFanAHm7rr4XlEtHavBqzBgL/u3b+MPPeiLZvFcRyu9LwcxvGcjdh8n4zUhOCV2XqwWh2HLDdUFczNwu5Tug1yjwZ9L2YisaOlMUN33f5BNdi6mrQQXswHgwGeD5S+NoTyF4e9B9nhGJS+m2qjC3hMp4s3N95skl7+gqEvDNGbIcJIuzO8S+irOkiSRaYEztvpBziDuvl6hf71cNBa4AD8HZK+RSKwh1Cu6+pl2eULZasO95RyfAYztAzD5ohxYCM4pzOXGx2Tv4zY2Hyjr8I8Mt9pO3rH5jjvTsLBhthzy7K4EaoAUIoAsWjeYaLqlb79elQMf+xxU9cdtA9OQumbcHwe6Rbfs4grfY/cchxVZFZuoXAPde3EsgzoV7UTDsf4+jExMP/HsQ3nFcEyxQvzbDHFrIpdxgcsdtVyeSGHnbBn/k5f+OOkzKLwKhKn3auMTKKqr2M/zEtTQ9Ox+V7fEfs7L6uT70nHgAHHrlFjQaKh0te7HqiFgviwqOXGvFc6mJVxdRDoYqQ9JIK4oW9+1AokzmKCJbVz+AZrlDqOibLcDmY39J1fgjA3xHkHfav6XF9zjL1RdpCwXvudvqYXuobKlo27+qbmpcPCpcK3Hq6m6qyUthGOgV1neVFUwqgnjV+x3OKGvoUkUmtB3xmCgZxhoW9QlXsscOXH+o5v6buuOshTgn/q20Jw1g2zYdy9r28ZiaHvq76X403CpYEXFVcvtpeVSXvGXv9b+gLoWyPjslMv/9R+b+pbI3Tf62tuZmVt8Gl9fbiCqn07LmKXlM2SWsr/n9XXX3UrzhL6jq5l7LdafIbIV3xG3+zagSbz+KHSwGljx+wCto673TRE4PFZfYfX1FOlGnjzwirCvMu5hzw8OH2UXjbGT/TNuFGB8Ev530u5iH/D8iZFvPoT8Ql9wzcdQt/qmHfGQ0t1OOSuY5guPn1SX4x0Sc6Q5YCNYS2KPVAtTZzY6Pb1aNN8qO+PIu/IMVS4WkuDBCILrPG5jAfUKm0EDXfPt57SN2Xh5RbItPL87VgFHD47L+FLS3u+r6956bDQF5pG1ayQJTJVcsO3MbC+QST0kP9o6yN95csljZd8H8G8AibKGbu77CxVfPvDKerVeQQ9x6V+WOnecLdVfLbMpccyq9EEH4eWiuLKCFB3IKW6KNh0iur5HX2PvAzg5mXql0eR1WpUtgfHZcWFvlVyiHewfcwl+xt9BefILxbqF4mico20DfkBIiYYBNeUvVrcRb6A/INNhXRmzD+r+xgeK6Gg92iTF1W9JpFasQN3TZvb8zy/sAM2KDp86akDsnNQaZji7CPAbrUjFRHi+eVcZRbyhr5sOMEMXD6+7H5+tVN1Ha22nLpUz+OI6/fpr18P/hvU9RWbLBv6bP387Ef5bDpI20bDeBBnODawMcVpxIIsHgyGyJEgR6uzwwd/GKnywUD+h7TVj6JoiCjAs1rqhTA/Tr3tCFk3XIcJg59FgwGycBaoqFWli8E8UvGqDwcppgES8PQY4TEWDIy3+mZKX8zEDwchDDWtPEvE4tI41XhdNXVjshjML3YNR8c+vv5vjLq+pncNnorY3O77ZXm+UQdZ51Te1zC/m/sz4xyV0dumuBCLy9uXdaK6lXxRZKuj1SA3ssv9DhtOlSPV2k/FCKM4v9I0dsUF0fowgSuF/cLhw01hjqLK36oe02re8DpsWQQHeAnYVuqTUCn4uPLVQ7Z9THrcMrqba1xon35Mcn5Ublbny653PB5cXngywa2Vd/T2evWjLFzKX0+HKefVDQbfpZ63f+HldrR4/+gd+9x+9fInDH5OPO8IL1KO0OH2j8Pmb+5WF6D6yksnvCO4/Zdwxl2MY6bwo1onmYo8P+a7serAvEwbvr66JsXHKg6zvXV5hWn02YOyNzV4fWBRUbucNmzb1GvljmnbRn2zCb3240FLEw7qRa1soj2eqvRQ9fUOEZzqb4odu7idlxDKMS5z1PCn0tdulT1eJzCFsy7iRLEMSl8szeddaRPLNRs88CfkP4hC33e4cGxPxff6ZFzsHCc5FB9UaPOgn4f+OO7o21LhTWm34nxSWsrpa+HBpDVns+WjvMMfxj19JbKNeemCZRmxl264s2ej6c/+9gtRgAA7ufk7j+Tjp9s2KrWjRvJ+Eq2zc26nuZpzzwXIuzXEOzRB/103QRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8TX+B1O8vT7/3uOjAAAAAElFTkSuQmCC"
        link="https://freecodecamp.org/"
        text=""
        />

      </CardGroup>
      <CardGroup>
      <Resource
        title=""
        subTitle=""
        imgAlt=""
        imgSrc=""
        link=""
        text=""
        />
      <Resource
        title=""
        subTitle=""
        imgAlt=""
        imgSrc=""
        link=""
        text=""
        />
      <Resource
        title=""
        subTitle=""
        imgAlt=""
        imgSrc=""
        link=""
        text=""
        />
      </CardGroup>
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
      <CardGroup>
        <Resource
          imgAlt={"Card image cap"}
          imgSrc={"https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}
          title={"Community"}
          subTitle={"Welcome to the workspace"}
          text={"To crush is also to create, and from squashing comes spice. Stay vigilant. The battle for seconds is always sudden and fierce"}
          link={"#"}
        />
        <Resource 
        imgAlt="React"
        imgSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        title="React Learn"
        subTitle="Modern React Documentation"
        text=""
        link="https://beta.reactjs.org/learn"
        />
      </CardGroup>
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
      <h2 className={styles.Heading}><span className={styles.ParenAndBrace}>{']'}</span></h2>
      <h2 className={`${styles.Heading} ${styles.Comment}`}>{'// Miscellaneous'}</h2>
    </Container>
  )


}