package com.briup.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.dao.BaseDao;
import com.briup.exam.bean.ExamPaper;
import com.briup.exam.dao.ExamPaperDao;
import com.briup.exam.service.IExamPaperService;

@Service
public class ExamPaperImpl extends BaseServiceImpl<ExamPaper> implements IExamPaperService {
	@Autowired
	private ExamPaperDao examPaperDao;

	@Override
	public BaseDao<ExamPaper> getDao() {
		return examPaperDao;
	}
	
	
}
