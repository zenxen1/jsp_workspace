<%@page import="com.fashion.product.mybatis.dao.EventProductDAO"%>
<%@page import="com.fashion.product.domain.EventProduct"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.parser.JSONParser"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%!EventProductDAO dao = new EventProductDAO(); %>
<%
	String eventinfo_id = request.getParameter("eventinfo_id");
	String product_id = request.getParameter("product_id");	

System.out.println(eventinfo_id+"productid="+product_id);

JSONParser parser = new JSONParser();
JSONArray array = (JSONArray) parser.parse(product_id);

System.out.println(array.get(0));

ArrayList <EventProduct> list = new <EventProduct> ArrayList();

for(int i=0;i<array.size();i++){
	EventProduct dto = new EventProduct();
	dto.setEventinfo_id(Integer.parseInt(eventinfo_id));
	dto.setProduct_id(Integer.parseInt(array.get(i).toString()));
	
	list.add(dto);
}

int result = dao.insert(list);
out.print(result);
%>