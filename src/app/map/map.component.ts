import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, OnChanges {

    public featureInfo: string;
    public selectedName: string;
    public testingInfo: string;

    @Output() public infoToSend = new EventEmitter<string>(); 

  esriLoaderOptions: object = {};
  mapView: esri.MapView;
  mapViewProperties: esri.MapViewProperties;
  webMap: esri.WebMap;
  
  webMapPortalId = '8dda0e7b5e2d4fafa80132d59122268c';
  webMapProperties: esri.WebMapProperties;

  @Input()
  featureLayerUrl: string;

  @Output()
  mapLoaded = new EventEmitter<boolean>();

  @ViewChild('mapViewNode', { static: false })
  private mapViewNodeElementRef: ElementRef;

  constructor() {
    this.esriLoaderOptions = {
      url: 'https://js.arcgis.com/4.12/',
      css: true
    };
    loadModules([
      'esri/WebMap',
      'esri/geometry/SpatialReference',
    ], this.esriLoaderOptions)
      .then(([
        WebMap
      ]) => {
        this.webMapProperties = {
            basemap: "gray-vector"
        };
        this.webMap = new WebMap(this.webMapProperties);
      });
  }

  ngOnInit() {
    this.createMapView();
  }

  ngOnChanges() {
    this.changeMapLayer();
  }

  createMapView() {
    loadModules([
      'esri/views/MapView'
    ], this.esriLoaderOptions)
      .then(([
        MapView
      ]) => {
        this.mapViewProperties = {
          container: this.mapViewNodeElementRef.nativeElement,
          center:[-94, 37],
          zoom: 5,
          map: this.webMap
        };
        this.mapView = new MapView(this.mapViewProperties);
        this.mapView.when(() => {
          // All the resources in the MapView and the map have loaded. Now execute additional processes
          this.mapLoaded.emit(true);
        }, err => {
          console.error(err);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  changeMapLayer()
  {
    loadModules([
      'esri/layers/FeatureLayer'
    ], this.esriLoaderOptions)
      .then(([
        FeatureLayer
      ]) => {
        if (this.featureLayerUrl)
        {
            const featureLayer = new FeatureLayer({
              url: this.featureLayerUrl,
              outFields: ["*"]
            });
          //this.mapView.map.basemap.baseLayers.forEach((baseLayer) => {
            //baseLayer.visible = false;
          //})
            this.mapView.map.removeAll();
            this.mapView.map.add(featureLayer);
            this.queryObject1(featureLayer);
            
        } else {
          if (this.mapView && this.mapView.map) {
            this.mapView.map.removeAll();
          }
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

    queryObject1(featureLayer) {
        var fAttribute
        var query = featureLayer.createQuery();
        query.where = "objectid = 1"; //should be Minnesota or Hawaii if selected Historic Places -> Historic Areas with a year checked. 
        query.outFields = ["*"];
        featureLayer.queryFeatures(query).then(function (response) {
            fAttribute = response.features;
            console.log("Queried Name: " + fAttribute[0].attributes.state_name); //should be Minnesota or Hawaii if selected Historic Places -> Historic Areas with a year checked. 
            this.selectedName = fAttribute[0].attributes.state_name;
        });
        console.log("State Name: "+this.selectedName);
        this.infoToSend.emit(this.selectedName);
    }

}
