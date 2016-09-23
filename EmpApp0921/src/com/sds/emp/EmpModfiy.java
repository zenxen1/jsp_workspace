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

public class EmpModfiy extends HttpServlet{
	PoolManager pool = PoolManager.getInstance();
	Connection con;
	PreparedStatement pstmt;
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		
		PrintWriter out = res.getWriter();
		
		try {
			con = pool.getConnection();
			
			String empno = req.getParameter("empno");
			String ename = req.getParameter("ename");
			String job = req.getParameter("job");
			String mgr = req.getParameter("mgr");
			String hiredate = req.getParameter("hiredate");
			String sal = req.getParameter("sal");
			String comm = req.getParameter("comm");
			String deptno = req.getParameter("deptno");
			
			out.print(empno+","+ename+","+job+","+mgr+","+hiredate+","+sal+","+comm+","+deptno);
			
			String sql = "UPDATE EMP SET ENAME=?, JOB=?, MGR=?, HIREDATE=?, SAL=?, COMM=?, DEPTNO=? where EMPNO ="+empno;			
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, ename);
			pstmt.setString(2, job);
			pstmt.setInt(3, Integer.parseInt(mgr));
			pstmt.setString(4, hiredate);
			pstmt.setInt(5, Integer.parseInt(sal));
			pstmt.setInt(6, Integer.parseInt(comm));
			pstmt.setInt(7, Integer.parseInt(deptno));
			
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
