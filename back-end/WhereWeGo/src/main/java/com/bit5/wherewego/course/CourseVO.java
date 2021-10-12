package com.bit5.wherewego.course;

public class CourseVO {
	private int c_num;
	private String name;
	private String userid;
	private int stcode;
	private int score;
	private String stname; //역이름
	
	public int getC_num() {
		return c_num;
	}
	public void setC_num(int c_num) {
		this.c_num = c_num;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	
	public int getStcode() {
		return stcode;
	}
	public void setStcode(int stcode) {
		this.stcode = stcode;
	}
	
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public String getStname() {
		return stname;
	}
	public void setStname(String stname) {
		this.stname = stname;
	}
	
	
}
