package com.bit5.wherewego.notice;

import java.util.List;

public interface NoticeDAOImp {
	public List<NoticeVO> noticeAllSelect(int num1, int num2); //공지사항 리스트 (전체불러오기)
	public int totalRecordCount(); //페이징
	public int noticeWriteOk(NoticeVO vo);
	public List<NoticeVO> noticeSearchSelect(int num1, int num2, String sKey, String sWord);
}
