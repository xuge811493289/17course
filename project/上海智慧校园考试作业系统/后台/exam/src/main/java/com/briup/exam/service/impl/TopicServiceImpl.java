package com.briup.exam.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.dao.BaseDao;
import com.briup.exam.bean.Topic;
import com.briup.exam.dao.TopicDao;
import com.briup.exam.service.ITopicService;

@Service
public class TopicServiceImpl extends BaseServiceImpl<Topic> implements ITopicService {
	@Autowired
	private TopicDao topicDao;
	
	@Override
	public BaseDao<Topic> getDao() {
		return topicDao;
	}

}
