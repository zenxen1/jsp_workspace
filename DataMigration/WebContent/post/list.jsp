<%@page import="java.util.List"%>
<%@page import="com.sds.zipcode.domain.ZipcodeDAO"%>
<%@page import="com.sds.zipcode.dao.ZipCode"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!ZipcodeDAO dao = new ZipcodeDAO();%>
<%
request.setCharacterEncoding("utf-8");
String dong = request.getParameter("dong");

List <ZipCode> list = dao.selectAll(dong);

//out.print(list.size());

StringBuffer sb = new StringBuffer();


sb.append("{");
sb.append("\"zipList\":[");
sb.append("{");
sb.append("\"zipcode\":\"123\",");
sb.append("\"sido\":\"123\",");
sb.append("\"gugun\":\"123\",");
sb.append("\"dong\":\"123\",");
sb.append("\"bunji\":\"123\"");
sb.append("}");
sb.append("]");
sb.append("}");

//System.out.print(sb.toString());
out.print(sb.toString());


%>