
package com.sds.emp;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sds.pool.PoolManager;

public class EmpList extends HttpServlet{
	PoolManager pool = PoolManager.getInstance();
	
	
	/*@@@@풀매니져로 대체
	String driver="oracle.jdbc.driver.OracleDriver";
	String url="jdbc:oracle:thin:@localhost:1521:XE";
	String user="java0919";
	String password="java0919";
	*/
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;
	
	//클라이언트가 get방식으로 요청할 경우 아래의 메서드가 호출
	//된다. service 메서드에 의해...
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		
		//오라클 연동하여 레코드 가져오기!!
		try {
			/*@@@@풀매니져로 대체
			Class.forName(driver);
			con=DriverManager.getConnection(url, user, password);
			*/
			con = pool.getConnection();//커넥션 풀에 모여있는 Connectionpool에서 하나 받는 시점!!
			String sql="select * from emp";
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
		
		}/* catch (ClassNotFoundException e) {
			e.printStackTrace();
		} */catch (Exception e) {
			e.printStackTrace();
		}
		
		//응답 객체로부터 스트림을 얻은 후, 그 스트림을 통해 
		//응답 컨텐츠를 구성하여 보내주자!!
		PrintWriter out=res.getWriter();
		out.print("<script>");
		out.print("function regist(){");
		//out.print("alert('나불렀어?')"); jsp를 사용해 보자
		
		out.print("location.href=\"/emp/registForm.jsp\";");
		
		out.print("}");
		out.print("</script>");
		
		
		
		out.print("<table align=\"center\" width=\"800px\" border=\"1px\">");
		out.print("<tr align=\"center\">");
		out.print("<td>EMP</td>");
		out.print("<td>ENAME</td>");
		out.print("<td>JOB</td>");
		out.print("<td>MGR</td>");
		out.print("<td>HIREDATE</td>");
		out.print("<td>SAL</td>");
		out.print("<td>COMM</td>");
		out.print("<td>DEPTNO</td>");
		out.print("</tr>");
		
		try {
			//반복문 시작
			while(rs.next()){
				out.print("<tr align=\"center\" onMouseOver=\"this.style.background='yellow'\" onMouseOut = \"this.style.background=''\">" );
				out.print("<td>"+rs.getInt("empno")+"</td>");
				out.print("<td><a href=\"/emp/detail.jsp?empno="+rs.getInt("empno")+"\">"+rs.getString("ename")+"</a></td>");
				out.print("<td>"+rs.getString("job")+"</td>");
				out.print("<td>"+rs.getInt("mgr")+"</td>");
				out.print("<td>"+rs.getString("hiredate")+"</td>");
				out.print("<td>"+rs.getInt("sal")+"</td>");
				out.print("<td>"+rs.getInt("comm")+"</td>");
				out.print("<td>"+rs.getInt("deptno")+"</td>");
				out.print("</tr>");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			//다시 커넥션 풀로 돌려보냄....
			pool.freeConnection(con, pstmt, rs);
		}
		out.print("<tr>");
		out.print("<td colspan=\"8\" align=\"right\"><input type=\"button\" value = \"등록\" onClick=\"regist()\"></td>");
		out.print("</tr>");
		out.print("</table>");
	}
	
}








