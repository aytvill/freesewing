import React from 'react'
import { LineDrawingWrapper, regular, thin } from './shared.mjs'

const strokeScale = 0.5

export const Benjamin = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 138 53" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the front
 */
export const BenjaminFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 138 53" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * SVG elements for the front
 */
export const Front = ({ stroke }) => (
  <>
    <path
      key="folds"
      opacity={0.3}
      {...thin(stroke)}
      d="m 68.275,19.943197 c -2.025,3.925 -0.75,5.325 -0.75,9.2 h -0.05 c -0.1,-2.375 -1.35,-4.8 -0.55,-7.175 0.3,-0.775 0.725,-1.5 1.3,-2.05 0.025,0 0.05,0.025 0.05,0.025 z m 0.6,13.675 c 0.45,-1.15 0.825,-2.2 1,-3.375 0.2,-1.875 -0.075,-4.225 0.35,-6.075 H 70.3 c -0.15,1.925 0.3,4.2 0.325,6.125 -0.05,1.3 -0.725,2.525 -1.675,3.35 -0.025,0.025 -0.075,-0.025 -0.075,-0.025 z m -6.25,-4.95 c -2.65,1.675 -5.8,2.925 -8.975,2.325 1.525,-0.375 3.025,-0.6 4.525,-1 1.475,-0.4 2.95,-0.975 4.45,-1.325 z m 0.125,-4.25 c -1.475,-0.475 -2.9,-1.175 -4.325,-1.675 -1.45,-0.525 -2.925,-0.875 -4.425,-1.375 3.225,-0.375 6.275,1.15 8.75,3.05 z m -18.7,1.975 c 1.55,0.15 3.075,0.25 4.6,0.2 1.525,-0.075 3.025,-0.3 4.575,-0.525 3.1,-0.4 6.25,-0.3 9.325,0.3 -1.55,0.025 -3.1,-0.025 -4.625,0.05 -3.1,0.05 -6.15,0.775 -9.25,0.725 -1.575,-0.025 -3.125,-0.3 -4.625,-0.75 z m 31.125,2.275 c 1.5,0.35 2.975,0.925 4.45,1.325 1.5,0.4 3,0.625 4.525,1 -3.175,0.625 -6.325,-0.65 -8.975,-2.325 z m -0.125,-4.25 c 2.5,-1.9 5.525,-3.4 8.75,-3.05 -1.475,0.5 -2.95,0.85 -4.425,1.375 -1.425,0.5 -2.85,1.2 -4.325,1.675 z m 18.7,1.975 c -1.5,0.45 -3.025,0.725 -4.6,0.775 -3.1,0.05 -6.15,-0.7 -9.25,-0.725 -1.525,-0.075 -3.075,-0.025 -4.625,-0.05 3.05,-0.6 6.225,-0.7 9.325,-0.3 1.55,0.2 3.05,0.45 4.575,0.525 1.5,0.025 3.025,-0.075 4.575,-0.225 z"
    />
    <path
      key="outline"
      {...regular(stroke)}
      d="m 82.5,39.268193 c 0,0 4.775,3.875 6.775,4.875 2,1 7.1,3.125 7.1,3.125 l 0.575,-1.125 M 82.525,11.893197 c 0,0 7.25,-5.5000001 14.75,-6.7500001 l 0.25,1.25 M 55.275,39.268193 c 0,0 -4.775,3.875 -6.775,4.875 -2,1 -7.075,3.125 -7.075,3.125 l -0.575,-1.125 M 57,12.943197 m -1.75,-1.05 c 0,0 -7.25,-5.5000001 -14.75,-6.7500001 l -0.25,1.25 m 14.375,5.0000001 h 28.5 m 20,0 c 0.65,0 12.475,0 19.75,0.475 1.775,0.125 4.35,0.325 7.55,1.425 0.975,0.35 1.75,0.6 2.275,0.85 l 0.025,0.35 m -28.475,19.15 c 6.35,-0.025 14.525,-0.9 22.525,-3.15 2.1,-0.6 4.075,-1.25 5.975,-1.95 v -14.05 c -1.3,0.425 -2.625,0.825 -3.975,1.2 -8.625,2.35 -17.3,3.15 -24.525,2.975 m -69.5,-7.275 c -0.65,0 -12.475,0 -19.75,0.475 -1.775,0.125 -4.35,0.325 -7.55,1.425 -0.975,0.35 -1.75,0.6 -2.275,0.85 l -0.025,0.35 m 28.6,19.15 c -6.35,-0.025 -14.65,-0.9 -22.65,-3.15 -2.1,-0.6 -4.075,-1.25 -5.975,-1.95 v -14.05 c 1.3,0.425 2.625,0.825 3.975,1.2 8.625,2.35 17.425,3.15 24.65,2.975 m 39.75,1.225 c 0.225,0.625 1.5,4.35 1.25,7.75 -0.1,1.3 -0.75,5.25 -0.75,5.25 l -0.825,0.25 c -3.825,0.425 -4.275,0.825 -4.925,0.5 -0.5,-0.25 -1.475,-0.2 -2.25,-0.25 -0.575,-0.05 -2.5,-0.25 -2.5,-0.25 -0.25,-1.075 -1.025,-5.475 -1.025,-6.775 0,-4 1.275,-5.875 1.5,-6.5 z m 0,0 c 3.1,-3.9 5.625,-6.025 7.825,-7.25 2.275,-1.275 4.975,-2.35 9.475,-4.1250001 1.55,-0.625 2.85,-1.1 3.725,-1.425 l 6.35,-1.425 c 0.575,1.35 1.35,3.275 2.175,5.6250001 1.575,4.45 0.975,8.875 1.225,15.125 0.05,1.55 0.3,7.4 -0.75,11.299996 -0.775,2.85 -0.875,3.45 -0.9,4.1 -0.025,0.45 -0.05,1.175 -0.3,2.125 -0.175,0.675 -0.35,1.4 -0.9,2.125 -0.475,0.625 -1,1 -1.375,1.225 -2.275,-0.8 -4.125,-1.55 -5.475,-2.125 -5.575,-2.4 -6.025,-3.35 -11.4,-5.625 -2.45,-1.05 -3.425,-1.3 -5.175,-2.425 -2.15,-1.424996 -3.05,-3.074996 -4,-4.224996 m -10.5,0.25 c -0.95,1.15 -1.55,2.55 -3.7,3.949996 -1.725,1.125 -2.7,1.4 -5.175,2.425 -5.375,2.275 -5.8,3.2 -11.4,5.625 -1.35,0.575 -3.2,1.325 -5.475,2.125 -0.35,-0.225 -0.9,-0.6 -1.375,-1.225 -0.55,-0.725 -0.75,-1.45 -0.9,-2.125 -0.25,-0.975 -0.275,-1.675 -0.3,-2.125 -0.05,-0.65 -0.175,-2.075 -0.95,-4.9 -1.05,-3.899996 -0.775,-15.999996 -0.5,-17.999996 0.375,-2.75 0.25,-3 1,-7.625 0.4,-2.4500001 1.6,-4.2750001 2.175,-5.6250001 l 6.35,1.425 c 0.875,0.325 2.175,0.825 3.725,1.425 4.5,1.7750001 7.2,2.8500001 9.475,4.1250001 2.175,1.225 4.45,3.35 7.525,7.25"
    />
  </>
)