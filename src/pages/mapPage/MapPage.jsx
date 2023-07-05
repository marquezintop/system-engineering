import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import MarkerMap from "../../components/markerMap/MarkerMap";
import { useEffect } from "react";

export default function MapPage({setPage}) {

    useEffect(() => {
        setPage('Map')
    }, []);

    const people = [{name: "Julia Machado", position: [50.7234, 10.454602], contact: "https://www.linkedin.com/in/juliasmachado/"}]
    
    return (
        <MapContainer style={{ height: '100vh', marginTop: '140px', zIndex: '1' }} center={[-19.912, -43.94]} zoom={8} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {people.map(p => <MarkerMap name={p.name} position={p.position} contact={p.contact}/>)}
        </MapContainer>
    )
}