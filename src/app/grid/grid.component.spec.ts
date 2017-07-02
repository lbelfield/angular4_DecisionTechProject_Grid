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

import { GridComponent } from './grid.component';
import { GridFilterPanelComponent } from '../gridFilterPanel/gridFilterPanel.component';
import { ContractLengthPipe } from './pipes/contractLength.pipe';
import { DealFilterPipe } from './pipes/dealFilter.pipe';


describe('GridComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpModule, FormsModule],
      declarations: [GridComponent, GridFilterPanelComponent, ContractLengthPipe, DealFilterPipe],
      providers: [{ provide: XHRBackend, useClass: MockBackend }]
    }).compileComponents();

  }));

    it('labels', async(() => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.about).toBe("About");
    expect(app.contractLength).toBe("contract length");
    expect(app.speedUsage).toBe("speed/usage");
    expect(app.offer).toBe("Offer");
    expect(app.tv).toBe("TV");
    expect(app.mobile).toBe("Mobile");
    expect(app.cost).toBe("Cost");
  }));

  it('onGridFilterPanelBoxClicked() array should be length 1', async(() => {
    //Assign
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.debugElement.componentInstance;

    app.initialDealsResponse = [
        {"title": "Hello World Broadband"}, 
        {"title" : "Hello World Tv"}, 
        {"title": "foo Tv"}, 
        {"title": "bar Entertainment"},
        {"title": "Hope you liked the pun - Entertainment"},
        {"title": "Entertainment yet again"}
        ]

    var filterArray = new Array<string>();
    filterArray.push("Broadband");

    //Act
    app.onGridFilterPanelBoxClicked(filterArray);

    //Assert
    expect(app.gridFilterPanelCheckbox).toBe(filterArray);
    expect(app.gridFilterPanelCheckbox.length).toBe(1);
  }));

    it('onGridFilterPanelBoxClicked() array should be length 2', async(() => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.debugElement.componentInstance;

    app.initialDealsResponse = [
        {"title": "Hello World Broadband"}, 
        {"title" : "Hello World Tv"}, 
        {"title": "foo Tv"}, 
        {"title": "bar Entertainment"},
        {"title": "Hope you liked the pun - Entertainment"},
        {"title": "Entertainment yet again"}
        ]

    var filterArray = new Array<string>();
    filterArray.push("Broadband");
    filterArray.push("Tv");

    app.onGridFilterPanelBoxClicked(filterArray);

    expect(app.gridFilterPanelCheckbox).toBe(filterArray);
    expect(app.gridFilterPanelCheckbox.length).toBe(2);
  }));

it('onGridFilterPanelBoxClicked() array should be length 3', async(() => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.debugElement.componentInstance;

    app.initialDealsResponse = [
        {"title": "Hello World Broadband"}, 
        { "title" : "Hello World Tv"}, 
        {"title": "foo Tv"}, 
        {"title": "bar Entertainment"},
        {"title": "Hope you liked the pun - Entertainment"},
        {"title": "Entertainment yet again"}
        ]

    var filterArray = new Array<string>();
    filterArray.push("Broadband");
    filterArray.push("Tv");
    filterArray.push("Entertainment");

    app.onGridFilterPanelBoxClicked(filterArray);

    expect(app.gridFilterPanelCheckbox).toBe(filterArray);
    expect(app.gridFilterPanelCheckbox.length).toBe(3);
  }));

});
