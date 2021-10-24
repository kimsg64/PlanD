package com.bit5.wherewego.course;

public class PlanningVO {
	private String userId;
	private String line;
	private String stname;
	private String stcode; //역코드
	private String resdate;
	private int time;
	private int coursesort;
	private String opt;
	private String weather;
	
	//만약 첨부터 숫자로 넘어간다면 이건 없어도 OK
	private String sortstring; //카페기타식당 식당기타카페
	
	
	
	public String getStcode() {
		return stcode;
	}
	public void setStcode(String stcode) {
		this.stcode = stcode;
	}
	public String getSortstring() {
		return sortstring;
	}
	public void setSortstring(String sortstring) {
		this.sortstring = sortstring;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getLine() {
		return line;
	}
	public void setLine(String line) {
		this.line = line;
	}
	public String getStname() {
		return stname;
	}
	public void setStname(String stname) {
		this.stname = stname;
	}
	public String getResdate() {
		return resdate;
	}
	public void setResdate(String resdate) {
		this.resdate = resdate;
	}
	public int getTime() {
		return time;
	}
	public void setTime(int time) {
		this.time = time;
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
	public String getWeather() {
		return weather;
	}
	public void setWeather(String weather) {
		this.weather = weather;
	}
	
}
