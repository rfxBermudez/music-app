import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Artist } from '../../../models/artist';

@Component({
	selector: 'app-artist-display',
	templateUrl: './artist-display.component.html',
	styleUrls: ['./artist-display.component.css']
})
export class ArtistDisplayComponent implements OnInit {
	@Input() artist : Artist;
	@Output() deleteArtist = new EventEmitter<Artist>();
	@Output() editArtist = new EventEmitter<Artist>();
	public isDeleting = false;

	constructor() { }

	ngOnInit() {
		
	}

	borrar(){
		this.isDeleting = true;
		this.deleteArtist.emit(this.artist);
	}


	editar(){
		this.editArtist.emit(this.artist);
	}

}
