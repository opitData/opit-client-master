// <!-- <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M5.43762 7.0439L0.753749 2.36002L1.82289 1.29088L6.50677 5.97475L11.5979 0.883582L12.7689 2.05455L7.67774 7.14572L12.3616 11.8296L11.2925 12.8987L6.60859 8.21487L1.51742 13.306L0.346454 12.1351L5.43762 7.0439Z" fill="white"/>
// </svg> -->

// <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
//   <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
// </svg> -->

import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlusComp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    {...props}
  >
    <Path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </Svg>
)

export default PlusComp
