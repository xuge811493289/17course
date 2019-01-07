package com.briup.exam.web.action.manager;

import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.springframework.beans.factory.annotation.Autowired;

import com.briup.exam.bean.User;
import com.briup.exam.service.IUserService;

import net.sf.json.JSONArray;

/**
 * 用户处理类
 * */
public class UserAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private IUserService userService;
	private String name;
	private Integer age;
	private String gender;
	
	@Action(value="saveStudent")
	public void saveStudent(){
		User user = new User();
		user.setName(name);
		user.setAge(age);
		user.setGender(gender);
		System.out.println(user);
		userService.save(user);
		responseJSON("ok");
	}
	
	@Action(value="getAllStudents")
	public void getAllStudents(){
		List<User> users = userService.findAll();
		String json = JSONArray.fromObject(users).toString();
		responseJSON(json);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
}
