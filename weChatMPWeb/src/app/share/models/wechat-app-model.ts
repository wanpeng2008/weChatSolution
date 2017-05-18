export class WechatAppModel {
  id: string;
  appId: string;
  secret: string;
  token: string;
  aseKey: string;
  accessPath: string;
  enableFlag: boolean;
  constructor(obj){
    this.id = obj.id;
    this.appId = obj.appId;
    this.secret = obj.secret;
    this.token = obj.token;
    this.aseKey = obj.aseKey;
    this.accessPath = obj.accessPath;
    this.enableFlag = obj.enableFlag;
  }
}
