package com.bit5.wherewego.user;



import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;


@RestController
public class UserController {

	SqlSession sqlSession;

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	@Autowired
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	// 회원가입
	@PostMapping(path = "/registerUser")
	public int getUserData(@RequestBody UserVO userData) {
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		int result = dao.insertUser(userData);
		if(result > 0) {
			System.out.println("you did it~!");			
		} else {
			System.out.println("fail");
		}
		return result;
	}

	// 로그인
	@PostMapping(path = "/user/userLogin")
	public int userLogin(@RequestBody UserVO userData) {
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		int result = dao.selectUserToLogin(userData);
		if(result > 0) {
			System.out.println("you did it!!");
		} else {
			System.out.println("fail");
		}
		return result;
	}

	// 로그인 성공 => 세션 설정
	@GetMapping(path = "/user/checkSession")
	public boolean setSession(@CookieValue(name = "userId") String loginId, HttpSession session) {
		// 어차피 로그인 성공한 애들이 들어올 곳이므로... 그냥 설정하면 된다.
		// front 쿠키에 저장된 userId = back 세션에 저장된 userId면 로그인된 것으로 간주하면 됨! 
		System.out.println(loginId);
		session.setAttribute("loginId", loginId);
		System.out.println(session.getAttribute("loginId"));
		return true;
	}

	// 유저 데이터 받기
	@PostMapping(path = "/getUserData")
	public UserVO selectUserData(@RequestBody UserVO userData) {
		System.out.println(userData.getUserId());
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		UserVO vo = dao.selectUser(userData.getUserId());
		System.out.println(vo.getName());
		System.out.println(vo.getPoint());
		System.out.println(vo.getStartdate());
		System.out.println(vo.getRegdate());
		System.out.println(vo.getZzim());

		return vo;
	}

	//문자 보내는 메소드
	@PostMapping(path = "/telcheck")
	public int telcheck(@RequestBody UserVO vo) {
		String tel = vo.getTel();
		System.out.println(tel);
		String api_key = "NCSYDAV6TEW7BM61";
	    String api_secret = "GRZG9MR5SCWPLWITSCTYRF056KXHNPOB";
	    Message coolsms = new Message(api_key, api_secret);
	    
	    //System.out.println(tel);
	    double ran = Math.random();
	    int ranInt = (int)(ran*(9999-1000+1)+1000);
	    System.out.println("인증문자:"+String.valueOf(ranInt));

	    // 4 params(to, from, type, text) are mandatory. must be filled
	    HashMap<String, String> params = new HashMap<String, String>();
	    params.put("to", tel); // 수신번호
	    params.put("from", "01087885202"); // 발신번호
	    params.put("type", "SMS"); // Message type ( SMS, LMS, MMS, ATA )
	    params.put("text", "[PlanD] 인증문자는 "+String.valueOf(ranInt)+" 입니다."); // 문자내용    
	    params.put("app_version", "JAVA SDK v1.2"); // application name and version
	    try {
	      JSONObject obj = coolsms.send(params);
	      System.out.println(obj.toString());
	    } catch (CoolsmsException e) {
	      System.out.println(e.getMessage());
	      System.out.println(e.getCode());
	    }
	    return ranInt;

	}

	// 회원정보 수정
	@RequestMapping(value = "/editUser", method = RequestMethod.POST)
	public int updateUser(@RequestBody UserVO vo) {
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		System.out.println(vo.getAddr());
		System.out.println(vo.getEmail());
		System.out.println(vo.getUserId());
		System.out.println(vo.getOpt());
		int result = dao.updateUser(vo);
		if(result > 0) {
			System.out.println("succeeded!");
		} else {
			System.out.println("T.T");			
		}
		return result;
	}
	
	// ID 더블쳌
	@PostMapping(path = "/idDoubleCheck")
	public int idDoubleCheck(@RequestBody UserVO vo) {
		System.out.println(vo.getUserId());
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		int result = dao.idDoubleCheck(vo);
		// 0이 아니면 중복
		return result;
	}

	@GetMapping(path = "/userPhotoChange")
	public ModelAndView userPhotoChange(HttpServletRequest req, UserVO vo) { //아이디와 사진을 UserVO에 담아서 넘겨주세요
		ModelAndView mav = new ModelAndView();

		//업로드 위치
		String path = req.getSession().getServletContext().getRealPath("/upload/userphoto");
		System.out.println("회원이미지 저장경로 : "+path);

		//파일업로드를 위해서는 HttpServletRequest객체를 이용하여 MultipartHttpServletRequest 객체를 구하여야 한다.
		MultipartHttpServletRequest mr = (MultipartHttpServletRequest)req;
		
		//mr에서 MultipartFile객체를 얻어와야 한다.
		List<MultipartFile> files = mr.getFiles("photo");
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
			photo += fileList; //[exo.jpg]
		}
		int point2 = photo.lastIndexOf("]"); // ] 의 위치를 알아냄
		String photo2 = photo.substring(1,point2); //exo.jpg
		vo.setPhoto(photo2); //저장되는 파일명 : exo.jpg
		
		System.out.println("저장경로에 있는 "+photo2+" 파일을 꼭 STS의 upload/userphoto 에 복사해서 옮겨주세요!");
		
		UserDAOImp dao = sqlSession.getMapper(UserDAOImp.class);
		int cnt = dao.userPhotoChange(vo);
		
		mav.setViewName("redirect:maptest");
		
		return mav;
	}
}