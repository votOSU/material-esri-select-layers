import { Component, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-route-select-layers',
  templateUrl: './route-select-layers.component.html',
  styleUrls: ['./route-select-layers.component.scss']
})
export class RouteSelectLayersComponent implements OnInit, OnChanges {
 
  private layer: string;
  private category: string;
  opened: boolean;
  featureLayerUrl: string;
  public yearNum = []; 
  public sigLevel = [];
    private year1500Layer: string;
    public inComingChildData: string; 



  set selectedCategory(value: string) {
    this.category = value;
    this.featureLayerUrl = null;
  }

  get selectedCategory(): string {
    return this.category;
  }

  set selectedLayer(value: string) {
    this.layer = value;

    switch (value) {
      case 'stadiums': {
        
        //this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Recreation/MapServer/0';
        break;
      }
      case 'historicPoints': {
        
        //this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0';
        break;
      }
      case 'historicAreas': {
        
        //this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2';
        break;
      }
      default: {
        this.featureLayerUrl = null;
        break;
      }
    }
  }

  get selectedLayer(): string {
    return this.layer;
  }

  // set selectedCheckbox(value: string)
  // {
  //   this.year1500Layer = value;
  // }

  // get selectedCheckbox()
  // {
  //   return this.year1500Layer;
  // }

  constructor() { }

    getInfoFromChild($event) {
        this.inComingChildData = $event;
    }

  ngOnInit() {
    
  }
  
  ngOnChanges(){
    this.getUsersCheckedbox();
  }
  onYearChange(event, value)
  {
    if (event.checked)
    {
      this.yearNum.push(value);
      this.yearNum = [...this.yearNum];
      
    }
    if (!event.checked)
    {
      let index = this.yearNum.indexOf(value);
      if (index > -1) {
        this.yearNum.splice(index, 1);
        this.yearNum = [...this.yearNum];
      }
    }
    this.getUsersCheckedbox();
    //console.log("Checked List " + this.yearNum);
  }


  onSigLevelChange(event, value)
  {
    if (event.checked)
    {
      this.sigLevel.push(value);
      this.sigLevel = [...this.sigLevel];
      
    }
    if (!event.checked)
    {
      let index = this.sigLevel.indexOf(value);
      if (index > -1) {
        this.sigLevel.splice(index, 1);
        this.sigLevel = [...this.sigLevel];
      }
    }
    //this.getUsersSigCheckedbox();
    this.getUsersCheckedbox();
    console.log("Checked List " + this.sigLevel);
  }

  getUsersCheckedbox()
  {
    console.log("Layer Year " ,this.layer);
    if(this.layer === 'historicPoints') 
    {
      this.featureLayerUrl = null;
      if(this.yearNum.indexOf('1500') > -1)
      {
        this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0';
      }
      if(this.yearNum.indexOf('1600') > -1)
      {
        this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/MapServer/0';
      }
      if(this.yearNum.indexOf('1600') > -1 && this.yearNum.indexOf('1500') > -1)
      {
        this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Recreation/MapServer/0';
      }
      if(this.sigLevel.indexOf('Medium') > -1)
      {
        this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0';
      }
    }
    if(this.layer === 'historicAreas')
    {
      this.featureLayerUrl = null;
      if(this.yearNum.indexOf('1500') > -1)
      {
        this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2';
      }
      if(this.yearNum.indexOf('1600') > -1)
      {
        this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/3';
      }
      if(this.yearNum.indexOf('1600') > -1 && this.yearNum.indexOf('1500') > -1)
      {
        this.featureLayerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/2';
      }

    }
    
    // if(this.yearNum.indexOf('1600') > -1)
    // {
    //   console.log("CHeckbox 1600 to 1699");
    // }
    // if(this.yearNum.indexOf('1500') > -1 && this.yearNum.indexOf('1600') > -1)
    // {
    //   console.log(" BOTH CHecked 1500s & 1600s");
    // }

  }


}
