import {Component, OnInit, ViewChild} from '@angular/core';
import {WechatAppService} from "../../share/services/wechat-app.service";
import {WechatAppModel} from "../../share/models/wechat-app-model";
import {LocalDataSource} from "ng2-smart-table";
import {FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms";
import {ModalDirective} from "ng2-bootstrap";

@Component({
  selector: 'app-wechat-app',
  templateUrl: './wechat-app.component.html',
  styleUrls: ['./wechat-app.component.css'],
})
export class WechatAppComponent implements OnInit {

  private wechatApps:WechatAppModel[];
  private selectedWechatApp:WechatAppModel;
  private settings;
  private source;
  private createForm: FormGroup;
  private updateForm: FormGroup;
  private isAllSelected: boolean;
  private createModalTitle: string = '新增微信公众号接入'
  private updateModalTitle: string = '修改微信公众号接入信息'
  @ViewChild('createModal') createModal: ModalDirective;
  @ViewChild('updateModal') updateModal: ModalDirective;

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
    this.settings = {
      selectMode: 'multi',
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
          title: '状态'
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
        console.debug(this.wechatApps)
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
  onEdit(){
    console.debug('onEdit invoked')
    this.updateModal.show()
  }
  onEditConfirm(){
    console.debug('onEditConfirm invoked')
  }
  onDelete(){
    console.debug('onDelete invoked')
  }
  onDeleteConfirm(){
    console.debug('onDeleteConfirm invoked')
  }
  onRowSelect(event){
    console.debug('onRowSelect invoked')
    console.log(event)
    console.log(this.isAllSelected)
    // isSelected
  }
  hideCreateModal(formValue){
    if(!!formValue){
      this.createApp(formValue)
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
    this.wechatAppService.saveOrUpdateWechatApp(wechatAppInfo).subscribe(
      ()=>{},
      error=>{},
      ()=>{
        this.onSearch()
      }
    )
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

}
