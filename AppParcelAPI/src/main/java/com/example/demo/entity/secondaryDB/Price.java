package com.example.demo.entity.secondaryDB;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="WX_AREA_NO")
public class Price implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@SequenceGenerator(name="WX_AREA_NO_ID_GENERATOR", sequenceName="SEQ_WX_AREA_NO",allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="WX_AREA_NO_ID_GENERATOR")
	private Long id;
	
	@Column(name="PROVINCE")
	private String province;
	
	@Column(name="PROVINCE_NAME")
	private String provinceName;
	
	@Column(name="AREA_NO")
	private Integer areaNo;
	
	@Column(name="FEE500")
	private BigDecimal fee500;	
	
	@Column(name="FEE1000")
	private BigDecimal fee1000;	 
	
	@Column(name="FEE_ADD")
	private BigDecimal feeAdd;	

	public Price() {
	}

	public Price(Long id) {
		this.id = id;
	}	

	public Long getId() {
		return this.id;
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

	public String getProvinceName() {
		return provinceName;
	}

	public void setProvinceName(String provinceName) {
		this.provinceName = provinceName;
	}

	public Integer getAreaNo() {
		return areaNo;
	}

	public void setAreaNo(Integer areaNo) {
		this.areaNo = areaNo;
	}

	public BigDecimal getFee500() {
		return fee500;
	}

	public void setFee500(BigDecimal fee500) {
		this.fee500 = fee500;
	}

	public BigDecimal getFee1000() {
		return fee1000;
	}

	public void setFee1000(BigDecimal fee1000) {
		this.fee1000 = fee1000;
	}

	public BigDecimal getFeeAdd() {
		return feeAdd;
	}

	public void setFeeAdd(BigDecimal feeAdd) {
		this.feeAdd = feeAdd;
	}

	 
 

}
