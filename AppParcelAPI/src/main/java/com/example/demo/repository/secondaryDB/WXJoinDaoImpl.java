/**
 * zjpost

 */
package com.example.demo.repository.secondaryDB;



import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import org.hibernate.FetchMode;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.jdbc.core.JdbcTemplate;

import com.zjpost.common.GenericDaoHibernate;


import com.zjpost.wx.model.WXJoin;

//import com.zjpost.hj.model.security.LoginJoin;
 




/***
 * @author <a href="dengdechuan@gmail.com">XXX</a>
 * @version $Id: $IWXJoinDao
 */
public class WXJoinDaoImpl extends GenericDaoHibernate<WXJoin, Long> implements WXJoinDao {

	public final static int MAX_IN_SIZE = 500;
	private Class persistentClass;
	
	private JdbcTemplate jdbcTemplate; 
	private Class<WXJoin> zjphjJoinClass;
 
	public WXJoinDaoImpl() {
		super(WXJoin.class);
		this.zjphjJoinClass=WXJoin.class;
		// TODO Auto-generated constructor stub
	}

	


	public Class<WXJoin> getWXJoinClass() {
		return zjphjJoinClass;
	}




	public void setWXJoinClass(Class<WXJoin> zjphjJoinClass) {
		this.zjphjJoinClass = zjphjJoinClass;
	}


	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}




	
	 
	//根据ID获取关注表的信息
	@Override
	public WXJoin getByOpenId(String openId){
		List<WXJoin> list = new ArrayList<WXJoin>();
		Session session = super.getSession();	
		DetachedCriteria criteria = DetachedCriteria.forClass(WXJoin.class);

 	
		if(openId!=null && !openId.isEmpty()){
			criteria.add(Restrictions.eq("openId", openId));
		}else
		{
			return null;
		}
		
		try
		{
			list = super.getHibernateTemplate().findByCriteria(criteria);
		}
		catch(Exception ex){
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		
		if(list.size()>0){
			   return list.get(0);
		}
		else{
		   return null;
		}
		
	}
	//根据ID删除一条记录
	@Override
	public boolean delete(Long id){		 
		Session session = super.getSession();
		String sql = "delete WX_JOIN where id="+id.toString();
		boolean flag=true;
		try {
			Query query = session.createSQLQuery(sql);			
			query.executeUpdate();
		} catch (HibernateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			flag=false;
		}finally{
			super.releaseSession(session);
		}
		return flag;
		
	}
	
	
	//根据OPEN_ID保存验证码
	@Override
	public Boolean saveAuthCode(String openId,String authCode){
		boolean flag=true;
		String hql = "from WXJoin where openId=?";
		try {
			List<WXJoin> list=this.getHibernateTemplate().find(hql, openId);
			if ((list==null) ||list.size()==0) return false;
			
			WXJoin bean=list.get(0);
			bean.setSendCode(authCode);
			bean.setGenerateDate(new Date());	
			this.getHibernateTemplate().update(bean);
			
		} catch (HibernateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			flag=false;
		} 
		return flag;
		
		
		
	}
	
	 
	@Override
	public List<WXJoin> getJoinList(int startIndex, int maxIndex) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public List<WXJoin> queryJoinList(String orgCode,
			int orgLevel, int startIndex, int maxIndex, String townSearch,
			String flag, Integer dirType) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public Long queryJoinSize(String orgCode, int orgLevel,
			String townSearch, String flag) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public Long queryJoinSizeBySql(String orgCode, int orgLevel,
			String company, String flag) {
		// TODO Auto-generated method stub
		
		String hql="Select count(*) from WXJoin ";
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
	public List<WXJoin> queryJoinListAll(String orgCode,
			int orgLevel, String townSearch, String flag, Integer dirType) {
		// TODO Auto-generated method stub
		return null;
	}



 
	public List<WXJoin> queryByOrgCode(List<String> orgCodeList, String company,
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
	
	public Long queryJoinSizes(List<String> orgCodeList, String company,
			String account) {

		DetachedCriteria dc = getCrieria(orgCodeList, company, account);
		dc.setProjection(Projections.rowCount());
		List<Object> result = super.getHibernateTemplate().findByCriteria(dc);
		return (Long) result.get(0);
	}

	public Long queryJoinSizes(String account) {
		System.out.println("ln477: in JoinDao queryJoinSizes");
		DetachedCriteria criteria = DetachedCriteria.forClass(WXJoin.class);
		Criterion cri = null;
		cri = Restrictions.eq("account", account);
		criteria.add(cri);
		criteria.setProjection(Projections.rowCount());
		List<Object> result = super.getHibernateTemplate().findByCriteria(criteria);
		return (Long)result.get(0);
	}
	 
	 
	
	 
	public List<WXJoin> exportJoin(String orgCode, int orgLevel,String company,String isDeleted,String roleName) {
		List<WXJoin> customerList = new ArrayList<WXJoin>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXJoin.class);

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
	public List<WXJoin> queryJoin(String orgCode, int orgLevel, int startIndex, int maxIndex,
			String company,String isDeleted) {
		List<WXJoin> customerList = new ArrayList<WXJoin>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXJoin.class);

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
	


	
	 
	
}

