package com.briup.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.dao.BaseDao;
import com.briup.exam.bean.SubjectLevel;
import com.briup.exam.dao.SubjectLevelDao;
import com.briup.exam.service.ISubjectLevelService;

@Service
public class SubjectLevelServiceImpl extends BaseServiceImpl<SubjectLevel> implements ISubjectLevelService {
	@Autowired
	private SubjectLevelDao subjectLevelDao;

	@Override
	public BaseDao<SubjectLevel> getDao() {
		return subjectLevelDao;
	}
	
}
