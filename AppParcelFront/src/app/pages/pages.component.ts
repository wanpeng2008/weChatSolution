import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.debug('PagesComponent init')
  }


}
