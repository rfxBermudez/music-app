import { Artist } from '../models/artist';

export class Album {
	public _id: string = undefined;
	public name : string = '';
	public price : number = 0;
	public artist: Artist =  new Artist();
	constructor(){}
}
