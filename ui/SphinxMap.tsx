import { FunctionComponent, useState } from 'react'
import ReactMapGL, {
  FullscreenControl,
  GeolocateControl,
  Marker
} from 'react-map-gl'
import { Location } from './icons'

const fullscreenControlStyle = {
  top: 15,
  left: 0,
  padding: '10px'
}

const SphinxMap: FunctionComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 21.044425,
    longitude: 105.802819,
    zoom: 15,
    bearing: 0,
    pitch: 0
  })
  return (
    <div
      className='border-8 border-white border-opacity-20'
      style={{ width: 442, height: 286, overflow: 'hidden', borderRadius: 48 }}
    >
      <ReactMapGL
        width={500}
        height={300}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxApiAccessToken='pk.eyJ1IjoidmlldHBkIiwiYSI6ImNrcWFjeTJzZTA1bGwyb210cXFvd2pna2oifQ.by9oXlSwaXtVh8FPkQimnQ'
        onViewportChange={setViewport}
        {...viewport}
      >
        <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
          <Location width={20} height={20} color={'#e05529'} />
        </Marker>
        <FullscreenControl style={fullscreenControlStyle} />
      </ReactMapGL>
    </div>
  )
}
export default SphinxMap
