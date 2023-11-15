import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restapi.component.html',
  styleUrl: './restapi.component.css'
})

export class RestapiComponent implements OnInit {

  n = 1;
  peopleList:any;
  constructor (private httpClient :   HttpClient) {
    this.peopleList=[];
    this.n=1;
  }

  getPeople() {
    this.httpClient.get(`https://swapi.dev/api/people/?page=${this.n}`)
      .subscribe((data: any) => {
        this.peopleList = data.results;
      });
  }


  nextPage() {
    this.n ++;
    this.getPeople();
  }

  previousPage() {
    if (this.n > 1) {
      this.n --;
      this.getPeople();
    }
  }

  ngOnInit(): void {
    this.getPeople();
  }
}
