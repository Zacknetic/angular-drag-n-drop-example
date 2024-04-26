import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MoviesPageComponent } from './components/movies/movies-page/movies-page.component';
import { DragDropComponent } from './components/drag-drop/drag-drop/drag-drop.component';
@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, DragDropModule, MoviesPageComponent, DragDropComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'drag-n-drop-example';
}
