<%@ page contentType="text/html;charset=utf-8" %>
<%@ page import = "java.sql.*"%>

<%! 
	String driver = "oracle.jdbc.driver.OracleDriver";
	String url = "jdbc:oracle:thin:@localhost:1521:XE";
	String user="java0919";
	String password ="java0919";

	Connection con;
	PreparedStatement pstmt;

%>

<%
	//클라이언트가 전송한 데이터를 받아서
	//오라클에 insert 시켜보자!!
	request.setCharacterEncoding("utf-8");
	//클라이언트가 현재 페이지를 요청하면서 보낸 파라미터를 날려보자

	String id = request.getParameter("id");
	String password = request.getParameter("password");
	String name = request.getParameter("name");

	out.print("넘겨받은 id는"+id);
	out.print("넘겨받은 password는"+password);
	out.print("넘겨받은 name는"+name);

	String sql="insert into member(member_id,id,password,name)";
	sql = sql +"values(seq_member.nextval,?,?,?)";

	out.print(sql);
	
	//드라이버로드
	Class.forName(driver);
	//접속
	//con = DriverManager.getConnection(url,user,password);
	con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","java0919","java0919");
	//쿼리수행
	if(con!=null){
	pstmt = con.prepareStatement(sql);
	pstmt.setString(1,id);
	pstmt.setString(2,password);
	pstmt.setString(3,name);
	
	
	int result = pstmt.executeUpdate();
	if(result !=0){
		out.print("등록성공");
	}else{
		out.print("등록실패");
	}
	}
	//닫기
	if(pstmt != null){
		pstmt.close();
	}
	if(con !=null){
		con.close();
	}

%>