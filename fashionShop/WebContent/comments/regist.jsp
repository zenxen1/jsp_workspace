<%@page import="com.fashion.product.mybatis.dao.CommentsDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:useBean id="dto" class="com.fashion.product.domain.Comments"/>
<%! CommentsDAO dao = new CommentsDAO();%>
<%
request.setCharacterEncoding("utf-8");
/*
String product_id = request.getParameter("product_id");
String title = request.getParameter("title");
String writer = request.getParameter("writer");
out.print("하이루");
*/
%>
<jsp:setProperty property="*" name="dto"/>
<%
int result = dao.insert(dto);

StringBuffer sb = new StringBuffer();
sb.append("{");
sb.append("\"result\":"+result);
sb.append("}");

out.print(sb.toString());
%>