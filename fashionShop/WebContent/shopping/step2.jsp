<%@page import="com.fashion.shopping.domain.Bank"%>
<%@page import="com.fashion.shopping.mybatis.dao.BankDAO"%>
<%@page import="com.fashion.common.format.MoneyFormat"%>
<%@page import="com.fashion.shopping.domain.Payment"%>
<%@page import="com.fashion.shopping.domain.Dest"%>
<%@page import="com.fashion.member.domain.Member"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%! BankDAO bankDAO = new BankDAO(); %>
<%
Member customer = (Member)session.getAttribute("customer");
Dest dest =(Dest)session.getAttribute("dest");
Payment payment = (Payment) session.getAttribute("payment");
Bank bank = bankDAO.select(payment.getBank_id());
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<title>Untitled Document</title>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
#mainNavi{color:#FFFFFF;text-align:center;font-family:"굴림체", "돋움체","Arial"}
.style1 {color: #FF0000}
.style4 {color: #FF0000; font-weight: bold; }
.style2 {	color: #132699;
	font-weight: bold;
}
-->
</style>
<script>

</script>
</head>
<body>
<table align="center" width="970" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="722" height="60" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td height="60"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="224" rowspan="2"><img src="/images/common/logo.gif" width="224" height="64" /></td>
            <td height="30" align="right"><table height="20" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td width="40"><img src="/images/main/btn_login.gif" width="40" height="18" /></td>
                <td width="64"><img src="/images/main/menu_join.gif" width="64" height="18" /></td>
                <td width="60"><img src="/images/main/menu_cart.gif" width="60" height="18" /></td>
                <td width="88"><img src="/images/main/menu_orderlist.gif" width="88" height="18" /></td>
                <td width="58"><img src="/images/main/menu_cs.gif" width="58" height="18" /></td>
              </tr>
            </table>			</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="30"><table width="100%" height="30" border="0" cellpadding="0" cellspacing="0" bgcolor="#000000">
          <tr id="mainNavi" align="center">
            <td>메뉴1</td>
            <td>메뉴2</td>
            <td>메뉴3</td>
            <td>메뉴4</td>
            <td>메뉴5</td>
            <td>메뉴6</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="100"><img src="/images/main/mainVisual.jpg" width="970" height="195" /></td>
      </tr>
      <tr>
        <td valign="top">&nbsp;</td>
      </tr>
      <tr>
        <td height="30" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="731" height="102" align="center" valign="top"background="images/main_bg05.gif" style="padding-top:10px;">&nbsp;</td>
            <td width="731" align="center" valign="top"background="images/main_bg05.gif" style="padding-top:10px;"><img src="/images/sanction/sanction_title.gif" width="731" height="67" /></td>
            <td width="731" align="center" valign="top"background="images/main_bg05.gif" style="padding-top:10px;">&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="f6f5f5">
              <tr>
                <td><img src="/images/sanction/sanction_custinfo5.gif" width="58" height="17" /></td>
              </tr>
              <tr>
                <td height="1" bgcolor="d5d5d5"></td>
              </tr>
              <tr>
                <td height="13"></td>
              </tr>
              <tr>
                <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="4"></td>
                    <td width="124" height="32" valign="middle">총금액</td>
                    <td width="421" valign="middle"><span class="style1"><%=MoneyFormat.getResult(payment.getTotalbuy()) %></span>원</td>
                  </tr>
                  <tr>
                    <td height="1" colspan="3" background="images/sanction/sanction_bg04.gif"></td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td height="29" valign="middle">배송비</td>
                    <td valign="middle">2,500원</td>
                  </tr>
                  <tr>
                    <td height="1" colspan="3" background="images/sanction/sanction_bg04.gif"></td>
                  </tr>
                  <tr>
                    <td height="29">&nbsp;</td>
                    <td valign="middle">적립금사용 </td>
                    <td valign="middle">0원</td>
                  </tr>
                  <tr>
                    <td height="1" colspan="3" background="images/sanction/sanction_bg04.gif"></td>
                  </tr>
                  <tr>
                    <td height="29">&nbsp;</td>
                    <td valign="middle">입금계좌</td>
                    <td valign="middle"><strong><%=bank.getBank_name() %>(<%=bank.getBank_num() %>)</strong></td>
                  </tr>
                  <tr>
                    <td height="1" colspan="3" background="images/sanction/sanction_bg04.gif"></td>
                  </tr>
                  <tr>
                    <td height="29">&nbsp;</td>
                    <td valign="middle">입금자이름</td>
                    <td valign="middle"><%=payment.getPay_name() %></td>
                  </tr>
                  <tr>
                    <td height="1" colspan="3" background="images/sanction/sanction_bg04.gif"></td>
                  </tr>
                  <tr>
                    <td height="29">&nbsp;</td>
                    <td valign="middle">총결제금액</td>
                    <td valign="middle"><span class="style4"><%=MoneyFormat.getResult(payment.getTotalpay()) %>>원</span></td>
                  </tr>
                </table></td>
              </tr>
              <tr>
                <td height="1" bgcolor="d5d5d5"></td>
              </tr>
            </table></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td><img src="/images/sanction/sanction_custinfo6.gif" width="93" height="17" /></td>
              </tr>
              <tr>
                <td height="1" bgcolor="d5d5d5"></td>
              </tr>
              <tr>
                <td height="13"></td>
              </tr>
              <tr>
                <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="17" rowspan="4" bgcolor="d6d5d5"></td>
                      <td width="75" height="33" bgcolor="d6d5d5" style="padding-top:3px;">주문번호 </td>
                      <td width="45"></td>
                      <td style="padding-top:3px;"><span class="style2">DHGSDFG00221133</span> (주문번호를 메모해 두세요)</td>
                    </tr>
                    <tr>
                      <td height="30" bgcolor="d6d5d5">보내시는 분 </td>
                      <td width="45"></td>
                      <td>홍길동</td>
                    </tr>
                    <tr>
                      <td height="30" bgcolor="d6d5d5">핸드폰번호</td>
                      <td width="45"></td>
                      <td>011-111-1111</td>
                    </tr>
                    <tr>
                      <td height="30" bgcolor="d6d5d5">이메일 </td>
                      <td width="45"></td>
                      <td>aaa@naver.com</td>
                    </tr>
                </table></td>
              </tr>
            </table></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td height="24"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td><img src="/images/sanction/sanction_custinfo7.gif" width="93" height="17" /></td>
              </tr>
              <tr>
                <td height="1" bgcolor="d5d5d5"></td>
              </tr>
              <tr>
                <td height="13"></td>
              </tr>
              <tr>
                <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="17" rowspan="5" bgcolor="d6d5d5"></td>
                      <td width="75" height="33" bgcolor="d6d5d5" style="padding-top:3px;">받으실 분 </td>
                      <td width="45"></td>
                      <td style="padding-top:3px;">홍길동</td>
                    </tr>
                    <tr>
                      <td height="30" bgcolor="d6d5d5">전화번호</td>
                      <td>&nbsp;</td>
                      <td>01-111-1111</td>
                    </tr>
                    <tr>
                      <td height="30" bgcolor="d6d5d5">핸드폰번호</td>
                      <td>&nbsp;</td>
                      <td>011-111-1111</td>
                    </tr>
                    <tr>
                      <td height="30" bgcolor="d6d5d5">받으실 곳 </td>
                      <td>&nbsp;</td>
                      <td>서울시 강동구 </td>
                    </tr>
                    <tr>
                      <td height="30" bgcolor="d6d5d5">배송메시지</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                </table></td>
              </tr>
            </table></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="24">&nbsp;</td>
            <td height="40" align="center"><img src="/images/sanction/checktext_img.gif" width="325" height="18" /></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="24">&nbsp;</td>
            <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="300" align="right"><a href="step3.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image19','','images/sanction/btn_cash_over.gif',1)"><img src="/images/sanction/btn_cash.gif" name="Image19" width="70" height="26" border="0" id="Image19" /></a><a href="#" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image17','','images/sanction/btn_cash_over.gif',1)"></a></td>
                <td width="20">&nbsp;</td>
                <td width="411"><a href="#" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image20','','images/sanction/btn_back_over.gif',1)"><img src="/images/sanction/btn_back.gif" name="Image20" width="70" height="26" border="0" id="Image20" /></a><a href="#" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image18','','images/sanction/btn_back_over.gif',1)"></a></td>
              </tr>
            </table></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="15">&nbsp;</td>
            <td height="15">&nbsp;</td>
            <td height="15">&nbsp;</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="100" valign="top" bgcolor="#CCCCCC">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
</table>
</body>
</html>
