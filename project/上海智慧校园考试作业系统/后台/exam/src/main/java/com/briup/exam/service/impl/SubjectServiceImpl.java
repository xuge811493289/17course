package com.briup.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.dao.BaseDao;
import com.briup.exam.bean.Subject;
import com.briup.exam.dao.SubjectDao;
import com.briup.exam.service.ISubjectService;

@Service
public class SubjectServiceImpl extends BaseServiceImpl<Subject> implements ISubjectService {
	@Autowired
	private SubjectDao subjectDao;

	@Override
	public BaseDao<Subject> getDao() {
		return subjectDao;
	}
	
}
