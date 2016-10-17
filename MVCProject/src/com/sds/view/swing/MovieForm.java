package com.sds.view.swing;

import java.awt.Choice;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;

import com.sds.mvc.model.MovieAdvice;

public class MovieForm extends JFrame{
	Choice ch;
	JButton bt;
	URL url; //������ �ڿ��� ��ġ
	HttpURLConnection con;
	
	public MovieForm() {
		ch = new Choice();
		ch.add("�ú���");
		ch.add("�λ���");
		ch.add("��Ű");
		ch.add("���丣��");
		
		bt=new JButton("�������");
		
		setLayout(new FlowLayout());
		
		add(ch);
		add(bt);
		setVisible(true);
		setSize(200, 100);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		
		bt.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				getResult();
			}
		});
	}
	
	public void getResult(){
		MovieAdvice model = new MovieAdvice();
		String msg = model.getAdvice(ch.getSelectedItem());
		
		JOptionPane.showMessageDialog(this, msg);
		
		/*
		try {
			url = new URL("http://localhost:9090/movie");
			con = (HttpURLConnection)url.openConnection();
			con.setRequestMethod("post");
			con.setDoInput(true);
			con.setDoOutput(true);
			int code = con.getResponseCode();//�̶� ��û �õ���
			
			
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
	}
	
	public static void main(String[] args) {
		new MovieForm();
	}
	
}
