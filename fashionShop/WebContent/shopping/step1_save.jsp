<%@page import="com.fashion.shopping.domain.Payment"%>
<%@page import="com.fashion.shopping.domain.Dest"%>
<%@page import="com.fashion.member.domain.Member"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");
	String customer_name = request.getParameter("customer_name");
	String customer_tel1 = request.getParameter("customer_tel1");
	String customer_tel2 = request.getParameter("customer_tel2");
	String customer_tel3 = request.getParameter("customer_tel3");
	String customer_email = request.getParameter("customer_email");
	String customer_zipcode1 = request.getParameter("customer_zipcode1");
	String customer_zipcode2 = request.getParameter("customer_zipcode2");
	String customer_addr1 = request.getParameter("customer_addr1");
	String customer_addr2 = request.getParameter("customer_addr2");
	
	Member member = new Member();
	member.setMember_name(customer_name);
	member.setPhone1(customer_tel1);
	member.setPhone2(customer_tel2);
	member.setPhone3(customer_tel3);
	member.setEmail(customer_email);
	member.setZipcode1(customer_zipcode1);
	member.setZipcode2(customer_zipcode2);
	member.setAddr1(customer_addr1);
	member.setAddr2(customer_addr2);
	
	String dest_name = request.getParameter("dest_name");
	String dest_tel1 = request.getParameter("dest_tel1");
	String dest_tel2 = request.getParameter("dest_tel2");
	String dest_tel3 = request.getParameter("dest_tel3");
	String dest_zipcode1 = request.getParameter("dest_zipcode1");
	String dest_zipcode2 = request.getParameter("dest_zipcode2");
	String dest_addr1 = request.getParameter("dest_addr1");
	String dest_addr2 = request.getParameter("dest_addr2");
	String msg = request.getParameter("msg");
	
	Dest dest = new Dest();
	dest.setDest_name(dest_name);
	dest.setCell1(dest_tel1);
	dest.setCell2(dest_tel2);
	dest.setCell3(dest_tel3);
	dest.setZip1(dest_zipcode1);
	dest.setZip2(dest_zipcode2);
	dest.setHouse1(dest_addr1);
	dest.setHouse1(dest_addr2);
	dest.setMsg(msg);
	
	String totalbuy = request.getParameter("totalbuy");
	String totalpay = request.getParameter("totalpay");
	String bank = request.getParameter("bank");
	String pay_name = request.getParameter("pay_name");
	
	Payment payment = new Payment();
	payment.setTotalbuy(Integer.parseInt(totalbuy));
	payment.setTotalpay(Integer.parseInt(totalpay));
	payment.setBank_id(Integer.parseInt(bank));
	payment.setPay_name(pay_name);
	
	session.setAttribute("customer", member);
	session.setAttribute("dest", dest);
	session.setAttribute("payment", payment);
	
	response.sendRedirect("/shopping/step2.jsp");
	
	
	
%>