import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CrosswordDto } from '../typing/crosswordDto';
import { Observable } from 'rxjs';
import { env } from '../envireonments/envirenment.dev';

@Injectable({
  providedIn: 'root'
})
export class CrosswordService {
  private http = inject(HttpClient);

  getCrossword(): Observable<CrosswordDto>{
    return this.http.get<CrosswordDto>(env.crosswordsApi + "/crossword")
  }
}
