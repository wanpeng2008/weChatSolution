/**
 * zjpost

 */
package com.example.demo.repository.secondaryDB;



import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONArray;

import org.hibernate.FetchMode;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.jdbc.core.JdbcTemplate;

import com.zjpost.common.GenericDaoHibernate;
import com.zjpost.wx.model.WXBgInfo;
import com.zjpost.wx.model.WXCustomer;

//import com.zjpost.hj.model.security.LoginCustomer;
 




/***
 * @author <a href="dengdechuan@gmail.com">XXX</a>
 * @version $Id: $IWXCustomerDao
 */
public class WXCustomerDaoImpl extends GenericDaoHibernate<WXCustomer, Long> implements WXCustomerDao {

	public final static int MAX_IN_SIZE = 500;
	private Class persistentClass;
	
	private JdbcTemplate jdbcTemplate; 
	private Class<WXCustomer> zjphjCustomerClass;
 
	public WXCustomerDaoImpl() {
		super(WXCustomer.class);
		this.zjphjCustomerClass=WXCustomer.class;
		// TODO Auto-generated constructor stub
	}

	


	public Class<WXCustomer> getWXCustomerClass() {
		return zjphjCustomerClass;
	}




	public void setWXCustomerClass(Class<WXCustomer> zjphjCustomerClass) {
		this.zjphjCustomerClass = zjphjCustomerClass;
	}


	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}




	@Override
	public Long getCustomerListTotal() {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public List<WXCustomer> getCustomerList(int startIndex, int maxIndex) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public List<WXCustomer> queryCustomerList(String orgCode,
			int orgLevel, int startIndex, int maxIndex, String townSearch,
			String flag, Integer dirType) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public Long queryCustomerSize(String orgCode, int orgLevel,
			String townSearch, String flag) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public Long queryCustomerSizeBySql(String orgCode, int orgLevel,
			String company,Integer customerType, String flag) {
		// TODO Auto-generated method stub
		
		String hql="Select count(*) from WXCustomer ";
		//省市县判断
		if  (orgLevel==10)
		{			
			if(company!=null && !company.isEmpty()){			
				hql=hql + "where company like '%" + company +"%' " ;
			}
		}else{
			if  (orgLevel==20)
			{
				hql=hql + " where city='" + orgCode +"' " ;
			}
			if  (orgLevel==30)
			{
				hql=hql + " where county='" + orgCode +"' " ;
			}
			//条件判断
			if(company!=null && !company.isEmpty()){			
				hql=hql + "  and company like '%" + company +"%' " ;
			}
			if(customerType!=null && customerType!=0){			
				hql=hql + "  and customerType = '" + customerType +"'" ;
			}
		}
	 
/*		if (startDate != null) {
			hql=hql + "  and (updateDate>=:startDate or updateDate is null) " ;
		}
		if(endDate != null){
			hql=hql + "  and (updateDate<=:endDate or updateDate is null)" ;
		}		
		if(roleName!=null && !roleName.isEmpty()){
			hql=hql + "  and roleName=" + roleName +" " ;
		}*/

		Session session = null;
		try{
			session = super.getSession();
			Query query=session.createQuery(hql); 
/*			query.setTimestamp("startDate", startDate);//注意这里，用setTimestamp﻿e，不要用setDate  
			query.setTimestamp("endDate", endDate);   */

			Long result = (Long)query.uniqueResult();
			
			return result;
		}
		catch(Exception ex){
			ex.printStackTrace();
			return 0L;
		}
		finally{
			super.releaseSession(session);
		}		
	}




	@Override
	public List<WXCustomer> queryCustomerListAll(String orgCode,
			int orgLevel, String townSearch, String flag, Integer dirType) {
		// TODO Auto-generated method stub
		return null;
	}



	//根据县市和类别获取客户数据
	@Override	
	public List<WXCustomer> getCustomerByCountyAndType(String county,Integer customerType ){
		// TODO Auto-generated method stub
		List<WXCustomer> customerList = new ArrayList<WXCustomer>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
		
		if(county!=null && !county.isEmpty()){
 
			criteria.add(Restrictions.eq("county",county));
		}	
		if(customerType!=null && customerType.intValue()!=0 ){
			criteria.add(Restrictions.eq("customerType",customerType));
		}		
		
		try
		{
			customerList = super.getHibernateTemplate().findByCriteria(criteria);
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		return customerList;
	}
	
	public List<WXCustomer> queryByOrgCode(List<String> orgCodeList, String company,
			String account) {
		DetachedCriteria dc = getCrieria(orgCodeList, company, account);
		dc.setFetchMode("roles", FetchMode.SELECT)
				.addOrder(Order.asc("userId"));
		return super.getHibernateTemplate().findByCriteria(dc);
	}
	
	public DetachedCriteria getCrieria(List<String> orgCodeList, String company,
			String account) {

		DetachedCriteria criteria = DetachedCriteria
				.forClass(this.persistentClass);

		if (company != null && !"".equals(company)) {
			criteria.add(Restrictions.ilike("company", company, MatchMode.ANYWHERE));
		}

		if (account != null && !"".equals(account)) {
			criteria.add(Restrictions.ilike("account", account,
					MatchMode.ANYWHERE));
		}

		if (orgCodeList != null && orgCodeList.size() > 0) {
			criteria.createCriteria("org", "org");

			if (orgCodeList.size() > MAX_IN_SIZE) {
				int subListNum = orgCodeList.size() / MAX_IN_SIZE
						+ (orgCodeList.size() % MAX_IN_SIZE > 0 ? 1 : 0);

				Criterion criterion = null;
				for (int i = 0; i < subListNum; i++) {
					if (i == 0) {

						List<String> subList = orgCodeList.subList(0,
								MAX_IN_SIZE);
						criterion = Restrictions.in("org.orgCode", subList);

					} else {
						List<String> subList = orgCodeList
								.subList(MAX_IN_SIZE * i,
										MAX_IN_SIZE * (i + 1) > orgCodeList
												.size() ? orgCodeList.size()
												: MAX_IN_SIZE * (i + 1));
						criterion = Restrictions.or(criterion,
								Restrictions.in("org.orgCode", subList));
					}
				}

				criteria.add(criterion);
			} else {
				criteria.add(Restrictions.in("org.orgCode", orgCodeList));
			}
		}

		return criteria;
	}	
	
	public Long queryCustomerSizes(List<String> orgCodeList, String company,
			String account) {

		DetachedCriteria dc = getCrieria(orgCodeList, company, account);
		dc.setProjection(Projections.rowCount());
		List<Object> result = super.getHibernateTemplate().findByCriteria(dc);
		return (Long) result.get(0);
	}

	public Long queryCustomerSizes(String account) {
		System.out.println("ln477: in CustomerDao queryCustomerSizes");
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
		Criterion cri = null;
		cri = Restrictions.eq("account", account);
		criteria.add(cri);
		criteria.setProjection(Projections.rowCount());
		List<Object> result = super.getHibernateTemplate().findByCriteria(criteria);
		return (Long)result.get(0);
	}
	public Long queryCustomerSizesByIdNo(String IdNo) {
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
		Criterion cri = null;
		cri = Restrictions.eq("idNo", IdNo);
		//cri = Restrictions.eq("accountStatus", false);
		criteria.add(Restrictions.eq("accountStatus", true));
		criteria.add(cri);
		criteria.setProjection(Projections.rowCount());
		List<Object> result = super.getHibernateTemplate().findByCriteria(criteria);
		return (Long)result.get(0);
	}

	public String queryCustomerNameById(Long id) {
		Session session = super.getSession();
		String userName  = "";
		try {
			//Organization organ = new Organization();
			String hql = "Select u.company from WXCustomer u where u.id=?";
			Query query = null;
			query = session.createQuery(hql);
			query.setParameter(0, id);
			try {
				userName = query.uniqueResult().toString();
			} catch (Exception e) {
				userName="";
			}
			return userName;
		} catch (HibernateException e) {
			//tran.rollback();
			e.printStackTrace();
		} finally {
			super.releaseSession(session);
		}
		return userName;
	}
	
	 
	public List<WXCustomer> exportCustomer(String orgCode, int orgLevel,String company,String isDeleted,String roleName) {
		List<WXCustomer> customerList = new ArrayList<WXCustomer>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);

/*		if  (orgLevel==10)
		{
			dc.add(Restrictions.eq("province",orgCode));
		}*/
		if  (orgLevel==20)
		{
			criteria.add(Restrictions.eq("city",orgCode));
		}
		if  (orgLevel==30)
		{
			criteria.add(Restrictions.eq("county",orgCode));
		}		
		if(company!=null && !company.isEmpty()){
			criteria.add(Restrictions.like("company", company,MatchMode.ANYWHERE));
		}		
		
		try
		{
			customerList = super.getHibernateTemplate().findByCriteria(criteria);
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		return customerList;
	}	

	
	//增加客户查询按等级查询
	public List<WXCustomer> queryCustomer(String orgCode, int orgLevel, int startIndex, int maxIndex,
			String company,Integer customerType,String isDeleted) {
		List<WXCustomer> customerList = new ArrayList<WXCustomer>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);

		if  (orgLevel==10)
		{
			criteria.add(Restrictions.eq("province",orgCode));
		} 
		 
		if  (orgLevel==20)
		{
			criteria.add(Restrictions.eq("city",orgCode));
		}
		if  (orgLevel==30)
		{
			criteria.add(Restrictions.eq("county",orgCode));
		}		
		if(company!=null && !company.isEmpty()){
			criteria.add(Restrictions.like("company", company,MatchMode.ANYWHERE));
		}
		if(customerType!=null&&customerType!=0){
			criteria.add(Restrictions.eq("customerType",customerType));
		}
		
		try
		{
			customerList = super.getHibernateTemplate().findByCriteria(criteria,startIndex,maxIndex);
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		return customerList;
	}
	
	public List<WXCustomer> getByBusiCode(String orgCode,Integer orgLevel,String busiCode){
		List<WXCustomer> list = new ArrayList<WXCustomer>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
		criteria.add(Restrictions.eq("companyLevel",orgLevel));
		 
		if(busiCode!=null && !busiCode.isEmpty()){
			criteria.add(Restrictions.eq("busiCode",busiCode));
		}	
		if (orgLevel.intValue()==20 ){
			criteria.add(Restrictions.eq("city",orgCode));
		}
		if (orgLevel.intValue()==30 ){
			criteria.add(Restrictions.eq("county",orgCode));
		}
		criteria.addOrder(Order.asc("city"));
		criteria.addOrder(Order.asc("county"));
		// 删除重复数据
		try
		{
			list = super.getHibernateTemplate().findByCriteria(criteria);
			/*for  ( int  i  =   0 ; i  <  list.size()  -   1 ; i ++ )  {     
				      for  ( int  j  =  list.size()  -   1 ; j  >  i; j -- )  {     
				          if  (list.get(j).getCompanyNo().equals(list.get(i).getCompanyNo()))  {     
				              list.remove(j);     
				            }      
				        }      
			 }      
			 */
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		
		return list;
		
	}
	
	public String getByCompanyNamebyNo(Long companyNo){
		List<WXCustomer> list = new ArrayList<WXCustomer>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
 
		 
		if(companyNo==null||companyNo.equals(0)) return "";
	  	try
		{
			criteria.add(Restrictions.eq("id",companyNo));
			list = super.getHibernateTemplate().findByCriteria(criteria);
			if (list!=null &&list.size()>0 ){
				return list.get(0).getCompany();
			}else
			{
				return "";
			}

		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
			return "";
		}
		 
		
	}
	//得到投递公司列表
	public String getCompanyListJsonByOption(String county){
		List<WXCustomer> customerList = new ArrayList<WXCustomer>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
		criteria.add(Restrictions.eq("county",county));		 
		try
		{
			customerList = super.getHibernateTemplate().findByCriteria(criteria);
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		
		JSONArray jsonObj = JSONArray.fromObject(customerList);
		String returnVal = jsonObj.toString();
		return returnVal;
	}




	@Override
	public List getCompanyList(String county) {
		
		List<WXCustomer> customerList = new ArrayList<WXCustomer>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
		criteria.add(Restrictions.eq("county",county));		 
		try
		{
			customerList = super.getHibernateTemplate().findByCriteria(criteria);
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		return customerList;
	}
	
	//根据手机号码得到客户信息ldy
	@Override
	public WXCustomer getCustomerByMobile(String mobile){
		List<WXCustomer> list = new ArrayList<WXCustomer>();
		Session session = super.getSession(); 
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
		criteria.add(Restrictions.eq("mobile",mobile));		 
		try
		{
			list = super.getHibernateTemplate().findByCriteria(criteria);
			if (list!=null &&list.size()>0 ){
				return list.get(0);
			}else
			{
				return null;
			}
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
			return null;
		} 
		
	}
	
	//根据ID获取表的信息
	public WXCustomer getByOpenId(String openId){
		List<WXCustomer> list = new ArrayList<WXCustomer>();
		Session session = super.getSession(); 
		DetachedCriteria criteria = DetachedCriteria.forClass(WXCustomer.class);
		criteria.add(Restrictions.eq("openId",openId));		 
		try
		{
			list = super.getHibernateTemplate().findByCriteria(criteria);
			if (list!=null &&list.size()>0 ){
				return list.get(0);
			}else
			{
				return null;
			}
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
			return null;
		} 
		
	}
		
	
}

