import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/icon.interface';
import { ObservableService } from 'src/app/shared/observable.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail1: Article = {
      "id": 0,
      "title": "XXX",
      "body": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  }

  detail2: Article;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {


    this.observableService.inventoryChanged$.subscribe( article => {
      this.detail2 = article;
    })
  }
}

