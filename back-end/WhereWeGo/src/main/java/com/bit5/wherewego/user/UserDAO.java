package com.bit5.wherewego.user;

import com.bit5.wherewego.DBConnection;

public class UserDAO extends DBConnection implements UserDAOImpl{
	public int insertUser(UserVO userData) {
		int result = 0;
		try {
			dbConn();
			sql = "insert into normal_user(user_id, user_pwd, user_name, user_num, user_tel, user_email, user_zipcode, user_addr, user_date) values(?, ?, ?, ?, ?, ?, ?, ?, TO_DATE(?, 'YYYY-MM-DD'))";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, userData.getUserId());
			pstmt.setString(2, userData.getUserPwd());
			pstmt.setString(3, userData.getUserName());
			pstmt.setString(4, userData.getUserNum());
			pstmt.setString(5, userData.getUserTel());
			pstmt.setString(6, userData.getUserEmail());
			pstmt.setInt(7, Integer.parseInt(userData.getUserZipcode()));
			pstmt.setString(8, userData.getUserAddr());
			pstmt.setString(9, userData.getUserDate());
			result = pstmt.executeUpdate();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			dbClose();
		}
		return result;
	};
}
