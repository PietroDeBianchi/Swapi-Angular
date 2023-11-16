import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-starshipapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starshipapi.component.html',
  styleUrl: '../restapi/restapi.component.css'
})
export class StarshipapiComponent implements OnInit {

  n = 1;
  starshipsList:any;
  constructor (private httpClient :   HttpClient) {
    this.starshipsList=[];
    this.n=1;
  }

  getStarships() {
    this.httpClient.get(`https://swapi.dev/api/vehicles/?page=${this.n}`)
      .subscribe((data: any) => {
        this.starshipsList = data.results;
      });
  }


  nextPage() {
    this.n ++;
    this.getStarships();
  }

  previousPage() {
    if (this.n > 1) {
      this.n --;
      this.getStarships();
    }
  }
  
  ngOnInit(): void {
    this.getStarships();
  }
}
