package com.bit5.wherewego.course;

public class CourseVO {
	private int c_num;
	private String name;
	private String userid;
	private String time;
	private int stcode;
	private String info;
	private String grade;
	private int pcode1;
	private int pcode2;
	private int pcode3;
	private int score;
	private int coursesort;
	private String opt;
	
	private String stname; //역이름
	private String sortstring; //카페기타식당 식당기타카페
	private String starttime; //데이트 시작 시간대
	private String endtime; //데이트 시작 시간대마지막

	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public String getSortstring() {
		return sortstring;
	}

	public void setSortstring(String sortstring) {
		this.sortstring = sortstring;
	}

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

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getStcode() {
		return stcode;
	}

	public void setStcode(int stcode) {
		this.stcode = stcode;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public int getPcode1() {
		return pcode1;
	}

	public void setPcode1(int pcode1) {
		this.pcode1 = pcode1;
	}

	public int getPcode2() {
		return pcode2;
	}

	public void setPcode2(int pcode2) {
		this.pcode2 = pcode2;
	}

	public int getPcode3() {
		return pcode3;
	}

	public void setPcode3(int pcode3) {
		this.pcode3 = pcode3;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public int getCoursesort() {
		return coursesort;
	}

	public void setCoursesort(int coursesort) {
		this.coursesort = coursesort;
	}


	public String getOpt() {
		return opt;
	}

	public void setOpt(String opt) {
		this.opt = opt;
	}

	public String getStname() {
		return stname;
	}

	public void setStname(String stname) {
		this.stname = stname;
	}
	
	
}
