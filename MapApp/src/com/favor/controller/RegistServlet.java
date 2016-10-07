package com.favor.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.favor.domain.Favor;
import com.favor.model.dao.FavorDAO;

public class RegistServlet extends HttpServlet{
	FavorDAO dao;
	DiskFileItemFactory factory;
	ServletFileUpload upload;	
	int tempSize=1*1024*1024; //1MB 
	String tempPath; //용량이 클 경우의 임시디렉토리
	String realPath; //파일이 서버에 저장될 실제 디렉토리
	File saveFile; //실제 저장된 파일에 대한 객체
	
	//jsp 의  application 내장객체의 자료형은 ServletContext 이다!!
	
	//서블릿을 태어날때, 즉 인스턴스가 메모리에 올라올때 
	//컨테이너로부터 환경설정 정보등을 전달받는다...
	public void init(ServletConfig config) throws ServletException {
		dao = new FavorDAO();
		ServletContext context=config.getServletContext();
		
		//유지보수성을 높이기위해, 자원의 경로가 바뀌는 경우 , 클래스 코드에서 
		//수정하면 안된다...따라서  dd에 자원을 명시하는 방법이 추천된다..
		String tempDir=config.getInitParameter("tempDir");
		String realDir=config.getInitParameter("realDir");
		
		System.out.println("tempDir"+tempDir);
		
		tempPath=context.getRealPath(tempDir);
		realPath=context.getRealPath(realDir);
		
		System.out.println(tempPath);
		
		factory = new DiskFileItemFactory(tempSize,new File(tempPath));
		upload = new ServletFileUpload(factory);
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");//파라미터 한글 깨짐 방지
		resp.setCharacterEncoding("utf-8");//출력시 한글 깨짐 방지
		resp.setContentType("text/html");
		
		//업로드 실시!!
		try {
			List<FileItem> params=upload.parseRequest(req);
			Favor dto = new Favor();
			
			for(int i=0;i<params.size();i++){
				FileItem item=params.get(i);
				
				if(item.isFormField()){ //text 파라미터라면...
					if(item.getFieldName().equals("lati")){
						dto.setLati(Double.parseDouble(item.getString()));
					}else if(item.getFieldName().equals("lng")){
						dto.setLng(Double.parseDouble(item.getString()));
					}else if(item.getFieldName().equals("name")){
						dto.setName(item.getString("utf-8"));
					}else if(item.getFieldName().equals("content")){
						dto.setContent(item.getString("utf-8"));
					}else if(item.getFieldName().equals("score")){
						dto.setScore(Double.parseDouble(item.getString()));
					}
				}else{//바이너리 파일 이라면...
					try {
						item.write(saveFile=new File(realPath+"/"+item.getName()));
						item.delete(); //임시 파일 삭제
						dto.setImg(saveFile.getName());
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
			//데이터베이스에 레코드 1건 넣자!!
			int result = dao.insert(dto);
			
			PrintWriter out = resp.getWriter();
			out.print("<script>");
			if(result!=0){
				out.print("alert(\"등록성공\");");
				out.print("location.href=\"/admin\";");
			}else{
				out.print("alert(\"등록실패\");");
				out.print("history.back();");
				
			}
			out.print("</script>");
		} catch (FileUploadException e) {
			e.printStackTrace();
		}
	}
	
	//반납할 자원들이 있으면 여기서 처리...(db, stream..)
	public void destroy() {
	}
}












