import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component( {
    selector: 'movie-component',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
} )

export class MovieComponent {
    @Input() title;
    @Input() year;
    @Input() duration;
    @Input() genre;
    @Input() plot;
    @Input() poster;
    @Input() isLiked;
    @Input() isSaved;
    @Input() comment;
    @Input() allComments;
    @Input() clearComment;
    @Input() index;

    @Output() likeMovie = new EventEmitter();
    @Output() saveComment = new EventEmitter();


    @Input() get rating() {
        return this.movieRating;
    }
    set rating(val) {
        this.movieRating = val;
    }
    @Output() ratingChange = new EventEmitter();
        
    public movieRating;
    like(index) {
        this.likeMovie.emit(this.index);
    }
    clear(index) {
        // this.movies[index].clearComment = true;
        // this.movies[index].comment = '';
    }

    countWords(newComment) {
        // if( newComment === ''){
        //     return 0
        // }
        // return newComment.trim().split(" ").length;
    }

    save() {
        this.saveComment.emit(this.index);
   }

   handleRatingChange(newRating) {
        this.movieRating = newRating;   
        this.ratingChange.emit(newRating);
    }
}