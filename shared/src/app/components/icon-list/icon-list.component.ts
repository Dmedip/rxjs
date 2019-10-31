import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/icon.interface';
import { ObservableService } from 'src/app/shared/observable.service';

import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {
  @Input() list: Article;

  

  constructor(private modal: NgbModal, private observableService: ObservableService) { }

  ngOnInit() {
  }

 

  viewArticle2(article: Article) {
    this.observableService.addToInventory(article);
  }
}
