import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http'; 

import { FormsModule } from '@angular/forms';

import {MockBackend} from '@angular/http/testing';

import { Pipe, PipeTransform } from '@angular/core';
import { Deal } from '../dataContracts/deal';
import { DealFilterPipe } from './dealFilter.pipe';

describe('DealFilterPipe', () => {

it('dealsResponse should return one dea', async(() => {
    
    //Assign
    let dealFilterPipe = new DealFilterPipe();

    var deal: any = [
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
    var result = dealFilterPipe.transform(deal, filterArray);

    //Assert
    expect(result[0].title).toBe("Hello World Broadband");
    expect(result.length).toBe(1);
  }));


it('transform should return two deals', async(() => {

    let dealFilterPipe = new DealFilterPipe();

    var deal: any = [
        {"title": "Hello World Broadband"}, 
        {"title" : "Hello World Tv"}, 
        {"title": "foo Tv"}, 
        {"title": "bar Entertainment"},
        {"title": "Hope you liked the pun - Entertainment"},
        {"title": "Entertainment yet again"}
        ]

    var filterArray = new Array<string>();
    filterArray.push("Tv");

    var result: any = dealFilterPipe.transform(deal, filterArray);

    expect(result[0].title).toBe("Hello World Tv");
    expect(result[1].title).toBe("foo Tv");
    expect(result.length).toBe(2);
  }));

it('transform should return three deals', async(() => {

    let dealFilterPipe = new DealFilterPipe();

    var deal: any = [
        {"title": "Hello World Broadband"}, 
        {"title" : "Hello World Tv"}, 
        {"title": "foo Tv"}, 
        {"title": "bar Entertainment"},
        {"title": "Hope you liked the pun - Entertainment"},
        {"title": "Entertainment yet again"}
        ]

    var filterArray = new Array<string>();
    filterArray.push("Entertainment");

    var result: any = dealFilterPipe.transform(deal, filterArray);

    expect(result[0].title).toBe("bar Entertainment");
    expect(result[1].title).toBe("Hope you liked the pun - Entertainment");
    expect(result[2].title).toBe("Entertainment yet again");
    expect(result.length).toBe(3);
  }));

});
