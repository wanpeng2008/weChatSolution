/**
 * zjpost

 */
package com.example.demo.repository.secondaryDB;

import java.math.BigDecimal;
import java.util.List;

import com.zjpost.common.GenericDao;

 
//import com.zjpost.hj.model.security.LoginJoin;
import com.zjpost.wx.model.WXJoin;



public interface WXJoinDao extends GenericDao<WXJoin, Long> {
	
	//根据ID获取关注表的信息
	public WXJoin getByOpenId(String openId);	
	
	//根据ID删除一条记录
	public boolean delete(Long id);	
	
	//根据OPEN_ID保存验证码
	public Boolean saveAuthCode(String openId, String authCode);
		
		
	//查询目录列表
	public List<WXJoin> getJoinList(int startIndex, int maxIndex);
	
	
	//按条件查询目录列表(查询一页数据)

	public List<WXJoin> queryJoinList(String orgCode, int orgLevel, int startIndex, int maxIndex, String townSearch, String flag, Integer dirType);
	
	//按条件查询目录的总数
	//查询条件同目录查询
	Long queryJoinSize(String orgCode, int orgLevel, String townSearch, String flag);
	
	//按条件查询目录的总数
	//查询条件同目录查询
	Long queryJoinSizeBySql(String orgCode, int orgLevel, String name, String flag);		
	
	//按条件查询目录列表(查询所有数据)
	//查询条件同目录查询
	public List<WXJoin> queryJoinListAll(String orgCode, int orgLevel, String townSearch, String flag, Integer dirType);
	
	public List<WXJoin> queryByOrgCode(List<String> orgCodeList, String name, String account);
	
	 
	//public List<WXJoin> queryJoin(String orgCode, int startIndex, int maxIndex, String name,String isDeleted,String roleId);
	public List<WXJoin> queryJoin(String orgCode, int orgLevel, int startIndex, int maxIndex, String name, String isDeleted);
	
	public List<WXJoin> exportJoin(String orgCode, int orgLevel, String name, String isDeleted, String roleName);
	

	
	
	
	
	 
	
}