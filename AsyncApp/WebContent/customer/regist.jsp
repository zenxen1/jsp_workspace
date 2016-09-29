<%@page import="com.sds.customer.domain.Customer"%>
<%@page import="com.sds.customer.dao.CustomerDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!CustomerDAO dao = new CustomerDAO(); %>
<%
	request.setCharacterEncoding("utf-8");

	String id = request.getParameter("id");
	String password = request.getParameter("password");
	String zipcode1 = request.getParameter("zipcode1");
	String zipcode2 = request.getParameter("zipcode2");
	String addr1 = request.getParameter("addr1");
	String addr2 = request.getParameter("addr2");
	System.out.println(password);
	Customer dto = new Customer();
	
	dto.setId(id);
	dto.setPassword(password);
	dto.setZipcode1(zipcode1);
	dto.setZipcode2(zipcode2);
	dto.setAddr1(addr1);
	dto.setAddr2(addr2);
	
	int result = dao.regist(dto);
	
	out.print(result);
	/*
	if(result!=0){
		out.print("등록완료");
	}else{
		out.print("등록실패");
	}
	*/
%>