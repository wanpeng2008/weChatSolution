import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../../share/services/user.service";


@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoComponent implements OnInit, OnChanges {

  @Input() accountInfo
  constructor(private userService: UserService) { }
  editFlag:boolean = false
  ngOnInit() {
    console.debug('AccountInfoComponent init')
  }

  onSave($event){
    console.log($event)
    this.userService.save($event).subscribe(
      res => {
        this.editFlag = false
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug(changes['accountInfo'])
    let currentValue = changes['accountInfo'].currentValue
    this.editFlag = !(currentValue && currentValue.openId)
  }
}
