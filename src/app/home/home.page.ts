import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../Services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, ],
})
export class HomePage implements OnInit{
  movies:any = [];
  constructor(private movieService:MovieService) {

  }

  ngOnInit(): void{
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
      }
    );
  }
}
