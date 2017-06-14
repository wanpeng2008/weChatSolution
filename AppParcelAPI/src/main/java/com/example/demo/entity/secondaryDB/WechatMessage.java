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
@Table(name="WX_MESSAGE_INFO")
public class WechatMessage implements Serializable {

	//final String DEFAULT_PWD="123456";
	@Id
	@SequenceGenerator(name="ZJP_WX_MESSAGE_INFO_ID_GENERATOR", sequenceName="SEQ_WX_MESSAGE_INFO",allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ZJP_WX_MESSAGE_INFO_ID_GENERATOR")
	private Long id; 
	
	 
	@Column(name="PROVINCE")
	private String province;
	
	@Column(name="CITY")
	private String city;
	
	@Column(name="COUNTY")
	private String county;	
	
	@Column(name="OPEN_ID")
	private String openId;
	
	@Column(name="MEG_TYPE")
	private Integer megType;
	
	@Column(name="MEG_DATE")
	private Date megDate;
	
	@Column(name="MES_STATUS")
	private Integer mesStatus;
	
	@Column(name="MES_CONTENT")
	private String mesContent;
	
	@Column(name="BG_ID")
	private Long bgId;

	public Long getBgId() {
		return bgId;
	}

	public void setBgId(Long bgId) {
		this.bgId = bgId;
	}

	public String getMesContent() {
		return mesContent;
	}

	public void setMesContent(String mesContent) {
		this.mesContent = mesContent;
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

	public String getOpenId() {
		return openId;
	}

	public void setOpenId(String openId) {
		this.openId = openId;
	}

	public Integer getMegType() {
		return megType;
	}

	public void setMegType(Integer megType) {
		this.megType = megType;
	}

	public Date getMegDate() {
		return megDate;
	}

	public void setMegDate(Date megDate) {
		this.megDate = megDate;
	}

	public Integer getMesStatus() {
		return mesStatus;
	}

	public void setMesStatus(Integer mesStatus) {
		this.mesStatus = mesStatus;
	}


	

}
