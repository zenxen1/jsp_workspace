package com.sds.gallery.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.gallery.dao.GalleryDAO;

public class Gallery_delete extends HttpServlet{
	GalleryDAO dao = new GalleryDAO();
	
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter out = res.getWriter();
		
		String gallery_id = req.getParameter("gallery_id");
		
		
		int result = dao.gallery_delete(Integer.parseInt(gallery_id));
		
		out.print("<script>");
		if(result!=0){
			out.print("alert('삭제완료');");
			out.print("location.href='/board/list.jsp';");
		}else{
			out.print("alert('삭제실패');");
			out.print("history.back();");
		}
		out.print("</script>");
		
		
	}
}
