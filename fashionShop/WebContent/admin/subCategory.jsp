<%@page import="com.fashion.product.domain.SubCategory"%>
<%@page import="java.util.List"%>
<%@page import="com.fashion.product.dao.SubCategoryDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%!SubCategoryDAO dao = new SubCategoryDAO(); %>
<%
	request.setCharacterEncoding("utf-8");
	String top_id = request.getParameter("top_id");
	//System.out.print(top_id);
	
	List <SubCategory>list = dao.SelectAll(Integer.parseInt(top_id));
	
	StringBuffer sb = new StringBuffer();

	sb.append("{");
	sb.append("\"subList\":[");
	for (int i = 0; i < list.size(); i++) {
		SubCategory dto = list.get(i);
		sb.append("{");
		sb.append("\"rank\":"+dto.getRank()+",");
		sb.append("\"title\":\""+dto.getTitle()+"\",");
		sb.append("\"top_id\":"+dto.getTop_id()+"");
		
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