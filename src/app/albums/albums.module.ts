import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumAddComponent } from './albums/album-add/album-add.component';
import { AlbumDisplayComponent } from './albums/album-display/album-display.component';
import { AlbumsService } from './services/albums.service';
import { ArtistsService } from '../artists/services/artists.service';
import { TextContainsValidator } from '../shared/text-contains.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosRoutingModule } from './albums-routing.module';
import { AmountPipe } from './../amount.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AlbumsComponent,AlbumAddComponent,AlbumDisplayComponent,TextContainsValidator,AmountPipe],
  providers: [AlbumsService, ArtistsService]
})
export class AlbumsModule { }
