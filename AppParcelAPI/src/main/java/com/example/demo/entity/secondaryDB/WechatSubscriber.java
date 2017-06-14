
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
@Table(name="WX_JOIN")
public class WechatSubscriber implements Serializable {

 
	//final String DEFAULT_PWD="123456";
	@Id
	@SequenceGenerator(name="WX_JOIN_ID_GENERATOR", sequenceName="SEQ_WX_JOIN",allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="WX_JOIN_ID_GENERATOR")
	private Long id;  
	
	@Column(name="MOBILE")
	private String mobile;	
	
	@Column(name="OPEN_ID")
	private String openId;	

	@Column(name="LANGUAGE")
	private String language;
	
	@Column(name="NICKNAME")
	private String nickname;
	
	@Column(name="SEX")
	private String sex;
	
	@Column(name="CITY")
	private String city;	
	
	@Column(name="PROVINCE")
	private String province;
	
	@Column(name="COUNTRY")
	private String country;
	
	@Column(name="HEADIMAGURL")
	private String headimagurl;
	

	
	@Column(name="SUBSCRIBETIME")
	private String subscribetime; 
	
	@Column(name="FLAG")
	private int flag; 
	
	
	@Column(name="DEAL_DATE")
	private Date dealDate; 
	
	@Column(name="CREATE_DATE")
	private Date createDate; 
	
	@Column(name="BUSS_CODE")
	private String bussCode; 

	
	@Column(name="GENERATE_DATE")
	private Date generateDate; 
	
	@Column(name="SEND_CODE")
	private String sendCode; 

	public WechatSubscriber() {
	}

	
	public WechatSubscriber(String openId,String nickName,String sex,String language,String city,String province,String country,String headimgurl,String subscribeTime,int flag) {
		 this.openId=openId;
		 this.nickname=nickName;
		 this.sex=sex;
		 this.language=language;
		 this.city=city;
		 this.province=province;
		 this.country=country;
		 this.headimagurl=headimgurl;
		 this.subscribetime=subscribeTime;
		 this.flag=flag;
	
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getOpenId() {
		return openId;
	}

	public void setOpenId(String openId) {
		this.openId = openId;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getHeadimagurl() {
		return headimagurl;
	}

	public void setHeadimagurl(String headimagurl) {
		this.headimagurl = headimagurl;
	}
 
	public int getFlag() {
		return flag;
	}
	public void setFlag(int flag) {
		this.flag = flag;
	}


	public String getSubscribetime() {
		return subscribetime;
	}

	public void setSubscribetime(String subscribetime) {
		this.subscribetime = subscribetime;
	}

	public Date getDealDate() {
		return dealDate;
	}

	public void setDealDate(Date dealDate) {
		this.dealDate = dealDate;
	}

	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getBussCode() {
		return bussCode;
	}

	public void setBussCode(String bussCode) {
		this.bussCode = bussCode;
	}

	public Date getGenerateDate() {
		return generateDate;
	}

	public void setGenerateDate(Date generateDate) {
		this.generateDate = generateDate;
	}

	public String getSendCode() {
		return sendCode;
	}

	public void setSendCode(String sendCode) {
		this.sendCode = sendCode;
	}	 

}
