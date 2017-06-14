package com.example.demo.repository.secondaryDB;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.zjpost.common.GenericDao;

 
//import com.zjpost.hj.model.security.LoginBgInfo;
import com.zjpost.rural.model.view.UserView;
import com.zjpost.wx.model.WxMessageInfo;
import com.zjpost.wx.model.WXJoin;

public interface WxMessageInfoDao extends GenericDao<WxMessageInfo, Long> {
	public List<WxMessageInfo> getBgId(long bgId);
	
	public List<WxMessageInfo> getStatus(int status);
	
	public WxMessageInfo getByThree(int megType, String openId, Long bgId);
	
	public List<WxMessageInfo> getByBgIdAndMegType(long bgId, int megType);
}
