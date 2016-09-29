<%@page import="com.sds.customer.dao.CustomerDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!CustomerDAO dao = new CustomerDAO(); %>
<%
	request.setCharacterEncoding("utf-8");
	String dong = request.getParameter("dong");
	
	
%>