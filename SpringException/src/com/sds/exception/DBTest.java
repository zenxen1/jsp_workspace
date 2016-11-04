/*
 * 예외처리의 목적 : 비정상 종료의 방지
 * 예외처리 방법 : try~catch 현재 메서드에서 예외처리를 마무리....
 *                  throws : 예외의 전가로서, 예외를 현재 메서드에서 처리하게 부적절한 경우,
 *                              즉 예외의 내용을 외부를 전달할 경우 주요 사용
 *                              
 * 예외를 개발자 발생시키는 방법 : throw
 * */

package com.sds.exception;

import java.sql.DriverManager;
import java.sql.SQLException;

public class DBTest {
	//스프링이 지원하는 DB를 사용하면, 트랜잭션 처리시 aop를 이용할수도있을뿐만아니라 예외처리도 가능하다.
	/*String driver="oracle.jdbc.driver.OracleDriver";
	String url="jdbc:oracle:thin:@localhosd:1521:XE";
	String user="spring";
	String password="spring";*/

	String driver="org.mariadb.jdbc.Driver";
	String url="jdbc:mariadb://localhost:3306/mvc";
	String user="roota";
	String password="";

	
	public DBTest() {
		connect();
	}
	public void connect(){
		
		try {
			Class.forName(driver);
			DriverManager.getConnection(url, user, password);
		} catch (ClassNotFoundException e) {
			System.out.println("드라이버가 올바르지 않습니다.");
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println(e.getErrorCode());
	/*		if(e.getErrorCode()==17002){
				System.out.println("url 접속이 틀렸네요");
			}else if(e.getErrorCode()==1017){
				System.out.println("user 계정이 틀렸네요");
			}
	*/		e.printStackTrace();
		}
	}
	
/*	public void test() throws ArrayIndexOutOfBoundsException{
	public void test() throws ArrayIndexOutOfBoundsException{
		int[] arr = new int[2];
		arr[0]=1;
		arr[1]=2;
		try {
			
		System.out.println(arr[2]);
	
*/
			/*		} catch (ArrayIndexOutOfBoundsException e) {
			//e.printStackTrace();
			System.out.println("배열의 크기를 넘었네요");
		}
	}
			 */	
	public static void main(String[] args) {
		DBTest dt = new DBTest();
/*		try {
			dt.test();
		} catch (ArrayIndexOutOfBoundsException e) {
			e.printStackTrace();
		}*/
	}

}
