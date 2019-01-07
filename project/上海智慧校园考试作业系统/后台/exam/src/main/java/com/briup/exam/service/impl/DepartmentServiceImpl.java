package com.briup.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.dao.BaseDao;
import com.briup.exam.bean.Department;
import com.briup.exam.dao.DepartmentDao;
import com.briup.exam.service.IDepartmentService;

@Service
public class DepartmentServiceImpl extends BaseServiceImpl<Department> implements IDepartmentService {
	@Autowired
	private DepartmentDao departmentDao;
	
	@Override
	public BaseDao<Department> getDao() {
		
		return departmentDao;
	}

	

}
