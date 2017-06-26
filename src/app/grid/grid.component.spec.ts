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

  it('dealsResponse should return one deal', async(() => {
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

    app.onFilterClicked(filterArray);
    expect(app.dealsResponse[0].title).toBe("Hello World Broadband");
    expect(app.dealsResponse.length).toBe(1);
  }));


    it('dealsResponse should return two deals', async(() => {
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
    filterArray.push("Tv");

    app.onFilterClicked(filterArray);
    expect(app.dealsResponse[0].title).toBe("Hello World Tv");
    expect(app.dealsResponse[1].title).toBe("foo Tv");
    expect(app.dealsResponse.length).toBe(2);
  }));

it('dealsResponse should return three deals', async(() => {
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
    filterArray.push("Entertainment");

    app.onFilterClicked(filterArray);
    expect(app.dealsResponse[0].title).toBe("bar Entertainment");
    expect(app.dealsResponse[1].title).toBe("Hope you liked the pun - Entertainment");
    expect(app.dealsResponse[2].title).toBe("Entertainment yet again");
    expect(app.dealsResponse.length).toBe(3);
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

});
