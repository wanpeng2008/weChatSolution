/**
 * zjpost

 */
package com.example.demo.repository.secondaryDB;

import java.util.List;

import com.zjpost.common.GenericDao;
import com.zjpost.wx.model.WxOrg;
import com.zjpost.wx.model.WxOrg;

 
  

public interface WxOrgDao extends GenericDao<WxOrg, Long> {	
	  
	public  List<WxOrg>  queryOrgAll(); 	
	public  List<WxOrg> getOrgListStartEnd(int startIndex, int maxIndex);
		
	
}