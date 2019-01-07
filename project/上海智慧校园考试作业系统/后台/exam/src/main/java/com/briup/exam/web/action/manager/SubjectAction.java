package com.briup.exam.web.action.manager;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;

import com.briup.exam.common.util.JsonDateValueProcessor;
import com.briup.exam.bean.Choice;
import com.briup.exam.bean.Subject;
import com.briup.exam.criteria.SubjectCriteria;
import com.briup.exam.service.IChoiceService;
import com.briup.exam.service.ISubjectService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.processors.JsonBeanProcessor;

/**
 * 题干处理类
 * */
public class SubjectAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	@Autowired
	private ISubjectService subjectService;
	@Autowired
	private IChoiceService choiceService;
	//题干信息
	private Subject subject;
	//选项内容
	private List<String> choiceContent;	
	//选项正确标示
	private List<Boolean> choiceCorrect;
	
	@Action(value="getAllSubjects")
	public void getAllSubjects(){
		subject = (subject == null)?new Subject():subject;
		SubjectCriteria criteria = new SubjectCriteria();
		criteria.setSubject(subject);
		List<Subject> list = subjectService.findByCriteria(criteria, Order.desc("id"));
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
		String json = JSONArray.fromObject(list,config).toString();
		responseJSON(json);
	}
	/**
	 * 根据id删除
	 * */
	@Action(value="delSubject")
	public void delSubject(){
		subjectService.delete(subject.getId());
		responseJSON("删除成功");
	}
	
	/**
	 * 根据id审核题目
	 * */
	@Action(value="checkSubject")
	public void checkSubject(){
		Subject dbSubject = subjectService.findById(subject.getId());
		dbSubject.setCheckState(subject.getCheckState());
		if(subject.getCheckState().equals("通过")){
			responseJSON("审核成功");
		}else{
			responseJSON("审核不通过");
		}
		subjectService.update(dbSubject);
		
	}
	
	/**
	 * 保存题干
	 * @param subject 
	 * subject.department.id
	 * subject.topic.id
	 * subject.subjectType.id
	 * subject.subjectLevel.id
	 * subject.stem
	 * subject.answer
	 * subject.analysis
	 * 
	 * choiceContent
	 * choiceCorrect
	 * 
	 * */
	@Action(value="saveSubject")
	public void saveSubject(){
		subject.setUploadTime(new Date());
		subject.setCheckState("未审核");
		
		subjectService.saveOrUpdate(subject);
		if(choiceContent!=null){
			List<Choice> choices = new ArrayList<Choice>();
			
	 		for(int i=0;i<choiceContent.size();i++){
				Choice choice = new Choice();
				choice.setContent(choiceContent.get(i));
				choice.setCorrect(choiceCorrect.get(i));
				choice.setSubject(subject);
				choices.add(choice);
			}
	 		
	 		choiceService.batchSave(choices);
		}
		responseJSON("保存成功");
	}
	
	

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public List<String> getChoiceContent() {
		return choiceContent;
	}

	public void setChoiceContent(List<String> choiceContent) {
		this.choiceContent = choiceContent;
	}

	public List<Boolean> getChoiceCorrect() {
		return choiceCorrect;
	}

	public void setChoiceCorrect(List<Boolean> choiceCorrect) {
		this.choiceCorrect = choiceCorrect;
	}
	
}
