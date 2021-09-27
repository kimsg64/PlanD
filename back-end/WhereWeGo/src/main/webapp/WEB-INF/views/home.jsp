<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>
</body>
</html>


<!-- 

1. Servers > Tomcat... > server.xml 수정

프로젝트용	    
<Resource auth="container" driverClassName="oracle.jdbc.driver.OracleDriver" maxActive="20" maxIdle="10" maxWait="-1" name="jdbc/myoracle" password="Bit05" type="javax.sql.DataSource" url="jdbc:oracle:thin:@bitcamp4.iptime.org:1521:XE" username="c##Bit05"/>

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

수업용
	<beans:bean name="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<beans:property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"></beans:property>
		<beans:property name="url" value="jdbc:oracle:thin:@localhost:1521:XE"></beans:property>
		<beans:property name="username" value="c##scott"></beans:property>
		<beans:property name="password" value="tiger"></beans:property>
	</beans:bean>

 -->