import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import MarkerMap from "../../components/markerMap/MarkerMap";
import { useEffect } from "react";

export default function MapPage({setPage}) {

    useEffect(() => {
        setPage('Map')
    }, []);

    const people = [
        {name: "Julia Machado", position: [50.7234, 10.454602], contact: "https://www.linkedin.com/in/juliasmachado/"},
        {name: "Sofia Couto", position: [50.632, 5.5796], contact: "https://www.linkedin.com/in/sofiacouto2"},
        {name: "Felipe Lauar", position: [48.864, 2.3490], contact: "https://www.linkedin.com/in/filipe-lauar"},
        {name: "Gilson Urbano", position: [55.676, 12.5683], contact: "https://www.linkedin.com/in/gilsonurbano/"},
        {name: "Bruna Queiroz", position: [-23.179, -45.887], contact: "https://www.linkedin.com/in/bruna-queiroz-5a47b7187/"},
        {name: "Clara Máximo", position: [-23.533, -46.6252], contact: "https://www.linkedin.com/in/clara-m%C3%A1ximo/"},
        {name: "Lucas Chaves", position: [41.39, 2.154], contact: "https://www.linkedin.com/in/lucassilvachaves/"},
        {name: "Igor Cangussu", position: [49.75, 6.6333], contact: "https://www.linkedin.com/in/igor-cangussu/"},
        {name: "João Pedro Araujo", position: [48.864716, 2.349014], contact: "https://www.linkedin.com/in/jo%C3%A3o-pedro-de-ara%C3%BAjo-santana-10515b1b5/"},
        {name: "Guilherme Castro", position: [55.676098, 12.568337], contact: "https://www.linkedin.com/in/guilherme-cmachado/"},
        {name: "Rúbia Reis", position: [49.246, -123.116], contact: "https://www.linkedin.com/in/rubiareisg"},
        {name: "Matheus Castro", position: [54.687, 25.279], contact: "https://www.linkedin.com/in/mathyaku"},
        {name: "Lucas Gauzzi", position: [-27.593, -48.558], contact: "https://www.linkedin.com/in/lucasgauzzi/"},
        {name: "Bruno Sampaio", position: [53.3833, -1.466], contact: "https://www.linkedin.com/in/brunocamba/"},
        {name: "Lucas de Camargo", position: [43.4666, -80.516], contact: "https://www.linkedin.com/in/lpescador/"},
        {name: "Amanda Santana", position: [34.156, -118.131], contact: "https://www.linkedin.com/in/lpescador/"},
]
    
    return (
        <MapContainer style={{ height: '100vh', marginTop: '80px', zIndex: '1'}} center={[-19.912, -43.94]} zoom={8} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {people.map(p => <MarkerMap name={p.name} position={p.position} contact={p.contact}/>)}
        </MapContainer>
    )
}