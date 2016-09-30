<%@page import="com.sds.zipcode.domain.zipcode"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.sds.customer.dao.CustomerDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!CustomerDAO dao = new CustomerDAO(); %>
<%
	request.setCharacterEncoding("utf-8");
	//String dong = request.getParameter("dong");
	String dong = "홍익동";
	List <zipcode>list = dao.postSerch(dong);
	
	StringBuffer sb = new StringBuffer();

	sb.append("{");
	sb.append("\"postList\":[");
	for (int i = 0; i < list.size(); i++) {
		zipcode dto = list.get(i);
		sb.append("{");
		sb.append("\"bunji\":"+dto.getBunji()+",");
		sb.append("\"dong\":\""+dto.getDong()+"\",");
		sb.append("\"gugun\":\""+dto.getGugun()+"\",");
		sb.append("\"seq\":\""+dto.getSeq()+"\",");
		sb.append("\"sido\":\""+dto.getSido()+"\",");
		sb.append("\"zipcode\":\""+dto.getZipcode()+"\",");
		
		if (i < list.size() - 1) {
			sb.append("},");
		} else {
			sb.append("}");
		}
	}

	sb.append("]");
	sb.append("}");

	out.print(sb.toString());
	
%>