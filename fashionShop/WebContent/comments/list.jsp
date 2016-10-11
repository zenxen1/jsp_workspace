<%@page import="com.fashion.product.domain.Comments"%>
<%@page import="java.util.List"%>
<%@page import="com.fashion.product.mybatis.dao.CommentsDAO"%>
<%@ page language="java" contentType="text/json; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!CommentsDAO dao = new CommentsDAO();%>
<%
	String product_id = request.getParameter("product_id");
	System.out.println(product_id);
	List<Comments> list = dao.selelctAll(Integer.parseInt(product_id));

	StringBuffer sb = new StringBuffer();

	sb.append("{");
	sb.append("\"commentsList\":[");
	for (int i = 0; i < list.size(); i++) {
		Comments dto = list.get(i);
		sb.append("{");
		sb.append("\"comments_id\":"+dto.getComments_id()+",");
		sb.append("\"product_id\":"+dto.getProduct_id()+",");
		sb.append("\"title\":\""+dto.getTitle()+"\",");
		sb.append("\"writer\":\""+dto.getWriter()+"\",");
		sb.append("\"regdate\":\""+dto.getRegdate()+"\"");
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