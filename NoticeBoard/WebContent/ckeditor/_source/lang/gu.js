/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Gujarati language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['gu'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : '夕겯�夕� 夕잀쳡夕뺖쳨夕룅쳨夕ㅰ쳨 夕뤲ぁ夕욈첒夕�, %1',
	editorHelp : '夕む쳨夕겯쳡夕� ALT 0 夕�夕╆う 夕�夕약첒',

	// ARIA descriptions.
	toolbars	: '夕뤲ぁ奭�夕잀ぐ 夕잀쳜夕� 夕оぞ夕�',
	editor		: '夕겯�夕� 夕잀쳡夕뺖쳨夕룅쳨夕ㅰ쳨 夕뤲ぁ奭�夕잀ぐ',

	// Toolbar buttons without dialogs.
	source			: '夕�奭귖こ 夕뺖쳡 夕む쳨夕겯ぞ夕�夕�夕욈첈 夕╆じ奭띭い夕약さ奭뉋첏',
	newPage			: '夕ⓣさ奭� 夕むぞ夕ⓣ쳛夕�',
	save			: '夕멘쳡夕�',
	preview			: '夕む쳜夕겯쳨夕듀う夕겯쳨夕뜩え',
	cut				: '夕뺖ぞ夕むさ奭곟챴',
	copy			: '夕ⓣ첈夕�',
	paste			: '夕む쳡夕멘쳨夕�',
	print			: '夕む쳨夕겯た夕ⓣ쳨夕�',
	underline		: '夕끶え奭띭ぁ夕겯쳨夕꿋ぞ夕뉋え, 夕ⓣ�夕싟쳡 夕꿋�夕잀�',
	bold			: '夕о쳦夕꿋쳨夕�/夕멘쳨夕むし奭띭첒',
	italic			: '夕뉋첒奭뉋げ夕욈첈, 夕ㅰ쳨夕겯ぞ夕귖じ夕�',
	selectAll		: '夕о첋奭곟챴 夕むじ夕귖う 夕뺖ぐ夕듀쳛夕�',
	removeFormat	: '夕ム쳣夕겯쳨夕�夕� 夕뺖ぞ夕№さ奭곟챴',
	strike			: '夕쎹쳡夕뺖� 夕ⓣぞ夕뽤さ奭곟챴',
	subscript		: '夕뤲첈 夕싟た夕밝쳨夕ⓣえ奭� 夕ⓣ�夕싟쳡 夕뺖ぐ奭뉋げ奭곟챴 夕о�夕쒉쳛夕� 夕싟た夕밝쳨夕�',
	superscript		: '夕뤲첈 夕싟た夕밝쳨夕� 夕됢お夕� 夕뺖ぐ奭뉋げ奭곟챴 夕о�夕쒉쳛夕� 夕싟た夕밝쳨夕�.',
	horizontalrule	: '夕멘ぎ夕멘쳨夕ㅰぐ奭�夕� 夕겯쳡夕뽤ぞ 夕뉋え奭띭じ夕겯쳨夕�/夕╆ぞ夕뽤げ 夕뺖ぐ夕듀�',
	pagebreak		: '夕뉋え奭띭じ夕겯쳨夕� 夕む쳡夕쒉が奭띭ぐ奭뉋첈/夕むぞ夕ⓣぞ夕ⓣ쳡 夕끶げ夕� 夕뺖ぐ夕듀쳛夕�/夕╆ぞ夕뽤げ 夕뺖ぐ夕듀쳛夕�',
	pagebreakAlt		: '夕ⓣさ奭곟챴 夕むぞ夕ⓣ쳛夕�',
	unlink			: '夕꿋た夕귖첈 夕뺖ぞ夕№さ奭�',
	undo			: '夕겯う 夕뺖ぐ夕듀쳛夕�; 夕むす奭뉋げ夕약챴 夕밝い奭� 夕뤲さ奭� 夕멘쳨夕�夕욈い夕� 夕むぞ夕쎹� 夕꿋ぞ夕듀さ奭�',
	redo			: '夕겯た夕□쳜; 夕む첎奭� 夕밝い奭� 夕뤲さ奭� 夕멘쳨夕�夕욈い夕� 夕むぞ夕쎹� 夕꿋ぞ夕듀さ奭�',

	// Common messages and labels.
	common :
	{
		browseServer	: '夕멘ぐ奭띭さ夕� 夕о쳨夕겯ぞ夕됢첐 夕뺖ぐ奭�',
		url				: 'URL',
		protocol		: '夕む쳨夕겯쳦夕잀쳦夕뺖쳣夕�',
		upload			: '夕끶お夕꿋쳦夕�',
		uploadSubmit	: '夕� 夕멘ぐ奭띭さ夕겯え奭� 夕�奭뗠첈夕꿋さ奭곟챴',
		image			: '夕싟た夕ㅰ쳨夕�',
		flash			: '夕ム쳨夕꿋쳟夕�',
		form			: '夕ム쳣夕겯쳨夕�/夕むい奭띭ぐ夕�',
		checkbox		: '夕싟쳡夕� 夕о쳦夕뺖쳨夕�',
		radio			: '夕겯쳡夕□た夕� 夕о첒夕�',
		textField		: '夕잀쳡夕뺖쳨夕멘쳨夕� 夕ム�夕꿋쳨夕�, 夕뜩が奭띭う 夕뺖쳨夕룅쳡夕ㅰ쳨夕�',
		textarea		: '夕잀쳡夕뺖쳨夕멘쳨夕� 夕뤲ぐ夕욈챹, 夕뜩が奭띭う 夕듀た夕멘쳨夕ㅰぞ夕�',
		hiddenField		: '夕쀠쳛夕む쳨夕� 夕뺖쳨夕룅쳡夕ㅰ쳨夕�',
		button			: '夕о첒夕�',
		select			: '夕むじ夕귖う夕쀠� 夕뺖쳨夕룅쳡夕ㅰ쳨夕�',
		imageButton		: '夕싟た夕ㅰ쳨夕� 夕о첒夕�',
		notSet			: '<夕멘쳡夕� 夕ⓣぅ奭�>',
		id				: 'Id',
		name			: '夕ⓣぞ夕�',
		langDir			: '夕�夕약し夕� 夕꿋쳡夕뽤さ夕약え奭� 夕むう奭띭ぇ夕ㅰた',
		langDirLtr		: '夕□ぞ夕о쳡 夕�奭� 夕쒉ぎ夕｀쳡 (LTR)',
		langDirRtl		: '夕쒉ぎ夕｀쳡 夕�奭� 夕□ぞ夕о쳡 (RTL)',
		langCode		: '夕�夕약し夕� 夕뺖쳦夕�',
		longDescr		: '夕듀ぇ夕약ぐ奭� 夕�夕약す夕욈い奭� 夕�夕약첒奭� URL',
		cssClass		: '夕멘쳨夕잀ぞ夕뉋げ-夕뜩�夕� 夕뺖쳨夕꿋ぞ夕�',
		advisoryTitle	: '夕�奭곟첉奭띭く 夕�夕�夕약こ奭곟챴',
		cssStyle		: '夕멘쳨夕잀ぞ夕뉋げ',
		ok				: '夕졷�夕� 夕쎹쳡',
		cancel			: '夕겯う 夕뺖ぐ夕듀쳛夕�',
		close			: '夕о챴夕� 夕뺖ぐ夕듀쳛夕�',
		preview			: '夕쒉쳦夕듀쳛夕�',
		generalTab		: '夕쒉え夕겯げ',
		advancedTab		: '夕끶ぁ奭띭さ夕약え奭띭じ夕�',
		validateNumberFailed : '夕� 夕겯첈夕� 夕녱첈夕□쳦 夕ⓣぅ奭�.',
		confirmNewPage	: '夕멘さ奭� 夕뺖ぞ夕겯쳨夕� 夕듀첊夕겯え奭곟챴 夕ム첈夕겯쳦 夕뽤쳦夕듀ぞ夕� 夕쒉ざ奭�. 夕ㅰぎ夕ⓣ쳡 夕뽤ぞ夕ㅰぐ奭� 夕쎹쳡 夕뺖쳡 夕ㅰぎ夕ⓣ쳡 夕ⓣさ奭곟챴 夕むぞ夕ⓣ쳛夕� 夕뽤쳦夕꿋さ奭곟챴 夕쎹쳡?',
		confirmCancel	: '夕섁ぃ夕� 夕듀た夕뺖げ奭띭お奭� 夕оう夕꿋ぞ夕�夕� 夕쎹쳡. 夕ㅰぎ夕약ぐ奭� 夕� 夕о쳦夕뺖쳨夕룅쳨 夕о챴夕� 夕뺖ぐ夕듀쳛夕� 夕쎹쳡?',
		options			: '夕듀た夕뺖げ奭띭お奭�',
		target			: '夕꿋첈奭띭し奭띭く',
		targetNew		: '夕ⓣさ奭� 夕듀た夕ⓣ쳨夕□쳦 (_blank)',
		targetTop		: '夕됢お夕겯え奭� 夕듀た夕ⓣ쳨夕□쳦 (_top)',
		targetSelf		: '夕뤲첏 夕듀た夕ⓣ쳨夕□쳦 (_self)',
		targetParent	: '夕む쳡夕겯え夕� 夕듀た夕ⓣ쳨夕□쳦 (_parent)',
		langDirLTR		: '夕□ぞ夕о쳡 夕�奭� 夕쒉ぎ夕｀쳡 (LTR)',
		langDirRTL		: '夕쒉ぎ夕｀쳡 夕�奭� 夕□ぞ夕о쳡 (RTL)',
		styles			: '夕뜩쳢夕꿋�',
		cssClasses		: '夕뜩쳢夕꿋� 夕뺖げ夕약じ奭�夕�',
		width			: '夕むす奭뗠こ夕약챻',
		height			: '夕듺챴夕싟ぞ夕�',
		align			: '夕꿋ぞ夕뉋え夕╆쳦夕겯�夕�夕약챴 夕쀠쳦夕졷さ夕듀쳛夕�',
		alignLeft		: '夕□ぞ夕о� 夕оぞ夕쒉쳛 夕쀠쳦夕졷さ夕듀쳛夕�',
		alignRight		: '夕쒉ぎ夕｀�',
		alignCenter		: '夕�夕㏅쳨夕� 夕멘쳡夕ⓣ쳨夕잀ぐ',
		alignTop		: '夕됢お夕�',
		alignMiddle		: '夕듀첍奭띭첍奭�',
		alignBottom		: '夕ⓣ�夕싟쳡',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '夕됢챴夕싟ぞ夕� 夕뤲첈 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
		invalidWidth	: '夕む쳦夕밝こ 夕� 夕뤲첈 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
		invalidCssLength	: '"%1" 夕ⓣ� 夕듀쳡夕꿋쳨夕�奭� 夕뤲첈 夕む쳦夕멘�夕잀�夕� 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂 夕끶ぅ夕듀ぞ CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc) 夕듀첊夕�.',
		invalidHtmlLength	: '"%1" 夕ⓣ� 夕듀쳡夕꿋쳨夕�奭� 夕뤲첈 夕む쳦夕멘�夕잀�夕� 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂 夕끶ぅ夕듀ぞ HTML measurement unit (px or %) 夕듀첊夕�.',
		invalidInlineStyle	: '夕댽え夕꿋ぞ夕댽え  夕멘쳨夕잀ぞ夕댽げ 夕ⓣ� 夕듀쳡夕꿋쳨夕�奭�  "name : value" 夕ⓣぞ 夕ム쳦夕겯쳨夕�奭뉋첒 夕�夕약챴 夕밝쳦夕듀� 夕쒉쳦夕댽첂, 夕듀첍奭띭첍奭� 夕멘쳡夕�奭�-夕뺖쳦夕꿋쳦夕� 夕쒉쳦夕댽첂.',
		cssLengthTooltip	: '夕むた夕뺖쳨夕룅쳨夕꿋쳨 夕ⓣ쳦 夕녱챴夕뺖ぁ奭� CSS unit (px, %, in, cm, mm, em, ex, pt, or pc) 夕�夕약챴 夕ⓣぞ夕뽤쳦.',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, 夕ⓣぅ奭� 夕�夕녀い奭곟챴</span>'
	},

	contextmenu :
	{
		options : '夕뺖쳦夕ⓣ쳨夕ㅰ쳡夕뺖쳨夕룅쳨夕ㅰ쳨 夕�奭뉋え奭곟え夕� 夕듀た夕뺖げ奭띭お奭�'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '夕듀た夕뜩た夕룅쳨夕� 夕끶첈奭띭し夕� 夕뉋え奭띭じ夕겯쳨夕�/夕╆ぞ夕뽤げ 夕뺖ぐ夕듀쳛夕�',
		title		: '夕멘쳨夕む쳡夕뜩た夕끶げ 夕듀た夕뜩た夕룅쳨夕� 夕끶첈奭띭し夕� 夕むじ夕귖う 夕뺖ぐ奭�',
		options : '夕멘쳨夕む쳡夕뜩た夕끶げ 夕뺖ぐ奭뉋첈奭띭첒夕겯え夕� 夕듀た夕뺖げ奭띭お奭�'
	},

	// Link dialog.
	link :
	{
		toolbar		: '夕꿋た夕귖첈 夕뉋え奭띭じ夕겯쳨夕�/夕╆ぞ夕뽤げ 夕뺖ぐ夕듀�',
		other 		: '<other> <夕끶え奭띭く>',
		menu		: ' 夕꿋た夕귖첈 夕뤲ぁ夕욈첒/夕�夕약챴 夕ム쳡夕겯か夕약ぐ 夕뺖ぐ夕듀쳦',
		title		: '夕꿋た夕귖첈',
		info		: '夕꿋た夕귖첈 夕뉋え奭띭か奭� 夕잀쳟夕�',
		target		: '夕잀ぞ夕겯쳨夕쀠쳡夕�/夕꿋첈奭띭し奭띭く',
		upload		: '夕끶お夕꿋쳦夕�',
		advanced	: '夕끶ぁ奭띭さ夕약え奭띭じ夕�',
		type		: '夕꿋た夕귖첈 夕む쳨夕겯첈夕약ぐ',
		toUrl		: 'URL',
		toAnchor	: '夕� 夕む쳡夕쒉え奭� 夕띭챴夕뺖ぐ',
		toEmail		: '夕�-夕�奭뉋げ',
		targetFrame		: '<夕ム쳨夕겯쳡夕�>',
		targetPopup		: '<夕む쳣夕�-夕끶お 夕듀た夕ⓣ쳨夕□쳦>',
		targetFrameName	: '夕잀ぞ夕겯쳨夕쀠쳡夕� 夕ム쳨夕겯쳡夕� 夕ⓣ쳛夕� 夕ⓣぞ夕�',
		targetPopupName	: '夕む쳣夕�-夕끶お 夕듀た夕ⓣ쳨夕□쳦 夕ⓣ쳛夕� 夕ⓣぞ夕�',
		popupFeatures	: '夕む쳣夕�-夕끶お 夕듀た夕ⓣ쳨夕□쳦 夕ム�夕싟ぐ夕멘쳟',
		popupResizable	: '夕겯�夕멘ぞ夕댽첐夕뤲が夕�',
		popupStatusBar	: '夕멘쳨夕잀쳟夕잀じ 夕оぞ夕�',
		popupLocationBar: '夕꿋쳦夕뺖쳡夕뜩え 夕оぞ夕�',
		popupToolbar	: '夕잀쳜夕� 夕оぞ夕�',
		popupMenuBar	: '夕�奭뉋え奭띭く奭� 夕оぞ夕�',
		popupFullScreen	: '夕ム쳛夕� 夕멘쳨夕뺖쳨夕겯�夕� (IE)',
		popupScrollBars	: '夕멘쳨夕뺖쳨夕겯쳦夕� 夕оぞ夕�',
		popupDependent	: '夕□た夕む쳡夕ⓣ쳨夕□え奭띭첒 (Netscape)',
		popupLeft		: '夕□ぞ夕о� 夕оぞ夕쒉쳛',
		popupTop		: '夕쒉ぎ夕｀� 夕оぞ夕쒉쳛',
		id				: 'Id',
		langDir			: '夕�夕약し夕� 夕꿋쳡夕뽤さ夕약え奭� 夕むう奭띭ぇ夕ㅰた',
		langDirLTR		: '夕□ぞ夕о쳡 夕�奭� 夕쒉ぎ夕｀쳡 (LTR)',
		langDirRTL		: '夕쒉ぎ夕｀쳡 夕�奭� 夕□ぞ夕о쳡 (RTL)',
		acccessKey		: '夕띭첈奭띭じ奭뉋じ 夕뺖�',
		name			: '夕ⓣぞ夕�',
		langCode			: '夕�夕약し夕� 夕꿋쳡夕뽤さ夕약え奭� 夕むう奭띭ぇ夕ㅰた',
		tabIndex			: '夕잀쳟夕� 夕뉋え奭띭ぁ奭뉋첈奭띭じ',
		advisoryTitle		: '夕�奭곟첉奭띭く 夕�夕�夕약こ奭곟챴',
		advisoryContentType	: '夕�奭곟첉奭띭く 夕뺖え奭띭첒奭뉋え奭띭첒 夕む쳨夕겯첈夕약ぐ',
		cssClasses		: '夕멘쳨夕잀ぞ夕뉋げ-夕뜩�夕� 夕뺖쳨夕꿋ぞ夕�',
		charset			: '夕꿋た夕귖첈 夕겯た夕멘쳣夕겯쳨夕� 夕뺖쳟夕겯た夕뺖쳨夕잀ぐ 夕멘쳡夕�',
		styles			: '夕멘쳨夕잀ぞ夕뉋げ',
		rel			: '夕멘챴夕о챴夕㏅え奭� 夕멘쳨夕�夕욈い夕�',
		selectAnchor		: '夕띭챴夕뺖ぐ 夕むじ夕귖う 夕뺖ぐ奭�',
		anchorName		: '夕띭챴夕뺖ぐ 夕ⓣぞ夕�夕�奭� 夕むじ夕귖う 夕뺖ぐ奭�',
		anchorId			: '夕띭챴夕뺖ぐ 夕뤲げ夕욈ぎ夕ⓣ쳨夕� Id 夕�奭� 夕むじ夕귖う 夕뺖ぐ奭�',
		emailAddress		: '夕�-夕�奭뉋げ 夕멘ぐ夕ⓣぞ夕�奭곟챴',
		emailSubject		: '夕�-夕�奭뉋げ 夕듀た夕룅く',
		emailBody		: '夕멘챴夕╆쳡夕�',
		noAnchors		: '(夕□쳣夕뺖쳨夕�奭곟ぎ夕ⓣ쳨夕잀ぎ夕약챴 夕띭챴夕뺖ぐ夕ⓣ� 夕멘챴夕뽤쳨夕�夕�)',
		noUrl			: '夕꿋た夕귖첈  URL 夕잀ぞ夕뉋お 夕뺖ぐ奭�',
		noEmail			: '夕�-夕�奭뉋げ 夕멘ぐ夕ⓣぞ夕�奭곟챴 夕잀ぞ夕뉋お 夕뺖ぐ奭�'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '夕띭챴夕뺖ぐ 夕뉋え奭띭じ夕겯쳨夕�/夕╆ぞ夕뽤げ 夕뺖ぐ夕듀�',
		menu		: '夕띭챴夕뺖ぐ夕ⓣぞ 夕쀠쳛夕�',
		title		: '夕띭챴夕뺖ぐ夕ⓣぞ 夕쀠쳛夕�',
		name		: '夕띭챴夕뺖ぐ夕ⓣ쳛夕� 夕ⓣぞ夕�',
		errorName	: '夕띭챴夕뺖ぐ夕ⓣ쳛夕� 夕ⓣぞ夕� 夕잀ぞ夕댽お 夕뺖ぐ奭�',
		remove		: '夕멘쳨夕�夕욈ぐ 夕ⓣ첈夕겯さ奭곟챴'
	},

	// List style dialog
	list:
	{
		numberedTitle		: '夕녱챴夕뺖ぁ夕약え夕� 夕꿋�夕멘쳨夕잀え夕� 夕쀠쳛夕�',
		bulletedTitle		: '夕о쳛夕꿋쳡夕잀쳡夕� 夕꿋�夕멘쳨夕잀え夕� 夕쀠쳛夕�',
		type				: '夕む쳨夕겯첈夕약ぐ',
		start				: '夕뜩ぐ奭� 夕뺖ぐ夕듀쳛夕�',
		validateStartNumber				:'夕꿋�夕멘쳨夕잀え夕� 夕멘ぐ奭곟챹夕ㅰえ奭� 夕녱챴夕뺖ぁ奭� 夕む쳛夕겯쳦 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
		circle				: '夕듀ぐ奭띭い奭곟こ',
		disc				: '夕□た夕멘쳨夕�',
		square				: '夕싟쳦夕겯じ',
		none				: '夕뺖じ奭� ',
		notset				: '<夕멘쳡夕� 夕ⓣぅ奭�>',
		armenian			: '夕끶ぐ夕�奭뉋え夕욈く夕� 夕녱챴夕뺖ぁ夕� 夕むう奭띭ぇ夕ㅰた',
		georgian			: '夕쀠쳡夕볙ぐ奭띭첊夕욈く夕� 夕녱챴夕뺖ぁ夕� 夕むう奭띭ぇ夕ㅰた (an, ban, gan, etc.)',
		lowerRoman			: '夕겯쳦夕�夕� 夕ⓣぞ夕ⓣぞ (i, ii, iii, iv, v, etc.)',
		upperRoman			: '夕겯쳦夕�夕� 夕�奭뗠첒夕� (I, II, III, IV, V, etc.)',
		lowerAlpha			: '夕녱げ奭띭か夕� 夕ⓣぞ夕ⓣぞ (a, b, c, d, e, etc.)',
		upperAlpha			: '夕녱げ奭띭か夕� 夕�奭뗠첒夕� (A, B, C, D, E, etc.)',
		lowerGreek			: '夕쀠쳨夕겯�夕� 夕ⓣぞ夕ⓣぞ (alpha, beta, gamma, etc.)',
		decimal				: '夕녱챴夕뺖ぁ夕� (1, 2, 3, etc.)',
		decimalLeadingZero	: '夕멘쳛夕ⓣ쳨夕� 夕녱첊夕� 夕녱챴夕뺖ぁ夕� (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '夕뜩쳦夕㏅さ奭곟챴 夕끶え奭� 夕оう夕꿋さ奭곟챴',
		find				: '夕뜩쳦夕㏅さ奭곟챴',
		replace				: '夕겯た夕む쳨夕꿋쳡夕�/夕оう夕꿋さ奭곟챴',
		findWhat			: '夕� 夕뜩쳦夕㏅쳦',
		replaceWith			: '夕녱え夕약ぅ奭� 夕оう夕꿋쳦',
		notFoundMsg			: '夕ㅰぎ奭� 夕뜩쳦夕㏅쳡夕꿋� 夕잀쳡夕뺖쳨夕멘쳨夕� 夕ⓣぅ奭� 夕�夕녀�',
		findOptions			: '夕듀�夕뺖げ奭띭お 夕뜩쳦夕㏅쳦',
		matchCase			: '夕뺖쳡夕� 夕멘ぐ夕뽤ぞ 夕겯ぞ夕뽤쳦',
		matchWord			: '夕о첋夕� 夕뜩が奭띭う 夕멘ぐ夕뽤ぞ 夕겯ぞ夕뽤쳦',
		matchCyclic			: '夕멘ぐ夕뽤ぞ夕듀さ夕� 夕оぇ夕�',
		replaceAll			: '夕о첋夕� 夕оう夕꿋� ',
		replaceSuccessMsg	: '%1 夕ム쳡夕겯か夕약ぐ奭� 夕оぞ夕╆げ夕약く夕� 夕쎹쳡.'
	},

	// Table Dialog
	table :
	{
		toolbar		: '夕잀쳡夕оげ, 夕뺖쳦夕졷쳦',
		title		: '夕잀쳡夕оげ, 夕뺖쳦夕졷ぞ夕ⓣ쳛夕� 夕�夕�夕약こ奭곟챴',
		menu		: '夕잀쳡夕оげ, 夕뺖쳦夕졷ぞ夕ⓣ쳛夕� 夕�夕�夕약こ奭곟챴',
		deleteTable	: '夕뺖쳦夕졷쳦 夕□た夕꿋�夕�/夕뺖ぞ夕№� 夕ⓣぞ夕뽤さ奭곟챴',
		rows		: '夕む챴夕뺖쳨夕ㅰた夕ⓣぞ 夕뽤ぞ夕ⓣぞ',
		columns		: '夕뺖쳣夕꿋ぎ/夕듺き奭� 夕뺖첒夕약ぐ',
		border		: '夕뺖쳦夕졷ぞ夕ⓣ� 夕оぞ夕쒉쳛(夕о쳦夕겯쳨夕□ぐ) 夕멘ぞ夕뉋첐',
		widthPx		: '夕むた夕뺖じ夕�',
		widthPc		: '夕む쳨夕겯い夕욈ざ夕�',
		widthUnit	: '夕む쳦夕밝ぞ夕꿋ぞ夕� 夕뤲첈夕�',
		cellSpace	: '夕멘쳡夕� 夕끶챴夕ㅰぐ',
		cellPad		: '夕멘쳡夕� 夕む쳟夕□た夕귖첊',
		caption		: '夕�夕�夕약こ奭곟챴/夕뺖쳟夕む쳨夕뜩え ',
		summary		: '夕잀쳜夕귖첈奭� 夕뤲す奭뉋さ夕약げ',
		headers		: '夕�夕�夕약こ夕�',
		headersNone		: '夕ⓣぅ奭� ',
		headersColumn	: '夕むす奭뉋げ奭� 夕듺き奭� 夕뺖첒夕약ぐ',
		headersRow		: '夕むす奭뉋げ奭�  夕뺖첒夕약ぐ',
		headersBoth		: '夕о쳡夕듀쳛夕�',
		invalidRows		: '夕녱ぁ奭� 夕뺖첒夕약ぐ, 0 夕뺖ぐ夕ㅰぞ 夕듀ぇ夕약ぐ奭� 夕밝쳦夕듀� 夕쒉쳦夕댽첂.',
		invalidCols		: '夕됢き奭� 夕뺖첒夕약ぐ, 0 夕뺖ぐ夕ㅰぞ 夕듀ぇ夕약ぐ奭� 夕밝쳦夕듀� 夕쒉쳦夕댽첂.',
		invalidBorder	: '夕о쳦夕겯쳨夕□ぐ 夕뤲첈 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂',
		invalidWidth	: '夕잀쳡夕оげ夕ⓣ� 夕む쳦夕밝げ夕약챻 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
		invalidHeight	: '夕잀쳡夕оげ夕ⓣ� 夕듺챴夕싟ぞ夕� 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
		invalidCellSpacing	: '夕멘쳡夕� 夕듀첍奭띭첍奭뉋え奭� 夕쒉첊奭띭く夕� 夕멘쳛夕ⓣ쳨夕� 夕뺖ぐ夕ㅰぞ 夕듀ぇ夕약ぐ奭� 夕밝쳦夕듀� 夕쒉쳦夕댽첂.',
		invalidCellPadding	: '夕멘쳡夕꿋え奭� 夕끶챴夕╆ぐ夕ⓣ� 夕쒉첊奭띭く夕� 夕멘쳛夕ⓣ쳨夕� 夕뺖ぐ夕ㅰぞ 夕듀ぇ夕약ぐ奭� 夕밝쳦夕듀� 夕쒉쳦夕댽첂.',

		cell :
		{
			menu			: '夕뺖쳦夕룅え夕� 夕뽤ぞ夕ⓣぞ',
			insertBefore	: '夕むす奭뉋げ夕약챴 夕뺖쳦夕� 夕됢ぎ奭뉋ぐ夕듀쳦',
			insertAfter		: '夕む첎奭� 夕뺖쳦夕� 夕됢ぎ奭뉋ぐ夕듀쳦',
			deleteCell		: '夕뺖쳦夕� 夕□た夕꿋�夕�/夕뺖ぞ夕№� 夕ⓣぞ夕뽤さ奭�',
			merge			: '夕뺖쳦夕� 夕�奭뉋첊夕� 夕뺖ぐ夕듀ぞ',
			mergeRight		: '夕쒉ぎ夕｀� 夕оぞ夕쒉쳛 夕�奭뉋첊夕� 夕뺖ぐ夕듀ぞ',
			mergeDown		: '夕ⓣ�夕싟쳡 夕�奭뉋첊夕� 夕뺖ぐ夕듀ぞ',
			splitHorizontal	: '夕뺖쳦夕룅え奭� 夕멘ぎ夕멘쳨夕ㅰぐ奭�夕� 夕듀た夕�夕약첏夕� 夕뺖ぐ夕듀쳛夕�',
			splitVertical	: '夕뺖쳦夕룅え奭� 夕멘�夕㏅쳛夕� 夕ⓣ쳡 夕듺き奭곟챴 夕듀た夕�夕약첏夕� 夕뺖ぐ夕듀쳛夕�',
			title			: '夕멘쳡夕꿋え夕� 夕쀠쳛夕�',
			cellType		: '夕멘쳡夕꿋え奭� 夕む쳨夕겯첈夕약ぐ',
			rowSpan			: '夕녱ぁ奭� 夕뺖첒夕약ぐ夕ⓣ� 夕쒉첊奭띭く夕�',
			colSpan			: '夕듺き奭� 夕뺖い夕약ぐ夕ⓣ� 夕쒉첊奭띭く夕�',
			wordWrap		: '夕듀ぐ奭띭ぁ 夕겯쳡夕�',
			hAlign			: '夕멘お夕약첒 夕꿋ぞ夕댽え夕╆쳦夕겯�',
			vAlign			: '夕듺き奭� 夕꿋ぞ夕댽え夕╆쳦夕겯�',
			alignBaseline	: '夕оじ奭� 夕꿋ぞ夕댽え',
			bgColor			: '夕むぞ夕쎹ぞ夕녀え奭� 夕겯챴夕�',
			borderColor		: '夕о쳦夕겯쳨夕□쳡夕� 夕겯챴夕�',
			data			: '夕멘쳨夕듀�夕뺖쳝夕� 夕�夕약す夕욈い奭�',
			header			: '夕�夕�夕약こ奭곟챴',
			yes				: '夕밝ぞ',
			no				: '夕ⓣぞ',
			invalidWidth	: '夕멘쳡夕꿋え奭� 夕む쳦夕밝げ夕약챻 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
			invalidHeight	: '夕멘쳡夕꿋え奭� 夕듺챴夕싟ぞ夕� 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
			invalidRowSpan	: '夕겯쳦 夕멘쳨夕むぞ夕� 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
			invalidColSpan	: '夕뺖쳦夕꿋ぎ 夕멘쳨夕むぞ夕� 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
			chooseColor		: '夕むじ夕귖う 夕뺖ぐ夕듀쳛夕�'
		},

		row :
		{
			menu			: '夕む챴夕뺖쳨夕ㅰた夕ⓣぞ 夕뽤ぞ夕ⓣぞ',
			insertBefore	: '夕むす奭뉋げ夕약챴 夕む챴夕뺖쳨夕ㅰた 夕됢ぎ奭뉋ぐ夕듀�',
			insertAfter		: '夕む첎奭� 夕む챴夕뺖쳨夕ㅰた 夕됢ぎ奭뉋ぐ夕듀�',
			deleteRow		: '夕む챴夕뺖쳨夕ㅰた夕� 夕□た夕꿋�夕�/夕뺖ぞ夕№� 夕ⓣぞ夕뽤さ奭�'
		},

		column :
		{
			menu			: '夕뺖쳣夕꿋ぎ/夕듺き奭� 夕뺖첒夕약ぐ',
			insertBefore	: '夕むす奭뉋げ夕약챴 夕뺖쳣夕꿋ぎ/夕듺き奭� 夕뺖첒夕약ぐ 夕됢ぎ奭뉋ぐ夕듀�',
			insertAfter		: '夕む첎奭� 夕뺖쳣夕꿋ぎ/夕듺き奭� 夕뺖첒夕약ぐ 夕됢ぎ奭뉋ぐ夕듀�',
			deleteColumn	: '夕뺖쳣夕꿋ぎ/夕듺き奭� 夕뺖첒夕약ぐ 夕□た夕꿋�夕�/夕뺖ぞ夕№� 夕ⓣぞ夕뽤さ奭�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '夕о첒夕ⓣえ夕� 夕쀠쳛夕�',
		text		: '夕잀쳡夕뺖쳨夕멘쳨夕� (夕듀쳟夕꿋쳨夕�奭�)',
		type		: '夕む쳨夕겯첈夕약ぐ',
		typeBtn		: '夕о첒夕�',
		typeSbm		: '夕멘が奭띭ぎ夕욈첒',
		typeRst		: '夕겯た夕멘쳡夕�'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '夕싟쳡夕� 夕о쳦夕뺖쳨夕� 夕쀠쳛夕�',
		radioTitle	: '夕겯쳡夕□た夕� 夕о첒夕ⓣえ夕� 夕쀠쳛夕�',
		value		: '夕듀쳟夕꿋쳨夕�奭�',
		selected	: '夕멘た夕꿋쳡夕뺖쳨夕잀쳡夕�'
	},

	// Form Dialog.
	form :
	{
		title		: '夕ム쳣夕겯쳨夕�/夕むい奭띭ぐ夕뺖え夕� 夕쀠쳛夕�',
		menu		: '夕ム쳣夕겯쳨夕�/夕むい奭띭ぐ夕뺖え夕� 夕쀠쳛夕�',
		action		: '夕뺖쳨夕겯た夕�夕�',
		method		: '夕むう奭띭ぇ夕ㅰた',
		encoding	: '夕끶え奭띭첈奭뗠ぁ奭�夕ⓣ쳨夕�'
	},

	// Select Field Dialog.
	select :
	{
		title		: '夕むじ夕귖う夕쀠� 夕뺖쳨夕룅쳡夕ㅰ쳨夕겯え夕� 夕쀠쳛夕�',
		selectInfo	: '夕멘쳜夕싟え夕�',
		opAvail		: '夕됢お夕꿋が奭띭ぇ 夕듀た夕뺖げ奭띭お',
		value		: '夕듀쳟夕꿋쳨夕�奭�',
		size		: '夕멘ぞ夕뉋첐',
		lines		: '夕꿋�夕잀�夕�',
		chkMulti	: '夕뤲첈夕�奭� 夕듀ぇ夕약ぐ奭� 夕むじ夕귖う 夕뺖ぐ奭� 夕뜩첈奭�',
		opText		: '夕잀쳡夕뺖쳨夕멘쳨夕�',
		opValue		: '夕듀쳟夕꿋쳨夕�奭�',
		btnAdd		: '夕됢ぎ奭뉋ぐ夕듀쳛夕�',
		btnModify	: '夕оう夕꿋さ奭곟챴',
		btnUp		: '夕됢お夕�',
		btnDown		: '夕ⓣ�夕싟쳡',
		btnSetValue : '夕むじ夕귖う 夕뺖ぐ夕꿋� 夕듀쳟夕꿋쳨夕�奭� 夕멘쳡夕� 夕뺖ぐ奭�',
		btnDelete	: '夕겯う 夕뺖ぐ夕듀쳛夕�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '夕잀쳡夕뺖쳨夕멘쳨夕� 夕뤲챸夕겯た夕�, 夕뜩が奭띭う 夕듀た夕멘쳨夕ㅰぞ夕겯え夕� 夕쀠쳛夕�',
		cols		: '夕뺖쳣夕꿋ぎ/夕듺き奭� 夕뺖첒夕약ぐ',
		rows		: '夕む챴夕뺖쳨夕ㅰた夕�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '夕잀쳡夕뺖쳨夕멘쳨夕� 夕ム�夕꿋쳨夕�, 夕뜩が奭띭う 夕뺖쳨夕룅쳡夕ㅰ쳨夕겯え夕� 夕쀠쳛夕�',
		name		: '夕ⓣぞ夕�',
		value		: '夕듀쳟夕꿋쳨夕�奭�',
		charWidth	: '夕뺖쳡夕겯쳡夕뺖쳨夕잀ぐ夕ⓣ� 夕むす奭뗠こ夕약챻',
		maxChars	: '夕끶ぇ夕욈첈夕ㅰぎ 夕뺖쳡夕겯쳡夕뺖쳨夕잀ぐ',
		type		: '夕잀ぞ夕뉋お',
		typeText	: '夕잀쳡夕뺖쳨夕멘쳨夕�',
		typePass	: '夕むぞ夕멘さ夕겯쳨夕�'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '夕쀠쳛夕む쳨夕� 夕뺖쳨夕룅쳡夕ㅰ쳨夕겯え夕� 夕쀠쳛夕�',
		name	: '夕ⓣぞ夕�',
		value	: '夕듀쳟夕꿋쳨夕�奭�'
	},

	// Image Dialog.
	image :
	{
		title		: '夕싟た夕ㅰ쳨夕겯え夕� 夕쀠쳛夕�',
		titleButton	: '夕싟た夕ㅰ쳨夕� 夕о첒夕ⓣえ夕� 夕쀠쳛夕�',
		menu		: '夕싟た夕ㅰ쳨夕겯え夕� 夕쀠쳛夕�',
		infoTab		: '夕싟た夕ㅰ쳨夕� 夕ⓣ� 夕쒉ぞ夕｀첈夕약ぐ奭�',
		btnUpload	: '夕� 夕멘ぐ奭띭さ夕겯え奭� 夕�奭뗠첈夕꿋さ奭곟챴',
		upload		: '夕끶お夕꿋쳦夕�',
		alt			: '夕묂げ奭띭첒夕겯쳨夕ⓣ첒 夕잀쳡夕뺖쳨夕멘쳨夕�',
		lockRatio	: '夕꿋쳣夕� 夕쀠쳛夕｀쳦夕ㅰ쳨夕ㅰぐ',
		resetSize	: '夕겯�夕멘쳡夕� 夕멘ぞ夕뉋첐',
		border		: '夕о쳦夕겯쳨夕□ぐ',
		hSpace		: '夕멘ぎ夕멘쳨夕ㅰぐ奭�夕� 夕쒉첊奭띭く夕�',
		vSpace		: '夕꿋챴夕оぐ奭귖お 夕쒉첊奭띭く夕�',
		alertUrl	: '夕싟た夕ㅰ쳨夕겯え奭� URL 夕잀ぞ夕뉋お 夕뺖ぐ奭�',
		linkTab		: '夕꿋た夕귖첈',
		button2Img	: '夕ㅰぎ夕약ぐ奭� 夕댽ぎ奭뉋첏 夕о첒夕ⓣえ奭� 夕멘ぞ夕╆� 夕댽ぎ奭뉋첏夕�夕약챴 夕оう夕꿋さ奭곟챴 夕쎹쳡.',
		img2Button	: '夕ㅰぎ夕약ぐ奭� 夕멘ぞ夕╆� 夕댽ぎ奭뉋첏夕ⓣ쳡 夕댽ぎ奭뉋첏 夕о첒夕ⓣぎ夕약챴 夕оう夕꿋さ奭곟챴 夕쎹쳡.',
		urlMissing	: '夕댽ぎ奭뉋첏夕ⓣ� 夕�奭귖こ URL 夕쎹쳡 夕ⓣす奭�.',
		validateBorder	: '夕о쳦夕겯쳨夕□쳡夕� 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
		validateHSpace	: 'HSpace夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
		validateVSpace	: 'VSpace 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂. '
	},

	// Flash Dialog
	flash :
	{
		properties		: '夕ム쳨夕꿋쳟夕뜩え夕� 夕쀠쳛夕�',
		propertiesTab	: '夕쀠쳛夕�',
		title			: '夕ム쳨夕꿋쳟夕� 夕쀠쳛夕�',
		chkPlay			: '夕묂첒奭�/夕멘쳨夕듀く夕� 夕む쳨夕꿋쳡',
		chkLoop			: '夕꿋쳜夕�',
		chkMenu			: '夕ム쳨夕꿋쳟夕� 夕�奭뉋え奭띭く奭� 夕ⓣ쳦 夕む쳨夕겯く奭뗠첊 夕뺖ぐ奭�',
		chkFull			: '夕ム쳜夕� 夕멘쳨夕뺖쳨夕겯�夕� 夕뺖ぐ夕듀쳛夕�',
 		scale			: '夕멘쳨夕뺖쳡夕�',
		scaleAll		: '夕멘쳨夕뺖쳡夕� 夕볙げ/夕оぇ奭� 夕оい夕약さ奭�',
		scaleNoBorder	: '夕멘쳨夕뺖쳡夕� 夕о쳦夕겯쳨夕□ぐ 夕듀첊夕�',
		scaleFit		: '夕멘쳨夕뺖쳡夕� 夕뤲첈夕╆ぎ 夕ム�夕�',
		access			: '夕멘쳨夕뺖쳨夕겯�夕む쳨夕� 夕뤲첈奭띭じ奭뉋じ',
		accessAlways	: '夕밝ぎ奭뉋ざ夕약챴',
		accessSameDomain: '夕뤲첏 夕□쳦夕�奭뉋え',
		accessNever		: '夕ⓣす奭�',
		alignAbsBottom	: 'Abs 夕ⓣ�夕싟쳡',
		alignAbsMiddle	: 'Abs 夕됢お夕�',
		alignBaseline	: '夕녱ぇ夕약ぐ 夕꿋�夕잀�',
		alignTextTop	: '夕잀쳡夕뺖쳨夕멘쳨夕� 夕됢お夕�',
		quality			: '夕쀠쳛夕｀ぇ夕겯쳨夕�',
		qualityBest		: '夕뜩쳨夕겯쳡夕룅쳨夕�',
		qualityHigh		: '夕듺챴夕싟쳛夕�',
		qualityAutoHigh	: '夕볙첒奭� 夕듺챴夕싟쳛夕�',
		qualityMedium	: '夕�夕㏅쳨夕�夕�',
		qualityAutoLow	: '夕볙첒奭� 夕ⓣ�夕싟쳛夕�',
		qualityLow		: '夕ⓣ�夕싟쳛夕�',
		windowModeWindow: '夕듀た夕ⓣ쳨夕□쳦',
		windowModeOpaque: '夕끶お夕약ぐ夕╆ぐ奭띭ざ夕�',
		windowModeTransparent : '夕むぞ夕겯う夕겯쳨夕뜩첈',
		windowMode		: '夕듀た夕ⓣ쳨夕□쳦 夕�奭뗠ぁ',
		flashvars		: '夕ムげ奭뉋ざ 夕ⓣぞ 夕듀た夕뺖げ奭띭お奭�',
		bgcolor			: '夕о쳟夕뺖첊奭띭ぐ夕약챼夕ⓣ쳨夕� 夕겯챴夕�,',
		hSpace			: '夕멘ぎ夕멘쳨夕ㅰぐ奭�夕� 夕쒉첊奭띭く夕�',
		vSpace			: '夕꿋챴夕оぐ奭귖お 夕쒉첊奭띭く夕�',
		validateSrc		: '夕꿋た夕귖첈  URL 夕잀ぞ夕뉋お 夕뺖ぐ奭�',
		validateHSpace	: 'HSpace 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.',
		validateVSpace	: 'VSpace 夕녱챴夕뺖ぁ奭� 夕밝쳦夕듀쳦 夕쒉쳦夕댽첂.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '夕쒉쳦夕□ぃ奭� (夕멘쳨夕む쳡夕꿋た夕귖첊) 夕ㅰお夕약じ夕듀�',
		title			: '夕멘쳨夕む쳡夕� ',
		notAvailable	: '夕�夕약か 夕뺖ぐ夕뜩쳦, 夕� 夕멘쳛夕듀た夕㏅ぞ 夕됢お夕꿋が奭띭ぇ 夕ⓣぅ奭�',
		errorLoading	: '夕멘ぐ奭띭さ夕욈じ 夕뤲お奭띭げ奭�夕뺖쳡夕뜩え 夕꿋쳦夕� 夕ⓣぅ奭� 夕�: %s.',
		notInDic		: '夕뜩が奭띭う夕뺖쳦夕뜩ぎ夕약챴 夕ⓣぅ奭�',
		changeTo		: '夕녱え夕약ぅ奭� 夕оう夕꿋さ奭곟챴',
		btnIgnore		: '夕뉋첊奭띭え奭뗠ぐ/夕끶さ夕쀠ぃ夕ⓣぞ 夕뺖ぐ夕듀�',
		btnIgnoreAll	: '夕оぇ夕약え奭� 夕뉋첊奭띭え奭뗠ぐ/夕끶さ夕쀠ぃ夕ⓣぞ 夕뺖ぐ夕듀�',
		btnReplace		: '夕оう夕꿋さ奭곟챴',
		btnReplaceAll	: '夕оぇ夕� 夕оう夕꿋� 夕뺖ぐ奭�',
		btnUndo			: '夕끶え奭띭ぁ奭�',
		noSuggestions	: '- 夕뺖챺 夕멘첏奭뉋ざ夕� 夕ⓣぅ奭� -',
		progress		: '夕뜩が奭띭う夕ⓣ� 夕쒉쳦夕□ぃ奭�/夕멘쳨夕む쳡夕� 夕싟쳡夕� 夕싟ぞ夕꿋쳛 夕쎹쳡...',
		noMispell		: '夕뜩が奭띭う夕ⓣ� 夕쒉쳦夕□ぃ奭�/夕멘쳨夕む쳡夕� 夕싟쳡夕� 夕む쳜夕겯쳨夕�: 夕뽤쳦夕잀� 夕쒉쳦夕□ぃ奭� 夕�夕녀� 夕ⓣぅ奭�',
		noChanges		: '夕뜩が奭띭う夕ⓣ� 夕쒉쳦夕□ぃ奭�/夕멘쳨夕む쳡夕� 夕싟쳡夕� 夕む쳜夕겯쳨夕�: 夕뤲첈夕むぃ 夕뜩が奭띭う 夕оう夕꿋く奭� 夕ⓣぅ奭�',
		oneChange		: '夕뜩が奭띭う夕ⓣ� 夕쒉쳦夕□ぃ奭�/夕멘쳨夕む쳡夕� 夕싟쳡夕� 夕む쳜夕겯쳨夕�: 夕뤲첈 夕뜩が奭띭う 夕оう夕꿋く奭� 夕쎹쳡',
		manyChanges		: '夕뜩が奭띭う夕ⓣ� 夕쒉쳦夕□ぃ奭�/夕멘쳨夕む쳡夕� 夕싟쳡夕� 夕む쳜夕겯쳨夕�: %1 夕뜩が奭띭う 夕оう夕꿋く夕� 夕쎹쳡',
		ieSpellDownload	: '夕멘쳨夕む쳡夕�-夕싟쳡夕뺖ぐ 夕뉋え奭띭じ奭띭첒奭뗠げ 夕ⓣぅ奭�. 夕뜩쳛夕� 夕ㅰぎ奭� 夕□ぞ夕됢え夕꿋쳦夕� 夕뺖ぐ夕듀ぞ 夕�夕약챴夕쀠쳦 夕쎹쳦?'
	},

	smiley :
	{
		toolbar	: '夕멘쳨夕�夕약챺夕꿋�',
		title	: '夕멘쳨夕�夕약챺夕꿋�  夕むじ夕귖う 夕뺖ぐ奭�',
		options : '夕멘ぎ奭띭く奭띭げ奭� 夕듀た夕뺖げ奭띭お奭�'
	},

	elementsPath :
	{
		eleLabel : '夕뤲げ奭�夕�奭뉋え奭띭첒奭띭じ 夕ⓣ쳦 ',
		eleTitle : '夕뤲げ奭�夕�奭뉋え奭띭첒 %1'
	},

	numberedlist	: '夕멘챴夕뽤쳨夕�夕약챴夕뺖え 夕멘쳜夕싟た',
	bulletedlist	: '夕о쳛夕꿋쳡夕� 夕멘쳜夕싟た',
	indent			: '夕뉋え奭띭ぁ奭뉋え奭띭첒, 夕꿋�夕잀�夕ⓣぞ 夕녱ぐ夕귖き夕�夕약챴 夕쒉첊奭띭く夕� 夕듀ぇ夕약ぐ夕듀�',
	outdent			: '夕뉋え奭띭ぁ奭뉋え奭띭첒 夕꿋�夕잀�夕ⓣぞ 夕녱ぐ夕귖き夕�夕약챴 夕쒉첊奭띭く夕� 夕섁첒夕약ぁ夕듀�',

	justify :
	{
		left	: '夕□ぞ夕о� 夕оぞ夕쒉쳛夕�/夕оぞ夕쒉쳛 夕ㅰぐ夕�',
		center	: '夕멘챴夕뺖쳡夕귖う奭띭ぐ夕�/夕멘쳡夕귖첒夕겯た夕귖첊',
		right	: '夕쒉ぎ夕｀� 夕оぞ夕쒉쳛夕�/夕оぞ夕쒉쳛 夕ㅰぐ夕�',
		block	: '夕о쳨夕꿋쳣夕�, 夕끶챴夕ㅰぐ夕약く 夕쒉じ奭띭첒夕욈か夕약챺'
	},

	blockquote : '夕о쳨夕꿋쳣夕�-夕뺖쳦夕�, 夕끶さ夕ㅰぐ夕｀첍夕욈す奭띭え奭�',

	clipboard :
	{
		title		: '夕む쳡夕멘쳨夕�',
		cutError	: '夕ㅰぎ夕약ぐ夕� 夕о쳨夕겯ぞ夕됢첐夕� 夕ⓣ� 夕멘쳛夕겯첈奭띭し夕욈い 夕멘쳡夕잀た夕귖첊夕� 夕뺖첒 夕뺖ぐ夕듀ぞ夕ⓣ� 夕むぐ夕듀ぞ夕ⓣ첊奭� 夕ⓣぅ奭� 夕녱お夕ㅰ�. (Ctrl/Cmd+X) 夕ⓣ쳦 夕됢お夕�奭뗠첊 夕뺖ぐ奭�.',
		copyError	: '夕ㅰぎ夕약ぐ夕� 夕о쳨夕겯ぞ夕됢첐夕� 夕ⓣ� 夕멘쳛夕겯첈奭띭し夕욈い 夕멘쳡夕잀た夕귖첊夕� 夕뺖쳦夕む� 夕뺖ぐ夕듀ぞ夕ⓣ� 夕むぐ夕듀ぞ夕ⓣ첊奭� 夕ⓣぅ奭� 夕녱お夕ㅰ�.  (Ctrl/Cmd+C) 西뺖ㅎ 西む쪓西겯ㄿ誓뗠쨽 西뺖ㅀ誓뉋쨧誓�',
		pasteMsg	: 'Ctrl/Cmd+V 夕ⓣ쳦 夕む쳨夕겯く奭뗠첊 夕뺖ぐ奭� 夕む쳡夕멘쳨夕� 夕뺖ぐ奭�',
		securityMsg	: '夕ㅰぎ夕약ぐ夕� 夕о쳨夕겯ぞ夕됢첐夕� 夕ⓣ� 夕멘쳛夕겯첈奭띭し夕욈い 夕멘쳡夕잀た夕귖첊夕멘え夕� 夕뺖ぞ夕겯ぃ奭�,夕뤲ぁ夕욈첒夕� 夕ㅰぎ夕약ぐ夕� 夕뺖た夕꿋쳨夕むが奭뗠ぐ奭띭ぁ 夕□쳡夕잀ぞ 夕ⓣ쳡 夕뺖쳦夕む� 夕ⓣぅ奭� 夕뺖ぐ奭� 夕뜩첈夕ㅰ쳦. 夕ㅰぎ夕약ぐ奭� 夕� 夕듀た夕ⓣ쳨夕□쳦夕�夕약챴 夕ムぐ奭�夕�奭� 夕む쳡夕멘쳨夕� 夕뺖ぐ夕듀쳛夕� 夕むぁ夕뜩쳡.',
		pasteArea	: '夕む쳡夕멘쳨夕� 夕뺖ぐ夕듀ぞ夕ⓣ� 夕쒉첊奭띭く夕�'
	},

	pastefromword :
	{
		confirmCleanup	: '夕ㅰぎ奭� 夕쒉쳡 夕잀쳡夕뺖쳨夕룅쳨夕ㅰ쳨 夕뺖쳦夕む� 夕뺖ぐ奭� 夕겯す奭띭く夕� 夕쎹쳦 夕잀쳡 夕듀ぐ奭띭ぁ 夕ⓣ� 夕쎹쳡. 夕뺖쳦夕む� 夕뺖ぐ夕ㅰぞ 夕む쳡夕밝げ夕� 夕멘ぞ夕� 夕뺖ぐ夕듀� 夕쎹쳡?',
		toolbar			: '夕む쳡夕멘쳨夕� (夕듀ぁ奭� 夕잀쳡夕뺖쳨夕멘쳨夕�)',
		title			: '夕む쳡夕멘쳨夕� (夕듀ぁ奭� 夕잀쳡夕뺖쳨夕멘쳨夕�)',
		error			: '夕む쳡夕멘쳨夕� 夕뺖ぐ奭뉋げ奭� 夕□쳡夕잀ぞ 夕뉋え奭띭첒夕겯え夕� 夕뤲ぐ夕� 夕ⓣぞ 夕꿋�夕�奭� 夕멘ぞ夕� 夕뺖ぐ奭� 夕뜩첈夕약く奭� 夕ⓣぅ奭�.'
	},

	pasteText :
	{
		button	: '夕む쳡夕멘쳨夕� (夕잀쳡夕뺖쳨夕멘쳨夕�)',
		title	: '夕む쳡夕멘쳨夕� (夕잀쳡夕뺖쳨夕멘쳨夕�)'
	},

	templates :
	{
		button			: '夕잀쳡夕�奭띭お奭띭げ奭뉋첒',
		title			: '夕뺖え奭띭첒奭뉋え奭띭첒 夕잀쳡夕�奭띭お奭띭げ奭뉋첒',
		options : '夕잀쳡夕�奭띭お奭띭げ奭뉋첒夕ⓣぞ 夕듀た夕뺖げ奭띭お奭�',
		insertOption	: '夕�奭귖こ 夕뜩が奭띭う夕ⓣ쳡 夕оう夕꿋쳦',
		selectPromptMsg	: '夕뤲ぁ夕욈첒夕겯ぎ夕약챴 夕볙お夕� 夕뺖ぐ夕듀ぞ 夕잀쳡夕�奭띭お奭띭げ奭뉋첒 夕むじ夕귖う 夕뺖ぐ奭� (夕듀ぐ奭띭い夕�夕약え 夕뺖え奭띭첒奭뉋え奭띭첒 夕멘쳡夕� 夕ⓣす奭�夕� 夕�夕약く):',
		emptyListMsg	: '(夕뺖쳦夕� 夕잀쳡夕�奭띭お奭띭げ奭뉋첒 夕□た夕ムぞ夕뉋え 夕ⓣぅ奭�)'
	},

	showBlocks : '夕о쳨夕꿋쳣夕� 夕оい夕약さ夕듀쳛夕�',

	stylesCombo :
	{
		label		: '夕뜩쳢夕꿋�/夕겯�夕�',
		panelTitle	: '夕ム쳦夕겯쳨夕�奭뉋첒 ',
		panelTitle1	: '夕о쳨夕꿋쳦夕� ',
		panelTitle2	: '夕댽え夕꿋ぞ夕댽え ',
		panelTitle3	: '夕볙が奭띭첏奭뉋첈奭띭첒 夕むう奭띭ぇ夕ㅰた'
	},

	format :
	{
		label		: '夕ム쳣夕ⓣ쳨夕� 夕ム쳣夕겯쳨夕�夕�, 夕겯첍夕ⓣぞ夕ⓣ� 夕뜩쳢夕꿋�',
		panelTitle	: '夕ム쳣夕ⓣ쳨夕� 夕ム쳣夕겯쳨夕�夕�, 夕겯첍夕ⓣぞ夕ⓣ� 夕뜩쳢夕꿋�',

		tag_p		: '夕멘ぞ夕�夕약え奭띭く',
		tag_pre		: '夕ム쳣夕겯쳨夕�夕잀쳡夕�',
		tag_address	: '夕멘ぐ夕ⓣぞ夕�奭곟챴',
		tag_h1		: '夕뜩�夕겯쳨夕룅첈 1',
		tag_h2		: '夕뜩�夕겯쳨夕룅첈 2',
		tag_h3		: '夕뜩�夕겯쳨夕룅첈 3',
		tag_h4		: '夕뜩�夕겯쳨夕룅첈 4',
		tag_h5		: '夕뜩�夕겯쳨夕룅첈 5',
		tag_h6		: '夕뜩�夕겯쳨夕룅첈 6',
		tag_div		: '夕뜩�夕겯쳨夕룅첈 (DIV)'
	},

	div :
	{
		title				: 'Div 夕뺖え奭띭첒奭뉋え夕� 夕оえ夕약さ奭곟챴夕듀쳛夕�',
		toolbar				: 'Div 夕뺖え奭띭첒奭뉋え夕� 夕оえ夕약さ奭곟챴夕듀쳛夕�',
		cssClassInputLabel	: '夕멘쳨夕잀ぞ夕댽げ夕뜩�夕� 夕뺖げ夕약じ奭�夕�',
		styleSelectLabel	: '夕멘쳨夕잀ぞ夕댽げ',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: '夕�夕약し夕약え奭� 夕뺖쳦夕�',
		inlineStyleInputLabel	: '夕댽え夕꿋ぞ夕댽え 夕むう奭띭ぇ夕ㅰた',
		advisoryTitleInputLabel	: '夕뤲ぁ夕듀ぞ夕댽첐夕� 夕뜩�夕겯쳨夕룅첈',
		langDirLabel		: '夕�夕약し夕약え奭� 夕╆た夕뜩ぞ',
		langDirLTRLabel		: '夕□ぞ夕о쳡 夕�奭� 夕쒉ぎ夕｀쳡 (LTR)',
		langDirRTLLabel		: '夕쒉ぎ夕｀쳡 夕�奭� 夕□ぞ夕о쳡 (RTL)',
		edit				: '夕□�夕듀�夕�夕약챴 夕ム쳡夕겯か夕약ぐ 夕뺖ぐ夕듀쳦',
		remove				: '夕□�夕듀� 夕뺖ぞ夕№� 夕뺖ぞ夕№さ奭곟챴'
  	},

	iframe :
	{
		title		: 'IFrame 夕듀た夕뺖げ奭띭お奭�',
		toolbar		: 'IFrame',
		noUrl		: 'iframe URL 夕잀ぞ夕댽お奭� 夕뺖ぐ奭�',
		scrolling	: '夕멘쳨夕뺖쳨夕겯쳦夕꿋が夕약ぐ 夕싟ぞ夕꿋쳛 夕뺖ぐ夕듀ぞ',
		border		: '夕ム쳨夕겯쳡夕� 夕о쳦夕겯쳨夕□쳡夕� 夕оい夕약さ夕듀�'
	},

	font :
	{
		label		: '夕ム쳣夕ⓣ쳨夕�',
		voiceLabel	: '夕ム쳦夕ⓣ쳨夕�',
		panelTitle	: '夕ム쳣夕ⓣ쳨夕�'
	},

	fontSize :
	{
		label		: '夕ム쳣夕ⓣ쳨夕� 夕멘ぞ夕뉋첐/夕뺖う',
		voiceLabel	: '夕ム쳦夕ⓣ쳨夕� 夕멘ぞ夕댽첐',
		panelTitle	: '夕ム쳣夕ⓣ쳨夕� 夕멘ぞ夕뉋첐/夕뺖う'
	},

	colorButton :
	{
		textColorTitle	: '夕뜩が奭띭う夕ⓣ쳦 夕겯챴夕�',
		bgColorTitle	: '夕о쳟夕뺖첊奭띭ぐ夕약챼夕ⓣ쳨夕� 夕겯챴夕�,',
		panelTitle		: '夕겯챴夕�',
		auto			: '夕멘쳨夕듀첍夕약げ夕욈い',
		more			: '夕붲ぐ 夕겯챴夕�...'
	},

	colors :
	{
		'000' : '夕뺖ぞ夕녀쳦',
		'800000' : '夕�夕겯쳛夕�',
		'8B4513' : '夕쎹�夕�',
		'2F4F4F' : '夕□ぞ夕겯쳨夕� 夕멘쳨夕꿋쳡夕� 夕쀠쳨夕겯쳡 ',
		'008080' : '夕잀�夕�',
		'000080' : '夕ⓣ쳡夕듀�',
		'4B0082' : '夕쒉ぞ夕�夕꿋�',
		'696969' : '夕□ぞ夕겯쳨夕� 夕쀠쳨夕겯쳡',
		'B22222' : '夕댽첒',
		'A52A2A' : '夕о쳨夕겯ぞ夕됢え',
		'DAA520' : '夕쀠쳦夕꿋쳨夕□え 夕겯쳦夕�',
		'006400' : '夕□ぞ夕겯쳨夕� 夕꿋�夕꿋쳦',
		'40E0D0' : '夕잀쳨夕겯첈奭뗠챻夕�',
		'0000CD' : '夕�夕㏅쳨夕�夕� 夕듀ぞ夕╆こ奭�',
		'800080' : '夕むぐ奭띭お夕�',
		'808080' : '夕쀠쳨夕겯쳡',
		'F00' : '夕꿋ぞ夕�',
		'FF8C00' : '夕□ぞ夕겯쳨夕� 夕볙ぐ夕귖첏',
		'FFD700' : '夕쀠쳦夕꿋쳨夕�',
		'008000' : '夕쀠쳨夕겯�夕�',
		'0FF' : '夕멘ぞ夕�夕�',
		'00F' : '夕듀ぞ夕╆こ奭�',
		'EE82EE' : '夕듀ぞ夕�奭뗠げ奭뉋첒',
		'A9A9A9' : '夕□�夕� ',
		'FFA07A' : '夕꿋ぞ夕댽첒 夕멘ぞ夕꿋ぎ夕�',
		'FFA500' : '夕볙ぐ夕귖첏',
		'FFFF00' : '夕む�夕녀쳦',
		'00FF00' : '夕꿋ぞ夕댽ぎ',
		'AFEEEE' : '夕む쳡夕� 夕뺖쳦夕댽じ',
		'ADD8E6' : '夕꿋ぞ夕댽첒 夕о쳨夕꿋쳛',
		'DDA0DD' : '夕むげ奭띭ぎ',
		'D3D3D3' : '夕꿋ぞ夕댽첒 夕쀠쳨夕겯쳡',
		'FFF0F5' : '夕꿋さ夕귖ぁ夕� ',
		'FAEBD7' : '夕뤲え奭띭첒奭�夕� 夕멘か奭뉋う',
		'FFFFE0' : '夕꿋ぞ夕댽첒 夕む�夕녀쳦',
		'F0FFF0' : '夕밝え奭�夕□챼夕�',
		'F0FFFF' : '夕끶첐奭곟ぐ奭�',
		'F0F8FF' : '夕뤲げ奭�夕� 夕о쳨夕꿋쳛',
		'E6E6FA' : '夕꿋さ夕귖ぁ夕�',
		'FFF' : '夕멘か奭뉋う'
	},

	scayt :
	{
		title			: '夕잀ぞ夕댽お 夕뺖ぐ夕ㅰぞ 夕멘쳨夕む쳡夕� 夕ㅰお夕약じ奭�',
		opera_title		: '夕볙お奭뉋ぐ夕약ぎ夕약챴 夕멘お奭뗠ぐ奭띭첒 夕ⓣぅ奭�',
		enable			: 'SCAYT 夕뤲え奭뉋が夕� 夕뺖ぐ夕듀쳛夕�',
		disable			: 'SCAYT 夕□た夕멘쳡夕оげ 夕뺖ぐ夕듀쳛夕�',
		about			: 'SCAYT 夕듀た夕룅쳡',
		toggle			: 'SCAYT 夕잀쳦夕쀠げ',
		options			: '夕듀た夕뺖げ奭띭お奭�',
		langs			: '夕�夕약し夕약첆',
		moreSuggestions	: '夕듀ぇ夕약ぐ奭� 夕듀た夕뺖げ奭띭お奭�',
		ignore			: '夕뉋첊奭띭え奭뗠ぐ',
		ignoreAll		: '夕оぇ夕� 夕뉋첊奭띭え奭뗠ぐ ',
		addWord			: '夕뜩が奭띭う 夕됢ぎ奭뉋ぐ夕듀쳦',
		emptyDic		: '夕□た夕뺖쳨夕멘え夕겯�夕ⓣ쳛夕� 夕ⓣぞ夕� 夕뽤ぞ夕꿋� 夕ⓣぞ 夕밝쳦夕�.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: '夕듀た夕뺖げ奭띭お奭�',
		allCaps			: '夕볙げ-夕뺖쳡夕む쳨夕� 夕듀ぐ奭띭ぁ 夕쎹쳦夕□� 夕╆쳦.',
		ignoreDomainNames : '夕□쳦夕�奭뉋え 夕ⓣぞ夕� 夕쎹쳦夕□� 夕╆쳦.',
		mixedCase		: '夕�夕욈첈奭띭じ 夕뺖쳡夕� 夕듀ぐ奭띭ぁ 夕쎹쳦夕□� 夕╆쳦.',
		mixedWithDigits	: '夕녱챴夕뺖ぁ夕� 夕듀ぞ夕녀ぞ 夕뜩が奭띭う 夕쎹쳦夕□� 夕╆쳦.',

		languagesTab	: '夕�夕약し夕�',

		dictionariesTab	: '夕뜩が奭띭う夕뺖쳦夕�',
		dic_field_name	: '夕뜩が奭띭う夕뺖쳦夕� 夕ⓣぞ夕�',
		dic_create		: '夕оえ夕약さ夕듀쳛夕�',
		dic_restore		: '夕むぞ夕쎹쳛夕� ',
		dic_delete		: '夕뺖ぞ夕№� 夕ⓣぞ夕뽤さ奭곟챴',
		dic_rename		: '夕ⓣさ奭곟챴 夕ⓣぞ夕� 夕녱お夕듀쳛夕�',
		dic_info		: '夕む쳡夕밝げ夕� User Dictionary, Cookie 夕ㅰぐ奭�夕뺖쳡 夕멘쳨夕잀쳦夕� 夕�夕약く 夕쎹쳡. 夕むぃ Cookie 夕ⓣ� 夕멘ぎ夕ㅰぞ 夕볙첎奭� 夕쎹쳡. 夕쒉く夕약ぐ奭� User Dictionary, Cookie 夕ㅰぐ奭�夕뺖쳡 夕멘쳨夕잀쳦夕� 夕ⓣぞ 夕뺖ぐ奭� 夕뜩첈夕약く, 夕ㅰ쳨夕�夕약ぐ奭� 夕ㅰ쳡 夕끶ぎ夕약ぐ夕� 夕멘ぐ奭띭さ夕� 夕むぐ 夕멘쳨夕잀쳦夕� 夕�夕약く 夕쎹쳡. 夕ㅰぎ夕약ぐ奭� 夕듀쳨夕�夕ㅰた夕쀠い 夕□�夕뺖じ奭띭え夕겯� 夕ⓣ쳡 夕멘ぐ奭띭さ夕� 夕むぐ 夕멘쳨夕잀쳦夕� 夕뺖ぐ夕듀ぞ 夕�夕약첒奭� 夕ㅰぎ夕약ぐ奭� 夕ㅰ쳡夕ⓣ쳛夕� 夕ⓣぞ夕� 夕녱お夕듀쳛夕� 夕むぁ夕뜩쳡. 夕쒉쳦 夕ㅰぎ奭� 夕ㅰぎ夕약ぐ奭� 夕□�夕뺖じ奭띭え夕겯� 夕ⓣ쳛夕� 夕ⓣぞ夕� 夕녱お奭뉋げ奭곟챴 夕밝쳦夕� 夕ㅰ쳦 夕ㅰぎ奭� 夕겯た夕멘쳨夕잀쳦夕� 夕о첒夕� 夕뺖쳨夕꿋�夕� 夕뺖ぐ奭� 夕뜩첈奭�.',

		aboutTab		: '夕듀た夕룅쳡'
	},

	about :
	{
		title		: 'CKEditor 夕듀た夕룅쳡',
		dlgTitle	: 'CKEditor 夕듀た夕룅쳡',
		help	: '夕�夕╆う 夕�夕약첒奭� $1 夕ㅰお夕약じ奭�',
		userGuide : 'CKEditor 夕�奭곟첐夕겯쳨夕� 夕쀠ぞ夕댽ぁ',
		moreInfo	: '夕꿋ぞ夕�夕멘え夕멘え奭� 夕�夕약す夕욈い奭� 夕�夕약첒奭� 夕끶ぎ夕약ぐ奭� 夕듀쳡夕� 夕멘ぞ夕댽첒',
		copy		: '夕뺖쳦夕む�夕겯ぞ夕댽첒 &copy; $1. 夕볙げ 夕겯ぞ夕댽첒奭띭じ '
	},

	maximize : '夕�奭뗠첒奭곟챴 夕뺖ぐ夕듀쳛夕�',
	minimize : '夕ⓣぞ夕ⓣ쳛夕� 夕뺖ぐ夕듀쳛夕�',

	fakeobjects :
	{
		anchor		: '夕끶え夕뺖ぐ',
		flash		: '夕ム쳨夕꿋쳡夕� ',
		iframe		: 'IFrame',
		hiddenfield	: '夕밝た夕□え ',
		unknown		: '夕끶え夕ⓣ쳦夕� 夕볙が奭띭첏奭뉋첈奭띭첒'
	},

	resize : '夕뽤쳡夕귖첍奭� 夕ⓣ쳡 夕�奭뗠첊奭띭く 夕뺖ぐ夕듀쳛夕�',

	colordialog :
	{
		title		: '夕겯챴夕� 夕むじ夕귖う 夕뺖ぐ奭�',
		options	:	'夕겯챴夕쀠え夕� 夕듀た夕뺖げ奭띭お',
		highlight	: '夕밝ぞ夕댽챻夕�',
		selected	: '夕むじ夕귖う 夕뺖ぐ奭뉋げ奭� 夕겯챴夕�',
		clear		: '夕멘ぞ夕� 夕뺖ぐ夕듀쳛夕�'
	},

	toolbarCollapse	: '夕잀쳜夕꿋が夕약ぐ 夕ⓣぞ夕ⓣ쳛夕� 夕뺖ぐ夕듀쳛夕�',
	toolbarExpand	: '夕잀쳜夕꿋が夕약ぐ 夕�奭뗠첒奭곟챴 夕뺖ぐ夕듀쳛夕�',

	toolbarGroups :
	{
		document : '夕╆じ奭띭い夕약さ奭뉋첏',
		clipboard : '夕뺖쳨夕꿋た夕むが奭뗠ぐ奭띭ぁ/夕끶え',
		editing : '夕뤲ぁ奭�夕� 夕뺖ぐ夕듀쳛夕�',
		forms : '夕ム쳦夕겯쳨夕�',
		basicstyles : '夕о쳡夕멘た夕뺖쳨 夕멘쳨夕잀ぞ夕뉋げ',
		paragraph : '夕ム첈夕겯쳦',
		links : '夕꿋�夕귖첈',
		insert : '夕됢ぎ奭뉋ぐ夕듀쳛夕�',
		styles : '夕멘쳨夕잀ぞ夕뉋げ',
		colors : '夕겯챴夕�',
		tools : '夕잀쳜夕꿋쳨夕�'
	},

	bidi :
	{
		ltr : '夕잀쳡夕뺖쳨夕룅쳨夕ㅰ쳨 夕ⓣ� 夕╆た夕뜩ぞ 夕□ぞ夕о쳡 夕�奭� 夕쒉ぎ夕｀쳡',
		rtl : '夕잀쳡夕뺖쳨夕룅쳨夕ㅰ쳨 夕ⓣ� 夕╆た夕뜩ぞ 夕쒉ぎ夕｀쳡 夕�奭� 夕□ぞ夕о쳡'
	},

	docprops :
	{
		label : '夕□쳣夕뺖쳨夕�奭곟ぎ夕ⓣ쳨夕� 夕쀠쳛夕�/夕む쳨夕겯쳣夕むぐ奭띭첒夕욈첐',
		title : '夕□쳣夕뺖쳨夕�奭곟ぎ夕ⓣ쳨夕� 夕쀠쳛夕�/夕む쳨夕겯쳣夕むぐ奭띭첒夕욈첐',
		design : '夕□�夕멘ぞ',
		meta : '夕�奭뉋첒夕약ぁ奭끶첒夕�',
		chooseColor : '夕듀た夕뺖げ奭띭お',
		other : '<other>',
		docTitle :	'夕む쳡夕� 夕�夕�夕약こ奭곟챴/夕잀ぞ夕뉋첒夕�',
		charset : 	'夕뺖쳡夕겯쳡夕뺖쳨夕잀ぐ 夕멘쳡夕� 夕뤲え奭띭첈奭뗠ぁ夕욈챴夕�',
		charsetOther : '夕끶え奭띭く 夕뺖쳡夕겯쳡夕뺖쳨夕잀ぐ 夕멘쳡夕� 夕뤲え奭띭첈奭뗠ぁ夕욈챴夕�',
		charsetASCII : 'ASCII',
		charsetCE : '夕�夕㏅쳨夕� 夕�奭곟ぐ奭뗠お夕욈챸夕� (Central European)',
		charsetCT : '夕싟ぞ夕뉋え奭�夕� (Chinese Traditional Big5)',
		charsetCR : '夕멘た夕겯�夕꿋た夕� (Cyrillic)',
		charsetGR : '夕쀠쳨夕겯�夕� (Greek)',
		charsetJP : '夕쒉ぞ夕むぞ夕ⓣた夕� (Japanese)',
		charsetKR : '夕뺖쳦夕겯�夕�夕� (Korean)',
		charsetTR : '夕잀ぐ奭띭첈夕� (Turkish)',
		charsetUN : '夕�奭귖え夕욈첈奭뗠ぁ (UTF-8)',
		charsetWE : '夕むざ奭띭첍夕욈ぎ 夕�奭곟ぐ奭뗠お夕욈챸夕� (Western European)',
		docType : '夕□쳣夕뺖쳨夕�奭곟ぎ夕ⓣ쳨夕� 夕む쳨夕겯첈夕약ぐ 夕뜩�夕겯쳨夕룅첈',
		docTypeOther : '夕끶え奭띭く 夕□쳣夕뺖쳨夕�奭곟ぎ夕ⓣ쳨夕� 夕む쳨夕겯첈夕약ぐ 夕뜩�夕겯쳨夕룅첈',
		xhtmlDec : 'XHTML 夕멘쳜夕싟え夕� 夕멘ぎ夕약さ夕욈し奭띭첒 夕뺖ぐ夕듀�',
		bgColor : '夕о쳟夕뺖첊奭띭ぐ夕약챼夕ⓣ쳨夕� 夕겯챴夕�',
		bgImage : '夕о쳟夕뺖첊奭띭ぐ夕약챼夕ⓣ쳨夕� 夕싟た夕ㅰ쳨夕� URL',
		bgFixed : '夕멘쳨夕뺖쳨夕겯쳦夕� 夕� 夕�夕약く 夕ㅰ쳡夕듀쳛夕� 夕о쳟夕뺖첊奭띭ぐ夕약챼夕ⓣ쳨夕�',
		txtColor : '夕뜩が奭띭う夕ⓣ쳦 夕겯챴夕�',
		margin : '夕む쳡夕� 夕�夕약ぐ奭띭첏夕욈え',
		marginTop : '夕됢お夕�',
		marginLeft : '夕□ぞ夕о�',
		marginRight : '夕쒉ぎ夕｀�',
		marginBottom : '夕ⓣ�夕싟쳡',
		metaKeywords : '夕□쳣夕뺖쳨夕�奭곟ぎ夕ⓣ쳨夕� 夕뉋え奭띭ぁ奭뉋첈奭띭じ 夕멘챴夕뺖쳡夕ㅰざ夕о쳨夕� (夕끶げ奭띭お夕듀た夕겯ぞ夕� (,) 夕�奭� 夕끶げ夕� 夕뺖ぐ奭�)',
		metaDescription : '夕□쳣夕뺖쳨夕�奭곟ぎ夕ⓣ쳨夕� 夕듀ぐ奭띭ぃ夕�',
		metaAuthor : '夕꿋쳡夕뽤첈',
		metaCopyright : '夕뺖쳣夕むた夕겯ぞ夕뉋첒',
		previewHtml : '<p>夕� 夕뤲첈 <strong>夕멘쳡夕�奭띭お夕� 夕잀쳡夕뺖쳨夕룅쳨夕ㅰ쳨</strong> 夕쎹쳡. 夕ㅰぎ奭� <a href="javascript:void(0)">CKEditor</a> 夕듀ぞ夕むぐ奭� 夕쎹쳦.</p>'
	}
};
