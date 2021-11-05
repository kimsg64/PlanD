# Plan.D

비트캠프 파이널 프로젝트

## 1. About Project

![Main.JPG](./markdown_image/Main.JPG)

### 프로젝트 목표

- Spring MVC 모델을 활용한 웹 페이지 제작(관리자, 법인 사용자 모드)
- Spring을 활용한 RESTful 서버 구축 및 React.js를 활용한 연동(개인사용자 모드)
- React.js를 이용한 뷰 페이지 제작

### 프로젝트 개요

- 사용자로부터 날짜 및 시간, 장소, 관심사를 입력받아 데이트 코스를 추천해 주는 웹 플랫폼
  ![flow.png](./markdown_image/flow.png)
  ![data_model.png](./markdown_image/flow.png)

### 프로젝트 기간

- 2021.10.04 ~ 2021.10.29

### 프로젝트 기여도

- 사용자 모드 프론트엔드 100%, 사용자 모드의 뷰 페이지는 React.js를 활용하여 전부 직접 제작했습니다.
- 로그인, 회원가입, 회원정보 수정, 이력 보기 등의 사용자 기능은 프론트엔드뿐만 아니라, Spring 프레임워크를 이용해 RESTful 서버도 직접 구현했습니다.

## 2. 기술 스택

### back-end

- OracleDB 18.4.0.
- Java 14.0.2.
- Spring Framework 5.2.10.
  스프링 MVC 모델 활용 및 RESTful 서버 구축을 위해 스프링 프레임워크를 이용했습니다.
- ojdbc 8
- spring-jdbc 5.2.10.
- json-simple 1.1.1.
  스프링 프레임워크에서 JSON 형식으로 서버간 데이터를 전송하기 위해 이용했습니다.

### front-end

- React.js
  프로젝트 목표에 맞게 일반 사용자 모드의 뷰 페이지는 모두 React.js를 이용해 제작했습니다.
- styled-components
- react-router-dom
- axios
- sfcookies
- react-calendar
- KakaoMap(services)
- TMap
- ckeditor
- react-google-map
- react-speech-kit
- react-geocode

## 3. 구현 기능

1.  헤더

- 헤더는 로고와 메인 메뉴, 서브 메뉴로 구성했으며, 1px이라도 스크롤 되면 색깔이 변경되도록 만들었습니다.
- 헤더의 색상 변경은 페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 로딩이 지연되는 것을 방지하기 위해, Intersection Observer API를 이용했습니다.
  ![header.gif](./markdown_image/header.gif)
