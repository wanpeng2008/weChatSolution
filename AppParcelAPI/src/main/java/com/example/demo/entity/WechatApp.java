package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

/**
 * Created by 万鹏 on 2017/5/13.
 */
@Entity
@Table(name = "WECHAT_APP")
public class WechatApp {
    @Id
    @GeneratedValue
    @Column(name = "ID")
    @JsonIgnore
    private UUID id;
    @Column(name = "APP_ID",nullable=false,unique=true)
    private String appId;
    @Column(name = "SECRET",nullable = false)
    private String secret;
    @Column(name = "TOKEN",nullable=false)
    private String token;
    @Column(name = "ASE_KEY",nullable=false)
    private String aseKey;
    @Column(name = "ACCESS_PATH",nullable=false,unique=true)
    private String accessPath;
    @Column(name = "ENABLE_FLAG", nullable = false)
    private boolean enableFlag;
    @Column(name = "NAME", nullable = false)
    private String name;
    @Column(name = "COMMENTS")
    private String comments;
    @Column(name="CREATE_TIME", nullable = false)
    private Date createTime;



    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getAseKey() {
        return aseKey;
    }

    public void setAseKey(String aseKey) {
        this.aseKey = aseKey;
    }

    public String getAccessPath() {
        return accessPath;
    }

    public void setAccessPath(String accessPath) {
        this.accessPath = accessPath;
    }

    public boolean isEnableFlag() {
        return enableFlag;
    }

    public void setEnableFlag(boolean enableFlag) {
        this.enableFlag = enableFlag;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
