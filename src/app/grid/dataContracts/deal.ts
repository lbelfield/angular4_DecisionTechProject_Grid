import { Price } from './price';

export class Deal{
    public title: string;
    public prices: Price;
    public id: number;
    public contractLength: number;
    public tvProduct: any;
    public standardChannels: number;
    public totalChannels: number;
    // todo strongly type
    public hdChannels: any;
    // todo strongly type
    public speed: any[];
    // todo strongly type
    public uploadSpeed: any[];
    // todo strongly type
    public usage: any[];
    // todo strongly type
    public mobile: any[];
    // todo strongly type
    public offer: any[];
    // todo strongly type
    public provider: any[];

    public newLineCost: number;
    // todo strongly type
    public upfrontCosts: any[];
    // todo strongly type
    public productTypes: any[];
    // todo strongly type
    public premiumFeatures: any[];
    // todo strongly type
    public popularChannels: any[];

}
