package com.bit5.wherewego.notice;

import java.util.List;

public interface NoticeDAOImp {
	
	//페이징
	public int totalNoticeCount(String searchKey, String searchWord);
	
	//전체목록
	public List<NoticeVO> noticeAllSelect(int num1, int num2, String string, String string2);


	public int noticeWriteOk(NoticeVO vo);

	public NoticeVO noticeView(int n_num);
	
	public int noticeDelete(int n_num);//글삭제
}
