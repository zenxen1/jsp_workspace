<%@page import="com.fashion.product.domain.Product"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String product_id = request.getParameter("product_id");
String stock = request.getParameter("stock");

ArrayList <Product> cart = (ArrayList)session.getAttribute("cart");
int result =0;
for(int i=0;i<cart.size();i++){
	Product dto = cart.get(i);
	if(dto.getProduct_id()==Integer.parseInt(product_id)){
		dto.setStock(Integer.parseInt(stock));
		result = dto.getProduct_id();
	}
}
out.print(result);
%>