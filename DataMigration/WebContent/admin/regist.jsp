<%@page import="com.sds.zipcode.domain.ZipcodeDAO"%>
<%@page import="com.sds.zipcode.dao.ZipCode"%>
<%@page import="org.apache.poi.xssf.usermodel.XSSFCell"%>
<%@page import="org.apache.poi.xssf.usermodel.XSSFRow"%>
<%@page import="org.apache.poi.xssf.usermodel.XSSFSheet"%>
<%@page import="org.apache.poi.xssf.usermodel.XSSFWorkbook"%>
<%@page import="org.apache.commons.fileupload.FileItem"%>
<%@page import="java.util.List"%>
<%@page import="java.io.File"%>
<%@page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	//웹사이트의 경로를 스스로 추출!!!
	//String temp="C:/jsp_workspace/DataMigration/WebContent/temp";
%>
<%
	//내장객체 request, response,out,
	//application (웹어플리케이션의 전역적 정보)
	request.setCharacterEncoding("utf-8");
	String temp = application.getRealPath("/temp");
	String data = application.getRealPath("/data/");
	File destFile = null;
	//out.print(temp);

	//넘겨받은 엑셀파일을 해석 한 후, 데이터베이스에 넣자
	//업로드 전에 설정과 관련된 객체
	DiskFileItemFactory factory = new DiskFileItemFactory();
	factory.setSizeThreshold(1 * 1024 * 1024);
	factory.setRepository(new File(temp));

	//업로드를 담당하는 객체
	ServletFileUpload upload = new ServletFileUpload(factory);

	//클라이언트가 multipart/form-data로 전송한 경우에만...
	if (upload.isMultipartContent(request)) {
		List<FileItem> list = upload.parseRequest(request); //업로드 수행!!

		for (int i = 0; i < list.size(); i++) {
			FileItem item = list.get(i);

			if (item.isFormField()) { //text 라면....

			} else {
				item.write(destFile = new File(data + item.getName()));
				item.delete();
				out.print(destFile);

				//업로드된 엑셀을 해석해서 DB에 넣자
				XSSFWorkbook workbook = new XSSFWorkbook(destFile);
				XSSFSheet sheet = workbook.getSheetAt(0);
				int rows = sheet.getPhysicalNumberOfRows();
				out.print("총레코드 갯수는" + rows);
				
				ZipcodeDAO dao = new ZipcodeDAO();				
				for (int a = 1; a < rows; a++) {
					XSSFRow row = sheet.getRow(a);
					out.print("<table width=\"100%\" border=\"1px\">");
					out.print("<tr>");
					ZipCode dto = new ZipCode();

					int cols = row.getPhysicalNumberOfCells();

					for (int k = 0; k < cols; k++) {
						XSSFCell cell = row.getCell(k);
						if(cell!=null){
							if (cell.getCellType() == XSSFCell.CELL_TYPE_NUMERIC) {
								out.print("<td>" + cell.getNumericCellValue() + "</td>");
								
								dto.setSeq((int)cell.getNumericCellValue());
								
							} else if (cell.getCellType() == XSSFCell.CELL_TYPE_STRING) {
								out.print("<td>" + cell.getStringCellValue() + "</td>");
								if(k==0){
									dto.setZipcode(cell.getStringCellValue());
								}else if(k==1){
									dto.setSido(cell.getStringCellValue());
								}else if(k==2){
									dto.setGugun(cell.getStringCellValue());
								}else if(k==3){
									dto.setDong(cell.getStringCellValue());
								}else if(k==4){
									dto.setBunji(cell.getStringCellValue());
								}
							}
						}else{
							out.print("<td>데이터없음</td>");
						}
						

					}
					out.print("</tr>");
					out.print("</table>");
					int result = dao.insert(dto);
				}
			}
		}

	} else {
		out.print("코드도 모르냐?");
	}
%>