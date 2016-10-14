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
		//비회원의 경우엔, 이시점에 비회원을 등록하자!
		try {
			session.insert("Guest.insert",guest);
			int guest_id = guest.getGuest_id();
			
			//customer 테이블에 비회원을 등록
			Customer customer = new Customer();
			customer.setCustomer_type("guest");
			customer.setType_id(guest_id);
			session.insert("Customer.insert", customer);
			int customer_id = customer.getCustomer_id();
			
			
			//주문요약
			OrderSum os = new OrderSum();
			os.setCustomer_id(customer_id);
			session.insert("OrderSum.insert", os);
			int ordersum_id = os.getOrdersum_id();
			//주문상세
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
			//결재정보
			Payment payment = new Payment();
			
			//session.insert("Payment.insert", payment);
			
			//배송지정보
			
			
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
