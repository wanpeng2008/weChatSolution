
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
@Table(name="WX_CUSTOMER")
public class Customer implements Serializable {

 
	//final String DEFAULT_PWD="123456";
	@Id
	@SequenceGenerator(name="ZJP_WX_CUSTOMER_ID_GENERATOR", sequenceName="SEQ_WX_CUSTOMER",allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ZJP_WX_CUSTOMER_ID_GENERATOR")
	private Long id; 
	
	@Column(name="OPEN_ID")
	private String openId;	
	
	@Column(name="COMPANY")
	private String company;	
	
	@Column(name="COMPANY_NO")
	private String companyNo;	

	@Column(name="NAME")
	private String name;
	
	@Column(name="PROVINCE")
	private String province;
	
	@Column(name="CITY")
	private String city;
	
	@Column(name="COUNTY")
	private String county;	
	
	@Column(name="ADDRESS")
	private String address;
	
	@Column(name="MOBILE")
	private String mobile;
	
	@Column(name="TEL")
	private String tel;
	
	@Column(name="AUTHLIST")
	private String authList;
	
	@Column(name="FLAG")
	private Integer flag; 
	
	@Column(name="CUSTOMER_TYPE")
	private Integer customerType; 
	
	@Column(name="CREATE_DATE")
	private Date createDate; 
	
	@Column(name="LONGITUDE")
	private Long longitude; 
	
	@Column(name="LATITUDE")
	private Long latitude; 

	public Customer() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getOpenId() {
		return openId;
	}

	public void setOpenId(String openId) {
		this.openId = openId;
	}

	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getCompanyNo() {
		return companyNo;
	}
	public void setCompanyNo(String companyNo) {
		this.companyNo = companyNo;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
 
	public String getAuthList() {
		return authList;
	}

	public void setAuthList(String authList) {
		this.authList = authList;
	}

	public Integer getFlag() {
		return flag;
	}

	public void setFlag(Integer flag) {
		this.flag = flag;
	}

	public Integer getCustomerType() {
		return customerType;
	}

	public void setCustomerType(Integer customerType) {
		this.customerType = customerType;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
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
	 

}
