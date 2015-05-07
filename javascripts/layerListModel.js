(function() {
  window.dashboard.service('layerListModel', [
    '$rootScope', 'styleHelper', function($rootScope, styleHelper) {
      var damagedBuildingsLayer, hotosmLayer, landslideLayer, mediaLayer, povertyLayer;
      hotosmLayer = {
        name: 'HOTOSM',
        active: true,
        opacity: 0.5,
        source: {
          type: 'OSM',
          url: 'http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }
      };
      mediaLayer = {
        name: 'media-layer',
        active: true,
        displayed: true,
        source: {
          type: 'GeoJSON',
          url: 'data/media.geojson'
        },
        style: function(feature, resolution) {
          debugger;
        },
        metadata: {
          name: "Mainstream Media text",
          source: "Worldbank"
        }
      };
      landslideLayer = {
        name: 'landslides',
        active: true,
        displayed: true,
        source: {
          type: 'GeoJSON',
          url: 'data/landslides.geojson'
        },
        metadata: {
          name: "Landslides",
          source: "Worldbank"
        }
      };
      damagedBuildingsLayer = {
        name: 'damagedBuildings',
        active: true,
        displayed: true,
        source: {
          type: 'GeoJSON',
          url: 'data/buildings.geojson'
        },
        metadata: {
          name: "Damages Buildings",
          source: "Worldbank"
        }
      };
      povertyLayer = {
        name: 'poverty',
        active: true,
        displayed: true,
        source: {
          type: 'GeoJSON',
          url: 'data/poverty.geojson'
        },
        style: styleHelper.povertyAvgStyle,
        selectedStyle: "povertyAvgStyle",
        styleOptions: [
          {
            styleName: "Avg Poor",
            styleParam: "povertyAvgStyle"
          }, {
            styleName: "Absolute # of Poor",
            styleParam: "povertyAbsStyle"
          }
        ],
        metadata: {
          name: "Poverty Levels",
          source: "Worldbank"
        }
      };
      this.layerGroups = [
        {
          name: "Poverty",
          layers: [povertyLayer]
        }, {
          name: "Media",
          layers: [mediaLayer]
        }
      ];
      this.list = _.unique(_.flatten([
        _.collect(this.layerGroups, function(group) {
          return group.layers;
        }), hotosmLayer
      ]));
      return this;
    }
  ]);

}).call(this);
