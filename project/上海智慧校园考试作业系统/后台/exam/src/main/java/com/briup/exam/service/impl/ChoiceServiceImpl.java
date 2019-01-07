package com.briup.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.bean.Choice;
import com.briup.exam.dao.BaseDao;
import com.briup.exam.dao.ChoiceDao;
import com.briup.exam.service.IChoiceService;

@Service
public class ChoiceServiceImpl extends BaseServiceImpl<Choice> implements IChoiceService {
	@Autowired
	private ChoiceDao choiceDao;
		
	
	@Override
	public BaseDao<Choice> getDao() {
		return choiceDao;
	}

}
