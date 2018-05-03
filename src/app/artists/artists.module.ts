import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistAddComponent } from './artists/artist-add/artist-add.component';
import { ArtistDisplayComponent } from './artists/artist-display/artist-display.component';
import { ArtistsService } from './services/artists.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistsRoutingModule } from './artists-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ArtistsComponent,ArtistAddComponent,ArtistDisplayComponent],
  providers: [ArtistsService]
})
export class ArtistsModule { }
