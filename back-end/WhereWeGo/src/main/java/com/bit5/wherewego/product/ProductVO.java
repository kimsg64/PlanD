package com.bit5.wherewego.product;

public class ProductVO {
	private String p_num;
	private String brand;
	private String name;
	private int price;
	private String img;
	private String gender;
	private String info;
	private String detailphoto;
	
	
	
	public String getDetailphoto() {
		return detailphoto;
	}
	public void setDetailphoto(String detailphoto) {
		this.detailphoto = detailphoto;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getP_num() {
		return p_num;
	}
	public void setP_num(String p_num) {
		this.p_num = p_num;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
}
