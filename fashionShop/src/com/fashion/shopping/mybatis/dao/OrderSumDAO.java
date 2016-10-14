package com.fashion.shopping.mybatis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.fashion.member.domain.Guest;
import com.fashion.mybatis.SessionManager;
import com.fashion.product.domain.Product;
import com.fashion.shopping.domain.Bank;
import com.fashion.shopping.domain.Customer;
import com.fashion.shopping.domain.OrderDetail;
import com.fashion.shopping.domain.OrderSum;
import com.fashion.shopping.domain.Payment;

public class OrderSumDAO {
	SessionManager manager = SessionManager.getInstance();
	
	public int insert(Guest guest,List<Product> cart){
		int result=0;
		SqlSession session=manager.getSession();
		//��ȸ���� ��쿣, �̽����� ��ȸ���� �������!
		try {
			session.insert("Guest.insert",guest);
			int guest_id = guest.getGuest_id();
			
			//customer ���̺� ��ȸ���� ���
			Customer customer = new Customer();
			customer.setCustomer_type("guest");
			customer.setType_id(guest_id);
			session.insert("Customer.insert", customer);
			int customer_id = customer.getCustomer_id();
			
			
			//�ֹ����
			OrderSum os = new OrderSum();
			os.setCustomer_id(customer_id);
			session.insert("OrderSum.insert", os);
			int ordersum_id = os.getOrdersum_id();
			//�ֹ���
			for(int i=0;i<cart.size();i++){
				Product product = cart.get(i);
				
				OrderDetail detail = new OrderDetail();
				detail.setOrdersum_id(ordersum_id);
				detail.setProduct_id(product.getProduct_id());
				detail.setColor(product.getColor());
				detail.setPsize(product.getPsize());
				detail.setEa(product.getStock());
				
				session.insert("OrderDetail.insert",detail);
			}
			//��������
			Payment payment = new Payment();
			
			//session.insert("Payment.insert", payment);
			
			//���������
			
			
			session.commit();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			session.rollback();
		}finally{
			session.close();
		}
		
		return result;
	}
}
