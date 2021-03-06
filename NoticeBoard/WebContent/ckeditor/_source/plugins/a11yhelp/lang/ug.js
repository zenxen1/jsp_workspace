/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang( 'a11yhelp', 'ug',
{
	accessibilityHelp :
	{
		title : '�귌댵닦뉄끰녬� �녬댵닦뺊녩��댵글댵�',
		contents : '�듰㎔극��뺊� �끱뺉꾸끱뉄녪�. 磨�� 卍�녩꾸꾗뺉다꺵댶녪� �듰Ω앨끮Ω귍녪� 磨�댶꾓넨됚��됗� ESC �녪� 磨�먛넨됚�.',
		legend :
		[
			{
				name : '痲碼膜�뺉へべ됙꺳�',
				items :
						[
							{
								name : '�귌댵극Ω� 磨碼�꾓�碼�� 魔�뺋앤근됗�',
								legend:
									'${toolbarFocus} 磨�먛넨됙꾓넥� �귌댵극Ω� 磨碼�꾓�碼�귌귋� �듴먛ほ뺊꺳꾗뺊듰��뉃� TAB �듰Ω꺳� SHIFT+TAB 痲碼邈�귌됙꾔됙� �귌댵극Ω� 磨碼�꾓�碼�� 彌�뉃글뉄앨앨됗넨� 魔碼�꾔꾔됙녪됗��뉃� 痲�댷� 卍�댶� �듰� 痲�댶귋へ� 魔�댶앰녩� 魔碼�꾔꾔됙녪됗��뉃� 磨�댵다꾗뉄� �듰Ω꺳� Enter �꺵뉄녬뉄앨꺳됗넨됗�碼 魔碼�꾔꾓Ω녩붕Ω� 魔�댶앰녪됙녪� �귌댶꾔꾔됙녪됗���.'
							},

							{
								name : '魔�뺋앤근됗근꾔됚��댷� 卍�녩꾸꾗뺉다꺵댵넨�',
								legend :
									'Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page.'  // MISSING
							},

							{
								name : '魔�뺋앤근됗근꾔됚��댷� 魔�됙� �끱뉅앨됗� 魔�됗꾸됙끯꾔됙꺳�',
								legend :
									'Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC.'  // MISSING
							},

							{
								name : '魔�뺋앤근됗근꾔됚��댷� 魔�됗꾸됙끯�',
								legend :
									'Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box.'  // MISSING
							},

							{
								name : '魔�뺋앤근됗근꾔됚��댷� 痲�먜꾗먜끱먜녩� �듲댶� 磨碼�꾓�碼��',
								legend :
									'${elementsPathFocus} 磨�먛넨됙꾓넥� 痲�먜꾗먜끱먜녩� �듲댶� 磨碼�꾓�碼�귌귋� �듴먛ほ뺊꺳꾗뺊듰��뉃� TAB �듰Ω꺳� 痲�댷� �듰� 痲�댶귋へ� �꺵먜듲됙녪꺳� 痲�먜꾗먜끱먜녩� 魔碼�꾔꾔됙녪됗��뉃�  SHIFT+TAB �듰Ω꺳� 卍�댶� �듰� 痲�댶귋へ� 痲碼�꾓��됙녪귌� 痲�먜꾗먜끱먜녩� 魔碼�꾔꾔됙녪됗��뉃�  磨�댵다꾗뉄� �듰Ω꺳� Enter �꺵뉄녬뉄앨꺳됗넨됗�碼 魔�뺋앤근됗근꾔됚��댷녩べ됙꺳� 痲�먜꾗먜끱먜녩� 魔碼�꾔꾔됙녪됗���.'
							}
						]
			},
			{
				name : '磨�뉄듰글뉄�',
				items :
						[
							{
								name : '磨�뉄듰글뉄귋べ됙� �듴먜녪됛뗗Ω�',
								legend : '${undo} �녪� 磨�먛넨됚�'
							},
							{
								name : '�귋Ω듰べ됙꾓㎔� 磨�뉄듰글뉄귌�',
								legend : '${redo} �녪� 磨�먛넨됚�'
							},
							{
								name : '魔�댶끯꾔됗べ됗� 磨�뉄듰글뉄귌�',
								legend : '${bold} �녪� 磨�먛넨됚�'
							},
							{
								name : '�듰Ω녩ほ� 磨�뉄듰글뉄귌�',
								legend : '${italic} �녪� 磨�먛넨됚�'
							},
							{
								name : '痲碼卍魔�� 卍�됗꾸됙� 磨�뉄듰글뉄귌�',
								legend : '${underline} �녪� 磨�먛넨됚�'
							},
							{
								name : '痲�뉄꾓Ω녪끮� 磨�뉄듰글뉄귌�',
								legend : '${link} �녪� 磨�먛넨됚�'
							},
							{
								name : '�귌댵극Ω� 磨碼�꾓�碼�� �귋㎔べ꾓㎔� 磨�뉄듰글뉄귌�',
								legend : '${toolbarCollapse} �녪� 磨�먛넨됚�'
							},
							{
								name : '魔�댵넥Ω꾓붜뉃넨됗� �꾓Ω듲됚앱� �녬댵닦뺊녩��댵글댵다�',
								legend : '${a11yHelp} �녪� 磨�먛넨됚�'
							}
						]
			}
		]
	}
});
