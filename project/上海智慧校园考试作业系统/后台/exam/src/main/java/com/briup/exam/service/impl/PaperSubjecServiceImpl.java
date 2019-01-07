package com.briup.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.dao.BaseDao;
import com.briup.exam.bean.PaperSubject;
import com.briup.exam.dao.PaperSubjectDao;
import com.briup.exam.service.IPaperSubjectService;

@Service
public class PaperSubjecServiceImpl extends BaseServiceImpl<PaperSubject> implements IPaperSubjectService {
	
	@Autowired
	private PaperSubjectDao paperSubjectDao;
	
	@Override
	public BaseDao<PaperSubject> getDao() {
		
		return paperSubjectDao;
	}

}
