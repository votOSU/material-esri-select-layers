import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from '../map/map.component';
import { RouteSelectLayersComponent } from './route-select-layers.component';

describe('RouteSelectLayersComponent', () => {
  let component: RouteSelectLayersComponent;
  let fixture: ComponentFixture<RouteSelectLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MapComponent,
        RouteSelectLayersComponent
      ],
      imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSidenavModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSelectLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
