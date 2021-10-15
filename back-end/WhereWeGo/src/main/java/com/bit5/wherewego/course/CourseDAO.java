package com.bit5.wherewego.course;

import java.util.List;

import com.bit5.wherewego.DBConnection;
import com.bit5.wherewego.notice.PagingVO;

public class CourseDAO extends DBConnection implements CourseDAOImp {

	@Override
	public List<CourseVO> courseAllSelect(int num1, int num2) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int totalRecordCount(PagingVO pVo) {
		 try {
	         System.out.println(pVo.getSearchKey());
	         System.out.println(pVo.getSearchWord());
	         dbConn();
	         sql="select count(no) from course";
	       //검색어가 있을 때 
	         if(pVo.getSearchWord()!=null && !pVo.getSearchWord().equals("")) { 
	            sql += " where "+pVo.getSearchKey()+" like '%"+pVo.getSearchWord()+"%'"; // 검색어는 word가, searchKey가 가지고 있으므로 
	            
	         }
	         System.out.println(sql);
	         pstmt = con.prepareStatement(sql);
	         rs = pstmt.executeQuery();
	         if(rs.next()) {
	            pVo.setTotalRecord(rs.getInt(1));
	         }
	         
	      }catch(Exception e) {
	         e.printStackTrace();
	      }finally {
	         dbClose();
	      }
		return 0;
	
	}

}
