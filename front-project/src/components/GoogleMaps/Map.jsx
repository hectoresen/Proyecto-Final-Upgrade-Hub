import React, { useEffect, useState, useRef } from 'react';
import { GMap } from 'primereact/gmap';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { loadGoogleMaps, removeGoogleMaps } from './GoogleMaps';

const Map = () => {

    const [googleMapsReady, setGoogleMapsReady] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [markerTitle, setMarkerTitle] = useState('');
    const [draggableMarker, setDraggableMarker] = useState(false);
    const [overlayss, setOverlayss] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null);

    const toast = useRef(null);
    const infoWindow = useRef(null);
  
    useEffect(() => {
        loadGoogleMaps(() => {
            setGoogleMapsReady(true);
        });

        return () => {
            removeGoogleMaps();
        }
    },[])

    const onMapClick = (event) => {
        setDialogVisible(true);
        setSelectedPosition(event.latLng)
    }

    const onOverlayClick = (event) => {
        let isMarker = event.overlay.getTitle !== undefined;

        if(isMarker) {
            let title = event.overlay.getTitle();
            infoWindow.current = infoWindow.current||
            infoWindow.setContent('<div>' + title + '</div>');
            infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());

            toast.current.show({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            toast.current.show({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }

   const handleDragEnd = (event) => {
        toast.current.show({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
    }

    const addMarker = () => {
        let newMarker = {
                            position: {
                                lat: selectedPosition.lat(),
                                lng: selectedPosition.lng()
                            },
                            title: markerTitle,
                            draggable: draggableMarker
                        }

        setOverlayss([...overlayss, newMarker]);
        setDialogVisible(false);
        setDraggableMarker(false);
        setMarkerTitle('');
    }

    const onMapReady = (event) => {
        setOverlayss(
            [
               {position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"},
              {position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"},
       {position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"},
            
            ]
        );
    }

    const onHide = (event) => {
        setDialogVisible(false);
    }

    const options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

    const footer = <div>
        <Button label="Yes" icon="pi pi-check" onClick={addMarker} />
        <Button label="No" icon="pi pi-times" onClick={onHide} />
    </div>;

    return (
        <div>
            <Toast ref={toast}></Toast>

            {
                googleMapsReady && (
                    <div className="card">
                        <GMap overlayss={overlayss} options={options} style={{width: '50%', minHeight: '320px'}} onMapReady={onMapReady}
                            onMapClick={onMapClick} onOverlayClick={onOverlayClick} onOverlayDragEnd={handleDragEnd} />
                    </div>
                )
            }

            <Dialog header="New Location" visible={dialogVisible} width="300px" modal footer={footer} onHide={onHide}>
                <div className="grid p-fluid">
                    <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="title">Label</label></div>
                    <div className="col-10"><InputText type="text" id="title" value={markerTitle} onChange={(e) => setMarkerTitle(e.target.value)} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}>Lat</div>
                    <div className="col-10"><InputText readOnly value={selectedPosition ? selectedPosition.lat() : ''} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}>Lng</div>
                    <div className="col-10"><InputText readOnly value={selectedPosition ? selectedPosition.lng() : ''} /></div>

                    <div className="col-2" style={{paddingTop:'.75em'}}><label htmlFor="drg">Drag</label></div>
                    <div className="col-10"><Checkbox checked={draggableMarker} onChange={(event) => setDraggableMarker(event.checked)}/></div>
                </div>
            </Dialog>
        </div>
    );
}
export default Map