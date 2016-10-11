<%@page import="com.fashion.product.domain.Product"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
int product_id = Integer.parseInt(request.getParameter("product_id"));
System.out.println("삭제하고자하는 리스트넘버는?"+product_id);
ArrayList <Product> cart = (ArrayList) session.getAttribute("cart");
int result=0;
for(int i=0;i<cart.size();i++){
	Product dto = cart.get(i);
	if(dto.getProduct_id()==product_id){
		System.out.print(i+"번째에서 발견됨!!");
		cart.remove(dto);
		result=dto.getProduct_id();
	}
}
out.print(result);

%>