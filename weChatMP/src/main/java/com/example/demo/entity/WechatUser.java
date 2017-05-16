package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

/**
 * Created by pengwan on 2017/5/16.
 */
@Entity
@Table(name = "WECHAT_USER")
public class WechatUser {
    @Id
    @GeneratedValue
    @Column(name = "ID")
    @JsonIgnore
    private UUID id;
    @Column(name = "SUBSCRIBE")
    private boolean subscribe;
    @Column(name = "OPENID")
    private String openid;
    @Column(name = "NICKNAME")
    private String nickname;
    @Column(name = "SEX")
    private int sex;
    @Column(name = "LANGUAGE")
    private String language;
    @Column(name = "CITY")
    private String city;
    @Column(name = "PROVINCE")
    private String province;
    @Column(name = "COUNTRY")
    private String country;
    @Column(name = "HEADIMGURL")
    private String headimgurl;
    @Column(name = "SUBSCRIBE_TIME")
    private Date subscribe_time;
    @Column(name = "UNIONID")
    private String unionid;
    @Column(name = "REMARK")
    private String remark;
    @Column(name = "GROUPID")
    private int groupid;
    @Column(name = "TAGID_LIST")
    private String tagid_list;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public boolean isSubscribe() {
        return subscribe;
    }

    public void setSubscribe(boolean subscribe) {
        this.subscribe = subscribe;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
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

    public String getHeadimgurl() {
        return headimgurl;
    }

    public void setHeadimgurl(String headimgurl) {
        this.headimgurl = headimgurl;
    }

    public Date getSubscribe_time() {
        return subscribe_time;
    }

    public void setSubscribe_time(Date subscribe_time) {
        this.subscribe_time = subscribe_time;
    }

    public String getUnionid() {
        return unionid;
    }

    public void setUnionid(String unionid) {
        this.unionid = unionid;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public int getGroupid() {
        return groupid;
    }

    public void setGroupid(int groupid) {
        this.groupid = groupid;
    }

    public String getTagid_list() {
        return tagid_list;
    }

    public void setTagid_list(String tagid_list) {
        this.tagid_list = tagid_list;
    }
}
