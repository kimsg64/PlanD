package com.bit5.wherewego.ad;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.bit5.wherewego.business.BusinessDAOImp;
import com.bit5.wherewego.business.BusinessVO;


@Controller
public class AdController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	//광고 관리
	@RequestMapping("/advermanage")

	public ModelAndView list(AdPagingVO pVo) {
		ModelAndView mav = new ModelAndView();
			
		AdDAOImp dao = sqlSession.getMapper(AdDAOImp.class);
		int total= dao.totalAdCount(pVo.getSearchKey(), pVo.getSearchWord());		
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		AdDAOImp dao2 = sqlSession.getMapper(AdDAOImp.class);
		mav.addObject("list",dao2.adAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
		mav.addObject("pVo",pVo);	
		mav.setViewName("ad/advermanage");
		
		return mav;
		}

	//광고 신청(폼)
	@RequestMapping("/adRegister")
	public ModelAndView adRegister(BusinessVO vo,HttpSession session) {
		ModelAndView mav = new ModelAndView();

		BusinessDAOImp dao = sqlSession.getMapper(BusinessDAOImp.class);

		String b_id = (String)session.getAttribute("logid");

		mav.addObject("bVo",dao.allselect(b_id));
		mav.setViewName("ad/adRegister");

		return mav;
	}

	//광고신청(전송)
	@RequestMapping(value="/adRegisterOk",method=RequestMethod.POST)
	public ModelAndView fileUploadTest(AdVO vo,HttpServletRequest req) {
		//vo->작성자,제목

		//업로드 위치
		String path = req.getSession().getServletContext().getRealPath("/upload/adimg");
		System.out.println("저장경로 : "+path);

		//파일업로드를 위해서는 HttpServletRequest객체를 이용하여 MultipartHttpServletRequest 객체를 구하여야 한다.
		MultipartHttpServletRequest mr = (MultipartHttpServletRequest)req;

		//mr에서 MultipartFile객체를 얻어와야 한다.
		List<MultipartFile> files = mr.getFiles("filename");
		List<String> fileList = new ArrayList<String>();//업로드된 파일명을 저장할 곳
		//업로드한 파일이 있으면
		if(files!=null) {
			//업로드 구현

			for(int i=0;i<files.size();i++) {
				//업로드할 MultipartFile객체를 얻어온다
				MultipartFile mf = files.get(i);
				//원래 파일명
				String fname = mf.getOriginalFilename();
				if(fname!=null && !fname.equals("")) {
					//같은파일명이 서버에 있는지 확인
					File fileObj = new File(path,fname);
					File newFileObj = new File(path,fname);
					//파일존재여부확인
					if(fileObj.exists()) {//있으면 트루,없으면 폴스\
						for(int num=1; ;num++) {
							//파일이 있으면->파일명 변경
							int point = fname.lastIndexOf(".");//마지막 점의 위치를 구해라
							String orgFileName = fname.substring(0,point);//파일명(인덱스0부터 .앞까지) file1
							String orgFileExt = fname.substring(point+1);//확장자명(.다음부터 끝까지)    jpg
							String newFileName = orgFileName+"("+num+")."+orgFileExt; //ccc(1).jpg
							newFileObj = new File(path,newFileName);
							if(!newFileObj.exists()) {
								break;
							}
						}//for AAA

					}//if BBB
					try {
						mf.transferTo(newFileObj);
					}catch(Exception e) {}
					fileList.add(newFileObj.getName());
				}//for문 안에 if문끝
			}//for문끝
		}//if문 끝

		String photo = "";
		for(int i=0; i<fileList.size(); i++) {
			photo += fileList;
		}
		int point2 = photo.lastIndexOf("]");
		String photo2 = photo.substring(1,point2);
		vo.setPhoto(photo2); //저장되는 파일명

		ModelAndView mav = new ModelAndView();
		AdDAOImp dao = sqlSession.getMapper(AdDAOImp.class);
		
		System.out.println("확인용:"+vo.getStartdate()+"/"+vo.getEnddate());
		String cnt = dao.adMoneySelect(vo.getEnddate(),vo.getStartdate()); //하루당 10원이라고 측정
		vo.setPrice(Integer.parseInt(cnt));
		
		AdDAOImp dao2 = sqlSession.getMapper(AdDAOImp.class);
		int cnt2 = dao2.adRegisterOk(vo);
		
		if(cnt2>0) {//글등록
			mav.setViewName("redirect:advermanage"); //목록으로 감
		}else {//등록실패
			mav.setViewName("ad/adResult"); //jsp
		}
		
		return mav;
	}
	
	//광고 뷰
	@RequestMapping("/adView")
	public ModelAndView adView(int adnum) {
		ModelAndView mav = new ModelAndView();
		AdDAOImp dao = sqlSession.getMapper(AdDAOImp.class);
		mav.addObject("vo", dao.adView(adnum));
		mav.setViewName("/ad/adView");
		
		return mav;
	
	}
	//광고 삭제
	@RequestMapping("/adDel")
	public ModelAndView adDel(int adnum) {
		AdDAOImp dao = sqlSession.getMapper(AdDAOImp.class);
		int cnt = dao.adDelete(adnum);
		
		ModelAndView mav= new ModelAndView();
		if(cnt>0) {
			mav.setViewName("redirect:advermanage");
		}else {
			mav.addObject("adnum", adnum);
			mav.setViewName("redirect:adView");
		}
		return mav;
	}
	//광고 수정폼
	@RequestMapping("/adEdit")
	public ModelAndView adEdit(int adnum) {
		ModelAndView mav = new ModelAndView();
		AdDAOImp dao= sqlSession.getMapper(AdDAOImp.class);
		mav.addObject("vo", dao.adView(adnum));
		mav.setViewName("ad/adEdit");
		return mav;
	}
	//광고 글수정
	@RequestMapping(value="/editOk", method=RequestMethod.POST)
	public ModelAndView editOk(AdVO vo, HttpSession session) {
		ModelAndView mav = new ModelAndView();
		AdDAOImp dao = sqlSession.getMapper(AdDAOImp.class);
		int cnt = dao.editOk(vo);
		mav.addObject("adnum", vo.getAdnum());
		
		if(cnt>0){//수정되면
			mav.setViewName("redirect:adView");			
		}else {//수정안되면 글수정으로 이동
			mav.addObject("msg","수정");
			mav.setViewName("ad/editResult");
		}
		return mav;
		}
	}
	
	

