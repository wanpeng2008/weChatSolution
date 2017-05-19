import { Component, OnInit } from '@angular/core';
import {WechatAppService} from "../../share/services/wechat-app.service";
import {WechatAppModel} from "../../share/models/wechat-app-model";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'app-wechat-app',
  templateUrl: './wechat-app.component.html',
  styleUrls: ['./wechat-app.component.css']
})
export class WechatAppComponent implements OnInit {

  private wechatApps:WechatAppModel[];
  private selectedWechatApp:WechatAppModel;
  private settings;
  private source;

  constructor(private wechatAppService:WechatAppService) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    console.debug('WechatAppComponent init')
    this.settings = {
      mode: external,
      hideHeader: false,
      hideSubHeader: false,
      noDataMessage: '没有数据',
      actions: {
        columnTitle: '操作',
        add: true,
        edit: true,
        delete: true,
        position: 'left'
      },
      add: {
        addButtonContent: '增加',
        createButtonContent: '保存',
        cancelButtonContent: '取消',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '编辑',
        saveButtonContent: '保存',
        cancelButtonContent: '取消',
        confirmSave: true,
      },
      delete:{
        deleteButtonContent: '删除',
        confirmDelete: true
      },
      columns: {
        appId: {
          title: 'appId'
        },
        secret: {
          title: 'secret'
        },
        token: {
          title: 'token'
        },
        aseKey: {
          title: 'aseKey'
        },
        accessPath: {
          title: 'accessPath'
        },
        enableFlag: {
          title: 'enableFlag'
        },
        name: {
          title: 'name'
        },
        comments: {
          title: 'comments'
        },
        createTime: {
          title: 'createTime'
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
  }
  onCreateConfirm(){
    console.debug('onCreateConfirm invoked')
  }
  onEdit(){
    console.debug('onEdit invoked')
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

}
