import { Injectable } from '@angular/core';
import { Artist } from '../../models/artist';
import { DataService } from '../../services/data.service';

@Injectable()
export class ArtistsService {	
	constructor(private dataService:DataService) { }

	public getArtists(){
		return this.dataService.get('/api/artists');
	}

	public addArtist(artist:Artist){
		return this.dataService.post('/api/artists',{'artist':artist});
	}

	public deleteArtist(artist:Artist){
		return this.dataService.delete('/api/artists/'+artist._id);
	}

	public editArtist(artist:Artist){
		return this.dataService.put('/api/artists/'+artist._id,{'artist':artist});
	}
}
