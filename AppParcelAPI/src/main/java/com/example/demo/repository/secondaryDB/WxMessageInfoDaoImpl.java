package com.example.demo.repository.secondaryDB;

import java.util.List;
import com.zjpost.common.GenericDaoHibernate;
import com.zjpost.wx.model.WxMessageInfo;
import com.zjpost.wx.dao.WxMessageInfoDao;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;





public class WxMessageInfoDaoImpl extends GenericDaoHibernate<WxMessageInfo, Long> implements WxMessageInfoDao {

	
	private List<WxMessageInfo> list = null ;
	private String queryString;
	public WxMessageInfoDaoImpl() {
		super(WxMessageInfo.class);
		// TODO Auto-generated constructor stub
	}
	

	public List<WxMessageInfo> getBgId(long bgId){
		queryString = "from WxMessageInfo u where u.bgId = ? " ;
		try{
		list = getHibernateTemplate().find(queryString,bgId);
		}
		catch(Exception e){
			e.printStackTrace() ;
		}
		return list ;
	}
	
	public List<WxMessageInfo> getStatus(int status){
		queryString = "from WxMessageInfo u where u.mesStatus = ? " ;
		try{
			list=getHibernateTemplate().find(queryString,status);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	
	public List<WxMessageInfo> getByBgIdAndMegType(long bgId,int megType){
		queryString = "from WxMessageInfo u where u.bgId = ? and u.megType =  ?" ;
		try{
			list=getHibernateTemplate().find(queryString,bgId,megType);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	
	public WxMessageInfo getByThree(int megType,String openId,Long bgId){
		queryString = "from WxMessageInfo u where u.megType = ? and openId = ? and bgId = ?";
		try{
			list=getHibernateTemplate().find(queryString,megType,openId,bgId);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return list.get(0);
	}

}
