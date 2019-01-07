package com.briup.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.dao.BaseDao;
import com.briup.exam.bean.User;
import com.briup.exam.dao.UserDao;
import com.briup.exam.service.IUserService;

@Service
public class UserServiceImpl extends BaseServiceImpl<User> implements IUserService {
	@Autowired
	private UserDao userDao;

	@Override
	public BaseDao<User> getDao() {
		return userDao;
	}
	
	
}
