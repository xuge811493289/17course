package com.briup.exam.web.action.manager;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 基础action
 * @author lichunyu
 * */
public class BaseAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	
	/**
	 * 回写JSON
	 * */
	public void responseJSON(String json){
		HttpServletResponse response = ServletActionContext.getResponse();
		//response.addHeader("Accept-Control-Allow-Origin", "http://172.18.8.1");
		//http://127.0.0.1
		//同源策略
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/plain;charset=utf-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		try {
			response.getWriter().write(json);
		} catch (IOException e) {
			e.printStackTrace();
		}		
	}
}
