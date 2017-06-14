package com.example.demo.entity.secondaryDB;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="WX_LOG")
public class WechatLog implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="WX_LOG_ID_GENERATOR", sequenceName="SEQ_WX_LOG",allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="WX_LOG_ID_GENERATOR")
	private Long id;
	
 
	
	@Column(name="WX_ID")
	private String wxId; 

	@Column(name="OPER_CONTENT")
	private String operContent;

	@Column(name="OPER_IP")
	private String operIp;

	@Column(name="OPER_NAME")
	private String operName;

	@Column(name="OPER_DATE")
	private Date operDate;

	@Column(name="OPER_RESULT")
	private String operResult;
	
	@Column(name="COMMENTS")
	private String comments;

    public WechatLog() {
    }

	public Long getId() {
		return this.id;
	} 
	public void setId(Long id) {
		this.id = id;
	} 
	public String getOperIp() {
		return this.operIp;
	}

	public void setOperIp(String operIp) {
		this.operIp = operIp;
	}

	public String getOperName() {
		return this.operName;
	}

	public void setOperName(String operName) {
		this.operName = operName;
	}

	public String getWxId() {
		return wxId;
	}

	public void setWxId(String wxId) {
		this.wxId = wxId;
	}

	public String getOperContent() {
		return operContent;
	}

	public void setOperContent(String operContent) {
		this.operContent = operContent;
	}

	public Date getOperDate() {
		return operDate;
	}

	public void setOperDate(Date operDate) {
		this.operDate = operDate;
	}

	public String getOperResult() {
		return operResult;
	}

	public void setOperResult(String operResult) {
		this.operResult = operResult;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	 

}