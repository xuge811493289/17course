package com.briup.exam.web.action.manager;


import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;

import com.briup.exam.bean.Department;
import com.briup.exam.service.IDepartmentService;

import net.sf.json.JSONArray;


/**
 * 部门Action
 * @author lichunyu
 *
 */
public class DepartmentAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private IDepartmentService departmentService;
	
	/**
	 * 获取所有部门呢
	 * */
	@Action(value="getAllDepartmentes")
	public void getAllDepartmentes(){
		List<Department> departmentes = departmentService.findAll(Order.asc("id"));
		String json = JSONArray.fromObject(departmentes).toString();
		responseJSON(json);
	}
}
