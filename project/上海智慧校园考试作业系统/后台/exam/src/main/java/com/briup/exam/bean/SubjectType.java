package com.briup.exam.bean;

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 题目类型
 * 
 * @author lichunyu
 */
@Entity
@Table(name="tbl_exam_subjectType")
public class SubjectType implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	private String realName;
	public SubjectType() {

	}
	public SubjectType(Long id,String name, String realName) {
		super();
		this.name = name;
		this.realName = realName;
	}
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRealName() {
		return realName;
	}
	public void setRealName(String realName) {
		this.realName = realName;
	}
	
}
