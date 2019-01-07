package com.briup.exam.criteria;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import com.briup.exam.bean.Topic;
import com.briup.exam.common.util.Criteriable;

/**
 * 知识点模板
 * */
public class TopicCriteria implements Criteriable {
	private Topic topic;
	@Override
	public Criteria getExampleCriteria(Session session) {
		Criteria topicCriteria = session.createCriteria(topic.getClass());
		
		if(topic.getDepartment()!=null){
			Criteria departmentCriteria = topicCriteria.createCriteria("department");
			departmentCriteria.add(Restrictions.eq("id", topic.getDepartment().getId()));
		}
		
		return topicCriteria;
	}
	public Topic getTopic() {
		return topic;
	}
	public void setTopic(Topic topic) {
		this.topic = topic;
	}
}
