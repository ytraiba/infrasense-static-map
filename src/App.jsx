import {React} from 'react'
import './App.css'
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import { states } from "./states"
import Logo from './images/logo-infrasense-300x200.png'

function App() {

  const style = (feature => {
  return ({
      fillColor: feature.style,
    });
  });

  return (
    <div className='map-wrapper'>
      <div className='logo'>
        <img src={Logo} style={{width: 100,}} alt='alt' />
      </div>
      <MapContainer 
        center={ [ 40, -100 ] } 
        zoom={3.5} 
        scrollWheelZoom={false} 
        zoomControl={false} 
        dragging={false}
        style={{ width: '100%', height: '100%' }}
        >
      {states && (<GeoJSON data={states} style={style} />)}  
        <Popup position={[47, -60]} autoClose={false}  closeOnClick={false}>
         <h1 className='w-fit m-auto font-bold border-b-2 border-[#FF0000]'>The Northeast</h1> 
         <span>
          <li>Aerial deck condition surveys of 199 bridge decks (RI)</li>
          <li>10 Subsurface utility engineering (SUE) surveys, 5 for MassDOT projects (MA)</li>
          <li>Statewide pavement structure evaluation including 13 project sections, 135 lane-miles (NJ)</li>
          <li>Nondestructive testing for various bridges including Varrazzano Narrows and Whitestone Bridges (NY)</li>
          <li>Pavement structure evaluations on 6 project sections as part of statewide on-call</li>
         </span>
        </Popup>
        <Popup position={[20, -60]} autoClose={false} closeOnClick={false}>
        <h1 className='w-fit m-auto font-bold border-b-2 border-yellow-500'>The South</h1>
        <span>
          <li>Aerial deck condition surveys of 199 bridge decks (RI)</li>
          <li>10 Subsurface utility engineering (SUE) surveys, 5 for MassDOT projects (MA)</li>
          <li>Statewide pavement structure evaluation including 13 project sections, 135 lane-miles (NJ)</li>
          <li>Nondestructive testing for various bridges including Varrazzano Narrows and Whitestone Bridges (NY)</li>
          <li>Pavement structure evaluations on 6 project sections as part of statewide on-call</li>
         </span>
        </Popup>
        <Popup position={[47, -135]} autoClose={false} closeOnClick={false}>
        <h1 className='w-fit m-auto font-bold border-b-2 border-[#50C878]'>The Midwest</h1>
        <span>
          <li>Aerial deck condition surveys of 199 bridge decks (RI)</li>
          <li>10 Subsurface utility engineering (SUE) surveys, 5 for MassDOT projects (MA)</li>
          <li>Statewide pavement structure evaluation including 13 project sections, 135 lane-miles (NJ)</li>
          <li>Nondestructive testing for various bridges including Varrazzano Narrows and Whitestone Bridges (NY)</li>
          <li>Pavement structure evaluations on 6 project sections as part of statewide on-call</li>
         </span>
        </Popup>
        <Popup position={[20, -135]} autoClose={false} closeOnClick={false}>
        <h1 className='font-bold border-b-2 border-[#0000FF] w-fit m-auto'>The West</h1>
        <span>
          <li>Aerial deck condition surveys of 199 bridge decks (RI)</li>
          <li>10 Subsurface utility engineering (SUE) surveys, 5 for MassDOT projects (MA)</li>
          <li>Statewide pavement structure evaluation including 13 project sections, 135 lane-miles (NJ)</li>
          <li>Nondestructive testing for various bridges including Varrazzano Narrows and Whitestone Bridges (NY)</li>
          <li>Pavement structure evaluations on 6 project sections as part of statewide on-call</li>
         </span>
        </Popup>
      <TileLayer url = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"/>
      </MapContainer>
    </div>
  );
}

export default App;



