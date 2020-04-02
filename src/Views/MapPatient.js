import * as React from 'react';
import axios from 'axios';

const APP_ID_HERE = 'lnSIkpuj0z204RxRVyA8';
const APP_CODE_HERE = 'OZRJW15Yv9e8NV7RVl16mA';


export default class MapPatient extends React.Component {

    mapRef = React.createRef();
    state = {
        map: null,
        latitude: null,
        longitude: null,
        address: null,
        coordinates: null
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            address: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { addressText } = this.state.address

        // Generar objeto con los datos
        const finalAddress = { ...this.state.address }
        console.log(this.state.address)

        // Agregar dirección al state de App
        // this.props.getAddress(finalAddress)

        let params = {
            'app_id': APP_ID_HERE,
            'app_code': APP_CODE_HERE,
        }

        params['searchtext'] = this.state.address


        const self = this;
        axios.get('https://geocoder.api.here.com/6.2/geocode.json', // Checking address with HERE geocoder API
            { 'params': params }
        ).then(function (response) {
            const view = response.data.Response.View
            const location = view[0].Result[0].Location;
            console.log('latitude: ', location.DisplayPosition.Latitude, 'longitude: ', location.DisplayPosition.Longitude)
            self.setState({
                ...self.state,
                coordinates: { lat: location.DisplayPosition.Latitude, lng: location.DisplayPosition.Longitude }

            })
            console.log(self.state.address)


            // const addressInfo = { ...self.state.address }

            // self.props.getAddress(addressInfo)
        }
        )
            .catch(function (error) {
                console.log('caught failed query');
                alert('ingrese dirección completa: calle, número y ciudad')
            });
    }

    componentDidMount() {
        const platform = new window.H.service.Platform({
            apikey: "0X99ixE-W6vl9eBWT3gd13uiWOOgPW7X683wjR6U_Dk"
        });

        const defaultLayers = platform.createDefaultLayers();

        // Create an instance of the map
        const map = new window.H.Map(
            this.mapRef.current,
            defaultLayers.vector.normal.map,
            {
                // This map is centered over Chile
                center: { lat: -33, lng: -70 },
                zoom: 4,
                pixelRatio: window.devicePixelRatio || 1
            }
        );

        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        // This variable is unused and is present for explanatory purposes
        const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

        // Tratando se traer direccion desde app.js
        console.log(this.props.formAddress)

        // Create the default UI components to allow the user to interact with them
        // This variable is unused
        const ui = window.H.ui.UI.createDefault(map, defaultLayers);

        this.setState({ map });
        this.geolocating();
    }

    // Geolocation function
    geolocating() {
        const location = window.navigator && window.navigator.geolocation;
        if (location) {
            location.getCurrentPosition(
                position => {
                    this.state.map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
                    this.state.map.setZoom(14);
                    const patientMarker = new window.H.map.Marker({ lat: position.coords.latitude, lng: position.coords.longitude });
                    this.state.map.addObject(patientMarker);
                    this.setState({
                        coordinates: { lat: position.coords.latitude, lng: position.coords.longitude }
                    });

                },
                error => {
                    this.setState({
                        latitude: "err-latitude",
                        longitude: "err-longitude"
                    });
                }
            );
        }
    }

    componentWillUnmount() {
        this.state.map.dispose();
    }

    render() {
        return (
            // Set a height on the map so it will display
            <div>
                <div ref={this.mapRef} style={{ height: "500px" }} />
                <div className="card light-green lighten-5">
                    <h5>
                        Ingresar dirección
                </h5>
                    <form onSubmit={this.handleSubmit}
                    >
                        <label>Calle, número y ciudad</label>
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Dirección"
                                name="addressText"
                                onChange={this.handleChange}
                            />
                            <input className="button" type="submit" value="Aceptar" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}





