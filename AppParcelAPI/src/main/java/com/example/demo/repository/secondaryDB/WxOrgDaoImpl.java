package com.example.demo.repository.secondaryDB;

 
 
import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.jdbc.core.JdbcTemplate;

import com.zjpost.common.GenericDaoHibernate;
import com.zjpost.wx.model.WxOrg;
import com.zjpost.wx.model.WxOrg;
 

 
  


/***
 * @author <a href="dengdechuan@gmail.com">XXX</a>
 * @version $Id: $IWxOrgDao
 */
public class WxOrgDaoImpl extends GenericDaoHibernate<WxOrg, Long> implements WxOrgDao {

    public final static int MAX_IN_SIZE = 500;
    private Class persistentClass;  
    private JdbcTemplate jdbcTemplate; 
    private Class<WxOrg> zjpOrgClass;
 
    public WxOrgDaoImpl() {
        super(WxOrg.class);
        this.zjpOrgClass=WxOrg.class;
        // TODO Auto-generated constructor stub
    }
    public Class<WxOrg> getWxOrgClass() {
        return zjpOrgClass;
    }
    public void setWxOrgClass(Class<WxOrg> zjpOrgClass) {
        this.zjpOrgClass = zjpOrgClass;
    }

    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }

    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


 
    
    
 
    public  List<WxOrg>  queryOrgAll(){
         
        DetachedCriteria dc = DetachedCriteria.forClass(this.zjpOrgClass);
        dc.addOrder(Order.asc("provinceCode"));
            
        List<WxOrg> list=super.getHibernateTemplate().findByCriteria(dc);
        if (list==null) return null;
        return list;
        
    }
    
    public  List<WxOrg> getOrgListStartEnd( int startIndex, int maxIndex){
        
        DetachedCriteria dc = DetachedCriteria.forClass(this.zjpOrgClass);    
         
        try{
            List<WxOrg> list=super.getHibernateTemplate().findByCriteria(dc,startIndex, maxIndex);
            if (list==null) return null;
            return list;
        }catch (Exception ex)
        {
            ex.printStackTrace();
            return null;
        }
    }
    
 
}
