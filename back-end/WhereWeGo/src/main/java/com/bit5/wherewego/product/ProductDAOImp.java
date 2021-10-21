package com.bit5.wherewego.product;

import java.util.List;

public interface ProductDAOImp {
	public List<ProductVO> pdAllSelect(int num1, int num2);
	public int totalRecordCount();
	public ProductVO pointshopView(int p_num);
	
	
}
