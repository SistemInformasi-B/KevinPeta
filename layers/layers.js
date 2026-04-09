var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4 = new ol.format.GeoJSON();
var features_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4 = format_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4.readFeatures(json_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4.addFeatures(features_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4);
var lyr_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4, 
                style: style_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4,
                popuplayertitle: 'BATAS WILAYAH KELURAHAN-DESA 10K — Batas_Wilayah_KelurahanDesa_10K_AR.shp',
                interactive: true,
                title: '<img src="styles/legend/BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4.png" /> BATAS WILAYAH KELURAHAN-DESA 10K — Batas_Wilayah_KelurahanDesa_10K_AR.shp'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatellite_1,lyr_GoogleSatellite_2,lyr_GoogleSatellite_3,lyr_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4];
lyr_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_BATASWILAYAHKELURAHANDESA10KBatas_Wilayah_KelurahanDesa_10K_ARshp_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});