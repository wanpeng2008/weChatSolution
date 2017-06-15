/**
 * Created by pengwan on 2017/6/15.
 */
interface OrderInfo {
  province: string,
  city: string,
  county: string,
  customerOpenid: string,
  customerName: string,
  customerMobile: string,
  address: string,

  customer2Name: string,
  customer2Mobile: string,
  customer2Address: string,
  customer2Province: string,
  customer2City: string,
  customer2County: string,

  deliverId: Number,
  deliverOpenid: string,
  deliverName: string,
  deliverMobile: string,

  createDate: Date,
  distributeDate: Date,
  reachDate: Date,
  feedbackDate: Date,
  modiDate: Date,
  acceptDate: Date,

  mailType: Number,
  mailNum: Number,
  content: string,
  beizhu: string,
  flag: string,
  mailCode: string,
  alert: Number,
  modiName: string,
  longitude: Number,
  latitude: string,

  managerId: Number,
  managerName: string,
}
