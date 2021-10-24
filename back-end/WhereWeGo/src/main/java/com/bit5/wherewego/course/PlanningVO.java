package com.bit5.wherewego.course;

import java.util.List;

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
	
	/*
	삽질
	
	private String fullOpt;
	private List<String> foodlist;
	private List<String> cafelist;
	private List<String> etclist;
	private List<String> alllist;
	private String inout;
	private String money;
	*/
	
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
	
	
	
	/*
	삽질로 판명
	 
	public String getFullOpt() {
		return fullOpt;
	}
	public void setFullOpt() {
		this.fullOpt = this.getOpt();
	}
	public List<String> getFoodlist() {
		return foodlist;
	}
	public void setFoodlist(String fullOpt) {
		this.foodlist = new ArrayList<String>();
		String[] foodarr = {"한식","일식","중식","양식","그외"};
		for (int i=0; i<foodarr.length; i++) {	
			if(fullOpt.indexOf(foodarr[i]) != -1) { //관심사에 한식,일식,.. 이 있으면
				foodlist.add(foodarr[i]); //foodlist에 추가
			}
		}
	}
	public List<String> getCafelist() {
		return cafelist;
	}
	public void setCafelist(String fullOpt) {
		this.cafelist = new ArrayList<String>();
		String[] cafearr = {"분위기","컨셉","야외"};
		for (int i=0; i<cafearr.length; i++) {	
			if(fullOpt.indexOf(cafearr[i]) != -1) { //관심사에 분위기,컨셉,.. 이 있으면
				cafelist.add(cafearr[i]); //list에 추가
			}
		}
	}
	public List<String> getEtclist() {
		return etclist;
	}
	public void setEtclist(String fullOpt) {
		this.etclist = new ArrayList<String>();
		String[] etcarr = {"체험","문화","익스트림","이색"};
		for (int i=0; i<etcarr.length; i++) {	
			if(fullOpt.indexOf(etcarr[i]) != -1) { //관심사에 있으면
				etclist.add(etcarr[i]); //etclist에 추가
			}
		}
	}
	public List<String> getAlllist() {
		return alllist;
	}
	public void setAlllist(String fullOpt) {
		this.alllist = new ArrayList<String>();
		String[] allarr = {"팝업","기념일","신상"};
		for (int i=0; i<allarr.length; i++) {	
			if(fullOpt.indexOf(allarr[i]) != -1) { //관심사에 있으면
				alllist.add(allarr[i]); //alllist에 추가
			}
		}
	}
	public String getInout() {
		return inout;
	}
	public void setInout(String fullOpt) {
		if(fullOpt.indexOf("실외")!=-1 && fullOpt.indexOf("실내")==-1) { //만약 실외만 골랐으면
			this.inout="실외";
		}
		else if(fullOpt.indexOf("실내")!=-1 && fullOpt.indexOf("실외")==-1) { //실내만 골랐다면
			this.inout="실내";
		}
		//하지만 날씨가 안좋으면 무조건 실내
		if(weather.indexOf("09")!=-1 || weather.indexOf("10")!=-1 || weather.indexOf("11")!=-1 || weather.indexOf("13")!=-1 || weather.indexOf("50")!=-1){
			this.inout="실내";
		}
	}
	public String getMoney() {
		return money;
	}
	public void setMoney(String fullOpt) {
		if(fullOpt.indexOf("가성비")!=-1 && fullOpt.indexOf("럭셔리")==-1) { //가성비만 골랐다면
			this.money="가성비";
		}
		else if(fullOpt.indexOf("럭셔리")!=-1 && fullOpt.indexOf("가성비")==-1) { //럭셔리만 골랐다면
			this.money="럭셔리";
		}
	}
	*/
	
}
