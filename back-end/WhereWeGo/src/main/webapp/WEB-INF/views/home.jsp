<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>



<!-- 

1. Servers > Tomcat... > server.xml 수정

프로젝트용	    
<Resource auth="container" driverClassName="oracle.jdbc.driver.OracleDriver" maxActive="20" maxIdle="10" axWait="-1" name="jdbc/myoracle" password="Bit05" type="javax.sql.DataSource" url="jdbc:oracle:thin:@bitcamp4.iptime.org:1521:XE" username="c##Bit05"/>

수업용
<Resource auth="container" driverClassName="oracle.jdbc.driver.OracleDriver" maxActive="20" maxIdle="10" maxWait="-1" name="jdbc/myoracle" password="tiger" type="javax.sql.DataSource" url="jdbc:oracle:thin:@localhost:1521:XE" username="c##scott"/>

2. src > main > webapp > WEB-INF > spring > appServlet > servlet-context.xml 수정

프로젝트용
	<beans:bean name="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<beans:property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"></beans:property>
		<beans:property name="url" value="jdbc:oracle:thin:@bitcamp4.iptime.org:1521:XE"></beans:property>
		<beans:property name="username" value="c##Bit05"></beans:property>
		<beans:property name="password" value="Bit05"></beans:property>
	</beans:bean>
git a
수업용
	<beans:bean name="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<beans:property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"></beans:property>
		<beans:property name="url" value="jdbc:oracle:thin:@localhost:1521:XE"></beans:property>
		<beans:property name="username" value="c##scott"></beans:property>
		<beans:property name="password" value="tiger"></beans:property>
	</beans:bean>

 -->
 
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