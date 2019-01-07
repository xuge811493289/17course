package com.briup.exam.web.action.manager;

import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;

import com.briup.exam.bean.Topic;
import com.briup.exam.criteria.TopicCriteria;
import com.briup.exam.service.ITopicService;

import net.sf.json.JSONArray;
import net.sf.json.JsonConfig;

/**
 * 知识点处理类
 * @author lichunyu
 */
public class TopicAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private ITopicService topicService;
	private Topic topic; 
	
	/**
	 * 获取所有知识点类型
	 * */
	@Action(value="getAllTopics")
	public void getAllTopics(){
		List<Topic> topics = topicService.findAll(Order.asc("id"));
		//过滤
		JsonConfig config = new JsonConfig();
		//config.setExcludes(new String[]{"department"});
		String json = JSONArray.fromObject(topics,config).toString();
		responseJSON(json);
	}
	
	/**
	 * 获取所有知识点类型
	 * @param topic.department.id
	 * */
	@Action(value="getDepartmentTopics")
	public void getDepartmentTopics(){
		TopicCriteria criteria = new TopicCriteria();
		criteria.setTopic(topic);
		List<Topic> topics = topicService.findByCriteria(criteria, Order.asc("id"));
		//过滤
		JsonConfig config = new JsonConfig();
		config.setExcludes(new String[]{"department"});
		String json = JSONArray.fromObject(topics,config).toString();
		responseJSON(json);
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}
}
