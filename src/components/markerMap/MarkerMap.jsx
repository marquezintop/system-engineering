import { Marker, Popup } from "react-leaflet";
import markerIcon from "./../../assets/marker-icon.png"
import shadowIcon from "./../../assets/marker-shadow.png"
import markerIcon2 from "./../../assets/marker-icon-2x.png"

export default function MarkerMap({name, position, contact}) {
    var greenIcon = L.icon({
        iconUrl: `${markerIcon}`,
        iconRetinaUrl: `${markerIcon2}`,
        shadowUrl: `${shadowIcon}`,
    
        iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize:  [41, 41]
    });

    return (
        <Marker position={position} icon={greenIcon}>
            <Popup>
                {name}. <br /> Linkedin para contato: {contact}.
            </Popup>
        </Marker>
    )
}