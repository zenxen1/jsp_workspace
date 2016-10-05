/*jndi�� �̿��Ͽ�, �ܺ��� �ڿ����κи����ѳ��� DB ������ �˻��Ͽ�  �����ͺ���
 * �츮�� ���)jdbc/oracle�� �˻� Ű�����̴�!!
 * */

package com.fashion.mypool;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class PoolManager {
	private static PoolManager instance;
	
	InitialContext context;//�ڿ��� �˻��� �� �ִ� ��ü
	DataSource ds; //Ŀ�ؼ��� ���� �� �ִ� Ŀ�ؼ� Ǯ ��ü
	
	private PoolManager() {
		try {
			context = new InitialContext();
			ds = (DataSource)context.lookup("java:/comp/env/jdbc/oracle");
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	public static PoolManager getInstance(){
		if(instance==null){
			instance=new PoolManager();
		}
		return instance;
	}
	
	//datasource�� ���� Connection ��ü�� ��ȯ
	public Connection getConnection(){
		Connection con=null;
		try {
			con=ds.getConnection();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return con;
	}
	//DML ������ �ݳ�
	public void freeConnection(Connection con, PreparedStatement pstmt){
		if(pstmt!=null){
			try {
				pstmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(con!=null){
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	//Select ������ �ݳ�
		public void freeConnection(Connection con, PreparedStatement pstmt,ResultSet rs){
			if(rs!=null){
				try {
					rs.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if(pstmt!=null){
				try {
					pstmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if(con!=null){
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
		}
}
