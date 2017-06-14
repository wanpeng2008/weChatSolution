
package com.example.demo.entity.secondaryDB;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="WX_BG_INFO")
public class Order implements Serializable {
	@Id
	@SequenceGenerator(name="ZJP_WX_BG_INFO_ID_GENERATOR", sequenceName="SEQ_WX_BG_INFO",allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ZJP_WX_BG_INFO_ID_GENERATOR")
	private Long id; 
	
	 
	@Column(name="PROVINCE")
	private String province;
	
	@Column(name="CITY")
	private String city;
	
	@Column(name="COUNTY")
	private String county;	
	
	@Column(name="CUSTOMER_ID")
	private Long customerId;
	
	@Column(name="CUSTOMER_OPENID")
	private String customerOpenid;	
	
	@Column(name="CUSTOMER_NAME")
	private String customerName;	
	
	@Column(name="CUSTOMER_MOBILE")
	private String customerMobile; 
	
	@Column(name="DELIVER_ID")
	private Long deliverId;	
	
	@Column(name="DELIVER_OPENID")
	private String deliverOpenid;	
	
	
	@Column(name="DELIVER_NAME")
	private String deliverName;	
	
	@Column(name="DELIVER_MOBILE")
	private String deliverMobile;	
	
	@Column(name="ADDRESS")
	private String address;	
	
	@Column(name="CREATE_DATE")
	private Date createDate; 

	@Column(name="DISTRIBUTE_DATE")
	private Date distributeDate; 
	
	@Column(name="REACH_DATE")
	private Date reachDate; 
	
	@Column(name="FEEDBACK_DATE")
	private Date feedbackDate; 
	
	@Column(name="MODI_DATE")
	private Date modiDate; 
	

	@Column(name="MODI_NAME")
	private String modiName;	
	
	@Column(name="MAIL_TYPE")
	private Integer mailType;	

	@Column(name="MAIL_NUM")
	private Integer mailNum;
	
	@Column(name="CONTENT")
	private String content;	
	
	@Column(name="BEIZHU")
	private String  beizhu;	
	
	@Column(name="MANAGER_ID")
	private Long managerId;	
	
	@Column(name="MANAGER_NAME")
	private String managerName;	 
	
	@Column(name="LONGITUDE")
	private Long longitude; 
	
	@Column(name="LATITUDE")
	private Long latitude; 
	
	@Column(name="FLAG")
	private Integer flag; 
	
	@Column(name="CUSTOMER2_NAME")
	private String customer2Name;
	
	@Column(name="CUSTOMER2_MOBILE")
	private String customer2Mobile;
	
	@Column(name="CUSTOMER2_ADDRESS")
	private String customer2Address;
	
	@Column(name="MAIL_CODE")
	private String mailCode;
	
	@Column(name="ACCEPT_DATE")
	private Date acceptDate;
	
	@Column(name="ALERT")
	private Integer alert;

	public Order() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getCustomerOpenid() {
		return customerOpenid;
	}

	public void setCustomerOpenid(String customerOpenid) {
		this.customerOpenid = customerOpenid;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerMobile() {
		return customerMobile;
	}

	public void setCustomerMobile(String customerMobile) {
		this.customerMobile = customerMobile;
	}

	public Long getDeliverId() {
		return deliverId;
	}

	public void setDeliverId(Long deliverId) {
		this.deliverId = deliverId;
	}

	public String getDeliverOpenid() {
		return deliverOpenid;
	}

	public void setDeliverOpenid(String deliverOpenid) {
		this.deliverOpenid = deliverOpenid;
	}

	public String getDeliverName() {
		return deliverName;
	}

	public void setDeliverName(String deliverName) {
		this.deliverName = deliverName;
	}

	public String getDeliverMobile() {
		return deliverMobile;
	}

	public void setDeliverMobile(String deliverMobile) {
		this.deliverMobile = deliverMobile;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getDistributeDate() {
		return distributeDate;
	}

	public void setDistributeDate(Date distributeDate) {
		this.distributeDate = distributeDate;
	}

	public Date getReachDate() {
		return reachDate;
	}

	public void setReachDate(Date reachDate) {
		this.reachDate = reachDate;
	}

	public Date getFeedbackDate() {
		return feedbackDate;
	}

	public void setFeedbackDate(Date feedbackDate) {
		this.feedbackDate = feedbackDate;
	}

	public Date getModiDate() {
		return modiDate;
	}

	public void setModiDate(Date modiDate) {
		this.modiDate = modiDate;
	}

	public String getModiName() {
		return modiName;
	}

	public void setModiName(String modiName) {
		this.modiName = modiName;
	}

	public Integer getMailType() {
		return mailType;
	}

	public void setMailType(Integer mailType) {
		this.mailType = mailType;
	}

	public Integer getMailNum() {
		return mailNum;
	}

	public void setMailNum(Integer mailNum) {
		this.mailNum = mailNum;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getBeizhu() {
		return beizhu;
	}

	public void setBeizhu(String beizhu) {
		this.beizhu = beizhu;
	}

	public Long getManagerId() {
		return managerId;
	}

	public void setManagerId(Long managerId) {
		this.managerId = managerId;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public Long getLongitude() {
		return longitude;
	}

	public void setLongitude(Long longitude) {
		this.longitude = longitude;
	}

	public Long getLatitude() {
		return latitude;
	}

	public void setLatitude(Long latitude) {
		this.latitude = latitude;
	}

	public Integer getFlag() {
		return flag;
	}

	public void setFlag(Integer flag) {
		this.flag = flag;
	}

	public String getCustomer2Name() {
		return customer2Name;
	}

	public void setCustomer2Name(String customer2Name) {
		this.customer2Name = customer2Name;
	}

	public String getCustomer2Mobile() {
		return customer2Mobile;
	}

	public void setCustomer2Mobile(String customer2Mobile) {
		this.customer2Mobile = customer2Mobile;
	}

	public String getCustomer2Address() {
		return customer2Address;
	}

	public void setCustomer2Address(String customer2Address) {
		this.customer2Address = customer2Address;
	}

	public String getMailCode() {
		return mailCode;
	}

	public void setMailCode(String mailCode) {
		this.mailCode = mailCode;
	}

	public Date getAcceptDate() {
		return acceptDate;
	}

	public void setAcceptDate(Date acceptDate) {
		this.acceptDate = acceptDate;
	}

	public Integer getAlert() {
		return alert;
	}

	public void setAlert(Integer alert) {
		this.alert = alert;
	} 

}
