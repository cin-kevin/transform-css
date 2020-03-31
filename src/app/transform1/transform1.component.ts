import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import generateUUID from 'smc-uuid-generator';

@Component({
  selector: 'app-transform1',
  templateUrl: './transform1.component.html',
  styleUrls: ['./transform1.component.less']
})
export class Transform1Component implements OnInit {
  public isMenuOpen = false;
  public comments: Array<string> = [];
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark', alwaysShowScrollbar: 1 };
  constructor(private readonly httpClient: HttpClient) {
    for (let index = 0; index < 3; index++) {
      this.comments.push(Date.now().toString());
    }
  }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    this.httpClient.get('https://mockbin.org/bin/8023d488-a89a-45db-aba6-502414a9c523', {responseType: 'text'}).subscribe(res => {
      this.comments.splice(0, 10);
      for (let index = 0; index < 50; index++) {
        this.comments.push(generateUUID() + '->' + Date.now().toString());
      }
    });
  }

}
