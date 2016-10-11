<%@page import="com.fashion.product.domain.Product"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%request.setCharacterEncoding("utf-8"); %>
<jsp:useBean id="dto" class="com.fashion.product.domain.Product"></jsp:useBean>
<jsp:setProperty property="*" name="dto"/>
<%
ArrayList <Product> cart=null;
if(session.getAttribute("cart")==null){
	cart = new <Product> ArrayList();
	session.setAttribute("cart",cart);
}else{
	cart = (ArrayList)session.getAttribute("cart");
}
	cart.add(dto);
out.print("장바구니에 상품이 담겼습니다.");
%>