package com.briup.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.dao.BaseDao;
import com.briup.exam.bean.SubjectType;
import com.briup.exam.dao.SubjectTypeDao;
import com.briup.exam.service.ISubjectTypeService;

@Service
public class SubjectTypeServiceImpl extends BaseServiceImpl<SubjectType> implements ISubjectTypeService {
	@Autowired
	private SubjectTypeDao subjectTypeDao;
	
	@Override
	public BaseDao<SubjectType> getDao() {
		return subjectTypeDao;
	}

}
