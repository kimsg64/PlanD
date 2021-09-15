package com.bit5.wherewego.test;

import java.util.ArrayList;
import java.util.List;

public class DataTestDAO extends com.bit5.wherewego.DBConnection {
	// 글쓰기
	public int dataInsert(DataTestVO vo) {
		int result = 0;
		
		try {
			dbConn();
			
			sql = "insert into data(num, title, content, filename, userid) values(boardsq.nextval, ?, ?, ?, ?)";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, vo.getTitle());
			pstmt.setString(2, vo.getContent());
			pstmt.setString(3, vo.getFilename());
			pstmt.setString(4, vo.getUserid());
			
			result = pstmt.executeUpdate();
			
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		return result;
	}
	
	// 게시판 
	public List<DataTestVO> dataSelect() {
		List<DataTestVO> list = new ArrayList<DataTestVO>();
		try {
			dbConn();
			
			sql = "select num, title, userid, filename, hit, to_char(writedate, 'MM-DD HH:MI') as writedate from data order by num desc";
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				DataTestVO vo = new DataTestVO();
				vo.setNum(rs.getInt(1));
				vo.setTitle(rs.getString(2));
				vo.setUserid(rs.getString(3));
				vo.setFilename(rs.getString(4));
				vo.setHit(rs.getInt(5));
				vo.setWritedate(rs.getString(6));
				list.add(vo);
			}
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		return list;
	}
	
	// 조회수 증가
	public int downCount(int num) {
		int cnt = 0;
		try {
			dbConn();
			sql = "update data set downcount = downcount + 1 where num = ?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			pstmt.executeUpdate();
			
			sql = "select downcount from data where num = ?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				cnt = rs.getInt(1);
			}
			
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		return cnt;
	}
	
	public DataTestVO oneSelect(int num) {
		DataTestVO vo = new DataTestVO();
		try {
			dbConn();
			sql = "select num, userid, title, content, hit, downcount, writedate, filename from data where num=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				vo.setNum(rs.getInt(1));
				vo.setUserid(rs.getString(2));
				vo.setTitle(rs.getString(3));
				vo.setContent(rs.getString(4));
				vo.setHit(rs.getInt(5));
				vo.setDowncount(rs.getInt(6));
				vo.setWritedate(rs.getString(7));
				vo.setFilename(rs.getString(8));
			}
			
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		return vo;
	}
	
	public void hitCount(int num) {
		try {
			dbConn();
			sql = "update data set hit = hit+1 where num=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			pstmt.executeUpdate();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
	}
	
	public int dataUpdate(DataTestVO vo) {
		int result = 0;
		try {
			dbConn();
			sql = "update data set title=?, content=?";
			if(vo.getFilename()!=null && !vo.getFilename().equals("")) {
				sql += ", filename=?";
			}
			sql += " where num=?";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, vo.getTitle());
			pstmt.setString(2, vo.getContent());
			
			if(vo.getFilename()!=null && !vo.getFilename().equals("")) {
				pstmt.setString(3, vo.getFilename());
				pstmt.setInt(4, vo.getNum());
			} else {
				pstmt.setInt(3, vo.getNum());
			}
			
			result = pstmt.executeUpdate();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		
		return result;
	}
	
	// 파일명 선택
	public String getDbFile(int num) {
		String dbfile = "";
		
		try {
			dbConn();
			sql = "select filename from data where num=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			
			rs = pstmt.executeQuery();
			if(rs.next()) {
				dbfile = rs.getString(1);
			}
			
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		
		return dbfile;
	}
	
	public int dataDelete(int num, String userid) {
		int result = 0;
		try {
			dbConn();
			sql = "delete from data where num=? and userid=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			pstmt.setString(2, userid);
			
			result = pstmt.executeUpdate();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		
		return result;
	}
}
