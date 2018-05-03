import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumsService } from '../services/albums.service';

@Component({
	selector: 'app-albums',
	templateUrl: './albums.component.html',
	styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, AfterViewInit {
	public albums : Album[];
	public selectedAlbum : Album = new Album;
	public loading : boolean = false;
	constructor(private albumsService: AlbumsService) { }

	ngOnInit() {
		this.getAlbums();
	}

	public editAlbum(album){
		this.selectedAlbum = Object.assign({}, album);
	}

	public editAlbumSave(album){
		this.albumsService.editAlbum(album.album)
			.then(data => {
				this.getAlbums();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public deleteAlbum(album){
		this.albumsService.deleteAlbum(album)
			.then(data => {
				this.getAlbums();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public getAlbums(){
		this.albumsService.getAlbums().subscribe((data) => {
				this.albums = data.album;
			},(error)=>{
				console.log('error',error);
			});
	}

	public addAlbum(album:any){
		this.loading = true;
		this.albumsService.addAlbum(album.album)
			.then(data => {
				album.form.reset();
				this.loading = false;
				this.getAlbums();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	ngAfterViewInit(){
		console.timeEnd();
	}
}
