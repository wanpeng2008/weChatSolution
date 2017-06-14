/**
 * zjpost

 */
package com.example.demo.repository.secondaryDB;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
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
import com.zjpost.wx.model.WXJoin;

//import com.zjpost.hj.model.security.LoginBgInfo;

/***
 * @author <a href="dengdechuan@gmail.com">XXX</a>
 * @version $Id: $IWXBgInfoDao
 */
public class WXBgInfoDaoImpl extends GenericDaoHibernate<WXBgInfo, Long> implements WXBgInfoDao {

	public final static int MAX_IN_SIZE = 500;
	private Class persistentClass;

	private JdbcTemplate jdbcTemplate;
	private Class<WXBgInfo> zjphjBgInfoClass;

	public WXBgInfoDaoImpl() {
		super(WXBgInfo.class);
		this.zjphjBgInfoClass = WXBgInfo.class;
		// TODO Auto-generated constructor stub
	}

	public Class<WXBgInfo> getWXBgInfoClass() {
		return zjphjBgInfoClass;
	}

	public void setWXBgInfoClass(Class<WXBgInfo> zjphjBgInfoClass) {
		this.zjphjBgInfoClass = zjphjBgInfoClass;
	}

	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	// 根据查询条件获取一页订单数据列表
	@Override
	public List<WXBgInfo> getOrderListByFlag(String openId, String pageSize, String pageId, String flag) {
		List<WXBgInfo> list = new ArrayList<WXBgInfo>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXBgInfo.class);
		int ipageSize = 10;
		int ipageId = 1;

		criteria.addOrder(Order.desc("createDate"));

		if ((pageSize != null) && !pageSize.equals("")) {
			ipageSize = Integer.parseInt(pageSize);
		}
		if ((pageId != null) && !pageId.equals("")) {
			ipageId = Integer.parseInt(pageId);
		}

		if (openId != null && !openId.isEmpty()) {
			// criteria.add(Restrictions.eq("customerOpenid", openId));
			criteria.add(Restrictions.or(Restrictions.eq("customerOpenid", openId),
					Restrictions.eq("deliverOpenid", openId)));

		}

		if (flag != null && !flag.isEmpty()) {
			criteria.add(Restrictions.eq("flag", Integer.parseInt(flag)));
		}

		try {
			list = super.getHibernateTemplate().findByCriteria(criteria, (ipageId - 1) * ipageSize, ipageSize);
			// list = super.getHibernateTemplate().findByCriteria(criteria);
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		return list;
	}

	@Override
	public List<WXBgInfo> getBgInfoList(int startIndex, int maxIndex) {
		// TODO Auto-generated method stub
		return null;
	}

	// 查询条件同查询
	@Override
	public Long queryBgInfoSizeBySql(String orgCode, int orgLevel, String nameSearch, Date startDate, Date endDate,
			String flag) {
		// TODO Auto-generated method stub

		String hql = "select count(*) from WXBgInfo ";
		// 省市县判断
		if (orgLevel == 10)
			hql = hql + " where province='31000100' ";
		if (orgLevel == 20)
			hql = hql + " where city='" + orgCode + "' ";
		if (orgLevel == 30)
			hql = hql + " where county='" + orgCode + "' ";

		// 条件判断
		if (nameSearch != null && !nameSearch.isEmpty()) {
			hql = hql + " and (customerMobile like '%" + nameSearch + "%' or deliverMobile like '%" + nameSearch
					+ "%')";
		}
		if (startDate != null) {
			hql = hql + "  and (createDate>=:startDate or createDate is null) ";
		}
		if (endDate != null) {
			hql = hql + "  and (createDate<=:endDate or createDate is null)";
		}
		if (flag != null && !flag.isEmpty()) {
			hql = hql + "  and flag = " + flag;
		}
		hql = hql + "order by createDate desc";

		Session session = null;
		try {
			session = super.getSession();
			Query query = session.createQuery(hql);
			if (startDate != null)
				query.setTimestamp("startDate", startDate);// 注意这里，用setTimestamp﻿e，不要用setDate
			if (endDate != null)
				query.setTimestamp("endDate", endDate);

			Long result = (Long) query.uniqueResult();

			return result;
		} catch (Exception ex) {
			ex.printStackTrace();
			return 0L;
		} finally {
			super.releaseSession(session);
		}
	}

	public DetachedCriteria getCrieria(List<String> orgCodeList, String company, String account) {

		DetachedCriteria criteria = DetachedCriteria.forClass(this.persistentClass);

		if (company != null && !"".equals(company)) {
			criteria.add(Restrictions.ilike("company", company, MatchMode.ANYWHERE));
		}

		if (account != null && !"".equals(account)) {
			criteria.add(Restrictions.ilike("account", account, MatchMode.ANYWHERE));
		}

		if (orgCodeList != null && orgCodeList.size() > 0) {
			criteria.createCriteria("org", "org");

			if (orgCodeList.size() > MAX_IN_SIZE) {
				int subListNum = orgCodeList.size() / MAX_IN_SIZE + (orgCodeList.size() % MAX_IN_SIZE > 0 ? 1 : 0);

				Criterion criterion = null;
				for (int i = 0; i < subListNum; i++) {
					if (i == 0) {

						List<String> subList = orgCodeList.subList(0, MAX_IN_SIZE);
						criterion = Restrictions.in("org.orgCode", subList);

					} else {
						List<String> subList = orgCodeList.subList(MAX_IN_SIZE * i,
								MAX_IN_SIZE * (i + 1) > orgCodeList.size() ? orgCodeList.size()
										: MAX_IN_SIZE * (i + 1));
						criterion = Restrictions.or(criterion, Restrictions.in("org.orgCode", subList));
					}
				}

				criteria.add(criterion);
			} else {
				criteria.add(Restrictions.in("org.orgCode", orgCodeList));
			}
		}

		criteria.addOrder(Order.desc("createDate"));

		return criteria;
	}

	public List<WXBgInfo> exportBgInfo(String orgCode, int orgLevel, String mobile, Date startDate, Date endDate,
			String flag) {
		List<WXBgInfo> customerList = new ArrayList<WXBgInfo>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXBgInfo.class);

		if (orgLevel == 10) {
			criteria.add(Restrictions.eq("province", orgCode));
		}
		if (orgLevel == 20) {
			criteria.add(Restrictions.eq("city", orgCode));
		}
		if (orgLevel == 30) {
			criteria.add(Restrictions.eq("county", orgCode));
		}
		if (mobile != null && !mobile.isEmpty()) {
			// criteria.add(Restrictions.like("customerMobile",
			// mobile,MatchMode.ANYWHERE));
			criteria.add(Restrictions.or(Restrictions.like("customerMobile", mobile, MatchMode.ANYWHERE),
					Restrictions.like("deliverMobile", mobile, MatchMode.ANYWHERE)));
		}
		if (startDate != null) {
			criteria.add(Restrictions.or(Restrictions.ge("createDate", startDate), Restrictions.isNull("createDate")));
		}
		if (endDate != null) {
			criteria.add(Restrictions.or(Restrictions.le("createDate", endDate), Restrictions.isNull("createDate")));
		}
		if (flag != null && !flag.isEmpty()) {
			criteria.add(Restrictions.eq("flag", Integer.parseInt(flag)));
		}
		criteria.addOrder(Order.desc("createDate"));
		try {
			customerList = super.getHibernateTemplate().findByCriteria(criteria);
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		return customerList;
	}

	// 增加客户查询按等级查询
	public List<WXBgInfo> queryBgInfoList(String orgCode, int orgLevel, int startIndex, int maxIndex, String nameSearch,
			Date startDate, Date endDate, String flag) {
		List<WXBgInfo> customerList = new ArrayList<WXBgInfo>();
		Session session = super.getSession();
		Query query = null;
		DetachedCriteria criteria = DetachedCriteria.forClass(WXBgInfo.class);

		if (orgLevel == 10) {
			criteria.add(Restrictions.eq("province", orgCode));
		}

		if (orgLevel == 20) {
			criteria.add(Restrictions.eq("city", orgCode));
		}
		if (orgLevel == 30) {
			criteria.add(Restrictions.eq("county", orgCode));
		}
		if (nameSearch != null && !nameSearch.isEmpty()) {
			criteria.add(Restrictions.or(Restrictions.like("customerMobile", nameSearch, MatchMode.ANYWHERE),
					Restrictions.like("deliverMobile", nameSearch, MatchMode.ANYWHERE)));

		}
		if (startDate != null) {
			criteria.add(Restrictions.or(Restrictions.ge("createDate", startDate), Restrictions.isNull("createDate")));
		}
		if (endDate != null) {
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(endDate);
			calendar.add(Calendar.DATE, +1);
			endDate = calendar.getTime();

			criteria.add(Restrictions.or(Restrictions.le("createDate", endDate), Restrictions.isNull("createDate")));
		}
		if (flag != null && !flag.isEmpty()) {
			criteria.add(Restrictions.eq("flag", Integer.parseInt(flag)));
		}
		criteria.addOrder(Order.desc("createDate"));
		try {
			customerList = super.getHibernateTemplate().findByCriteria(criteria, startIndex, maxIndex);
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		return customerList;
	}

	// 根据手机号码得到客户信息ldy
	@Override
	public WXBgInfo getBgInfoByMobile(String mobile) {
		List<WXBgInfo> list = new ArrayList<WXBgInfo>();
		Session session = super.getSession();
		DetachedCriteria criteria = DetachedCriteria.forClass(WXBgInfo.class);
		criteria.add(Restrictions.eq("mobile", mobile));
		try {
			list = super.getHibernateTemplate().findByCriteria(criteria);
			if (list != null && list.size() > 0) {
				return list.get(0);
			} else {
				return null;
			}
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			super.releaseSession(session);
			return null;
		}
	}

	// 根据ID获取表的信息
	@Override
	public WXBgInfo getByCustomerOpenId(String openId) {
		List<WXBgInfo> list = new ArrayList<WXBgInfo>();
		Session session = super.getSession();
		DetachedCriteria criteria = DetachedCriteria.forClass(WXBgInfo.class);

		if (openId != null && !openId.isEmpty()) {
			criteria.add(Restrictions.eq("customerOpenid", openId));
			criteria.addOrder(Order.desc("id"));
		} else {
			return null;
		}
		try {
			list = super.getHibernateTemplate().findByCriteria(criteria);
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		if (list.size() > 0) {
			return list.get(0);
		} else {
			return null;
		}
	}
	///////////////////////////////////////////////////////

	// 根据ID获取当天的订单最新信息
	public WXBgInfo getTodayByCustomerOpenId(String openId) {
		SimpleDateFormat fm1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat fm2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date startDate;
		Date endDate;

		List<WXBgInfo> list = new ArrayList<WXBgInfo>();
		Session session = super.getSession();
		DetachedCriteria criteria = DetachedCriteria.forClass(WXBgInfo.class);

		try {
			startDate = fm2.parse(fm1.format(new Date()) + " 00:00:00");
			endDate = fm2.parse(fm1.format(new Date()) + " 23:59:59");
		} catch (ParseException e) {
			startDate = new Date(-24 * 60 * 60 * 1000);
			endDate = new Date();
			e.printStackTrace();
		}

		if (openId != null && !openId.isEmpty()) {
			criteria.add(Restrictions.eq("customerOpenid", openId));
			criteria.add(Restrictions.between("createDate", startDate, endDate));
			criteria.addOrder(Order.desc("id"));
		} else {
			return null;
		}
		try {
			list = super.getHibernateTemplate().findByCriteria(criteria);
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			super.releaseSession(session);
		}
		super.releaseSession(session);
		if (list.size() > 0) {
			return list.get(0);
		} else {
			return null;
		}

	}

	public List<WXBgInfo> getByFlagAndTime(int flag, Date date, int alert) {
		String queryString = "from WXBgInfo u where u.flag=? and u.distributeDate < ? and u.alert = ? ";
		List<WXBgInfo> list = null;
		try {
			list = getHibernateTemplate().find(queryString, flag, date, alert);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}