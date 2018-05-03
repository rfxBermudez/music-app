import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistsService } from '../services/artists.service';

@Component({
	selector: 'app-artists',
	templateUrl: './artists.component.html',
	styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
	public artists : Artist[];
	public selectedArtist : Artist = new Artist();
	public loading : boolean = false;

	constructor(private artistService:ArtistsService) { }

	ngOnInit() {
		this.getArtist();
	}

	public editArtist(artist){
		this.selectedArtist = Object.assign({}, artist);
	}

	public editArtistSave(artist){
		this.artistService.editArtist(artist.artist)
			.then(data => {
				artist.form.reset();
				this.getArtist();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public deleteArtist(artist){
		this.artistService.deleteArtist(artist)
			.then(data => {
				this.getArtist();
			});
	}

	public getArtist(){
		this.artistService.getArtists().subscribe((data) => {
		
				this.artists = data.artist;
			});
	}

	public addArtist(artist:any){
		console.log(artist);
		this.loading = true;
		delete artist.artist._id;
		this.artistService.addArtist(artist.artist)
			.then(data => {
				artist.form.reset();
				this.loading = false;
				this.getArtist();
			})
			.catch(error => {
				this.loading = false;
				alert('El usuario seleccionado ya existe, por favor seleccione otro');
			});
	}

}
