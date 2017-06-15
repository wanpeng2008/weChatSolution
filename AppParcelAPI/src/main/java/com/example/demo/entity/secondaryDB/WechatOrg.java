package com.example.demo.entity.secondaryDB;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name="WX_ORG")
public class WechatOrg implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="WX_ORG_ORGID_GENERATOR", sequenceName="SEQ_WX_ORG",allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="WX_ORG_ORGID_GENERATOR")
	@Column(name="ID")
	private Long id;

	@Column(name="CITY")
	private String city;
	
	@Column(name="COUNTY")
	private String county;	
 
	
	@Column(name="ORG_CODE")
	private String orgCode;
 
	@Column(name="ORG_NAME")
	private String orgName;

  
	@Column(name="FLAG")
	private Integer flag;	
 
	 
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
 
	public WechatOrg() {
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getOrgCode() {
		return orgCode;
	}

	public void setOrgCode(String orgCode) {
		this.orgCode = orgCode;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

	 
	public Integer getFlag() {
		return flag;
	}

	public void setFlag(Integer flag) {
		this.flag = flag;
	}

    
	 
	
}