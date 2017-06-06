import {Component, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-info-view',
  templateUrl: './account-info-view.component.html',
  styleUrls: ['./account-info-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoViewComponent implements OnInit {

  @Output() editEvent = new EventEmitter<any>()
  constructor(private router:Router) { }

  ngOnInit() {
    console.debug('AccountInfoViewComponent init')
  }
  onEdit(){
    this.editEvent.emit()
  }
}

