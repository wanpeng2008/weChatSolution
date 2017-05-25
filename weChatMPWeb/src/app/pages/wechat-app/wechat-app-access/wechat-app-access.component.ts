import {Component, OnInit, ViewChild} from '@angular/core';
import {WechatAppModel} from "../../../share/models/wechat-app-model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ModalDirective} from "ng2-bootstrap";
import {Ng2SmartTableComponent} from "ng2-smart-table/ng2-smart-table.component";
import {WechatAppService} from "../../../share/services/wechat-app.service";
import {LocalDataSource} from "ng2-smart-table";
import {CellRenderComponent} from "../cell-render/cell-render.component";
import {Observable, Observer} from "rxjs";
import {StatusButtonComponent} from "../../../share/components/cell-render/status-button/status-button.component";
/* To do:
 *   1. unique check in create form
 *   2. save/delete confirm dialog
 *   3. pagination
 * */
@Component({
  selector: 'app-wechat-app-access',
  templateUrl: './wechat-app-access.component.html',
  styleUrls: ['./wechat-app-access.component.css']
})
export class WechatAppAccessComponent implements OnInit {

  private wechatApps:WechatAppModel[] = [];
  private selectedWechatApps:WechatAppModel[] = [];
  private settings;
  private source;
  private createForm: FormGroup;
  private updateForm: FormGroup;
  private createModalTitle: string = '新增微信公众号接入'
  private updateModalTitle: string = '修改微信公众号接入信息'
  @ViewChild('createModal') createModal: ModalDirective;
  @ViewChild('updateModal') updateModal: ModalDirective;
  @ViewChild('myTable') myTable: Ng2SmartTableComponent;

  constructor(private wechatAppService:WechatAppService, private fb: FormBuilder) {
    this.source = new LocalDataSource();
    this.initCreateForm();
    this.initUpdateForm()
  }

  initCreateForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required ],
      appId: ['', Validators.required ],
      secret: ['', Validators.required ],
      token: ['', Validators.required ],
      aseKey: ['', Validators.required ],
      accessPath: ['', Validators.required ],
      comments: ''
    });
  }
  initUpdateForm() {
    this.updateForm = this.fb.group({
      id: ['', Validators.required ],
      /*      enableFlag: ['', Validators.required ],
       createTime: ['', Validators.required ],*/
      name: ['', Validators.required ],
      appId: [{value: '', disabled: true}, Validators.required],
      secret: ['', Validators.required ],
      token: ['', Validators.required ],
      aseKey: ['', Validators.required ],
      accessPath: [{value: '', disabled: true}, Validators.required ],
      comments: ''
    });
  }
  ngOnInit() {
    console.debug('WechatAppComponent init')
    let self = this;
    this.settings = {
      //selectMode: 'multi',
      mode: 'external',
      hideHeader: false,
      hideSubHeader: true,
      noDataMessage: '没有数据',
      actions: {
        columnTitle: '操作',
        add: true,
        edit: true,
        delete: true,
        position: 'right'
      },
      add: {
        addButtonContent: '<i class="btn btn-primary btn-sm glyphicon glyphicon-plus"></i>',
        createButtonContent: '保存',
        cancelButtonContent: '取消',
        confirmCreate: true
      },
      edit: {
        //editButtonContent: '<button type="button" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-pencil"></span>编辑</button>',

        editButtonContent: '<i class="btn btn-warning btn-sm glyphicon glyphicon-pencil"></i>',
        saveButtonContent: '保存',
        cancelButtonContent: '取消',
        confirmSave: true,
      },
      delete:{
        deleteButtonContent: '<i class="btn btn-danger btn-sm glyphicon glyphicon-remove"></i>',
        confirmDelete: true
      },
      columns: {
        name: {
          title: '公众号'
        },
        appId: {
          title: 'appId'
        },
        accessPath: {
          title: '接入路径'
        },
        enableFlag: {
          title: '状态',
          type: 'custom',
          renderComponent: StatusButtonComponent,
          onComponentInitFunction(instance) {
            instance.save.subscribe(row => {
              self.updateApp(row)
            });
          }
        },
        comments: {
          title: '备注'
        }
      },
      pager:  {
        display:	true,
        perPage:  20
      }
    };
    this.onSearch()
  }

  onSearch(){
    this.wechatAppService.getWechatApp().subscribe(
      res => {
        this.wechatApps = res.content;
        this.source.load(this.wechatApps);
        this.source.setPaging(res.number,res.size)
      },
      error => {

      }
    )
  }
  onCreate(){
    console.debug('onCreate invoked')
    this.createModal.show()
  }
  onCreateConfirm(){
    console.debug('onCreateConfirm invoked')
  }
  onEdit(event){
    console.debug('onEdit invoked')
    let formValue = event.data;
    delete formValue.createTime;
    delete formValue.enableFlag;
    this.updateForm.setValue(formValue)
    this.updateModal.show()
  }
  onEditConfirm(){
    console.debug('onEditConfirm invoked')
  }
  onDelete(event){
    console.debug('onDelete invoked')
    console.debug(event.data)
    if(event.data){
      this.deleteApp(event.data);
    }
  }


  onDeleteConfirm(){
    console.debug('onDeleteConfirm invoked')
  }
  onRowSelect(event){
    if(this.settings.selectMode === 'multi') {
      if (event.data) {
        if (event.isSelected) {
          // add item
          this.selectedWechatApps.push(event.data)
        } else {
          // remove item
          this.selectedWechatApps.map((currentValue, index, arr) => {
            if (currentValue.id === event.data.id) {
              arr.splice(index, 1)
            }
          })
        }
      } else if (this.myTable.isAllSelected) {
        // add all items
        this.selectedWechatApps = this.myTable.source.data;
      } else {
        // remove all
        this.selectedWechatApps = []
      }
    }else {
      this.selectedWechatApps = [event.data]
    }
  }
  hideCreateModal(formValue){
    if(!!formValue){
      this.createApp(formValue).subscribe(
        res => {
          this.createForm.reset()
          this.onSearch()
        }
      )
    }
    this.createModal.hide()
  }
  hideUpdateModal(formValue){
    if(!!formValue){
      this.updateApp(formValue)
    }
    this.updateModal.hide()
  }
  createApp(wechatAppInfo){
    return new Observable((observer: Observer<any>) => {
      this.wechatAppService.saveOrUpdateWechatApp(wechatAppInfo).subscribe(
        res => {
          observer.next(res)
          observer.complete()
        }
      )
    })

  }
  updateApp(wechatAppInfo){
    this.wechatAppService.saveOrUpdateWechatApp(wechatAppInfo).subscribe(
      ()=>{},
      error=>{},
      ()=>{
        this.onSearch()
      }
    )
  }
  deleteApp(wechatAppInfo){
    this.wechatAppService.deleteWechatApp(wechatAppInfo).subscribe(
      () => {
      },
      error => {
      },
      () => {
        this.onSearch()
      }
    )
  }

}

