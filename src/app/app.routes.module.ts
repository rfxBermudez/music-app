import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    { 
        path: '',  
        component: HomeComponent
    },
    { 
        path: 'albums',  
        loadChildren: 'app/albums/albums.module#AlbumsModule'
    },
    { 
        path: 'artist',  
        loadChildren: 'app/artists/artists.module#ArtistsModule'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }