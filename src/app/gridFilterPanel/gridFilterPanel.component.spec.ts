import { TestBed, async } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { FormsModule } from '@angular/forms';

import {MockBackend} from '@angular/http/testing';

import { GridFilterPanelComponent } from '../gridFilterPanel/gridFilterPanel.component';


describe('GridFilterPanelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpModule, FormsModule],
      declarations: [GridFilterPanelComponent],
      providers: [        
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));

  it('test labels', async(() => {
    const fixture = TestBed.createComponent(GridFilterPanelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.broadbandLabel).toBe("Broadband");
    expect(app.tvLabel).toBe("TV");
    expect(app.mobileLabel).toBe("Mobile");
  }));

  it('test buttons', async(() => {
    const fixture = TestBed.createComponent(GridFilterPanelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isBroadbandChecked).toBe(false);
    expect(app.isTvChecked).toBe(false);
    expect(app.isMobileChecked).toBe(false);
  }));

  it('add broadBand to filterArray', async(() => {
    const fixture = TestBed.createComponent(GridFilterPanelComponent);
    const app = fixture.debugElement.componentInstance;
    
    app.isBroadbandChecked = true;    
    app.onCheckBoxClick();
    expect(app.filterArray[0]).toBe("Broadband");
    expect(app.filterArray.length).toBe(1);
  }));

  it('add TV to filterArray', async(() => {
    const fixture = TestBed.createComponent(GridFilterPanelComponent);
    const app = fixture.debugElement.componentInstance;
    
    app.isTvChecked = true;    
    app.onCheckBoxClick();
    expect(app.filterArray[0]).toBe("Entertainment");
  }));

 it('add Mobile to filterArray', async(() => {
    const fixture = TestBed.createComponent(GridFilterPanelComponent);
    const app = fixture.debugElement.componentInstance;
    
    app.isMobileChecked = true;    
    app.onCheckBoxClick();
    expect(app.filterArray[0]).toBe("Mobile");
  }));

   it('add Mobile and Tv to filterArray', async(() => {
    const fixture = TestBed.createComponent(GridFilterPanelComponent);
    const app = fixture.debugElement.componentInstance;
    
    app.isTvChecked = true; 
    app.isMobileChecked = true;    
    app.onCheckBoxClick();
    expect(app.filterArray[0]).toBe("Entertainment");
    expect(app.filterArray[1]).toBe("Mobile");
    expect(app.filterArray.length).toBe(2);
  }));

 it('add Broadband, Mobile and Tv to filterArray', async(() => {
    const fixture = TestBed.createComponent(GridFilterPanelComponent);
    const app = fixture.debugElement.componentInstance;
    
    app.isBroadbandChecked = true;  
    app.isTvChecked = true; 
    app.isMobileChecked = true;    
    app.onCheckBoxClick();
    expect(app.filterArray[0]).toBe("Broadband");
    expect(app.filterArray[1]).toBe("Entertainment");
    expect(app.filterArray[2]).toBe("Mobile");
    expect(app.filterArray.length).toBe(3);
  }));

});
