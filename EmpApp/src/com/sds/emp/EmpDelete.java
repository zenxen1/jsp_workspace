package com.sds.emp;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.pool.PoolManager;

public class EmpDelete extends HttpServlet {
	PoolManager pool = PoolManager.getInstance();

	Connection con;
	PreparedStatement pstmt;

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8"); // 클라이언트가넘긴 데이터의 인코딩 처리....

		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8"); // 클라이언트의 브라우저에 출력할 문자열에 대한 인코딩 처리

		PrintWriter out = res.getWriter();
		
		try {
			con =pool.getConnection();
			
			String empno = req.getParameter("empno");
			
			String sql = "delete from emp where empno ="+empno;
			pstmt = con.prepareStatement(sql);
			int result = pstmt.executeUpdate();
			
			if(result !=0){
				out.print("<script>");
				out.print("alert('입력성공');");
				out.print("location.href='/list';");
				out.print("</script>");
			}else{
				out.print("<script>");
				out.print("alert('입력실패');");
				out.print("history.back();");
				out.print("</script>");
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			pool.freeConnection(con, pstmt);
		}
	}
}
