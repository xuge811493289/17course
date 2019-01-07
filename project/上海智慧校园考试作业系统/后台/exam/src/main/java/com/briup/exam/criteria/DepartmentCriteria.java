package com.briup.exam.criteria;

import org.hibernate.Criteria;
import org.hibernate.Session;

import com.briup.exam.bean.Department;
import com.briup.exam.common.util.Criteriable;

public class DepartmentCriteria implements Criteriable {
	private Department department;
	@Override
	public Criteria getExampleCriteria(Session session) {
		Criteria departmentCriteria = session.createCriteria(department.getClass());
		
		return departmentCriteria;
	}
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
}
