package com.bit5.wherewego.notice;

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


@Controller
public class NoticeController {
	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}
	
	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//공지사항 목록
	@RequestMapping("/noticeList")
	public ModelAndView list(PagingVO pVo) {

		ModelAndView mav = new ModelAndView();
		
		NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
		int total= dao.totalNoticeCount(pVo.getSearchKey(), pVo.getSearchWord());		
		pVo.setTotalRecord(total);
		
		int num1 = pVo.getOnePageRecord() * pVo.getNowPage();
		int num2;
		
		int lastPageRecord = pVo.getTotalRecord() % pVo.getOnePageRecord();
		if (pVo.getTotalPage() == pVo.getNowPage() && lastPageRecord != 0) {
			num2 = lastPageRecord;
		} else {
			num2 = pVo.getOnePageRecord();
		}
		
		NoticeDAOImp dao2 = sqlSession.getMapper(NoticeDAOImp.class);
		mav.addObject("list",dao2.noticeAllSelect(num1,num2,pVo.getSearchKey(),pVo.getSearchWord()));
		mav.addObject("pVo",pVo);	
		mav.setViewName("notice/noticeList");
		
		return mav;
	}
	//글쓰기폼
	@RequestMapping("/noticewrite")
	public String write() {
		return "notice/noticewrite";
	}

	//공지 작성(전송)
	@RequestMapping(value="/noticeWriteOk",method=RequestMethod.POST)
	public ModelAndView fileUploadTest(NoticeVO vo,HttpServletRequest req) {
		//vo->작성자,제목

		//업로드 위치
		String path = req.getSession().getServletContext().getRealPath("/upload/noticefile");
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
		System.out.println(photo2);
		vo.setPhoto(photo2); //저장되는 파일명

		ModelAndView mav = new ModelAndView();
		NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
		
		int cnt = dao.noticeWriteOk(vo);
		
			if(cnt>0) {//글등록
				mav.setViewName("redirect:noticeList");
			}else {//글등록 실패
				mav.addObject("msg","등록");
				mav.setViewName("notice/writeResult");
			}
			return mav;
		}
		//게시판 내용 뷰
		@RequestMapping("/noticeView")
		public ModelAndView noticeView(int n_num) {
			ModelAndView mav = new ModelAndView();
			NoticeDAOImp dao2 = sqlSession.getMapper(NoticeDAOImp.class);
			dao2.hitUpdate(n_num);
			NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
			mav.addObject("vo", dao.noticeView(n_num));
			mav.setViewName("/notice/noticeView");
			
			return mav;
		
	}
		//팝업 변경
		@RequestMapping(value="/noticePopup",method=RequestMethod.POST)
		public ModelAndView noticePopup(NoticeVO vo) {
			ModelAndView mav = new ModelAndView();
			NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
			dao.changePopup0();
			NoticeDAOImp dao2 = sqlSession.getMapper(NoticeDAOImp.class);
			dao2.changePopup1(vo.getN_num(), vo.getPop());
			
			mav.setViewName("redirect:noticeList");
			return mav;
    }

		//글 삭제
		@RequestMapping("/noticeDel")
		public ModelAndView noticeDel(int n_num) {
			
			NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
			int cnt = dao.noticeDelete(n_num);
			
			ModelAndView mav = new ModelAndView();
			if(cnt>0) {//글이 삭제 되면 리스트
				mav.setViewName("redirect:noticeList");
			}else {//글 내용 보기
				mav.addObject("n_num", n_num);
				mav.setViewName("redirect:noticeView");
			}
			return mav;
		}
		
		//글수정 폼
		@RequestMapping("/noticeEdit")
		public ModelAndView noticeEdit(int n_num) {
			ModelAndView mav = new ModelAndView();
			NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
			mav.addObject("vo", dao.noticeView(n_num));
			mav.setViewName("notice/noticeEdit");
			
			return mav;
		}
		
		//글수정
		@RequestMapping(value="/noticeEditOk", method=RequestMethod.POST)
		public ModelAndView noticeEditOk(NoticeVO vo , HttpSession session) {
			
			
			ModelAndView mav = new ModelAndView();
			NoticeDAOImp dao = sqlSession.getMapper(NoticeDAOImp.class);
			int cnt =  dao.noticeEditOk(vo);
			mav.addObject("n_num", vo.getN_num());
			
			
			if(cnt>0) {//글 수정이 되면 글 내용 보기
				mav.setViewName("redirect:noticeView");
			}else {//수정 안되면 글수정으로 이동
				mav.addObject("msg","수정");
				mav.setViewName("notice/writeResult");
				
			}
			return mav;
		}
	}

