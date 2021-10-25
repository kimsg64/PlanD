package com.bit5.wherewego.notice;

import java.util.List;

public interface NoticeDAOImp {
	
	//페이징
	public int totalNoticeCount(String searchKey, String searchWord);
	
	//전체목록
	public List<NoticeVO> noticeAllSelect(int num1, int num2, String string, String string2);

	//작성
	public int noticeWriteOk(NoticeVO vo);

	//뷰
	public NoticeVO noticeView(int n_num);

	public void changePopup1(int n_num, int pop);

	public void changePopup0();
	
	public int noticeDelete(int n_num);//글삭제

	public int hitUpdate(int n_num); //조회수

	public int noticeEditOk(NoticeVO vo); //수정

	public int delNoticeFile(NoticeVO vo);

}
