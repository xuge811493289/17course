package com.briup.exam.web.action.manager;

import java.util.Date;
import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;

import com.briup.exam.common.util.JsonDateValueProcessor;
import com.briup.exam.bean.Choice;
import com.briup.exam.bean.ExamPaper;
import com.briup.exam.bean.PaperSubject;
import com.briup.exam.bean.Subject;
import com.briup.exam.criteria.PaperSubjectCriteria;
import com.briup.exam.service.IExamPaperService;
import com.briup.exam.service.IPaperSubjectService;
import com.briup.exam.service.ISubjectService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.processors.JsonBeanProcessor;

/**
 * 试卷处理类
 * */
public class ExamPaperAction extends BaseAction{

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private IExamPaperService examPaperService;
	@Autowired
	private IPaperSubjectService paperSubjectService;
	@Autowired
	private ISubjectService subjectService;
	
	
	private ExamPaper paper;
	private List<Integer> scores;
	private List<Long> subjectIds;
	
	/**
	 * 保存试卷
	 * @param
	 * paper.department.id	
	 * paper.title
	 * paper.description
	 * paper.totalPoints
	 * paper.answerQuestionTime
	 * 
	 * scores []
	 * subjectIds []
	 * 	
	 * */
	@Action(value="saveExamPaper")
	public void saveExamPaper(){
		String msg = "保存成功！";
		try {
			paper.setCreateTime(new Date());
			//保存试卷
			examPaperService.save(paper);
			for(int i=0;i<subjectIds.size();i++){
				Long subjectId = subjectIds.get(i);
				PaperSubject paperSubject = new PaperSubject();
				Subject subject = subjectService.findById(subjectId);
				//设定试卷与题目之间的关联关系
				paperSubject.setSubject(subject);
				paperSubject.setExamPaper(paper);
				paperSubject.setScore(scores.get(i));
				paperSubjectService.save(paperSubject);
			}
		} catch (Exception e) {
			msg = "保存失败！原因："+e.getMessage();
		}
		responseJSON(msg);
	}
	@Action(value="getExamPaperById")
	public void getExamPaperById(){
		ExamPaper examPaper = examPaperService.findById(paper.getId());
		PaperSubjectCriteria criteria = new PaperSubjectCriteria();
		PaperSubject paperSubject = new PaperSubject();
		paperSubject.setExamPaper(examPaper);
		
		criteria.setPaperSubject(paperSubject);
		List<PaperSubject> paperSubjects 
				= paperSubjectService.findByCriteria(criteria);
		
		
		
		JsonConfig config = new JsonConfig();
		config.setExcludes(new String[]{"paperSubjects"});
		config.registerJsonBeanProcessor(Choice.class, new JsonBeanProcessor() {
			@Override
			public JSONObject processBean(Object obj, JsonConfig arg1) {
				if(obj instanceof Choice){
					Choice choice = (Choice) obj;
					JSONObject jsonObj = new JSONObject();
					jsonObj.put("id", choice.getId());
					jsonObj.put("content", choice.getContent());
					jsonObj.put("correct", choice.getCorrect());
					return jsonObj;
				}
				return null;
			}
		});
		config.registerJsonValueProcessor(Date.class , new JsonDateValueProcessor());
		JSONArray sj = JSONArray.fromObject(paperSubjects,config);
		
		JsonConfig config2 = new JsonConfig();
		config2.setExcludes(new String[]{"paperSubjects","user"});
		JSONObject pj = JSONObject.fromObject(examPaper,config2);
		
		JSONObject obj = new JSONObject();
		obj.put("paper", pj);
		obj.put("subjects", sj);
		
		responseJSON(obj.toString());
	}
	
	@Action(value="getAllExamPapers")
	public void getAllExamPapers(){
		List<ExamPaper> examPapers = examPaperService.findAll(Order.desc("createTime"));
		JsonConfig config = new JsonConfig();
		//config.setExcludes(new String[]{"paperSubjects"});
		config.registerJsonValueProcessor(Date.class , new JsonDateValueProcessor());
		config.registerJsonBeanProcessor(PaperSubject.class, new JsonBeanProcessor() {
			@Override
			public JSONObject processBean(Object arg0, JsonConfig arg1) {
				if(arg0 instanceof PaperSubject){
					PaperSubject ps = (PaperSubject) arg0;
					JSONObject obj = new JSONObject();
					obj.put("id",ps.getSubject().getId());
					obj.put("stem",ps.getSubject().getStem());
					obj.put("type", ps.getSubject().getSubjectType().getRealName());
					obj.put("level", ps.getSubject().getSubjectType().getRealName());
					obj.put("topic", ps.getSubject().getTopic().getTitle());
					obj.put("score", ps.getScore());
					return obj;
				}
				return null;
				
			}
		});
		String json = JSONArray.fromObject(examPapers,config).toString();
		responseJSON(json);
	}

	
	
	public ExamPaper getPaper() {
		return paper;
	}

	public void setPaper(ExamPaper paper) {
		this.paper = paper;
	}

	public List<Integer> getScores() {
		return scores;
	}

	public void setScores(List<Integer> scores) {
		this.scores = scores;
	}

	public List<Long> getSubjectIds() {
		return subjectIds;
	}

	public void setSubjectIds(List<Long> subjectIds) {
		this.subjectIds = subjectIds;
	}
}
