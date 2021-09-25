package com.bit5.wherewego.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController("/")
public class DataTestController {
	@GetMapping(path = "/test")
	public List<DataTestVO> test() {
		DataTestDAO dao = new DataTestDAO();
		List<DataTestVO> list = dao.dataSelect();
		return list;
	}
	
   @PostMapping("/registertest")
   public ModelAndView registered(Map<String, Object> testData) {
      System.out.println(testData);
      System.out.println("³ª¿À³ª?");
      ModelAndView mav = new ModelAndView();
      
      Map<String, Object> result = new HashMap<String, Object>();
      result.put("data", testData);
      
      mav.addObject(result);
      mav.setViewName("/");
      return mav;
   }
}
