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

	/* ?????? ?????? ????????? ??????(???????????? ?????? ???) */
	.styled-input:valid:not(.check):not(.optional) {
		background-image: url("/images/validcheck.png");
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: 12px 16px;
	}
	/* ????????? ?????? ???????????? ?????? */
	.styled-input:invalid:not(:focus):not(:placeholder-shown):not(.check) {
		border: 2px solid var(--color-focus);
	}
	/* ?????? ????????? ?????? */
	.styled-input:invalid:not(:focus):not(:placeholder-shown):not(.check) ~ div { 
		display: block;
	}
	
	/* ???????????? ???????????? */
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
	
	/* ?????? ????????? ???????????? */
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
	        <div class="menu-title">????????????????????????</div>
	        <form  method="POST" id="company_form" encType="multipart/form-data" action="/wherewego/businessEditOk">
	        	<div class="form-styler">
		          <div class="center-wrapper">
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="userId">?????????</label>
		              

		                <input class="styled-input" type="text" name="b_id" value="${vo.b_id}" readonly/>

		             
		              </div>
		           
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="pwd">????????????</label>
		                <input class="styled-input" type="password" name="pwd" required minLength="8" maxLength="16" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$" placeholder="????????????" />
		                <div class="error-msg">
		                  ??????????????? 8??? ??????????????? ??????, ??????, ?????? ????????????,
		                  ??????????????? ?????? ???????????? ?????????.
		                </div>
		              </div>
		              <div class="item-container">
		                <label for="userPwd2">???????????? ??????</label>
		                <input class="styled-input check" type="password"  required maxLength="16" placeholder="???????????? ??????" autoComplete="new-password"/>
		                <div class="error-msg">??????????????? ???????????? ????????????.</div>
		              </div>
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="name">??????</label>
		                <input class="styled-input" type="text" name="name" required minLength="2" maxLength="16" placeholder="??????" value="${vo.name }" />
		                <div class="error-msg">????????? ???????????? ????????? ?????????.</div>
		              </div>
		              <div class="item-container">
		                <label for="num">?????????????????????</label>
		                <input class="styled-input" type="text" name="num" value="${vo.num}" readonly/>

		              </div>
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="tel">?????? ?????????</label>
		                <input class="styled-input" type="text" name="tel" required minLength="9" maxLength="11" placeholder="?????? ?????????   ex) 0212349845" pattern="^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$" value="${vo.tel }"/>
		                <div class="error-msg">????????? ???????????? ????????? ?????????.</div>
		              </div>
		            </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="addr">??????</label>
		                <input class="styled-input optional"  type="text" name="addr" id="addr" value="${vo.addr }"/>
		              </div>
		              <div class="item-container">
		                <label for="zip">????????????</label>
		                <input class="styled-input optional" type="text" name="zip" id="zip" minLength="5" maxLength="5" value="${vo.zip }"/>
		            
		              <button class="button" type="button" position="absolute">
		                ??????
		              </button>
		            </div>
		              </div>
		            <div class="line-wrapper">
		              <div class="item-container">
		                <label for="addrDetail">????????????</label>
		                <input class="styled-input optional" type="text" name="addrDetail" id="addrDetail" />
		              </div>
		            </div>
		          </div>
		          <section class="submit-setction">
		            <button class="submit-button" type="submit">??????</button>
		          </section>
				</div>
	        </form>
	        </div>
</body>
</html>