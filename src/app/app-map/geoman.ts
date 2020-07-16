https://github.com/geoman-io/leaflet-geoman

interface GmControlOptions extends L.ControlOptions {
    drawMarker?: boolean;
    drawCircleMarker?: boolean;
    drawPolyline?: boolean;
    drawRectangle?: boolean;
    drawCircle?: boolean;
    editMode?: boolean;
    dragMode?: boolean;
    cutPolygon?: boolean;
    removalMode?: boolean;
    pinningOption?: boolean;
    snappingOption?: boolean;
}

interface GmMap extends L.Map {
    pm?: any;
}

interface GmFeatureGroup extends L.FeatureGroup {
    pm?: any;
}