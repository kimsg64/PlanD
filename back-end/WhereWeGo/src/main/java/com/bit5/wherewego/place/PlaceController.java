package com.bit5.wherewego.place;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.notice.PagingVO;

@Controller
public class PlaceController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//공지사항 목록
		@RequestMapping("/placeList")
		public ModelAndView list(PagingVO pVo) {
			ModelAndView mav = new ModelAndView();
			
			PlaceDAOImp dao = sqlSession.getMapper(PlaceDAOImp.class);
			int total= dao.totalPlaceCount(pVo.getSearchKey(), pVo.getSearchWord());		
			pVo.setTotalRecord(total);
			
			int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
			int num2;
			
			int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
			if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
				num2 = lastPageRecord;
			} else {
				num2 = pVo.getOnePageRecord();
			}
			
			PlaceDAOImp dao2 = sqlSession.getMapper(PlaceDAOImp.class);
			mav.addObject("list",dao2.placeAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
			mav.addObject("pVo",pVo);	
			mav.setViewName("place/placeList");
			
			return mav;
		}
		
	// 유저에게 장소 리스트 보여주기
	@RequestMapping("/allPlaceList")
	@ResponseBody
	public List<PlaceVO> allPlaceList(@RequestBody PagingVO pVo) {
		// 페이징
		PlaceDAOImp dao = sqlSession.getMapper(PlaceDAOImp.class);
		System.out.println(pVo.getSearchKey());
		System.out.println(pVo.getSearchWord());
		
		// param3(searchKey)은 분류(장소명, 주소) / param4(keyword, searchWord)는 받아온 값  => 
		int total = dao.totalPlaceCount(pVo.getSearchKey(), pVo.getSearchWord());
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		PlaceDAOImp dao2 = sqlSession.getMapper(PlaceDAOImp.class);
		List<PlaceVO> list = dao2.placeAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord());
		// pVo 리턴해야되나?
		return list;
	}

}
