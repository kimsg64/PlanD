package com.bit5.wherewego.place;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.course.CourseDAOImp;
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

	//장소 목록
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

	//신규코스등록 시, 장소 확인 눌러서 추가
	@RequestMapping(value = "/checkPlace", method = RequestMethod.POST)
	public ModelAndView inserPlace(@RequestBody PlaceVO vo) {
		ModelAndView mav = new ModelAndView();

		PlaceDAOImp dao = sqlSession.getMapper(PlaceDAOImp.class);
		int cnt = dao.checkPlace(vo); //중복여부 확인
		System.out.println("중복이뉘 아니뉘?..."+cnt);

		if(cnt==0) { //중복없음. 신규
			PlaceDAOImp dao2 = sqlSession.getMapper(PlaceDAOImp.class);
			int result = dao2.insertPlace(vo); //추가
			System.out.println("추가는 잘 되었뉘..?"+result);
		}


		PlaceDAOImp dao3 = sqlSession.getMapper(PlaceDAOImp.class);
		int pcode = dao3.selectPlace(vo); //종류, 상호명, 주소로 pcode 알아내기
		System.out.println("장소코드 무엇?"+pcode);

		mav.addObject("pcode",pcode); //코스에 추가하기 위해서 장소코드 알아냄
		mav.setViewName("maptest");

		return mav;
	}

	// 유저에게 장소 리스트 보여주기
	@RequestMapping("/allPlaceList")
	@ResponseBody
	public List<PlaceVO> allPlaceList(@RequestBody PagingVO pVo) {
		// 페이징
		PlaceDAOImp dao = sqlSession.getMapper(PlaceDAOImp.class);
		System.out.println(pVo.getSearchWord());

		// param3(searchKey)은 분류(장소명, 주소) / param4(keyword, searchWord)는 받아온 값  => 
		int total = dao.totalPlaceCount("name", pVo.getSearchWord());
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
		List<PlaceVO> list = dao2.placeAllSelect(num1, num2, "name", pVo.getSearchWord());
		// pVo 리턴해야되나?
		return list;
	}

	//장소 뷰
	@RequestMapping("/placeView")
	public ModelAndView plcaeView(int pcode, PagingVO pVo) {
		ModelAndView mav = new ModelAndView();

		PlaceDAOImp dao = sqlSession.getMapper(PlaceDAOImp.class);
		
		mav.addObject("vo", dao.placeView(pcode));
		mav.addObject("pVo", pVo);
		mav.setViewName("/place/placeView");
	
		return mav;
	}
	// 승인 미승인 ㄱㄱ
	@RequestMapping("/placegrade")
	public ModelAndView placegrade(int pcode, String grade) {
		ModelAndView mav = new ModelAndView();
		PlaceDAOImp dao = sqlSession.getMapper(PlaceDAOImp.class);
		int cnt = dao.placegrade(pcode, grade);
		
		if(grade.equals("승인")) {
			CourseDAOImp dao2 = sqlSession.getMapper(CourseDAOImp.class);
			int cnt2 = dao2.gradecourse(pcode);
		}
		
		
		mav.addObject("pcode", pcode);
		mav.setViewName("redirect:placeView");
		return mav;
	}
	//수정폼
	@RequestMapping("/placeEdit")
	public ModelAndView placeEdit(int pcode) {
		ModelAndView mav = new ModelAndView();
		PlaceDAOImp dao = sqlSession.getMapper(PlaceDAOImp.class);
		mav.addObject("vo", dao.placeView(pcode));
		mav.setViewName("place/placeEdit");
		
		return mav;
	}
	//수정 완료
	@RequestMapping(value="/placeEditOk", method=RequestMethod.POST)
	public ModelAndView placeEditOk(PlaceVO vo) {
		ModelAndView mav = new ModelAndView();
		PlaceDAOImp dao = sqlSession.getMapper(PlaceDAOImp.class);
		int cnt = dao.placeEditOk(vo);
		mav.addObject("pcode", vo.getPcode());
		
		if(cnt>0) {
			mav.setViewName("redirect:placeView");
		}else {
			mav.addObject("msg", "수정");
			mav.setViewName("place/placeResult");
		}
		return mav;
	}

}
