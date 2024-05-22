/*----------------------------------------------------------------------------------------------\
|  _____      _   __ _             _ _         ____   ___ ____  _    ______   ___ ____  _  _    |
| /__   \__ _(_) / _\ |_ _   _  __| (_) ___   |___ \ / _ \___ \/ |  / /___ \ / _ \___ \| || |   |
|   / /\/ _` | | \ \| __| | | |/ _` | |/ _ \    __) | | | |__) | | / /  __) | | | |__) | || |_  |
|  / / | (_| | | _\ \ |_| |_| | (_| | | (_) |  / __/| |_| / __/| |/ /  / __/| |_| / __/|__   _| |
|  \/   \__,_|_| \__/\__|\__,_|\__,_|_|\___/  |_____|\___/_____|_/_/  |_____|\___/_____|  |_|   |
|                                                                                               |
\----------------------------------------------------------------------------------------------*/
import useIsBrowser from '@docusaurus/useIsBrowser';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import L from 'leaflet';

export default function MapViewer() {
    const isBrowser = useIsBrowser();

    if(isBrowser){
        const { MapContainer, TileLayer, GeoJSON, LayersControl, MinimapControl } = require('react-leaflet');

        const Markers = require('@site/static/map/Markers.json');
        const Rivers = require('@site/static/map/Rivers.json');
        const Routes = require('@site/static/map/Routes.json');
        const Map = require('@site/static/map/Map.json');

        return (
            <main>
                 <MapContainer center={[0, 0]} zoom={13} style={{ height: "100vh" }}>
                     <TileLayer
                         url="/map/tiles/{z}/{x}_{y}.png"
                         attribution='&copy; <a href="https://taistudio.fr/">Tai Studio</a>'
                     />
                     <LayersControl position="topright">
                         <LayersControl.Overlay name="Marker">
                             <GeoJSON data={Markers} pathOptions={{ color: 'green' }} />
                         </LayersControl.Overlay>
                         <LayersControl.Overlay name="Rivers">
                             <GeoJSON data={Rivers} />
                         </LayersControl.Overlay>
                         <LayersControl.Overlay name="Routes">
                             <GeoJSON data={Routes} pathOptions={{ color: 'yellow' }} />
                         </LayersControl.Overlay>
                         <LayersControl.Overlay name="Map">
                             <GeoJSON data={Map} pathOptions={{ color: 'purple' }} />
                         </LayersControl.Overlay>
                     </LayersControl>
                     {/* <MinimapControl position="topright" /> */}
                 </MapContainer>
            </main>
        );
    }
    
    return (<main></main>);
}
