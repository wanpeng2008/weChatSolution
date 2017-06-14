/**
 * zjpost

 */
package com.example.demo.repository.secondaryDB;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.zjpost.common.GenericDao;

//import com.zjpost.hj.model.security.LoginBgInfo;
import com.zjpost.rural.model.view.UserView;
import com.zjpost.wx.model.WXBgInfo;
import com.zjpost.wx.model.WXJoin;

public interface WXBgInfoDao extends GenericDao<WXBgInfo, Long> {

	// 根据查询条件获取一页订单数据列表
	public List<WXBgInfo> getOrderListByFlag(String openId, String pageSize, String pageId, String flag);

	// 查询目录列表
	public List<WXBgInfo> getBgInfoList(int startIndex, int maxIndex);

	// 按条件查询列表(查询一页数据)
	public List<WXBgInfo> queryBgInfoList(String orgCode, int orgLevel, int startIndex, int maxIndex, String nameSearch,
                                          Date startDate, Date endDate, String flag);

	// 按条件查询的总数
	// 查询条件同查询
	public Long queryBgInfoSizeBySql(String orgCode, int orgLevel, String nameSearch, Date startDate, Date endDate,
                                     String flag);

	public List<WXBgInfo> exportBgInfo(String orgCode, int orgLevel, String mobile, Date startDate, Date endDate,
                                       String flag);

	// 根据手机号码得到客户信息ldy
	public WXBgInfo getBgInfoByMobile(String mobile);

	// 根据ID获取表的信息
	public WXBgInfo getByCustomerOpenId(String openId);

	// 根据ID获取当天的订单最新信息
	public WXBgInfo getTodayByCustomerOpenId(String openId);

	public List<WXBgInfo> getByFlagAndTime(int flag, Date date, int alert);

}