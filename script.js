var map = L.map('map').setView([31.5, 35], 7);


var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/light-v9',
	tileSize: 512,
	zoomOffset: -1
}).addTo(map);
var baseMaps = {
	"Mapbox": tiles
};
var geojson1 = new L.GeoJSON.AJAX("./data/Arzi_2019.geojson",{
	style:{color: '#ffaaaa',weight:1,fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:ארצי<br>'+'מספר איזור תנועה:' + feature.properties.TAZ_1250 + ' <br> שם ישוב:'+feature.properties.city_name;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson1.addTo(map);

var geojson2 = new L.GeoJSON.AJAX("./data/BeerSheva_2019.geojson",{
	style:{color: '#800080',weight:1,fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:באר שבע<br>'+'מספר איזור תנועה:' + feature.properties.TAZ_BSMA + ' <br> שם ישוב:'+feature.properties.Municipality_Name;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson2.addTo(map);

var geojson3 = new L.GeoJSON.AJAX("./data/HaifaNorth_2019.geojson",{
	style:{color: '#008800',weight:1,fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:חיפה<br>'+'מספר איזור תנועה:' + feature.properties.TAZ_NUMBER + ' <br> שם ישוב:'+feature.properties.SZone_name;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson3.addTo(map);


var geojson4 = new L.GeoJSON.AJAX("./data/JlemYosh_2019.geojson",{
	style:{color: '#880000',weight:1,fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:ירושלים-יו"ש<br>'+'מספר איזור תנועה:' + feature.properties.TAZ_NUM + ' <br> שם אזור:'+feature.properties.Name_hebre;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson4.addTo(map);


var geojson5 = new L.GeoJSON.AJAX("./data/NapotMoaza_2021.geojson",{
	style:{color: '#000000',weight:1,fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'שכבת נפות<br>'+'מספר נפה:' + feature.properties.NafaNum + ' <br> שם נפה:'+feature.properties.Nafa;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson5.addTo(map);


var geojson6 = new L.GeoJSON.AJAX("./data/TelAviv_2019.geojson",{
	style:{color: '#8888FF',weight:1,fillOpacity: 0},
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
				var popupcontent = 'מודל:תל אביב<br>'+'מספר איזור תנועה:' + feature.properties.TAZV41 + ' <br> שם ישוב:'+feature.properties.NAME_H;
				layer.bindPopup(popupcontent);
				}
		}
	});
geojson6.addTo(map);


var overlayMaps = {
	"שכבת מודל ארצי": geojson1,
	"שכבת מודל באר שבע":geojson2,
	"שכבת מודל חיפה":geojson3,
	'שכבת מודל ירושלים - יו"ש':geojson4,
	"שכבת נפות":geojson5,
	"שכבת מודל תל אביב":geojson6
};
L.control.layers(baseMaps,overlayMaps).addTo(map);

L.Control.Legend = L.Control.extend({
    onAdd: function(map) {
        let container = L.DomUtil.create('div', 'leaflet-bar control info legend');
        container.title = "מקרא";
        
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);
        container.innerHTML += '<i style="background: #ffaaaa"></i> מודל ארצי <br>'
		container.innerHTML += '<i style="background: #800080"></i> מודל באר שבע <br>'
		container.innerHTML += '<i style="background: #008800"></i> מודל חיפה <br>'
		container.innerHTML += '<i style="background: #880000"></i> מודל ירושלים <br>'
        container.innerHTML += '<i style="background: #000000"></i> נפות <br>'
        container.innerHTML += '<i style="background: #8888FF"></i> מודל תל אביב <br>'

        

        return container;
    }
})
L.control.legend = function(opts) {
    return new L.Control.Legend(opts);
}
let legendControl = L.control.legend({ position: 'topright' }).addTo(map);