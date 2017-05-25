import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.css']
})
export class StatusButtonComponent implements OnInit {

  constructor() { }

  enableFlag: boolean;

  @Input() value: string | number;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.enableFlag = this.value.toString().toLowerCase()=='true'
  }
  turnOn(){
    if(!this.enableFlag){
      this.rowData.enableFlag = true
      if(this.save){
        this.save.emit(this.rowData)
      }

    }

  }
  turnOff(){
    if(this.enableFlag){
      this.rowData.enableFlag = false
      if(this.save){
        this.save.emit(this.rowData)
      }
    }
  }
}
