<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
	.body-layout {
		min-height: calc(100vh - var(--header-height) - var(--footer-height) + 60px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--header-height) 0;
		position: relative;
	}
	.menu-title {
		width: 72%;
		margin-top: calc(var(--margin-default) * 1.5);
		margin-bottom: 0;
		font-size: var(--font-size-title-normal);
		display: flex;
		align-items: center;
	}
	#company_form {
		width: 72vw;
		height: auto;
		margin-top: 60px;
		margin-bottom: 40px;
		padding: calc(var(--padding-default) * 2) 0;
		display: flex;
		justify-content: center;
	}
	.form-styler {
		width: 800px;
		padding: calc(var(--padding-default) * 2) 0 calc(var(--padding-default) * 2) calc(var(--padding-default) * 4);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: var(--color-light-bg);
		box-shadow: 0px 2px 4px 2px grey;
	}
	.center-wrapper {
		min-width: 50em;
	}
	.line-wrapper {
		display: flex;
		position: relative;
	}
	.item-container {
		width: auto;
		margin: calc(var(--margin-default) / 2) 0 0 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;	
	}
	.item-container label {
		width: 24em;
		font-size: var(--font-size-small);
		font-weight: bold;
		margin: 0 calc(var(--margin-default) / 4) calc(var(--margin-default) / 4) 0;
	}
	.styled-input {
		width: 24em;
		margin: 0 var(--margin-default) calc(var(--margin-default) / 4) 0;
		padding: calc(var(--padding-small) * 2) calc(var(--padding-default) * 2);
		font-size: var(--font-size-small);
		text-align: left;
		position: relative;
		border: 2px solid var(--color-bg);
		transition-duration: 0.2s;
		background-color: var(--color-bg);
	}
	.styled-input:focus {
		outline: none;
	}
	.styled-input:disabled {
	    background-color: var(--color-super-light-green);
	    border: 2px solid var(--color-super-light-green);
	}

	/* 필수 사항 유효성 체크(비밀번호 체크 외) */
	.styled-input:valid:not(.check):not(.optional) {
		background-image: url("/images/validcheck.png");
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: 12px 16px;
	}
	/* 유효성 체크 경고문구 표시 */
	.styled-input:invalid:not(:focus):not(:placeholder-shown):not(.check) {
		border: 2px solid var(--color-focus);
	}
	/* 에러 메시지 표시 */
	.styled-input:invalid:not(:focus):not(:placeholder-shown):not(.check) ~ div { 
		display: block;
	}
	
	/* 비밀번호 더블체크 */
	.styled-input.check {
		background-image: url("/images/validcheck.png");
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: 12px 16px;
	}
	.styled-input.check:not(:focus):not(:placeholder-shown) {
		border: 2px solid var(--color-font);
	}
	.styled-input.check:not(:focus):not(:placeholder-shown) ~ div {
		display: none;
	}
	
	/* 파일 업로드 스타일링 */
	.styled-input[type="file"] {
		display: none;
	}
	
	.error-msg {
		width: 24em;
		color: var(--color-focus);
		font-size: var(--font-size-tiny);
		font-style: italic;
		transition-duration: 0.2s;
		display: none;
	}
	
	
	.button {
		width: auto;
		height: 32px;
		margin: 0 var(--margin-line-space);
		padding: var(--padding-tiny) var(--padding-small);
		font-family: -apple-system;
		font-size: var(--font-size-small);
		background-color: var(--color-green);
		border: none;
		border-radius: 4px;
		color: white;
		transition-duration: 0.2s;
	}
	
	.button:hover {
	    cursor: pointer;
	    transform: scale(1.02);
	}
	.button:active {
	    background-color: var(--color-dark-green);
	    color: var(--color-green);
	}
	
	.submit-button {
		width: 120px;
		height: 40px;
		margin: 0 6px calc(var(--margin-default) / 2) var(--margin-line-space);
		padding: var(--padding-tiny) var(--padding-small);
		font-family: -apple-system;
		font-size: var(--font-size-small);
		background-color: var(--color-green);
		border: none;
		border-radius: 4px;
		color: white;
		transition-duration: 0.2s;
	}
	.submit-button:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
	.submit-button:active {
		background-color: var(--color-dark-green);
		color: var(--color-green);
	}
	.submit-button:hover {
		background-color: var(--color-light-green);
		color: var(--color-green);
	}
	.submit-button:active {
		background-color: var(--color-dark-green);
		color: var(--color-light-green);
	}
	
	.submit-setction {
		width: calc(40em + 4px);
		height: 80px;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
	}

</style>
</head>
<body>
		<div class="body-layout">
	        <div class="menu-title">법인회원가입</div>
	        <form id="company_form" encType="multipart/form-data">
	        	<div class="form-styler">
		          <div class="center-wrapper">
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="userId">아이디</label>
		                <input class="styled-input" type="text" name="b_id" required minLength="6" maxLength="14" pattern="[A-Za-z]{1}\w{5,14}" placeholder="아이디"/>
		                <div class="error-msg">
		                  아이디는 6~14자의 영문 대소문자, 숫자로 이루어져야 하며, 첫
		                  글자는 영문자만 입력할 수 있습니다.
		                </div>
		              </div>
		              <button class="button" type="button">
		                중복 확인
		              </button>
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="pwd">비밀번호</label>
		                <input class="styled-input" type="password" name="pwd" required minLength="8" maxLength="16" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$" placeholder="비밀번호" />
		                <div class="error-msg">
		                  비밀번호는 8자 이상이어야 하며, 숫자, 영문 대소문자,
		                  특수문자를 모두 포함해야 합니다.
		                </div>
		              </div>
		              <div class="item-container">
		                <label for="userPwd2">비밀번호 확인</label>
		                <input class="styled-input check" type="password" name="bPwd2" required maxLength="16" placeholder="비밀번호 확인" autoComplete="new-password" />
		                <div class="error-msg">비밀번호가 일치하지 않습니다.</div>
		              </div>
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="name">상호</label>
		                <input class="styled-input" type="text" name="name" required minLength="2" maxLength="16" placeholder="상호" />
		                <div class="error-msg">올바른 상호명을 입력해 주세요.</div>
		              </div>
		              <div class="item-container">
		                <label for="num">사업자등록번호</label>
		                <input class="styled-input" type="text" name="num" placeholder="사업자등록번호   ex) 00-000-00000" required minLength="12" maxLength="12" pattern="^[0-9]{2}-[0-9]{3}-[0-9]{5}$" />
		                <div class="error-msg">올바른 사업자등록번호를 입력해 주세요.</div>
		              </div>
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="tel">대표 연락처</label>
		                <input class="styled-input" type="text" name="tel" required minLength="9" maxLength="11" placeholder="대표 연락처   ex) 0212349845" pattern="^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$" />
		                <div class="error-msg">올바른 연락처를 입력해 주세요.</div>
		              </div>
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="addr">주소</label>
		                <input class="styled-input optional"  type="text" name="addr" id="addr" />
		              </div>
		              <div class="item-container">
		                <label for="zip">우편번호</label>
		                <input class="styled-input optional" type="text" name="zip" id="zip" minLength="5" maxLength="5" />
		              </div>
		              <button class="button" type="button" position="absolute">
		                검색
		              </button>
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="addrDetail">상세주소</label>
		                <input class="styled-input optional" type="text" name="addrDetail" id="addrDetail" />
		              </div>
		            </div>
		          </div>
		          <section class="submit-setction">
		            <button class="submit-button" type="submit">회원가입</button>
		          </section>
				</div>
	        </form>
        </div>
</body>
</html>