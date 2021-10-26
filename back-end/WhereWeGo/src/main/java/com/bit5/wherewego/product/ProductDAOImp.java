package com.bit5.wherewego.product;

import java.util.List;

import com.bit5.wherewego.user.UserVO;

public interface ProductDAOImp {
	public ProductVO pointshopView(String p_num);
	public int totalProductCount(String searchKey, String searchWord);
	public List<ProductVO> productAllSelect(int num1, int num2, String searchKey, String searchWord);
	public int pdDelete(String p_num);
	public int pointshopEditOk(ProductVO vo);
	public ProductVO productForPay(String p_num);
	public UserVO userForPay(String cookie);
}
