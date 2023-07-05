import { Marker, Popup } from "react-leaflet";

export default function MarkerMap({name, position, contact}) {
    return (
        <Marker position={position}>
            <Popup>
                {name}. <br /> Linkedin para contato: {contact}.
            </Popup>
        </Marker>
    )
}