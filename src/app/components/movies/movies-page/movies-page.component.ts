import { Component } from '@angular/core';
import { Movie, MoviesService } from '../../../services/movies.service';
import { DragDropContainerComponent } from '../../drag-drop/drag-drop-container/drag-drop-container.component';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [DragDropContainerComponent],
  providers: [MoviesService],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})
export class MoviesPageComponent {
  movies: Movie[];
  doneMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getMovies();
  }
}
