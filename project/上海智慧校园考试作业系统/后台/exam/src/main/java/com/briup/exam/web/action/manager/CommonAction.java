package com.briup.exam.web.action.manager;

import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;

import com.briup.exam.bean.SubjectLevel;
import com.briup.exam.bean.SubjectType;
import com.briup.exam.service.ISubjectLevelService;
import com.briup.exam.service.ISubjectTypeService;

import net.sf.json.JSONArray;

/**
 * 共享处理类
 * @author lichunyu
 */
public class CommonAction extends BaseAction {
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private ISubjectLevelService subjectLevelService;
	@Autowired
	private ISubjectTypeService subjectTypeService;
	
	/**
	 * 跳转到首页
	 * */
	@Action(value="toIndex",results={@Result(name=SUCCESS,location="/WEB-INF/jsp/exam/home.jsp")})
	public String toIndex(){
		
		return SUCCESS;
	}
	/**
	 * 测试数据
	 * */
	@Action(value="getTest")
	public void getTest(){
		responseJSON("[{\"name\":\"terry\"}]");
	}

	/**
	 * 获取所有题目类型
	 * */
	@Action(value="getAllSubjectType")
	public void getAllSubjectType(){
		List<SubjectType> types = subjectTypeService.findAll(Order.asc("id"));
		String json = JSONArray.fromObject(types).toString();
		responseJSON(json);
	}
	
	/**
	 * 获取所有题目级别
	 */
	@Action(value="getAllSubjectLevel")
	public void getAllSubjectLevel(){
		List<SubjectLevel> levels = subjectLevelService.findAll(Order.asc("id"));
		String json = JSONArray.fromObject(levels).toString();
		responseJSON(json);
	}
}
