package com.bit5.wherewego.station;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class StationController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@RequestMapping("/stationList")
	@ResponseBody
	public List<StationVO> stationList() {
		StationDAOImp dao = sqlSession.getMapper(StationDAOImp.class);
		List<StationVO> list = dao.selectAllStations();
		return list;
	}
}
