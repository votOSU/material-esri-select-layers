import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteSelectLayersComponent } from './route-select-layers/route-select-layers.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteSelectLayersComponent,
    MapComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
