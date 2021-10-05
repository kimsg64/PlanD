<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<style>
   #whitetop {
      width:100%;
      height:80px;
      /*background-color:red;*/
      }
   
   #mainDiv {
      /*background-color:pink;*/
      width:72%;
      margin : 0 auto;
      color: #553a31;
   }
   
   #profileDiv {
      width:100%;
      height : 150px;
      border: 1px solid #553a31;
      margin-top:50px;
      text-align : center;
      line-height:50px;
      background-color : #eaded9;
   }
   

</style>

<div id="whitetop"></div>

<div id="mainDiv">
   <h1>My Page</h1>
   
   <div id="profileDiv">
      admin 님의 마이페이지<br/>
      <h2>Plan.D</h2>
      사업자번호 : 555555555
   </div>
   
</div>
