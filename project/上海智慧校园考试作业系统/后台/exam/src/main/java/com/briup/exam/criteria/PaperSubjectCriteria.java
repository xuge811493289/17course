package com.briup.exam.criteria;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import com.briup.exam.bean.PaperSubject;
import com.briup.exam.common.util.Criteriable;

public class PaperSubjectCriteria implements Criteriable {
	private PaperSubject paperSubject; 
	
	@Override
	public Criteria getExampleCriteria(Session session) {
		Criteria paperSubjectCriteria = session.createCriteria(PaperSubject.class);
		if(paperSubject.getExamPaper()!=null){
			Long id = paperSubject.getExamPaper().getId();
			paperSubjectCriteria.createCriteria("examPaper").add(Restrictions.eq("id", id));
		}
		return paperSubjectCriteria;
	}

	public PaperSubject getPaperSubject() {
		return paperSubject;
	}

	public void setPaperSubject(PaperSubject paperSubject) {
		this.paperSubject = paperSubject;
	}
}
