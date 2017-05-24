import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ViewCell} from "ng2-smart-table";

@Component({
  selector: 'app-cell-render',
  templateUrl: './cell-render.component.html',
  styleUrls: ['./cell-render.component.css']
})
export class CellRenderComponent implements ViewCell,OnInit {

  constructor() { }

  enableFlag: boolean;

  @Input() value: string | number;;
  //@Input() rowData: any;
  @Output() toggler: EventEmitter<any> = new EventEmitter();

  //@Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.enableFlag = this.value.toString().toLowerCase()=='true'
  }
  turnOn(){
    console.debug('turnOn() invoke')
    if(!this.enableFlag){
      console.debug('turnOn action')
      //console.debug(this.rowData)
      if(this.toggler)
      this.toggler.emit(true)
      //this.save.emit(this.rowData);
    }

  }
  turnOff(){
    console.debug('turnOff() invoke')
    if(this.enableFlag){
      console.debug('turnOff action')
      //console.debug(this.rowData)
      if(this.toggler)
      this.toggler.emit(false)
      //this.save.emit(this.rowData);
    }
  }

}
