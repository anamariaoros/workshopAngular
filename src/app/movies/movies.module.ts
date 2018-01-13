import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MovieComponent } from './movie.component';
import { MovieListComponent } from "./movie-list.component";
import { RatingComponent } from "./rating.component";

import { FormsModule } from '@angular/forms';


@NgModule ({
    declarations: [MovieComponent, MovieListComponent, RatingComponent],
    exports: [MovieListComponent],
    imports: [BrowserModule, FormsModule],
    providers:[],
})
export class MoviesModule {}