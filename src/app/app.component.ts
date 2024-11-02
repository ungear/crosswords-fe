import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrosswordService } from './services/crossword.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private crosswordService: CrosswordService,
  ) {}

  ngOnInit(){
    this.crosswordService.getCrossword().subscribe(console.log)
  }
}
