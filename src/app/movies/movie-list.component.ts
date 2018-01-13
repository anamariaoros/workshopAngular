import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component( {
    selector: 'movie-list',
    template: `
    <div class="movie-list">
          <movie-component
            *ngFor="let movie of movies; let index=index;"
            [title]="movie.title"
            [year]="movie.year"
            [duration]="movie.duration"
            [genre]="movie.genre"
            [plot]="movie.plot"
            [poster]="movie.poster"
            [isLiked]="movie.isLiked"
            [isSaved]="movie.isSaved"
            [comment]="movie.comment"
            [allComments]="movie.allComments"
            [clearComment]="movie.clearComment"
            [index]="index"
            (saveComment)="handleSaveComment($event)"
            (likeMovie)="handleLikeMovie($event)"
            [(rating)]="movie.rating"
          ></movie-component>
        </div>
    `,
} )

export class MovieListComponent {
    public movies = [
        {
          title: 'Star Wars: The Last Jedi',
          year: 2017,
          duration: '152 min',
          genre: 'Action, Adventure, Fantasy',
          plot: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
          isLiked: false,
          clearComment: false,
          comment: '',
          isSaved: false,
          allComments: [],
          rating: 0,
        },
        {
          title: 'Black Swan',
          year: 2010,
          duration: '108 min',
          genre: 'Drama, Thriller',
          plot: 'A committed dancer wins the lead role in a production of Tchaikovskys \"Swan Lake\" only to find herself struggling to maintain her sanity.',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg',
          isLiked: false,
          clearComment: false,
          comment: '',
          isSaved: false,
          allComments: [],
          rating: 0,
        },
        {
          title: 'Fight Club',
          year: 1999,
          duration: '139 min',
          genre: 'Drama',
          plot: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
          isLiked: false,
          clearComment: false,
          comment: '',
          isSaved: false,
          allComments: [],
          rating: 0,
        },
        {
          title: 'The Godfather: Part II',
          year: 1974,
          duration: '202 min',
          genre: 'Crime, Drama',
          plot: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
          isLiked: false,
          clearComment: false,
          comment: '',
          isSaved: false,
          allComments: [],
          rating: 0,
        }
      ];


    handleSaveComment(index) {
        this.movies[index].isSaved = true;
    }
        
    handleLikeMovie(index) {
        this.movies[index].isLiked = !this.movies[index].isLiked;
    }
}
