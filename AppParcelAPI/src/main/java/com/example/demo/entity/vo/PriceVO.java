package com.example.demo.entity.vo;

import java.math.BigDecimal;

/**
 * Created by pengwan on 2017/6/14.
 */
public class PriceVO {
    private Long id;
    private String province;
    private String provinceName;
    private Integer areaNo;
    private BigDecimal fee500;
    private BigDecimal fee1000;
    private BigDecimal feeAdd;

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
