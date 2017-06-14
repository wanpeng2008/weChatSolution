/**
 * zjpost

 */
package com.example.demo.repository.secondaryDB;

import java.math.BigDecimal;
import java.util.List;

import com.zjpost.common.GenericDao;

 
//import com.zjpost.hj.model.security.LoginCustomer;
import com.zjpost.rural.model.view.UserView;
import com.zjpost.wx.model.WXBgInfo;
import com.zjpost.wx.model.WXCustomer;



public interface WXCustomerDao extends GenericDao<WXCustomer, Long> {
	//根据查询记录数量
	public Long getCustomerListTotal();	
	
	//查询目录列表
	public List<WXCustomer> getCustomerList(int startIndex, int maxIndex);
	
	
	//按条件查询目录列表(查询一页数据)

	public List<WXCustomer> queryCustomerList(String orgCode, int orgLevel, int startIndex, int maxIndex, String townSearch, String flag, Integer dirType);
	
	//按条件查询目录的总数
	//查询条件同目录查询
	Long queryCustomerSize(String orgCode, int orgLevel, String townSearch, String flag);
	
	//按条件查询目录的总数
	//查询条件同目录查询
	Long queryCustomerSizeBySql(String orgCode, int orgLevel, String name, Integer customerType, String flag);
	
	//按条件查询目录列表(查询所有数据)
	//查询条件同目录查询
	public List<WXCustomer> queryCustomerListAll(String orgCode, int orgLevel, String townSearch, String flag, Integer dirType);
	
	public List<WXCustomer> queryByOrgCode(List<String> orgCodeList, String name, String account);
	
	

	//根据县市和类别获取客户数据
	public List<WXCustomer> getCustomerByCountyAndType(String county, Integer customerType);
	
	public Long queryCustomerSizes(List<String> orgCodeList, String name, String account);
	public Long queryCustomerSizes(String account);
	public Long queryCustomerSizesByIdNo(String IdNo);
	public String queryCustomerNameById(Long id); 
	//public List<WXCustomer> queryCustomer(String orgCode, int startIndex, int maxIndex, String name,String isDeleted,String roleId);
	public List<WXCustomer> queryCustomer(String orgCode, int orgLevel, int startIndex, int maxIndex, String name, Integer customerType, String isDeleted);
	
	public List<WXCustomer> exportCustomer(String orgCode, int orgLevel, String name, String isDeleted, String roleName);
	
	public List<WXCustomer> getByBusiCode(String orgCode, Integer orgLevel, String busiCode);
	
	public String getByCompanyNamebyNo(Long companyNo);
	
	//得到投递公司列表
	public String getCompanyListJsonByOption(String county);
	public List getCompanyList(String county);
	 
	//根据手机号码得到客户信息ldy
	public WXCustomer getCustomerByMobile(String mobile);
	
	//根据ID获取表的信息
	public WXCustomer getByOpenId(String openId);	
}