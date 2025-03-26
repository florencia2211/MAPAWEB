ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([670358.743655, 5920023.570523, 676797.254424, 5923737.935269]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FlorenciaRivasE_1 = new ol.format.GeoJSON();
var features_FlorenciaRivasE_1 = format_FlorenciaRivasE_1.readFeatures(json_FlorenciaRivasE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_FlorenciaRivasE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlorenciaRivasE_1.addFeatures(features_FlorenciaRivasE_1);
cluster_FlorenciaRivasE_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FlorenciaRivasE_1
});
var lyr_FlorenciaRivasE_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FlorenciaRivasE_1, 
                style: style_FlorenciaRivasE_1,
                popuplayertitle: 'Florencia Rivas E. ',
                interactive: true,
                title: '<img src="styles/legend/FlorenciaRivasE_1.png" /> Florencia Rivas E. '
            });

lyr_OSMStandard_0.setVisible(true);lyr_FlorenciaRivasE_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FlorenciaRivasE_1];
lyr_FlorenciaRivasE_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 't_pregunt': 't_pregunt', 'N°_Preg_I': 'N°_Preg_I', 'N°_Preg_C': 'N°_Preg_C', 'Por_Corr': 'Por_Corr', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Nombre': 'Nombre', 'Video': 'Video', 'P_Erradas': 'P_Erradas', });
lyr_FlorenciaRivasE_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 't_pregunt': 'TextEdit', 'N°_Preg_I': 'TextEdit', 'N°_Preg_C': 'TextEdit', 'Por_Corr': 'TextEdit', 'Porc_Incor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', 'P_Erradas': 'TextEdit', });
lyr_FlorenciaRivasE_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 't_pregunt': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N°_Preg_C': 'inline label - always visible', 'Por_Corr': 'inline label - visible with data', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', 'P_Erradas': 'inline label - always visible', });
lyr_FlorenciaRivasE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});