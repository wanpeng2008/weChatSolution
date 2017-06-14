package com.example.demo.entity.primaryDB;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

/**
 * Created by pengwan on 2017/5/16.
 */
@Entity
@Table(name = "WECHAT_LOCATION")
public class WechatLocation {
    @Id
    @GeneratedValue
    @Column(name = "ID")
    @JsonIgnore
    private UUID id;
    @Column(name = "FROM_USER")
    private String fromUser;
    @Column(name = "CREATE_TIME")
    private Date createTime;
    @Column(name = "LATITUDE", nullable = false)
    private double latitude;
    @Column(name = "LONGITUDE", nullable = false)
    private double longitude;
    @Column(name = "PRECISION")
    private double precision;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getFromUser() {
        return fromUser;
    }

    public void setFromUser(String fromUser) {
        this.fromUser = fromUser;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getPrecision() {
        return precision;
    }

    public void setPrecision(double precision) {
        this.precision = precision;
    }
}
