package com.sds.gui;

import java.awt.FlowLayout;

import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JPasswordField;

public class MyFrame extends JFrame{
	private JComponent t_id;
	private JComponent t_password;
	private JComponent t_name;
	private JComponent area;
	private JComponent scroll;
	private JComponent bt3;
	
	public void init() {
		
		setLayout(new FlowLayout());
		add(t_id);
		add(t_password);
		add(t_name);
		add(scroll);
		add(bt3);
		
		setSize(300, 400);
		setVisible(true);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
	}
	
	//메서드 주입: 일반 메서드에 의한 객체 주입 방식, 생성자에 의한 주입 방식도 있음.
	public void setT_id(JComponent t_id) {
		this.t_id = t_id;
	}
	public void setT_password(JComponent t_password) {
		this.t_password = t_password;
	}
	public void setT_name(JComponent t_name) {
		this.t_name = t_name;
	}
	public void setArea(JComponent area) {
		this.area = area;
	}
	public void setScroll(JComponent scroll) {
		this.scroll = scroll;
	}
	public void setBT2(JComponent bt0) {
		this.bt3 = bt0;
	}
	
	
}
