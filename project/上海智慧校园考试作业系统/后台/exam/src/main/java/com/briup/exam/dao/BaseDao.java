package com.briup.exam.dao;

import java.lang.reflect.ParameterizedType;
import java.math.BigInteger;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.type.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.briup.exam.common.util.Criteriable;
import com.briup.exam.common.util.IPageInfo;

/**
 * 基本dao类，其他dao可以继承该基础类，然后调用现有的增删该查方法
 */
@Repository("baseDao")
@SuppressWarnings("unchecked")
public class BaseDao<M extends java.io.Serializable>{
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;
	
	public Session getSession(){
		return sessionFactory.getCurrentSession();
	}
	
	public void save(M model){
		getSession().save(model);
	}
	
	public void saveOrUpdate(M model){
		getSession().saveOrUpdate(model);
	}
	
	public void update(M model){
		getSession().update(model);
	}
	
	public void merge(M model){
		getSession().merge(model);
	}
	
	public void delete(long id){
		getSession().delete(this.findById(id));
	}
	
	public void deleteObject(M model){
		getSession().delete(model);
	}
	
	public boolean exists(long id){
		return findById(id)!=null;
	}
	
	public M findById(long id){
		return (M)getSession().get(this.getEntityClass(),id);
	}
	
	/**
	 * 根据对象查找集合
	 *
	 * @param model
	 * @return
	 */
	public List<M> findByExample(M model,Order...orders){
		Criteria criteria=getExampleCriteria(model);
		System.out.println(criteria);
		for(Order order:orders){
			criteria.addOrder(order);
		}
		List<M> results=criteria.list();
		return results;
	}
	
	/**
	 * 通过条件查询
	 *
	 * @param criteria
	 * @param pageInfo
	 * @param orders
	 * @return
	 */
	public List<M> findByCriteria(Criteriable criteriaObj,IPageInfo pageInfo,Order...orders){
		Criteria c=criteriaObj.getExampleCriteria(this.getSession());
		c.setFirstResult(pageInfo.getOffset());
		c.setMaxResults(pageInfo.getPageSize());
		for(Order order:orders){
			c.addOrder(order);
		}
		pageInfo.setTotalCount(count(criteriaObj));
		List<M> results=c.list();
		return results;
	}
	
	/**
	 * 通过条件查询
	 *
	 * @param criteria
	 * @param orders
	 * @return
	 */
	public List<M> findByCriteria(Criteriable criteriaObj,Order...orders){
		Criteria c=criteriaObj.getExampleCriteria(this.getSession());
		for(Order order:orders){
			c.addOrder(order);
		}
		List<M> results=c.list();
		return results;
	}
	
	public long count(Criteriable criteriaObj){
		Criteria c=criteriaObj.getExampleCriteria(this.getSession());
		c.setProjection(Projections.projectionList().add(Projections.rowCount()));
		return (Long)c.uniqueResult();
	}
	
	/**
	 * 根据对象查找集合-分页
	 *
	 * @param model
	 * @param pageInfo
	 * @param orders
	 * @return
	 */
	public List<M> findByExample(M model,IPageInfo pageInfo,Order...orders){
		Criteria criteria=getExampleCriteria(model);
		criteria.setFirstResult(pageInfo.getOffset());
		criteria.setMaxResults(pageInfo.getPageSize());
		pageInfo.setTotalCount(this.count(model));
		for(Order order:orders){
			criteria.addOrder(order);
		}
		List<M> results=criteria.list();
		return results;
	}
	
	public Criteria getExampleCriteria(M model){
		Criteria criteria=getSession().createCriteria(this.getEntityClass()).add(Example.create(model));
		return criteria;
	}
	
	public Criteria getExampleCriteria(){
		Criteria criteria=getSession().createCriteria(this.getEntityClass());
		return criteria;
	}
	
	/**
	 * 根据对象查找返回唯一值
	 *
	 * @param model
	 * @return
	 */
	public M findUnique(M model){
		M result=(M)getExampleCriteria(model).uniqueResult();
		return result;
	}
	
	/**
	 * 获取所有记录
	 *
	 * @return
	 */
	public List<M> findAll(Order...orders){
		Criteria criteria=getSession().createCriteria(this.getEntityClass());
		for(Order order:orders){
			criteria.addOrder(order);
		}
		return criteria.list();
	}
	
	/**
	 * 获取所有记录
	 *
	 * @return
	 */
	public List<M> findAll(IPageInfo pageInfo,Order...orders){
		Criteria criteria=getSession().createCriteria(this.getEntityClass());
		criteria.setFirstResult(pageInfo.getOffset());
		criteria.setMaxResults(pageInfo.getPageSize());
		pageInfo.setTotalCount(countAll());
		for(Order order:orders){
			criteria.addOrder(order);
		}
		return criteria.list();
	}
	
	/**
	 * 获取总记录数
	 *
	 * @return
	 */
	public int countAll(){
		Long total=aggregate(" select count(*) from "+this.getEntityClass().getSimpleName());
		return total.intValue();
	}
	
	public int count(M model){
		Criteria criteria=getExampleCriteria(model);
		criteria.setProjection(Projections.projectionList().add(Projections.rowCount()));
		return ((Long)criteria.uniqueResult()).intValue();
	}
	
	public Long countByHql(String hql,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		return (Long)query.uniqueResult();
	}
	
	@Deprecated
	/**
	 * 此方法已经过期，不建议使用
	 *
	 * @param clazz
	 * @param hql
	 * @param pageInfo
	 * @param paramlist
	 * @return
	 */
	public <T> List<T> findByHql(Class<T> clazz,String hql,IPageInfo pageInfo,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		query.setMaxResults(pageInfo.getPageSize());
		query.setFirstResult(pageInfo.getOffset());
		return query.list();
	}
	
	public List<M> findByHQL(String hql,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		List<M> results=query.list();
		return results;
	}
	
	/**
	 * 分页查询，并返回list和记录总数
	 *
	 * @param hql
	 * @param pageInfo
	 * @param paramlist
	 * @return
	 */
	public <T> List<T> findByHQL(final String hql,final IPageInfo pageInfo,final Class<T> clazz,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		query.setFirstResult(pageInfo.getOffset());
		query.setMaxResults(pageInfo.getPageSize());
		List<T> results=query.list();
		String countHQL=hql.replaceFirst("(?i).*?from","select count(*) from");
		long count=this.getCount(countHQL,paramlist);
		pageInfo.setTotalCount(count);
		return results;
	}
	
	/**
	 * 分页查询，并返回list和记录总数
	 *
	 * @param queryHql
	 *            查询记录的hql
	 * @param countHql
	 *            记录总数的hql
	 * @param pageInfo
	 *            分页信息
	 * @param clazz
	 *            返回的类型
	 * @param paramlist
	 *            查询语句的参数
	 * @return
	 */
	public <T> List<T> findByHQL(final String queryHql,final String countHql,final IPageInfo pageInfo,final Class<T> clazz,final Object...paramlist){
		Query query=getSession().createQuery(queryHql);
		setParameters(query,paramlist);
		query.setFirstResult(pageInfo.getOffset());
		query.setMaxResults(pageInfo.getPageSize());
		List<T> results=query.list();
		long count=this.getCount(countHql,paramlist);
		pageInfo.setTotalCount(count);
		return results;
	}
	
	public <T> List<T> findByHQL(final String queryHql,final Class<T> clazz,final Object...paramlist){
		Query query=getSession().createQuery(queryHql);
		setParameters(query,paramlist);
		List<T> results=query.list();
		return results;
	}
	
	public <T> List<T> findByHQLNotGeneric(final String queryHql,final Object...paramlist){
		Query query=getSession().createQuery(queryHql);
		setParameters(query,paramlist);
		List<T> results=query.list();
		return results;
	}
	
	/**
	 * 分页查询，并返回list和记录总数
	 *
	 * @param hql
	 * @param pageInfo
	 * @param paramlist
	 * @return
	 */
	public List<M> findByHQL(final String hql,final IPageInfo pageInfo,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		query.setFirstResult(pageInfo.getOffset());
		query.setMaxResults(pageInfo.getPageSize());
		List<M> results=query.list();
		String countHQL=hql.replaceFirst("(?i).*?from","select count(*) from");
		long count=this.getCount(countHQL,paramlist);
		pageInfo.setTotalCount(count);
		return results;
	}
	
	protected List<Object[]> findBySQL(final String sql,final Object...paramlist){
		Query query=getSession().createSQLQuery(sql);
		setParameters(query,paramlist);
		return query.list();
	}
	
	protected List<Object[]> findByNamedQuery(String queryName,final Object...paramlist){
		Query query=this.getSession().getNamedQuery(queryName);
		setParameters(query,paramlist);
		return query.list();
	}
	
	/**
	 * 用于分页
	 *
	 * @param hql
	 * @param firstResult
	 *            分页起始位置
	 * @param maxResult
	 *            每次查询记录数
	 * @param paramlist
	 * @return
	 */
	protected <T> List<T> list(final String hql,final int firstResult,final int maxResult,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		query.setFirstResult(firstResult);
		query.setMaxResults(maxResult);
		List<T> results=query.list();
		return results;
	}
	
	/**
	 * 根据hql查询记录数
	 *
	 * @param hql
	 * @param paramlist
	 * @return
	 */
	protected long getCount(String hql,Object...paramlist){
		long result=-1;
		List<?> list=findByHQL(hql,paramlist);
		if((list!=null)&&(list.size()>0)){ return ((Number)list.get(0)).longValue(); }
		return result;
	}
	
	public <T> List<T> list(Criteria criteria){
		return criteria.list();
	}
	
	public void flush(){
		getSession().flush();
	}
	
	public void clear(){
		getSession().clear();
	}
	
	protected List<M> listSelf(final String hql,final int pn,final int pageSize,final Object...paramlist){
		return this.<M>list(hql,pn,pageSize,paramlist);
	}
	
	/**
	 * for in
	 */
	protected <T> List<T> listWithIn(final String hql,final int start,final int length,final Map<String,Collection<?>> map,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		for(Entry<String,Collection<?>> e:map.entrySet()){
			query.setParameterList(e.getKey(),e.getValue());
		}
		if((start>-1)&&(length>-1)){
			query.setMaxResults(length);
			if(start!=0){
				query.setFirstResult(start);
			}
		}
		List<T> results=query.list();
		return results;
	}
	
	/**
	 * 根据查询条件返回唯一一条记录
	 */
	protected <T> T unique(final String hql,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		return (T)query.uniqueResult();
	}
	
	/**
	 * for in
	 */
	protected <T> T aggregate(final String hql,final Map<String,Collection<?>> map,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		if(paramlist!=null){
			setParameters(query,paramlist);
			for(Entry<String,Collection<?>> e:map.entrySet()){
				query.setParameterList(e.getKey(),e.getValue());
			}
		}
		return (T)query.uniqueResult();
	}
	
	protected <T> T aggregate(final String hql,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		return (T)query.uniqueResult();
	}
	
	/**
	 * 执行批处理语句.如 之间insert, update, delete 等.
	 */
	protected int executeBulk(final String hql,final Object...paramlist){
		Query query=getSession().createQuery(hql);
		setParameters(query,paramlist);
		Object result=query.executeUpdate();
		return result==null?0:((Integer)result).intValue();
	}
	
	public int executeNativeBulk(final String natvieSQL,final Object...paramlist){
		Query query=getSession().createSQLQuery(natvieSQL);
		setParameters(query,paramlist);
		Object result=query.executeUpdate();
		return result==null?0:((Integer)result).intValue();
	}
	
	protected <T> T aggregateByNative(final String natvieSQL,final List<Entry<String,Type>> scalarList,final Object...paramlist){
		SQLQuery query=getSession().createSQLQuery(natvieSQL);
		if(scalarList!=null){
			for(Entry<String,Type> entity:scalarList){
				query.addScalar(entity.getKey(),entity.getValue());
			}
		}
		setParameters(query,paramlist);
		Object result=query.uniqueResult();
		return (T)result;
	}
	
	public <T> T unique(Criteria criteria){
		return (T)criteria.uniqueResult();
	}
	
	public <T> List<T> list(DetachedCriteria criteria){
		return list(criteria.getExecutableCriteria(getSession()));
	}
	
	public <T> T unique(DetachedCriteria criteria){
		return (T)unique(criteria.getExecutableCriteria(getSession()));
	}
	
	protected void setParameters(Query query,Object[] paramlist){
		if(paramlist!=null){
			for(int i=0;i<paramlist.length;i++){
				if(paramlist[i] instanceof Date){
					query.setTimestamp(i,(Date)paramlist[i]);
				}else{
					query.setParameter(i,paramlist[i]);
				}
			}
		}
	}
	
	public Class<M> getEntityClass(){
		ParameterizedType parameterizedType=(ParameterizedType)(getClass().getGenericSuperclass());
		return (Class<M>)(parameterizedType.getActualTypeArguments()[0]);
	}
	
	public boolean isTableExist(String tableName){
		String sql="select count(1) from INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA=database() and table_name=?";
		Query query=getSession().createSQLQuery(sql);
		query.setParameter(0,tableName);
		BigInteger result=(BigInteger)query.uniqueResult();
		return result.intValue()>0;
	}
	
	public boolean isViewExist(String viewName){
		String sql="select count(1) from INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA=database() and table_name=?";
		Query query=getSession().createSQLQuery(sql);
		query.setParameter(0,viewName);
		BigInteger result=(BigInteger)query.uniqueResult();
		return result.intValue()>0;
	}
	
	protected String getNamedQueryString(String queryName){
		Query query=this.getSession().getNamedQuery(queryName);
		String queryString=query.getQueryString();
		return queryString;
	}
}
