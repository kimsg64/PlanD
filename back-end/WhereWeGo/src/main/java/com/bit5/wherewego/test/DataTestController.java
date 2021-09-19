package com.bit5.wherewego.test;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class DataTestController {
	@GetMapping(path = "/test")
	public List<DataTestVO> test() {
		DataTestDAO dao = new DataTestDAO();
		List<DataTestVO> list = dao.dataSelect();
		return list;
	}
}
