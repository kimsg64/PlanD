package com.bit5.wherewego.user;

import com.bit5.wherewego.DBConnection;

public class UserDAO extends DBConnection implements UserDAOImp{
	
	// 유저 추가(회원가입)
	@Override
	public int insertUser(UserVO userData) {
		int result = 0;
		try {
			dbConn();
			sql = "insert into usertbl(userid, pwd, name, num, tel, email, zip, addr, startdate, photo, opt) values(?, ?, ?, ?, ?, ?, ?, ?, TO_DATE(?, 'YYYY-MM-DD'), ?, ?)";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, userData.getUserId());
			pstmt.setString(2, userData.getPwd());
			pstmt.setString(3, userData.getName());
			pstmt.setString(4, userData.getNum());
			pstmt.setString(5, userData.getTel());
			pstmt.setString(6, userData.getEmail());
			pstmt.setInt(7, Integer.parseInt(userData.getZip()));
			pstmt.setString(8, userData.getAddr());
			pstmt.setString(9, userData.getStartdate());
			pstmt.setString(10, userData.getPhoto());
			pstmt.setString(11, userData.getOpt());
			result = pstmt.executeUpdate();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		return result;
	};
	
	// 유저 선택(로그인)
	@Override
	public int selectUser(UserVO userData) {
		int result = 0;
		try {
			dbConn();
			sql = "select name, num, tel, email, zip, addr, startdate, photo, opt, zzim, regdate from usertbl where userid=? and pwd=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, userData.getUserId());
			pstmt.setString(2, userData.getPwd());
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				userData.setName(rs.getString(1));
				userData.setNum(rs.getString(2));
				userData.setTel(rs.getString(3));
				userData.setEmail(rs.getString(4));
				userData.setZip(Integer.toString(rs.getInt(5)));
				userData.setAddr(rs.getString(6));
				userData.setStartdate(rs.getString(7));
				userData.setPhoto(rs.getString(8));
				userData.setOpt(rs.getString(9));
				userData.setZzim(rs.getString(10));
				userData.setRegdate(rs.getString(11));
				result = 1;
			}
			
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		
		return result;
	};
	
	// 유저 선택(로그인된 유저 정보)
	@Override
	public UserVO selectUser(String userId) {
		UserVO userData = new UserVO();
		System.out.println("in DAO");
		System.out.println(userId);
		try {
			dbConn();
			sql = "select name, num, tel, email, zip, addr, startdate, photo, opt, zzim, regdate, photo, point, userid, pwd from usertbl where userid=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, userId);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				userData.setName(rs.getString(1));
				userData.setNum(rs.getString(2));
				userData.setTel(rs.getString(3));
				userData.setEmail(rs.getString(4));
				userData.setZip(Integer.toString(rs.getInt(5)));
				userData.setAddr(rs.getString(6));
				userData.setStartdate(rs.getString(7));
				userData.setPhoto(rs.getString(8));
				userData.setOpt(rs.getString(9));
				userData.setZzim(rs.getString(10));
				userData.setRegdate(rs.getString(11));
				userData.setPhoto(rs.getString(12));
				userData.setPoint(rs.getString(13));
				userData.setUserId(rs.getString(14));
				userData.setPwd(rs.getString(15));
			}
			
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		
		return userData;
	};
}
