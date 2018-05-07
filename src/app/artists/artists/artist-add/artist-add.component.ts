import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Artist } from '../../../models/artist';
import { patternValidator } from '../../../shared/pattern-validator';
import { mayusValidator } from '../../../shared/mayus-validator';

@Component({
	selector: 'app-artist-add',
	templateUrl: './artist-add.component.html',
	styleUrls: ['./artist-add.component.css']
})
export class ArtistAddComponent implements OnInit {
	@Output() addArtist = new EventEmitter<any>();
	@Output() editArtist = new EventEmitter<any>();
	public artistForm: FormGroup;
	@Input() canAdd : boolean = true;
	@Input('selectedArtist') artist: Artist = new Artist();
	public submitted: boolean = false;
	public isEditing: boolean = false;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.artistForm = this.formBuilder.group({
			_id: new FormControl(undefined),
			name: new FormControl('', [
				Validators.required, 
				Validators.minLength(1), 
				Validators.maxLength(50),
				mayusValidator(/^[^a-z]*$/)
			]),
			email: new FormControl('', [Validators.required,patternValidator(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)])
		});
	}

	onSubmit() {
		if(this.isEditing){
			this.editArtist.emit({artist:this.artistForm.value,form:this.artistForm});
			this.isEditing = false;
		} else {
			this.addArtist.emit({artist:this.artistForm.value,form:this.artistForm});
		}
		this.submitted = true; 
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.artist && changes.artist.currentValue._id){
			console.log('is editing');
			if(changes.artist.currentValue.__v !== undefined) {
				delete changes.artist.currentValue.__v;
			}
			this.artistForm.setValue(changes.artist.currentValue);
			this.isEditing = true;
		}
	}

	revert(){
		this.artistForm.reset();
		this.submitted = false;
		this.isEditing = false;
	}

}
