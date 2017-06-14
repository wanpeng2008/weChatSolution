/**
 * zjpost

 */
package com.example.demo.repository.secondaryDB;

import java.util.List;

import com.zjpost.common.GenericDao;
import com.zjpost.wx.model.WxAreaNo;

 
  

public interface WxAreaNoDao extends GenericDao<WxAreaNo, Long> {	
	
	public  WxAreaNo  getAreaNo(String province);
	public  List<WxAreaNo>  queryAreaNoAll();
	public  List<WxAreaNo>  getAreaNoListByOption(Integer areaNo);
	public  List<WxAreaNo> getAreaNoListStartEnd(int startIndex, int maxIndex);
		
	
}