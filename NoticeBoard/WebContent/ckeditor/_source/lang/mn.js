/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Mongolian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['mn'] =
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
	editorTitle : 'Rich text editor, %1', // MISSING
	editorHelp : 'Press ALT 0 for help', // MISSING

	// ARIA descriptions.
	toolbars	: '�뫰압뿅앗곎��꺫꺪뿅겆넘눺먁밀� �끧띛��띚넘곍뿅먁밀� �곍겆셸귈겉�',
	editor		: '奎�띚뿅귐띛��� 閨龜�눺꽹띛� 閨棘剋棘勻�곎��꺫꺪뿅겆넘�',

	// Toolbar buttons without dialogs.
	source			: '�싍압�',
	newPage			: '珪龜戟�� �끧꺫꺪닉겉�',
	save			: '奎逵畇均逵剋逵��',
	preview			: '叫�龜畇�눺뿅겆� �끦겉�逵��',
	cut				: '奎逵橘�눺뿅겉�',
	copy			: '奎�꺫꺪뿅겉�',
	paste			: '�뫱꺫꺪뿅넓겉�',
	print			: '奎�띚꽥뿌띛�',
	underline		: '�붠압압넘꺫꺫� 戟�� 鈞�꺫�逵逵�곎궿겆� 閨棘剋均棘��',
	bold			: '龜棘畇 閨奈畇奈奈戟',
	italic			: '�앆겆뿌꺫�',
	selectAll		: '�뫲�均畇龜橘均 戟�� �곍압싻넓앗�',
	removeFormat	: '�읩겉�逵�均逵�꾊뗊� 鈞逵均勻逵��뗊� 逵勻�� �끦겉뤣�',
	strike			: '�붡꺪싻닌꺫꺫� 戟�� 鈞�꺫�逵逵�곎궿겆� 閨棘剋均棘��',
	subscript		: '鬼�꺫꺫��� 閨棘剋均棘��',
	superscript		: '�쀑띛��띚� 閨棘剋均棘��',
	horizontalrule	: '奎旦戟畇剋旦戟 鈞�꺫�逵逵�� 棘��꺫꺪뿅겉�',
	pagebreak		: '奎�꺫꺪닉겉� �귂꺫곍넓겆겉�剋逵均�� 棘��꺫꺪뿅겉�',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '奎棘剋閨棘棘�� 逵勻�� �끦겉뤣�',
	undo			: '奎奈�눺먁싻넙�橘 閨棘剋均棘��',
	redo			: '斷劇戟旦�� 奈橘剋畇剋�띛� �곎띛�均�띛띛�',

	// Common messages and labels.
	common :
	{
		browseServer	: '鬼筠�勻筠� �끦겉��꺫꺪뿅겉�',
		url				: 'URL',
		protocol		: '�읪�棘�궿압분압�',
		upload			: '奎�꺫꺪뿅겉�',
		uploadSubmit	: '內奈戟龜橘均 �곍둘�勻�띛��奈奈 龜剋均�띛�',
		image			: '�쀑꺫�逵均',
		flash			: '圭剋逵��',
		form			: '圭棘�劇',
		checkbox		: '槻筠克閨棘克��',
		radio			: '�졤겆닉먁� �궿압꽹�',
		textField		: '龜筠�끧� �궿겆뿅귈겉�',
		textarea		: '龜筠�끧� 棘��눺먁�',
		hiddenField		: '�앇꺫꺫� �궿겆뿅귈겉�',
		button			: '龜棘勻��',
		select			: '鬼棘戟均棘均�� �궿겆뿅귈겉�',
		imageButton		: '�쀑꺫�逵均�궿겆� �궿압꽹�',
		notSet			: '<�왧싻압앗끦넙�橘>',
		id				: 'Id',
		name			: '�앇띛�',
		langDir			: '奎�띚뿅싻먁� �눺먁넓뿌띚�',
		langDirLtr		: '�쀒�奈戟�띛띛� 閨逵��꺫꺪� (LTR)',
		langDirRtl		: '�뫰겉��꺫꺪싻겆겉� 鈞奈奈戟 (RTL)',
		langCode		: '奎�띚뿅싻먁� 克棘畇',
		longDescr		: 'URL-�뗊� �궿겆밀뿅귈겉�',
		cssClass		: 'Stylesheet 克剋逵�곎곎꺫꺪�',
		advisoryTitle	: '�쀓⒟꽥뿐⒟뿅닒⒠� 均逵��눺먁�',
		cssStyle		: '�쀐겆넓꽥겉�',
		ok				: 'OK',
		cancel			: '�뫰압뿅먈�',
		close			: '奎逵逵��',
		preview			: 'Preview', // MISSING
		generalTab		: '�뺁�旦戟�끦먁�',
		advancedTab		: '�앇띚솅띚뿌�',
		validateNumberFailed : 'This value is not a number.', // MISSING
		confirmNewPage	: 'Any unsaved changes to this content will be lost. Are you sure you want to load new page?', // MISSING
		confirmCancel	: 'Some of the options have been changed. Are you sure to close the dialog?', // MISSING
		options			: '鬼棘戟均棘剋��',
		target			: '�뫰겆�',
		targetNew		: 'New Window (_blank)', // MISSING
		targetTop		: 'Topmost Window (_top)', // MISSING
		targetSelf		: 'Same Window (_self)', // MISSING
		targetParent	: 'Parent Window (_parent)', // MISSING
		langDirLTR		: '�쀒�奈戟 �궿겆뿅겆겉� 閨逵��꺫꺪� �궿먁밂댮띛� (LTR)',
		langDirRTL		: '�뫰겉��꺫꺪� �궿겆뿅겆겉� 鈞奈奈戟 �궿먁밂댮띛� (RTL)',
		styles			: '�쀐겆넓꽥겉�',
		cssClasses		: 'Stylesheet Classes', // MISSING
		width			: '斷�均旦戟',
		height			: '斷戟畇旦�',
		align			: '龜�꺪뿅넓겉� �궿겆�',
		alignLeft		: '�쀒�奈戟',
		alignRight		: '�뫰겉��꺫꺪�',
		alignCenter		: '龜旦勻畇',
		alignTop		: '�붡띛띚� �궿겆뿅�',
		alignMiddle		: '�붡꺪싻� �궿겆뿅�',
		alignBottom		: '�붠압압� �궿겆뿅�',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: '斷戟畇旦� 戟�� �궿압� 閨逵橘�� �뫱곎궿압�.',
		invalidWidth	: '斷�均旦戟 戟�� �궿압� 閨逵橘�� �뫱곎궿압�.',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, unavailable</span>' // MISSING
	},

	contextmenu :
	{
		options : 'Context Menu Options' // MISSING
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '�왧싼녡넓압� �귂띚셸닌띚넘� 棘��꺫꺪뿅겉�',
		title		: '�왧싼녡넓압� �귂띚셸닌띚넘� �곍압싻넓앗�',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '奎棘剋閨棘棘��',
		other 		: '<other>', // MISSING
		menu		: '奎棘剋閨棘棘�� 鈞逵�곍꽥겉�剋逵��',
		title		: '奎棘剋閨棘棘��',
		info		: '奎棘剋閨棘棘�곎뗊� �귂꺫끦겆� 劇�띚닌띛띚뿌띚�',
		target		: '�뫰겆밂�剋逵剋',
		upload		: '奎�꺫꺪뿅겉�',
		advanced	: '�앇띚솅띚뿌�',
		type		: '�쎩먁싻분먁밀� �귅⒠�旦剋',
		toUrl		: '�녡겉끦먁� �끧꺫꺪닉겉곍싼� �끦겉뤢� (URL)',
		toAnchor	: '葵戟�� 閨龜�눺꽹띛� 畇�띛� 鈞逵戟均�꺫� ��꺫� 棘�눺먈� �끦압뿅귈압앗�',
		toEmail		: '葵-鈞逵�끦먁�',
		targetFrame		: '<�먒넘꺫꺪뿅겉� �끨���띛�>',
		targetPopup		: '<popup �녡압싼�>',
		targetFrameName	: '�왨눺먈� �꾊�筠劇�뗊� 戟�띛�',
		targetPopupName	: 'Popup �녡압싼끦싼� 戟�띛�',
		popupFeatures	: 'Popup �녡압싼끦싼� 棘戟�녡뿅압�',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: '鬼�궿겉귂꺫� �끧띛곎띚�',
		popupLocationBar: 'Location �끧띛곎띚�',
		popupToolbar	: '�뫰겆넓겆뙨싼� �곍겆셸귈겉�',
		popupMenuBar	: '揆�띛곍싻먁� �곍겆셸귈겉�',
		popupFullScreen	: '揆棘戟�� 畇奈奈�均�띛� (Internet Explorer)',
		popupScrollBars	: '鬼克�棘剋 �끧띛곎띚넙�奈畇',
		popupDependent	: '奎逵劇逵逵�궿겆� (Netscape)',
		popupLeft		: '�쀒�奈戟 閨逵橘�剋逵剋',
		popupTop		: '�붡띛띚� 閨逵橘�剋逵剋',
		id				: 'Id', // MISSING
		langDir			: '奎�띚뿅싻먁� �눺먁넓뿌띚�',
		langDirLTR		: '�쀒�奈戟�띛띛� 閨逵��꺫꺪� (LTR)',
		langDirRTL		: '�뫰겉��꺫꺪싻겆겉� 鈞奈奈戟 (RTL)',
		acccessKey		: '奎棘剋閨棘�� �귃�剋�끨�奈�',
		name			: '�앇띛�',
		langCode			: '奎�띚뿅싻먁� 克棘畇',
		tabIndex			: 'Tab 龜戟畇筠克��',
		advisoryTitle		: '�쀓⒟꽥뿐⒟뿅닒⒠� 均逵��눺먁�',
		advisoryContentType	: '�쀓⒟꽥뿐⒟뿅닒⒠� �귅⒠�剋龜橘戟 逵均�꺫꺪뿅넓�',
		cssClasses		: 'Stylesheet 克剋逵�곎곎꺫꺪�',
		charset			: '龜�띚셸닌띚넘� 棘戟棘棘�� 戟旦旦�녤⒟� �끦압뿅귈압넓닌곍압�',
		styles			: '�쀐겆넓꽥겉�',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '�앇띚� 鈞逵戟均�꺫꺪� �곍압싻넓압싻� �꺫�',
		anchorName		: '�쀐겆싻넘꺫꺪넓먁밀� 戟�띛��띛띛�',
		anchorId			: '葵剋筠劇�띚싼궿밀� Id 戟�띛��띛띛�',
		emailAddress		: '葵-�댮꺫꺪닉겆싻넓먁밀� �끦겉뤢�',
		emailSubject		: '�쀑꺫�勻逵�곍싼� 均逵��눺먁�',
		emailBody		: '�쀑꺫�勻逵�곍싼� 龜�� 閨龜筠',
		noAnchors		: '(�뫰겉�龜劇�� 閨龜�눺먁� 鈞逵戟均�꺫꺪넙�橘 閨逵橘戟逵)',
		noUrl			: '奎棘剋閨棘棘�곍싼� URL �끦겉뤢넓먁밀� �댭먁꽥싼� 奈奈',
		noEmail			: '葵-�댮꺫꺪닉겆싻넓먁� �끦겉뤢넓겆� �댭먁꽥싼� 奈奈'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '�쀐겆싻넘꺫�',
		menu		: '�쀐겆싻넘꺫꺪� 閨棘剋棘�곎��꺫꺪뿅겉�',
		title		: '�쀐겆싻넘꺫꺪넓먁밀� �댭먁싻� �눺겆싻겉�',
		name		: '�쀐겆싻넘꺫꺪넓먁밀� 戟�띛�',
		errorName	: '�쀐겆싻넘꺫꺪넓먁밀� 戟�띛�龜橘均 棘��꺫꺪뿅싻� �꺫�',
		remove		: '�쀐겆싻넘꺫꺪� �꺫곎궿넓겉�'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Numbered List Properties', // MISSING
		bulletedTitle		: 'Bulleted List Properties', // MISSING
		type				: '龜旦�旦剋',
		start				: 'Start', // MISSING
		validateStartNumber				:'List start number must be a whole number.', // MISSING
		circle				: 'Circle', // MISSING
		disc				: 'Disc', // MISSING
		square				: 'Square', // MISSING
		none				: 'None', // MISSING
		notset				: '<not set>', // MISSING
		armenian			: 'Armenian numbering', // MISSING
		georgian			: 'Georgian numbering (an, ban, gan, etc.)', // MISSING
		lowerRoman			: 'Lower Roman (i, ii, iii, iv, v, etc.)', // MISSING
		upperRoman			: 'Upper Roman (I, II, III, IV, V, etc.)', // MISSING
		lowerAlpha			: 'Lower Alpha (a, b, c, d, e, etc.)', // MISSING
		upperAlpha			: 'Upper Alpha (A, B, C, D, E, etc.)', // MISSING
		lowerGreek			: 'Lower Greek (alpha, beta, gamma, etc.)', // MISSING
		decimal				: 'Decimal (1, 2, 3, etc.)', // MISSING
		decimalLeadingZero	: 'Decimal leading zero (01, 02, 03, etc.)' // MISSING
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: '奎逵橘菌 棘�剋�꺫꺪뿅겉�',
		find				: '奎逵橘��',
		replace				: '�왨�剋�꺫꺪뿅겉�',
		findWhat			: '奎逵橘�� 奈均/奈�곎띚�:',
		replaceWith			: '鬼棘剋龜�� 奈均:',
		notFoundMsg			: '奎逵橘�곍겆� 閨龜�눺꽹띛�龜橘均 棘剋�곍압싻넙�橘.',
		findOptions			: '奎逵橘�� �곍압싻넓압뿌귂꺫꺪�',
		matchCase			: '龜�띚싼녢띛� �귅⒟뿐⒟�',
		matchWord			: '龜�띚싼녢띛� 閨奈�귂띚� 奈均',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: '�뫲�均畇龜橘均 戟�� �곍압뿅먈�',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: '奎奈�곍싼띚넘�',
		title		: '奎奈�곍싼띚넘�',
		menu		: '奎奈�곍싼띚넘�',
		deleteTable	: '奎奈�곍싼띚넘� �꺫곎궿넓겉�',
		rows		: '�쑻⒠�',
		columns		: '�뫰겆넓겆싻�',
		border		: '奎奈��띛띚싻먁� �끧띚셸뚜띛�',
		widthPx		: '�녢띚�',
		widthPc		: '�끧꺪꽹�',
		widthUnit	: '旦�均旦戟龜橘 戟�띚넓�',
		cellSpace	: '�앋��� �끦압앗�棘戟畇�뗊� 鈞逵橘 (spacing)',
		cellPad		: '�앋��� 畇棘�궿앗�剋棘��(padding)',
		caption		: '龜逵橘剋閨逵�',
		summary		: '龜逵橘剋閨逵�',
		headers		: 'Headers', // MISSING
		headersNone		: 'None', // MISSING
		headersColumn	: 'First column', // MISSING
		headersRow		: 'First Row', // MISSING
		headersBoth		: 'Both', // MISSING
		invalidRows		: 'Number of rows must be a number greater than 0.', // MISSING
		invalidCols		: 'Number of columns must be a number greater than 0.', // MISSING
		invalidBorder	: 'Border size must be a number.', // MISSING
		invalidWidth	: '奎奈�곍싼띚넘궿먁밀� 旦�均旦戟 戟�� �궿압� 閨逵橘�� �뫱곎궿압�.',
		invalidHeight	: 'Table height must be a number.', // MISSING
		invalidCellSpacing	: 'Cell spacing must be a positive number.', // MISSING
		invalidCellPadding	: 'Cell padding must be a positive number.', // MISSING

		cell :
		{
			menu			: '�앋���/鈞逵橘',
			insertBefore	: '�앋���/鈞逵橘 旦劇戟旦 戟�� 棘��꺫꺪뿅겉�',
			insertAfter		: '�앋���/鈞逵橘 畇逵�逵逵 戟�� 棘��꺫꺪뿅겉�',
			deleteCell		: '�앋��� �꺫곎궿넓겉�',
			merge			: '�앋��� 戟�띚넘귂띛�',
			mergeRight		: '�뫰겉��꺫꺪� �궿먁밂� 戟�띚넘궿넘띛�',
			mergeDown		: '�붠압앗� 戟�띚넘궿넘띛�',
			splitHorizontal	: '�앋���/鈞逵橘均 閨棘�곍압압넓압앗� 戟�� �귂꺫곍넓겆겉�剋逵��',
			splitVertical	: '�앋���/鈞逵橘均 �끩⒟싻닉뿐⒟싻넛⒢⒠� 戟�� �귂꺫곍넓겆겉�剋逵��',
			title			: 'Cell Properties', // MISSING
			cellType		: 'Cell Type', // MISSING
			rowSpan			: 'Rows Span', // MISSING
			colSpan			: 'Columns Span', // MISSING
			wordWrap		: 'Word Wrap', // MISSING
			hAlign			: '奎�띚꽹귂띛띚� �귂띚넘댭뿌띛� 逵�均逵',
			vAlign			: '�뫰앗곍압압� �귂띚넘댭뿌띛� 逵�均逵',
			alignBaseline	: 'Baseline', // MISSING
			bgColor			: '�붡띚꽹곍넘띛� 旦戟均旦',
			borderColor		: '奎奈��띛띚싻먁� 旦戟均旦',
			data			: 'Data', // MISSING
			header			: 'Header', // MISSING
			yes				: '龜龜橘劇',
			no				: '內均奈橘',
			invalidWidth	: '�앋�畇戟龜橘 旦�均旦戟 戟�� �궿압� 閨逵橘�� �뫱곎궿압�.',
			invalidHeight	: 'Cell height must be a number.', // MISSING
			invalidRowSpan	: 'Rows span must be a whole number.', // MISSING
			invalidColSpan	: 'Columns span must be a whole number.', // MISSING
			chooseColor		: '鬼棘戟均棘��'
		},

		row :
		{
			menu			: '�쑻⒠�',
			insertBefore	: '�쑻⒠� 旦劇戟旦 戟�� 棘��꺫꺪뿅겉�',
			insertAfter		: '�쑻⒠� 畇逵�逵逵 戟�� 棘��꺫꺪뿅겉�',
			deleteRow		: '�쑻⒠� �꺫곎궿넓겉�'
		},

		column :
		{
			menu			: '�뫰겆넓겆싻�',
			insertBefore	: '�뫰겆넓겆싻� 旦劇戟旦 戟�� 棘��꺫꺪뿅겉�',
			insertAfter		: '�뫰겆넓겆싻� 畇逵�逵逵 戟�� 棘��꺫꺪뿅겉�',
			deleteColumn	: '�뫰겆넓겆싻� �꺫곎궿넓겉�'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '龜棘勻�눺싼� �댭먁싻� �눺겆싻겉�',
		text		: '龜�띚붇곎� (叫�궿넓�)',
		type		: '龜旦�旦剋',
		typeBtn		: '龜棘勻��',
		typeSbm		: 'Submit',
		typeRst		: '�뫰압뿅먈�'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '槻筠克閨棘克�곍싼� �댭먁싻� �눺겆싻겉�',
		radioTitle	: '�졤겆닉먁� �궿압꽹눺싼� �댭먁싻� �눺겆싻겉�',
		value		: '叫�궿넓�',
		selected	: '鬼棘戟均棘均畇�곍압�'
	},

	// Form Dialog.
	form :
	{
		title		: '圭棘�劇 �댭먁싻� �눺겆싻겉�',
		menu		: '圭棘�劇 �댭먁싻� �눺겆싻겉�',
		action		: '內橘剋畇�띚�',
		method		: '�먓�均逵',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: '鬼棘均棘均�� �궿겆뿅귈겉��뗊� �댭먁싻� �눺겆싻겉�',
		selectInfo	: '�쑸띚닌띛띚뿌띚�',
		opAvail		: '�샫닉꽹띛끧귂띚� �곍압싻넓압뿌�',
		value		: '叫�궿넓�',
		size		: '奎�띚셸뚜띛�',
		lines		: '�쑻⒠�',
		chkMulti	: '�왧뿅압� 鈞奈橘剋 鈞�띛��띚� �곍압싻넓앗끧뗊� 鈞旦勻�댰⒢⒠�旦��',
		opText		: '龜�띚붇곎�',
		opValue		: '叫�궿넓�',
		btnAdd		: '�앇띚솅띛�',
		btnModify	: '斷旦��눺뿐⒠�',
		btnUp		: '�붡띛띛�',
		btnDown		: '�붠압앗�',
		btnSetValue : '鬼棘戟均棘均畇�곍겆� �꺫궿넓� 棘戟棘棘��',
		btnDelete	: '叫�곎궿넓겉�'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '龜筠克�곎� 棘��눺싼� �댭먁싻� �눺겆싻겉�',
		cols		: '�뫰겆넓겆싻�',
		rows		: '�쑻⒠�'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '龜筠克�곎� �궿겆뿅귈겉��뗊� �댭먁싻� �눺겆싻겉�',
		name		: '�앇띛�',
		value		: '叫�궿넓�',
		charWidth	: '龜�띚셸닌띚넘귂뗊� 旦�均旦戟',
		maxChars	: '奎逵劇均龜橘戟 龜�� �귂띚셸닌띚넘�',
		type		: '龜旦�旦剋',
		typeText	: '龜筠克�곎�',
		typePass	: '�앇꺫꺫� 奈均'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '�앇꺫꺫� �궿겆뿅귈겉��뗊� �댭먁싻� �눺겆싻겉�',
		name	: '�앇띛�',
		value	: '叫�궿넓�'
	},

	// Image Dialog.
	image :
	{
		title		: '�쀑꺫�逵均',
		titleButton	: '�쀑꺫�均逵戟 �궿압꽹눺싼� �댭먁싻� �눺겆싻겉�',
		menu		: '�쀑꺫�逵均',
		infoTab		: '�쀑꺫�逵均戟�� 劇�띚닌띛띚뿌띚�',
		btnUpload	: '內奈戟龜橘均 �곍둘�勻�띛��奈奈 龜剋均�띛�',
		upload		: '奎�꺫꺪뿅겉�',
		alt			: '�쀑꺫�均龜橘均 棘�剋棘�� 閨龜�눺꽹띛�',
		lockRatio	: '�졤겆닉먁� �귃�均菌龜��',
		resetSize	: '�끧띚셸뚜띛� 畇逵�끦먁� 棘戟棘棘��',
		border		: '奎奈��띛�',
		hSpace		: '奎旦戟畇剋旦戟 鈞逵橘',
		vSpace		: '�뫰앗곍압� 鈞逵橘',
		alertUrl	: '�쀑꺫�逵均戟�� URL-�뗊� �귅⒠�剋龜橘戟 �곍압싻넓압싻� �꺫�',
		linkTab		: '奎棘剋閨棘棘��',
		button2Img	: 'Do you want to transform the selected image button on a simple image?', // MISSING
		img2Button	: 'Do you want to transform the selected image on a image button?', // MISSING
		urlMissing	: '�쀑꺫�均龜橘戟 �띛� �곎꺫�勻逵剋菌龜橘戟 �끦겉뤢� (URL) 閨逵橘�끦넙�橘 閨逵橘戟逵.',
		validateBorder	: 'Border must be a whole number.', // MISSING
		validateHSpace	: 'HSpace must be a whole number.', // MISSING
		validateVSpace	: 'VSpace must be a whole number.' // MISSING
	},

	// Flash Dialog
	flash :
	{
		properties		: '圭剋逵�� �댭먁싻� �눺겆싻겉�',
		propertiesTab	: 'Properties', // MISSING
		title			: '圭剋逵��  �댭먁싻� �눺겆싻겉�',
		chkPlay			: '�먒꽹궿압셸겉궿겆겉� �궿압넓뿅앗�',
		chkLoop			: '�붠겆꽹궿겉�',
		chkMenu			: '圭剋逵�� �녢띛� 龜畇勻�띛끦뚝�奈剋�띛�',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: '斷�均旦均�궿넛⒠�',
		scaleAll		: '�뫲�均畇龜橘均 �끦겉��꺫꺪뿅겉�',
		scaleNoBorder	: '奎奈��띛띚넙�橘',
		scaleFit		: '赳均 �궿겆겉��꺫꺪뿅겉�',
		access			: 'Script Access', // MISSING
		accessAlways	: '�왧싼녡뿅압넘꺫꺪�',
		accessSameDomain: '�뫰겆밀싻넓�',
		accessNever		: '奎�띚롤띛� �� 奈均奈橘',
		alignAbsBottom	: 'Abs 畇棘棘畇 �궿겆뿅�',
		alignAbsMiddle	: 'Abs �붡꺪싻� �궿겆뿅�',
		alignBaseline	: 'Baseline',
		alignTextTop	: '龜筠克�곎� 畇�띛띛�',
		quality			: 'Quality', // MISSING
		qualityBest		: 'Best', // MISSING
		qualityHigh		: 'High', // MISSING
		qualityAutoHigh	: 'Auto High', // MISSING
		qualityMedium	: 'Medium', // MISSING
		qualityAutoLow	: 'Auto Low', // MISSING
		qualityLow		: 'Low', // MISSING
		windowModeWindow: 'Window', // MISSING
		windowModeOpaque: 'Opaque', // MISSING
		windowModeTransparent : 'Transparent', // MISSING
		windowMode		: 'Window mode', // MISSING
		flashvars		: 'Variables for Flash', // MISSING
		bgcolor			: '�붡띚꽹곍넘띛� 旦戟均旦',
		hSpace			: '奎旦戟畇剋旦戟 鈞逵橘',
		vSpace			: '�뫰앗곍압� 鈞逵橘',
		validateSrc		: '�쎩먁싻� URL-�띛� �귅⒠�旦剋菌奈奈剋戟�� 奈奈',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '內均龜橘戟 畇奈��띛� �댭겆뿅넓겉�',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: '龜棘剋�� 閨龜�눺먁넓넙�橘',
		changeTo		: '斷旦��눺뿐⒠�',
		btnIgnore		: '�쀓⒟꽹댰⒢⒠�旦��',
		btnIgnoreAll	: '�뫲�均畇龜橘均 鈞旦勻�댰⒢⒠�旦��',
		btnReplace		: '鬼棘剋龜��',
		btnReplaceAll	: '�뫲�均畇龜橘均 �붠겉�菌 閨龜�눺먈�',
		btnUndo			: '�뫱꺫녡겆겉�',
		noSuggestions	: '- 龜逵橘剋閨逵�均奈橘 -',
		progress		: '�붢���띚� �댭겆뿅넓겆� 閨逵橘均逵逵 奈橘剋 �뤢꽹�...',
		noMispell		: '�붢���띚� �댭겆뿅넓겆겆� 畇�꺫꺫곎곍겆�: �먒뿅닉겆� 棘剋畇�곍압싻넙�橘',
		noChanges		: '�붢���띚� �댭겆뿅넓겆겆� 畇�꺫꺫곎곍겆�: 奈均 旦旦��눺뿐⒟넓닒⒢⒟넙�橘',
		oneChange		: '�붢���띚� �댭겆뿅넓겆겆� 畇�꺫꺫곎곍겆�: 1 奈均 旦旦��눺뿐⒟넓닌곐⒟�',
		manyChanges		: '�붢���띚� �댭겆뿅넓겆겆� 畇�꺫꺫곎곍겆�: %1 奈均 旦旦��눺뿐⒟넓닌곐⒟�',
		ieSpellDownload	: '�붢���띚� �댭겆뿅넓겆넘� �곎꺫꺪넓겆겆넙�橘 閨逵橘戟逵. 龜逵�궿겆� 逵勻逵�끧뗊� �끨��곎� 閨逵橘戟逵 �꺫�?'
	},

	smiley :
	{
		toolbar	: '龜棘畇棘��끦압밀뿅압뿌�',
		title	: '龜棘畇棘��끦압밀뿅압뿌� 棘��꺫꺪뿅겉�',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: '�붡꺪넓겆겉�剋逵均畇�곍겆� 菌逵均�곍겆겆뿌�',
	bulletedlist	: '揆�띚넘귂띚� 菌逵均�곍겆겆뿌�',
	indent			: '�붠압넓압� 劇旦� �끦겉곍겉�',
	outdent			: '�붠압넓압� 劇旦� 戟�띚솅띛�',

	justify :
	{
		left	: '�쀒�奈戟 �궿겆뿅� �귂꺪뿅넓겉�',
		center	: '�볂압뿅뿌꺫꺪뿅겉�',
		right	: '�뫰겉��꺫꺪� �궿겆뿅� �귂꺪뿅넓겉�',
		block	: '龜�띚넘댭뿌띛�'
	},

	blockquote : '�샭댭뿌띚� �끧띛곎띚�',

	clipboard :
	{
		title		: '�뫱꺫꺪뿅넓겉�',
		cutError	: '龜逵戟�� browser-�뗊� �끦겆셸넓겆겆뿅겆뿌귂뗊� �궿앗끦먈�均棘棘 editor-畇 逵勻�궿압셸겉궿겆겉� �끦겆밂눺뿅겉� 奈橘剋畇�띚뿅먁밀� 鈞旦勻�댰⒢⒠�旦�끦넙�橘 閨逵橘戟逵. (Ctrl/Cmd+X) �궿압꽹눺싼� �끦앗곍뿅압뿌뗊� 逵�댭먁넓뿅겆싻� �꺫�.',
		copyError	: '龜逵戟�� browser-�뗊� �끦겆셸넓겆겆뿅겆뿌귂뗊� �궿앗끦먈�均棘棘 editor-畇 逵勻�궿압셸겉궿겆겉� �끧꺫꺪뿅겉� 奈橘剋畇�띚뿅먁밀� 鈞旦勻�댰⒢⒠�旦�끦넙�橘 閨逵橘戟逵. (Ctrl/Cmd+C) �궿압꽹눺싼� �끦앗곍뿅압뿌뗊� 逵�댭먁넓뿅겆싻� �꺫�.',
		pasteMsg	: '(<strong>Ctrl/Cmd+V</strong>) �궿압꽹눺먁밀� 逵�댭먁넓뿅겆� paste �끦먁밀싼� 奈奈. �쑻⒟� <strong>OK</strong> 畇逵�.',
		securityMsg	: '龜逵戟�� 奈鈞奈奈剋�띚넘�/browser/-戟 �끦겆셸넓겆겆뿅겆뿌귂뗊� �궿앗끦먈�均棘棘戟棘棘�� 閨棘剋棘棘畇 editor clipboard 旦均旦均畇旦剋�奈奈 �댮꺫꺪� �끦겆싻닉겉� 閨棘剋棘劇菌均奈橘. 葵戟�� �녡압싼끦압� 畇逵�끦먁� paste �끦먁밂끦먁밀� 棘�棘剋畇.',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: 'Word-棘棘�� 閨�꺫꺪뿅넓겉�',
		title			: 'Word-棘棘�� 閨�꺫꺪뿅넓겉�',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '葵戟均龜橘戟 閨龜�눺꽹띛��띛띛� 閨�꺫꺪뿅넓겉�',
		title	: '葵戟均龜橘戟 閨龜�눺꽹띛��띛띛� 閨�꺫꺪뿅넓겉�'
	},

	templates :
	{
		button			: '�쀐겆넓꽥겉��꺫꺪�',
		title			: '�쀐겆넓꽥겉��뗊� 逵均�꺫꺪뿅넓�',
		options : 'Template Options', // MISSING
		insertOption	: '�왧닉압압넓먁밀� 逵均�꺫꺪뿅뿅겆넘뗊� 畇逵�菌 閨龜�눺먈�',
		selectPromptMsg	: '�쀐겆넓꽥겉��뗊� 戟�띛띚� editor-�奈奈 �곍압싻넓압� 棘��꺫꺪뿅싻� �꺫�<br />(�왧닉압압넓먁밀� 逵均�꺫꺪뿅뿅겆넘뗊� �꺫곎궿겆� 劇逵均逵畇均奈橘):',
		emptyListMsg	: '(�쀐겆넓꽥겉� �궿압닉앗��끦압밀뿅압넓닉압압넙�橘 閨逵橘戟逵)'
	},

	showBlocks : '奎逵勻�궿겆싻넘꺫꺪닌뗊� �끦겉��꺫꺪뿅겉�',

	stylesCombo :
	{
		label		: '�쀐겆넓꽥겉�',
		panelTitle	: '�쀐겆넓꽥겉� �끧띚뿅귐띛�菌奈奈剋�띛�',
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: '�읩겉�逵�均逵�꾊뗊� 鈞逵均勻逵�',
		panelTitle	: '�읩겉�逵�均逵�꾊뗊� 鈞逵均勻逵�',

		tag_p		: '奎�띚꽥먁밀�',
		tag_pre		: 'Formatted',
		tag_address	: '奎逵�뤢�',
		tag_h1		: '�볂겉��눺먁� 1',
		tag_h2		: '�볂겉��눺먁� 2',
		tag_h3		: '�볂겉��눺먁� 3',
		tag_h4		: '�볂겉��눺먁� 4',
		tag_h5		: '�볂겉��눺먁� 5',
		tag_h6		: '�볂겉��눺먁� 6',
		tag_div		: 'Paragraph (DIV)'
	},

	div :
	{
		title				: 'Div 均�띚닌띚� �끧띛곎띚� 閨龜橘 閨棘剋均棘��',
		toolbar				: 'Div 均�띚닌띚� �끧띛곎띚� 閨龜橘 閨棘剋均棘��',
		cssClassInputLabel	: 'Stylesheet Classes', // MISSING
		styleSelectLabel	: 'Style', // MISSING
		IdInputLabel		: 'Id', // MISSING
		languageCodeInputLabel	: ' Language Code', // MISSING
		inlineStyleInputLabel	: 'Inline Style', // MISSING
		advisoryTitleInputLabel	: 'Advisory Title', // MISSING
		langDirLabel		: 'Language Direction', // MISSING
		langDirLTRLabel		: '�쀒�奈戟 �궿겆뿅겆겉� 閨逵��꺫꺪� �궿먈댮띛� (LTR)',
		langDirRTLLabel		: '�뫰겉��꺫꺪� �궿겆뿅겆겉� 鈞奈奈戟 �궿먈댮띛� (RTL)',
		edit				: 'Edit Div', // MISSING
		remove				: 'Remove Div' // MISSING
  	},

	iframe :
	{
		title		: 'IFrame Properties', // MISSING
		toolbar		: 'IFrame', // MISSING
		noUrl		: 'Please type the iframe URL', // MISSING
		scrolling	: 'Enable scrollbars', // MISSING
		border		: 'Show frame border' // MISSING
	},

	font :
	{
		label		: '內�곍넓먁밀� �끧띚뿅귐띛�',
		voiceLabel	: '內均�곍먁밀� �끧띚뿅귐띛�',
		panelTitle	: '內均�곍먁밀� �끧띚뿅귐띛�龜橘戟 戟�띛�'
	},

	fontSize :
	{
		label		: '奎�띚셸뚜띛�',
		voiceLabel	: '內�곍넓먁밀� �끧띚셸뚜띛�',
		panelTitle	: '內�곍넓먁밀� �끧띚셸뚜띛�'
	},

	colorButton :
	{
		textColorTitle	: '�뫰먈눺꽹띛�龜橘戟 旦戟均旦',
		bgColorTitle	: '�붡띚꽹곍넘띛� 旦戟均旦',
		panelTitle		: '斷戟均旦戟奈奈畇',
		auto			: '�먒꽹궿압셸겉궿겆겉�',
		more			: '�앇띚솅띚뿌� 旦戟均旦戟奈奈畇...'
	},

	colors :
	{
		'000' : '奎逵�',
		'800000' : '奎奈��띚�',
		'8B4513' : 'Saddle Brown', // MISSING
		'2F4F4F' : 'Dark Slate Gray', // MISSING
		'008080' : 'Teal', // MISSING
		'000080' : 'Navy', // MISSING
		'4B0082' : 'Indigo', // MISSING
		'696969' : 'Dark Gray', // MISSING
		'B22222' : 'Fire Brick', // MISSING
		'A52A2A' : 'Brown', // MISSING
		'DAA520' : 'Golden Rod', // MISSING
		'006400' : 'Dark Green', // MISSING
		'40E0D0' : 'Turquoise', // MISSING
		'0000CD' : 'Medium Blue', // MISSING
		'800080' : 'Purple', // MISSING
		'808080' : '鬼逵逵�逵剋',
		'F00' : '叫剋逵逵戟',
		'FF8C00' : 'Dark Orange', // MISSING
		'FFD700' : '�먒뿌�',
		'008000' : '�앆압넓압압�',
		'0FF' : '揆�띚싼끧띛�',
		'00F' : '奎旦��',
		'EE82EE' : '赳均逵逵戟',
		'A9A9A9' : 'Dim Gray', // MISSING
		'FFA07A' : 'Light Salmon', // MISSING
		'FFA500' : '叫剋閨逵� �댭겉�',
		'FFFF00' : '珪逵�',
		'00FF00' : 'Lime', // MISSING
		'AFEEEE' : 'Pale Turquoise', // MISSING
		'ADD8E6' : 'Light Blue', // MISSING
		'DDA0DD' : 'Plum', // MISSING
		'D3D3D3' : '揆逵橘勻逵� �곍겆겉�逵剋',
		'FFF0F5' : 'Lavender Blush', // MISSING
		'FAEBD7' : 'Antique White', // MISSING
		'FFFFE0' : 'Light Yellow', // MISSING
		'F0FFF0' : 'Honeydew', // MISSING
		'F0FFFF' : 'Azure', // MISSING
		'F0F8FF' : 'Alice Blue', // MISSING
		'E6E6FA' : 'Lavender', // MISSING
		'FFF' : '揆逵均逵逵戟'
	},

	scayt :
	{
		title			: 'Spell Check As You Type', // MISSING
		opera_title		: 'Not supported by Opera', // MISSING
		enable			: 'Enable SCAYT', // MISSING
		disable			: 'Disable SCAYT', // MISSING
		about			: 'About SCAYT', // MISSING
		toggle			: 'Toggle SCAYT', // MISSING
		options			: '鬼棘戟均棘剋��',
		langs			: '奎�띚뿍�奈畇',
		moreSuggestions	: 'More suggestions', // MISSING
		ignore			: 'Ignore', // MISSING
		ignoreAll		: 'Ignore All', // MISSING
		addWord			: 'Add Word', // MISSING
		emptyDic		: 'Dictionary name should not be empty.', // MISSING
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: '鬼棘戟均棘剋��',
		allCaps			: 'Ignore All-Caps Words', // MISSING
		ignoreDomainNames : 'Ignore Domain Names', // MISSING
		mixedCase		: 'Ignore Words with Mixed Case', // MISSING
		mixedWithDigits	: 'Ignore Words with Numbers', // MISSING

		languagesTab	: '奎�띚뿍�奈畇',

		dictionariesTab	: '龜棘剋�� 閨龜�눺넙�奈畇',
		dic_field_name	: 'Dictionary name', // MISSING
		dic_create		: '�뫰먁� 閨棘剋均棘��',
		dic_restore		: 'Restore', // MISSING
		dic_delete		: '叫�곎궿넓겉�',
		dic_rename		: '�앇띛�龜橘均 �곍압뿅먈�',
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: 'About' // MISSING
	},

	about :
	{
		title		: 'About CKEditor', // MISSING
		dlgTitle	: 'About CKEditor', // MISSING
		help	: 'Check $1 for help.', // MISSING
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: 'For licensing information please visit our web site:', // MISSING
		copy		: 'Copyright &copy; $1. All rights reserved.' // MISSING
	},

	maximize : '�붡띚뿅넘띛� 畇奈奈�均�띛�',
	minimize : '揆棘戟�끧뗊� 閨逵均�곍넓겆� �끦겉��꺫꺪뿅겉�',

	fakeobjects :
	{
		anchor		: '�쀐겆싻넘꺫�',
		flash		: 'Flash Animation', // MISSING
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: 'Unknown Object' // MISSING
	},

	resize : 'Drag to resize', // MISSING

	colordialog :
	{
		title		: 'Select color', // MISSING
		options	:	'Color Options', // MISSING
		highlight	: 'Highlight', // MISSING
		selected	: 'Selected Color', // MISSING
		clear		: 'Clear' // MISSING
	},

	toolbarCollapse	: 'Collapse Toolbar', // MISSING
	toolbarExpand	: 'Expand Toolbar', // MISSING

	toolbarGroups :
	{
		document : 'Document', // MISSING
		clipboard : 'Clipboard/Undo', // MISSING
		editing : 'Editing', // MISSING
		forms : 'Forms', // MISSING
		basicstyles : 'Basic Styles', // MISSING
		paragraph : 'Paragraph', // MISSING
		links : '奎棘剋閨棘棘�곎꺫꺪�',
		insert : '�왨��꺫꺪뿅겉�',
		styles : '�쀐겆넓꽥겉��꺫꺪�',
		colors : '�왧싻넛⒟쌀�奈畇',
		tools : '奎�띛��띚넘곍뿍�奈畇'
	},

	bidi :
	{
		ltr : '�쀒�奈戟�띛띛� 閨逵��꺫꺪� �궿먁밂� 閨龜�눺뿌띚�',
		rtl : '�뫰겉��꺫꺪싻겆겉� 鈞奈奈戟 �궿먁밂� 閨龜�눺뿌띚�'
	},

	docprops :
	{
		label : '�뫰겉�龜劇�� 閨龜�눺먁� �댭먁싻� �눺겆싻겉�',
		title : '�뫰겉�龜劇�� 閨龜�눺먁� �댭먁싻� �눺겆싻겉�',
		design : 'Design', // MISSING
		meta : 'Meta 旦均旦均畇旦剋',
		chooseColor : '鬼棘戟均棘��',
		other : '<other>',
		docTitle :	'奎�꺫꺪닉겉곍싼� 均逵��눺먁�',
		charset : 	'Encoding �귂띚셸닌띚넘�',
		charsetOther : 'Encoding-畇 旦旦� �귂띚셸닌띚넘� 棘戟棘棘��',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : '龜旦勻 筠勻�棘極',
		charsetCT : '奎�뤣궿겆닌뗊� �꺪뿅겆셸뙨뿅겆뿌� (Big5)',
		charsetCR : '�싎�龜剋',
		charsetGR : '�볃�筠畇',
		charsetJP : '赳極棘戟',
		charsetKR : '鬼棘剋棘戟均棘��',
		charsetTR : 'T�꺫�克',
		charsetUN : '規戟龜克棘畇 (UTF-8)',
		charsetWE : '�뫰겉��꺫꺪� 筠勻�棘極',
		docType : '�뫰겉�龜劇�� 閨龜�눺넓먁밀� �귅⒠�旦剋 Heading',
		docTypeOther : '�뫱꺫곍겆� 閨逵�龜劇�� 閨龜�눺넓먁밀� �귅⒠�旦剋 Heading',
		xhtmlDec : 'XHTML-龜橘戟 劇�띚닌띛띚뿅뿅먁밀� 逵均�꺫꺪뿅겉�',
		bgColor : '圭棘戟棘 旦戟均旦',
		bgImage : '圭棘戟棘 鈞�꺫�逵均戟�� URL',
		bgFixed : '�볅�橘畇�띚넓넙�橘 �꾉압싻�',
		txtColor : '圭棘戟�궿싼� 旦戟均旦',
		margin : '奎�꺫꺪닉겉곍싼� 鈞逵�끧뗊� 鈞逵橘',
		marginTop : '�붡띛띚� �궿겆�',
		marginLeft : '�쀒�奈戟 �궿겆�',
		marginRight : '�뫰겉��꺫꺪� �궿겆�',
		marginBottom : '�붠압압� �궿겆�',
		metaKeywords : '�뫰겉�龜劇�� 閨龜�눺넓먁밀� 龜戟畇筠克�� �귃�剋�끨�奈� 奈均 (�궿겉곍뿅겆뿅겆겉� �귂꺫곍넓겆겉�剋逵均畇逵戟逵)',
		metaDescription : '�뫰겉�龜劇�� 閨龜�눺넓먁밀� �궿겆밀뿅귈겉�',
		metaAuthor : '�쀐앗끦먁압넘�',
		metaCopyright : '�쀐앗끦먁압넘눺먁밀� �띛���',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};