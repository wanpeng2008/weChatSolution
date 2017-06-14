package com.example.demo.repository.secondaryDB;

 
 
import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.jdbc.core.JdbcTemplate;

import com.zjpost.common.GenericDaoHibernate;
import com.zjpost.wx.model.WxAreaNo;
 

 
  


/***
 * @author <a href="dengdechuan@gmail.com">XXX</a>
 * @version $Id: $IWxAreaNoDao
 */
public class WxAreaNoDaoImpl extends GenericDaoHibernate<WxAreaNo, Long> implements WxAreaNoDao {

    public final static int MAX_IN_SIZE = 500;
    private Class persistentClass;  
    private JdbcTemplate jdbcTemplate; 
    private Class<WxAreaNo> zjpAreaNoClass;
 
    public WxAreaNoDaoImpl() {
        super(WxAreaNo.class);
        this.zjpAreaNoClass=WxAreaNo.class;
        // TODO Auto-generated constructor stub
    }
    public Class<WxAreaNo> getWxAreaNoClass() {
        return zjpAreaNoClass;
    }
    public void setWxAreaNoClass(Class<WxAreaNo> zjpAreaNoClass) {
        this.zjpAreaNoClass = zjpAreaNoClass;
    }

    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }

    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


 
    
    
public  WxAreaNo  getAreaNo(String province){
        
        DetachedCriteria dc = DetachedCriteria.forClass(this.zjpAreaNoClass);
        //dc.add(Restrictions.eq("level",level));
        dc.add(Restrictions.eq("province",province));                    
     
        
        List<WxAreaNo> list=super.getHibernateTemplate().findByCriteria(dc);
        if  (list!=null && list.size()!=0)
        {
            return list.get(0);
        }else{
            return null;
        }   
        
    }
    
    public  List<WxAreaNo>  queryAreaNoAll(){
         
        DetachedCriteria dc = DetachedCriteria.forClass(this.zjpAreaNoClass);
        dc.addOrder(Order.asc("provinceCode"));
            
        List<WxAreaNo> list=super.getHibernateTemplate().findByCriteria(dc);
        if (list==null) return null;
        return list;
        
    }
    //得到一级行业列表  
    public  List<WxAreaNo>  getAreaNoListByOption(Integer areaNo){
         
        DetachedCriteria dc = DetachedCriteria.forClass(this.zjpAreaNoClass);    
        if(areaNo!=null && areaNo.intValue()!=0){
            dc.add(Restrictions.eq("areaNo",areaNo)); 
        }
        
        dc.addOrder(Order.asc("areaNo"));  
        try{
            List<WxAreaNo> list=super.getHibernateTemplate().findByCriteria(dc);
            if (list==null) return null;
            return list;
        }catch (Exception ex)
        {
            ex.printStackTrace();
            return null;
        }
    }
    
    public  List<WxAreaNo> getAreaNoListStartEnd( int startIndex, int maxIndex){
        
       DetachedCriteria dc = DetachedCriteria.forClass(this.zjpAreaNoClass);    
       
       dc.addOrder(Order.asc("areaNo"));  
       try{
           List<WxAreaNo> list=super.getHibernateTemplate().findByCriteria(dc,startIndex, maxIndex);
           if (list==null) return null;
           return list;
       }catch (Exception ex)
       {
           ex.printStackTrace();
           return null;
       }
   }
   
 
 
    
 
}
