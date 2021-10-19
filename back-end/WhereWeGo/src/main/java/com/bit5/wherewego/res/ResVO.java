package com.bit5.wherewego.res;

import java.util.List;

public class ResVO {
	private String res_num;
	private String userid;
	private int c_num;
	private String resdate;
	private int time;
	
	private String name; //코스이름
	
	private List<Integer> noDelList;
	
	public List<Integer> getNoDelList() {
		return noDelList;
	}
	public void setNoDelList(List<Integer> noDelList) {
		this.noDelList = noDelList;
	}
	public String getRes_num() {
		return res_num;
	}
	public void setRes_num(String res_num) {
		this.res_num = res_num;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public int getC_num() {
		return c_num;
	}
	public void setC_num(int c_num) {
		this.c_num = c_num;
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
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
