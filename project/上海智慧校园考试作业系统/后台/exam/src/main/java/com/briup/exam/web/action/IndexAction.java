package com.briup.exam.web.action;


import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;

import com.opensymphony.xwork2.ActionSupport;

public class IndexAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	
	/**
	 * 跳转到首页
	 * http://localhost:8888/poll/toIndex.action
	 * */
	@Action(value="toIndex",
			results={@Result(name=SUCCESS,
			location="/WEB-INF/jsp/index.jsp")})
	public String toIndex(){
		//所有栏目的信息
		
		return SUCCESS;
	}
	
}
