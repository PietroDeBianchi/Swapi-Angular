import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planetapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planetapi.component.html',
  styleUrl: '../restapi/restapi.component.css'
})
export class PlanetapiComponent implements OnInit {
  
  n = 1;
  planetList:any;
  constructor (private httpClient :   HttpClient) {
    this.planetList=[];
    this.n=1;
  }

  getPlanets() {
    this.httpClient.get(`https://swapi.dev/api/planets/?page=${this.n}`)
      .subscribe((data: any) => {
        this.planetList = data.results;
      });
  }


  nextPage() {
    this.n ++;
    this.getPlanets();
  }

  previousPage() {
    if (this.n > 1) {
      this.n --;
      this.getPlanets();
    }
  }
  
  ngOnInit(): void {
    this.getPlanets();
  }
}
