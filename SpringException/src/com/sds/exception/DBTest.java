/*
 * ����ó���� ���� : ������ ������ ����
 * ����ó�� ��� : try~catch ���� �޼��忡�� ����ó���� ������....
 *                  throws : ������ �����μ�, ���ܸ� ���� �޼��忡�� ó���ϰ� �������� ���,
 *                              �� ������ ������ �ܺθ� ������ ��� �ֿ� ���
 *                              
 * ���ܸ� ������ �߻���Ű�� ��� : throw
 * */

package com.sds.exception;

import java.sql.DriverManager;
import java.sql.SQLException;

public class DBTest {
	//�������� �����ϴ� DB�� ����ϸ�, Ʈ����� ó���� aop�� �̿��Ҽ��������Ӹ��ƴ϶� ����ó���� �����ϴ�.
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
			System.out.println("����̹��� �ùٸ��� �ʽ��ϴ�.");
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println(e.getErrorCode());
	/*		if(e.getErrorCode()==17002){
				System.out.println("url ������ Ʋ�ȳ׿�");
			}else if(e.getErrorCode()==1017){
				System.out.println("user ������ Ʋ�ȳ׿�");
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
			System.out.println("�迭�� ũ�⸦ �Ѿ��׿�");
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
