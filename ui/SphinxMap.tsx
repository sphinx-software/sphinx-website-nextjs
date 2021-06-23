import { FunctionComponent } from 'react'
import GoogleMapReact from 'google-map-react'
import { Location } from './icons'

const SphinxMap: FunctionComponent = () => {
  return (
    <div
      className='border-8 border-white border-opacity-20'
      style={{ width: 442, height: 286, overflow: 'hidden', borderRadius: 48 }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBgUj2sANulR4HIocr2UugL3XWziYjDimI'
        }}
        defaultCenter={{
          lat: 21.044425,
          lng: 105.802819
        }}
        defaultZoom={15}
      >
        <Location width={20} height={20} color={'#e05529'} />
      </GoogleMapReact>
    </div>
  )
}
export default SphinxMap
