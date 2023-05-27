// Startegic Model TAZ maps

var map = L.map('map').setView([31.5, 35], 7);
L.Control.boxzoom({ position:'topleft' }).addTo(map);
map.createPane('back');
map.getPane('back').style.zIndex = 500;
map.createPane('back2');
map.getPane('back2').style.zIndex = 750;
map.createPane('other');
map.getPane('other').style.zIndex = 1000;
map.createPane('front');
map.getPane('front').style.zIndex = 1500;

/*var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/light-v9',
	tileSize: 512,
	zoomOffset: -1
}).addTo(map);  */

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {  // CartoDB_Positron
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

tiles = CartoDB_Positron
tiles.addTo(map); 

aerial = Esri_WorldImagery;


var geojson1 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/Arzi_2019.geojson",{
	pane: 'back',
	style:{color: '#ffaaaa', weight:7, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:ארצי<br>'+'מספר איזור תנועה:' + feature.properties.TAZ_1250 + ' <br> שם ישוב:'+feature.properties.city_name;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson1.addTo(map); // arzi

var geojson2 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/BeerSheva_2019.geojson",{
	pane: 'other',
	style:{color: '#800080', weight:1, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:באר שבע<br>'+'מספר איזור תנועה:' + feature.properties.TAZ_BSMA + ' <br> שם ישוב:'+feature.properties.Municipality_Name;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson2.addTo(map); // BeerSheva

var geojson3 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/HaifaNorth_2019.geojson",{
	pane: 'other',
	style:{color: '#008800', weight:1, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:חיפה<br>'+'מספר איזור תנועה:' + feature.properties.TAZ_NUMBER + ' <br> שם ישוב:'+feature.properties.SZone_name;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson3.addTo(map); // Haifa

var geojson4 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/JlemYosh_2019.geojson",{
	pane: 'other',
	style:{color: '#880000', weight:1, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:ירושלים-יו"ש<br>'+'מספר איזור תנועה:' + feature.properties.TAZ_NUM + ' <br> שם אזור:'+feature.properties.Name_hebre;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson4.addTo(map); // Jlem

var geojson5 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/TelAviv_2019.geojson",{
	pane: 'other',
	style:{color: '#8888FF', weight:1, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:תל אביב<br>'+'מספר איזור תנועה:' + feature.properties.TAZV41 + ' <br> שם ישוב:'+feature.properties.NAME_H;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson5.addTo(map); // Tlv

var geojson6 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/NapotMoaza_2021.geojson",{
	pane: 'front',
	style:{color: '#000000', weight:5, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'שכבת נפות<br>'+'מספר נפה:' + feature.properties.NafaNum + ' <br> שם נפה:'+feature.properties.Nafa;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson6.addTo(map); // Napot

var geojson7 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/metropolin_rings_2008.geojson",{
	pane: 'front',
	style:{color: '#00008B', weight:5, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'שכבת גזרות<br>'+'מספר גזרה:' + feature.properties.full_code + ' <br> שם גזרה:'+feature.properties.full_name;
				layer.bindPopup(popupcontent);
				}
		}
	});
// geojson7.addTo(map); // Napot

var geojson8 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/stat2011_simp.geojson",{
	pane: 'back2',
	style:{color: '#eea6f7', weight:1.5, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'אזורים סטטיסטיים 2011<br>'+'סמל ישוב:' + feature.properties.SEMEL_YISH +' מספר א"ס:' + feature.properties.STAT11 + ' <br> שם יישוב:'+feature.properties.SHEM_YISHU;
				layer.bindPopup(popupcontent);
				}
		}
	});
// geojson8.addTo(map); // Napot

var geojson9 = new L.GeoJSON.AJAX("https://motroundtables.github.io/taz_map/data/stat2022_simp.geojson",{
	pane: 'back2',
	style:{color: '#9932CC', weight:5, fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'אזורים סטטיסטיים 2022<br>'+'סמל ישוב:' + feature.properties.SEMEL_YISH +' מספר א"ס:' + feature.properties.STAT_2022 + ' <br> שם יישוב:'+feature.properties.SHEM_YISHU;
				layer.bindPopup(popupcontent);
				}
		}
	});
// geojson9.addTo(map); // Napot


// Overlay layers are grouped
var groupedOverlays = {
  "אזורי תנועה מודלים": {
	"מודל חיפה":geojson3,
	"מודל תל אביב":geojson5,
	'מודל ירושלים - יו"ש':geojson4,
	"מודל באר שבע":geojson2,
	"מודל ארצי": geojson1,
  },
  "אזורים סטטיסטיים": {
	"2011":geojson8, 
	"2022":geojson9
  },
  "שכבות אחרות": {
	"נפות":geojson6, 
	"גזרות מטרופולין":geojson7
  }
};


var baseMaps = {
	"בסיס": tiles,
	'תצ"א' : aerial
};

var options = {
  collapsed:false,
  // exclusiveGroups: ["Landmarks"],  // Make the "Landmarks" group exclusive (use radio inputs)
  groupCheckboxes: true  // Show a checkbox next to non-exclusive group labels for toggling all
};

var layerControl = L.control.groupedLayers(baseMaps, groupedOverlays, options);
map.addControl(layerControl);

setPopUpZIndex()

L.Control.Legend = L.Control.extend({
	onAdd: function(map) {
		let container = L.DomUtil.create('div', 'leaflet-bar control info legend');
		container.title = "מקרא";

 	L.DomEvent.disableClickPropagation(container);
	L.DomEvent.disableScrollPropagation(container);
		container.innerHTML += '<i style="background: #008800"></i> מודל חיפה - גרסה <br>'
		container.innerHTML += '<i style="background: #8888FF"></i> מודל תל אביב - גרסה 4.2 <br>'
		container.innerHTML += '<i style="background: #880000"></i> מודל ירושלים - גרסה 3.2<br>'
		container.innerHTML += '<i style="background: #800080"></i> מודל באר שבע - גרסה <br>'
		container.innerHTML += '<i style="background: #ffaaaa"></i> מודל ארצי - גרסה <br>'
		container.innerHTML += '<i style="background: #000000"></i> נפות <br>'
		container.innerHTML += '<i style="background: #00008B"></i> גזרות <br>'
		container.innerHTML += '<i style="background: #eea6f7"></i> א"ס 2011 <br>'
		container.innerHTML += '<i style="background: #9932CC"></i> א"ס 2022 <br>'

	return container;
	}
})

L.control.legend = function(opts) {
    return new L.Control.Legend(opts);
}
let legendControl = L.control.legend({ position: 'topright' }).addTo(map);

// source: https://gis.stackexchange.com/questions/162709/set-z-index-of-leaflet-popup
function setPopUpZIndex() {
	let paneCol = document.getElementsByClassName('leaflet-popup-pane')
	let paneToChange = paneCol[0];
	//console.log(paneToChange);
	paneToChange.style.zIndex = 3000;
}
