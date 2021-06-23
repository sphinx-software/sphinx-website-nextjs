import * as React from 'react'
import { FunctionComponent } from 'react'

type LocationType = {
  color?: string
  width: number
  height: number
  fillOpacity?: number
}
const Location: FunctionComponent<LocationType> = ({
  width = 16,
  height = 16,
  fillOpacity = 0.8,
  color = '#fff',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8 0c1.857 0 3.637.722 4.95 2.008A6.787 6.787 0 0115 6.858c0 2.838-2.209 5.813-6.533 8.99a.789.789 0 01-.934 0C3.21 12.67 1 9.696 1 6.858c0-1.82.738-3.564 2.05-4.85A7.075 7.075 0 018 0zm0 4.571c-.619 0-1.212.241-1.65.67a2.262 2.262 0 00-.683 1.616c0 .606.245 1.188.683 1.616.438.429 1.031.67 1.65.67s1.212-.241 1.65-.67c.438-.428.683-1.01.683-1.616 0-.606-.245-1.187-.683-1.616A2.358 2.358 0 008 4.57z'
        fill={color}
        fillOpacity={fillOpacity}
      />
    </svg>
  )
}
export default Location
