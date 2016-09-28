/*
 * jsp로도 업로드 처리를 할수는 있으나, 좀더 깊이 공부하고
 * 잊지않기 위해 오랜만에 서블릿으로 개발해본다!
 * */
package com.sds.gallery.servlet;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.sds.gallery.dao.GalleryDAO;
import com.sds.gallery.domain.Gallery;

public class RegistServlet extends HttpServlet{
	GalleryDAO dao = new GalleryDAO();
	String temp="C:/jsp_workspace/Gallery/WebContent/temp";
	String dest="C:/jsp_workspace/Gallery/WebContent/data";
	String thumb="C:/jsp_workspace/Gallery/WebContent/thumb";
	
	//클라이언트가  post 로 전송하면 아래의 메서드가 
	//service 메서드에 의해 호출된다!!
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");//문서출력 인코딩
		req.setCharacterEncoding("utf-8");//파라미터에 대한 인코딩
		
		PrintWriter out=res.getWriter();
		out.print("업로드 할려고??");
		
		//apache fileupload 컴포넌트를 이용한 업로드 시작!!!
		DiskFileItemFactory factory= new DiskFileItemFactory();
		
		//1메가 이하의 파일은 메모리상에서 업로드를 처리해버린다
		factory.setSizeThreshold(1*1024*1024);
		factory.setRepository(new File(temp));
		
		ServletFileUpload upload=new ServletFileUpload(factory);
		try {
			//FileItem이란 업로드된 파라미터들을 가리킨다..
			//우리의 경우 총 4개가 날아온다..
			List<FileItem> list=upload.parseRequest(req); ///업로드 해석시작!!
			
			out.print("업로드된 파라미터들은 총 "+list.size());
			
			Gallery dto = new Gallery();
			
			for(int i=0;i<list.size();i++){
				FileItem item=list.get(i);
				
				//텍스트 기반 파라미터인 경우
				String param=item.getFieldName();
				String value=item.getString("utf-8");
				
				if(item.isFormField()){
					if(param.equals("writer")){
						dto.setWriter(value);
					}else if(param.equals("title")){
						dto.setTitle(value);
					}else if(param.equals("content")){
						dto.setContent(value);
					}
				}else{
					//파일업로드 마무리!!
					try {
						//실제 디렉토리에 파일이 저장되는 시점!!
						item.write(new File(dest, item.getName()));
						item.delete();//temp 디렉토리의 파일 삭제!
						out.print("업로드 완료!!");
						
						//원본 이미지를 원하는 크기로 축소시키자
						int width=30;
						int height=20;
						
						BufferedImage thumb_image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
						//그림을 직접 그리기 위해 그랙픽스 객체를 사용해보자!!
						Graphics2D g=(Graphics2D)thumb_image.getGraphics();
						BufferedImage orignal_image = ImageIO.read(new File(dest+"/"+item.getName())); //원본이미지
						g.drawImage(orignal_image, 0, 0, width, height, null);
						out.print(item.getContentType());
						String mimeType=item.getName().substring(item.getName().lastIndexOf(".")+1,item.getName().length());
						ImageIO.write(thumb_image, mimeType, new File(thumb+"/"+item.getName()));
						
						
						
						
						dto.setImg(item.getName());
						
						//insert !!
						int result=dao.insert(dto);
						
						out.print("<script>");
						if(result!=0){
							out.print("alert('등록성공');");
							out.print("location.href='/board/list.jsp';");
						}else{
							out.print("alert('등록실패');");
							out.print("history.back();");
						}
						out.print("</script>");
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		} catch (FileUploadException e) {
			e.printStackTrace();
		}
	}
}









