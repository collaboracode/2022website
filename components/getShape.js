//? maybe we could make a helpers folder and put this in it
export default function getShape() {
  const borderShapes = [ // class names in utility classes
    'radius-one',
    'radius-two',
    'radius-three'
  ]
  return borderShapes[Math.floor(Math.random() * borderShapes.length)]
}