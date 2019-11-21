function(feature, layer) {
            layer.bindPopup("<h3>Magnitude: " + feature.properties.mag + "</h3><h3>Location: " + feature.properties.place +
                "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
        },

           pointToLayer: function(feature, latlng) {
            return new L.circle(latlng, {
                radius: getRadius(feature.properties.mag),
                fillColor: getColor(feature.properties.mag),
                fillOpacity: .6,
                color: "#000",
                stroke: true,
                weight: .10
            })
        }