/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
* @fileOverview
*/

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['sv'] =
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
	editorHelp : 'Tryck ALT 0 f철r hj채lp',

	// ARIA descriptions.
	toolbars	: 'Editor toolbars', // MISSING
	editor		: 'Rich Text Editor',

	// Toolbar buttons without dialogs.
	source			: 'K채lla',
	newPage			: 'Ny sida',
	save			: 'Spara',
	preview			: 'F철rhandsgranska',
	cut				: 'Klipp ut',
	copy			: 'Kopiera',
	paste			: 'Klistra in',
	print			: 'Skriv ut',
	underline		: 'Understruken',
	bold			: 'Fet',
	italic			: 'Kursiv',
	selectAll		: 'Markera allt',
	removeFormat	: 'Radera formatering',
	strike			: 'Genomstruken',
	subscript		: 'Neds채nkta tecken',
	superscript		: 'Upph철jda tecken',
	horizontalrule	: 'Infoga horisontal linje',
	pagebreak		: 'Infoga sidbrytning',
	pagebreakAlt		: 'Sidbrytning',
	unlink			: 'Radera l채nk',
	undo			: '횇ngra',
	redo			: 'G철r om',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Bl채ddra p책 server',
		url				: 'URL',
		protocol		: 'Protokoll',
		upload			: 'Ladda upp',
		uploadSubmit	: 'Skicka till server',
		image			: 'Bild',
		flash			: 'Flash',
		form			: 'Formul채r',
		checkbox		: 'Kryssruta',
		radio			: 'Alternativknapp',
		textField		: 'Textf채lt',
		textarea		: 'Textruta',
		hiddenField		: 'Dolt f채lt',
		button			: 'Knapp',
		select			: 'Flervalslista',
		imageButton		: 'Bildknapp',
		notSet			: '<ej angivet>',
		id				: 'Id',
		name			: 'Namn',
		langDir			: 'Spr책kriktning',
		langDirLtr		: 'V채nster till H철ger (VTH)',
		langDirRtl		: 'H철ger till V채nster (HTV)',
		langCode		: 'Spr책kkod',
		longDescr		: 'URL-beskrivning',
		cssClass		: 'Stilmall',
		advisoryTitle	: 'Titel',
		cssStyle		: 'Stilmall',
		ok				: 'OK',
		cancel			: 'Avbryt',
		close			: 'St채ng',
		preview			: 'F철rhandsgranska',
		generalTab		: 'Allm채nt',
		advancedTab		: 'Avancerad',
		validateNumberFailed : 'V채rdet 채r inte ett nummer.',
		confirmNewPage	: 'Alla 채ndringar i inneh책llet kommer att f철rloras. 횆r du s채ker p책 att du vill ladda en ny sida?',
		confirmCancel	: 'N책gra av de alternativ har 채ndrats. 횆r du s채ker p책 att st채nga dialogrutan?',
		options			: 'Alternativ',
		target			: 'M책l',
		targetNew		: 'Nytt f철nster (_blank)',
		targetTop		: '횜versta f철nstret (_top)',
		targetSelf		: 'Samma f철nster (_self)',
		targetParent	: 'F철reg책ende f철nster (_parent)',
		langDirLTR		: 'V채nster till h철ger (LTR)',
		langDirRTL		: 'H철ger till v채nster (RTL)',
		styles			: 'Stil',
		cssClasses		: 'Stilmallar',
		width			: 'Bredd',
		height			: 'H철jd',
		align			: 'Justering',
		alignLeft		: 'V채nster',
		alignRight		: 'H철ger',
		alignCenter		: 'Centrerad',
		alignTop		: '횜verkant',
		alignMiddle		: 'Mitten',
		alignBottom		: 'Nederkant',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'H철jd m책ste vara ett nummer.',
		invalidWidth	: 'Bredd m책ste vara ett nummer.',
		invalidCssLength	: 'Value specified for the "%1" field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING
		invalidHtmlLength	: 'Value specified for the "%1" field must be a positive number with or without a valid HTML measurement unit (px or %).', // MISSING
		invalidInlineStyle	: 'Value specified for the inline style must consist of one or more tuples with the format of "name : value", separated by semi-colons.', // MISSING
		cssLengthTooltip	: 'Enter a number for a value in pixels or a number with a valid CSS unit (px, %, in, cm, mm, em, ex, pt, or pc).', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, Ej tillg채nglig</span>'
	},

	contextmenu :
	{
		options : 'Context Menu Options'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Klistra in ut철kat tecken',
		title		: 'V채lj ut철kat tecken',
		options : 'Special Character Options'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Infoga/Redigera l채nk',
		other 		: '<annan>',
		menu		: 'Redigera l채nk',
		title		: 'L채nk',
		info		: 'L채nkinformation',
		target		: 'M책l',
		upload		: 'Ladda upp',
		advanced	: 'Avancerad',
		type		: 'L채nktyp',
		toUrl		: 'URL',
		toAnchor	: 'Ankare i sidan',
		toEmail		: 'E-post',
		targetFrame		: '<ram>',
		targetPopup		: '<popup-f철nster>',
		targetFrameName	: 'M책lets ramnamn',
		targetPopupName	: 'Popup-f철nstrets namn',
		popupFeatures	: 'Popup-f철nstrets egenskaper',
		popupResizable	: 'Resizable',
		popupStatusBar	: 'Statusf채lt',
		popupLocationBar: 'Adressf채lt',
		popupToolbar	: 'Verktygsf채lt',
		popupMenuBar	: 'Menyf채lt',
		popupFullScreen	: 'Helsk채rm (endast IE)',
		popupScrollBars	: 'Scrolllista',
		popupDependent	: 'Beroende (endast Netscape)',
		popupLeft		: 'Position fr책n v채nster',
		popupTop		: 'Position fr책n sidans topp',
		id				: 'Id',
		langDir			: 'Spr책kriktning',
		langDirLTR		: 'V채nster till h철ger (VTH)',
		langDirRTL		: 'H철ger till v채nster (HTV)',
		acccessKey		: 'Beh철righetsnyckel',
		name			: 'Namn',
		langCode			: 'Spr책kriktning',
		tabIndex			: 'Tabindex',
		advisoryTitle		: 'Titel',
		advisoryContentType	: 'Inneh책llstyp',
		cssClasses		: 'Stylesheet class',
		charset			: 'Teckenuppst채llning',
		styles			: 'Stilmall',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'V채lj ett ankare',
		anchorName		: 'efter ankarnamn',
		anchorId			: 'efter objektid',
		emailAddress		: 'E-postadress',
		emailSubject		: '횆mne',
		emailBody		: 'Inneh책ll',
		noAnchors		: '(Inga ankare kunde hittas)',
		noUrl			: 'Var god ange l채nkens URL',
		noEmail			: 'Var god ange E-postadress'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Infoga/Redigera ankarl채nk',
		menu		: 'Egenskaper f철r ankarl채nk',
		title		: 'Egenskaper f철r ankarl채nk',
		name		: 'Ankarnamn',
		errorName	: 'Var god ange ett ankarnamn',
		remove		: 'Remove Anchor' // MISSING
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Egenskaper f철r punktlista',
		bulletedTitle		: 'Egenskaper f철r punktlista',
		type				: 'Typ',
		start				: 'Start',
		validateStartNumber				:'List start number must be a whole number.',
		circle				: 'Cirkel',
		disc				: 'Disk',
		square				: 'Fyrkant',
		none				: 'Ingen',
		notset				: '<ej angiven>',
		armenian			: 'Armenisk numrering',
		georgian			: 'Georgisk numrering (an, ban, gan, etc.)',
		lowerRoman			: 'Romerska gemener (i, ii, iii, iv, v, etc.)',
		upperRoman			: 'Romerska versaler (I, II, III, IV, V, etc.)',
		lowerAlpha			: 'Alpha gemener (a, b, c, d, e, etc.)',
		upperAlpha			: 'Alpha versaler (A, B, C, D, E, etc.)',
		lowerGreek			: 'Grekiska gemener (alpha, beta, gamma, etc.)',
		decimal				: 'Decimal (1, 2, 3, etc.)',
		decimalLeadingZero	: 'Decimal nolla (01, 02, 03, etc.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'S철k och ers채tt',
		find				: 'S철k',
		replace				: 'Ers채tt',
		findWhat			: 'S철k efter:',
		replaceWith			: 'Ers채tt med:',
		notFoundMsg			: 'Angiven text kunde ej hittas.',
		findOptions			: 'Find Options', // MISSING
		matchCase			: 'Skiftl채ge',
		matchWord			: 'Inkludera hela ord',
		matchCyclic			: 'Matcha cykliska',
		replaceAll			: 'Ers채tt alla',
		replaceSuccessMsg	: '%1 f철rekomst(er) ersatta.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabell',
		title		: 'Tabellegenskaper',
		menu		: 'Tabellegenskaper',
		deleteTable	: 'Radera tabell',
		rows		: 'Rader',
		columns		: 'Kolumner',
		border		: 'Kantstorlek',
		widthPx		: 'pixlar',
		widthPc		: 'procent',
		widthUnit	: 'enhet bredd',
		cellSpace	: 'Cellavst책nd',
		cellPad		: 'Cellutfyllnad',
		caption		: 'Rubrik',
		summary		: 'Sammanfattning',
		headers		: 'Ruberiker',
		headersNone		: 'Ingen',
		headersColumn	: 'F철rsta kolumnen',
		headersRow		: 'F철rsta raden',
		headersBoth		: 'B책da',
		invalidRows		: 'Antal rader m책ste vara st철rre 채n 0.',
		invalidCols		: 'Antal kolumner m책ste vara ett nummer st철rre 채n 0.',
		invalidBorder	: 'Ram m책ste vara ett nummer.',
		invalidWidth	: 'Tabell m책ste vara ett nummer.',
		invalidHeight	: 'Tabellens h철jd m책ste vara ett nummer.',
		invalidCellSpacing	: 'Luft i cell m책ste vara ett nummer.',
		invalidCellPadding	: 'Luft i cell m책ste vara ett nummer.',

		cell :
		{
			menu			: 'Cell',
			insertBefore	: 'L채gg till cell f철re',
			insertAfter		: 'L채gg till cell efter',
			deleteCell		: 'Radera celler',
			merge			: 'Sammanfoga celler',
			mergeRight		: 'Sammanfoga h철ger',
			mergeDown		: 'Sammanfoga ner',
			splitHorizontal	: 'Dela cell horisontellt',
			splitVertical	: 'Dela cell vertikalt',
			title			: 'Egenskaper f철r cell',
			cellType		: 'Celltyp',
			rowSpan			: 'Rad spann',
			colSpan			: 'Kolumnen spann',
			wordWrap		: 'Radbrytning',
			hAlign			: 'Horisontell justering',
			vAlign			: 'Vertikal justering',
			alignBaseline	: 'Baslinje',
			bgColor			: 'Bakgrundsf채rg',
			borderColor		: 'Ramf채rg',
			data			: 'Data',
			header			: 'Rubrik',
			yes				: 'Ja',
			no				: 'Nej',
			invalidWidth	: 'Cellens bredd m책ste vara ett nummer.',
			invalidHeight	: 'Cellens h철jd m책ste vara ett nummer.',
			invalidRowSpan	: 'Radutvidgning m책ste vara ett heltal.',
			invalidColSpan	: 'Kolumn m책ste vara ett heltal.',
			chooseColor		: 'V채lj'
		},

		row :
		{
			menu			: 'Rad',
			insertBefore	: 'L채gg till Rad F철re',
			insertAfter		: 'L채gg till rad efter',
			deleteRow		: 'Radera rad'
		},

		column :
		{
			menu			: 'Kolumn',
			insertBefore	: 'L채gg till kolumn f철re',
			insertAfter		: 'L채gg till kolumn efter',
			deleteColumn	: 'Radera kolumn'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Egenskaper f철r knapp',
		text		: 'Text (v채rde)',
		type		: 'Typ',
		typeBtn		: 'Knapp',
		typeSbm		: 'Skicka',
		typeRst		: '횇terst채ll'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Egenskaper f철r kryssruta',
		radioTitle	: 'Egenskaper f철r alternativknapp',
		value		: 'V채rde',
		selected	: 'Vald'
	},

	// Form Dialog.
	form :
	{
		title		: 'Egenskaper f철r formul채r',
		menu		: 'Egenskaper f철r formul채r',
		action		: 'Funktion',
		method		: 'Metod',
		encoding	: 'Kodning'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Egenskaper f철r flervalslista',
		selectInfo	: 'Information',
		opAvail		: 'Befintliga val',
		value		: 'V채rde',
		size		: 'Storlek',
		lines		: 'Linjer',
		chkMulti	: 'Till책t flerval',
		opText		: 'Text',
		opValue		: 'V채rde',
		btnAdd		: 'L채gg till',
		btnModify	: 'Redigera',
		btnUp		: 'Upp',
		btnDown		: 'Ner',
		btnSetValue : 'Markera som valt v채rde',
		btnDelete	: 'Radera'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Egenskaper f철r textruta',
		cols		: 'Kolumner',
		rows		: 'Rader'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Egenskaper f철r textf채lt',
		name		: 'Namn',
		value		: 'V채rde',
		charWidth	: 'Teckenbredd',
		maxChars	: 'Max antal tecken',
		type		: 'Typ',
		typeText	: 'Text',
		typePass	: 'L철senord'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Egenskaper f철r dolt f채lt',
		name	: 'Namn',
		value	: 'V채rde'
	},

	// Image Dialog.
	image :
	{
		title		: 'Bildegenskaper',
		titleButton	: 'Egenskaper f철r bildknapp',
		menu		: 'Bildegenskaper',
		infoTab		: 'Bildinformation',
		btnUpload	: 'Skicka till server',
		upload		: 'Ladda upp',
		alt			: 'Alternativ text',
		lockRatio	: 'L책s h철jd/bredd f철rh책llanden',
		resetSize	: '횇terst채ll storlek',
		border		: 'Kant',
		hSpace		: 'Horis. marginal',
		vSpace		: 'Vert. marginal',
		alertUrl	: 'Var god och ange bildens URL',
		linkTab		: 'L채nk',
		button2Img	: 'Vill du omvandla den valda bildknappen p책 en enkel bild?',
		img2Button	: 'Vill du omvandla den valda bildknappen p책 en enkel bild?',
		urlMissing	: 'Bildk채llans URL saknas.',
		validateBorder	: 'Kantlinje m책ste vara ett heltal.',
		validateHSpace	: 'HSpace m책ste vara ett heltal.',
		validateVSpace	: 'VSpace m책ste vara ett heltal.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flashegenskaper',
		propertiesTab	: 'Egenskaper',
		title			: 'Flashegenskaper',
		chkPlay			: 'Automatisk uppspelning',
		chkLoop			: 'Upprepa/Loopa',
		chkMenu			: 'Aktivera Flashmeny',
		chkFull			: 'Till책t helsk채rm',
 		scale			: 'Skala',
		scaleAll		: 'Visa allt',
		scaleNoBorder	: 'Ingen ram',
		scaleFit		: 'Exakt passning',
		access			: 'Script-tillg책ng',
		accessAlways	: 'Alltid',
		accessSameDomain: 'Samma dom채n',
		accessNever		: 'Aldrig',
		alignAbsBottom	: 'Absolut nederkant',
		alignAbsMiddle	: 'Absolut centrering',
		alignBaseline	: 'Baslinje',
		alignTextTop	: 'Text 철verkant',
		quality			: 'Kvalitet',
		qualityBest		: 'B채st',
		qualityHigh		: 'H철g',
		qualityAutoHigh	: 'Auto H철g',
		qualityMedium	: 'Medium',
		qualityAutoLow	: 'Auto L책g',
		qualityLow		: 'L책g',
		windowModeWindow: 'F철nster',
		windowModeOpaque: 'Opaque',
		windowModeTransparent : 'Transparent',
		windowMode		: 'F철nsterl채ge',
		flashvars		: 'Variabler f철r Flash',
		bgcolor			: 'Bakgrundsf채rg',
		hSpace			: 'Horis. marginal',
		vSpace			: 'Vert. marginal',
		validateSrc		: 'Var god ange l채nkens URL',
		validateHSpace	: 'HSpace m책ste vara ett nummer.',
		validateVSpace	: 'VSpace m책ste vara ett nummer.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Stavningskontroll',
		title			: 'Kontrollera stavning',
		notAvailable	: 'Tyv채rr 채r tj채nsten ej tillg채nglig nu',
		errorLoading	: 'Tj채nsten 채r ej tillg채nglig: %s.',
		notInDic		: 'Saknas i ordlistan',
		changeTo		: '횆ndra till',
		btnIgnore		: 'Ignorera',
		btnIgnoreAll	: 'Ignorera alla',
		btnReplace		: 'Ers채tt',
		btnReplaceAll	: 'Ers채tt alla',
		btnUndo			: '횇ngra',
		noSuggestions	: '- F철rslag saknas -',
		progress		: 'Stavningskontroll p책g책r...',
		noMispell		: 'Stavningskontroll slutf철rd: Inga stavfel p책tr채ffades.',
		noChanges		: 'Stavningskontroll slutf철rd: Inga ord r채ttades.',
		oneChange		: 'Stavningskontroll slutf철rd: Ett ord r채ttades.',
		manyChanges		: 'Stavningskontroll slutf철rd: %1 ord r채ttades.',
		ieSpellDownload	: 'Stavningskontrollen 채r ej installerad. Vill du g철ra det nu?'
	},

	smiley :
	{
		toolbar	: 'Smiley',
		title	: 'Infoga smiley',
		options : 'Smileyinst채llningar'
	},

	elementsPath :
	{
		eleLabel : 'Elementets s철kv채g',
		eleTitle : '%1 element'
	},

	numberedlist	: 'Numrerad lista',
	bulletedlist	: 'Punktlista',
	indent			: '횜ka indrag',
	outdent			: 'Minska indrag',

	justify :
	{
		left	: 'V채nsterjustera',
		center	: 'Centrera',
		right	: 'H철gerjustera',
		block	: 'Justera till marginaler'
	},

	blockquote : 'Blockcitat',

	clipboard :
	{
		title		: 'Klistra in',
		cutError	: 'S채kerhetsinst채llningar i Er webl채sare till책ter inte 책tg책rden Klipp ut. Anv채nd (Ctrl/Cmd+X) ist채llet.',
		copyError	: 'S채kerhetsinst채llningar i Er webl채sare till책ter inte 책tg책rden Kopiera. Anv채nd (Ctrl/Cmd+C) ist채llet',
		pasteMsg	: 'Var god och klistra in Er text i rutan nedan genom att anv채nda (<STRONG>Ctrl/Cmd+V</STRONG>) klicka sen p책 <STRONG>OK</STRONG>.',
		securityMsg	: 'P책 grund av din webbl채sares s채kerhetsinst채llningar kan verktyget inte f책 책tkomst till urklippsdatan. Var god och anv채nd detta f철nster ist채llet.',
		pasteArea	: 'Paste Area'
	},

	pastefromword :
	{
		confirmCleanup	: 'Texten du vill klistra in verkar vara kopierad fr책n Word. Vill du rensa innan du klistrar?',
		toolbar			: 'Klistra in fr책n Word',
		title			: 'Klistra in fr책n Word',
		error			: 'Det var inte m철jligt att st채da upp den inklistrade data p책 grund av ett internt fel'
	},

	pasteText :
	{
		button	: 'Klistra in som vanlig text',
		title	: 'Klistra in som vanlig text'
	},

	templates :
	{
		button			: 'Sidmallar',
		title			: 'Sidmallar',
		options : 'Inst채llningar f철r mall',
		insertOption	: 'Ers채tt aktuellt inneh책ll',
		selectPromptMsg	: 'Var god v채lj en mall att anv채nda med editorn<br>(allt nuvarande inneh책ll raderas):',
		emptyListMsg	: '(Ingen mall 채r vald)'
	},

	showBlocks : 'Visa block',

	stylesCombo :
	{
		label		: 'Anpassad stil',
		panelTitle	: 'Formatmallar',
		panelTitle1	: 'Blockstil',
		panelTitle2	: 'Inb채ddad stil',
		panelTitle3	: 'Objektets stil'
	},

	format :
	{
		label		: 'Teckenformat',
		panelTitle	: 'Teckenformat',

		tag_p		: 'Normal',
		tag_pre		: 'Formaterad',
		tag_address	: 'Adress',
		tag_h1		: 'Rubrik 1',
		tag_h2		: 'Rubrik 2',
		tag_h3		: 'Rubrik 3',
		tag_h4		: 'Rubrik 4',
		tag_h5		: 'Rubrik 5',
		tag_h6		: 'Rubrik 6',
		tag_div		: 'Normal (DIV)'
	},

	div :
	{
		title				: 'Skapa Div container',
		toolbar				: 'Skapa Div container',
		cssClassInputLabel	: 'Stilmallar',
		styleSelectLabel	: 'Stil',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Spr책kkod',
		inlineStyleInputLabel	: 'Inline Style',
		advisoryTitleInputLabel	: 'R책dgivande titel',
		langDirLabel		: 'Spr책kriktning',
		langDirLTRLabel		: 'V채nster till H철ger (LTR)',
		langDirRTLLabel		: 'H철ger till v채nster (RTL)',
		edit				: 'Redigera Div',
		remove				: 'Ta bort Div'
  	},

	iframe :
	{
		title		: 'iFrame Egenskaper',
		toolbar		: 'iFrame',
		noUrl		: 'Skriv in URL f철r iFrame',
		scrolling	: 'Aktivera rullningslister',
		border		: 'Visa ramkant'
	},

	font :
	{
		label		: 'Typsnitt',
		voiceLabel	: 'Typsnitt',
		panelTitle	: 'Typsnitt'
	},

	fontSize :
	{
		label		: 'Storlek',
		voiceLabel	: 'Teckenstorlek',
		panelTitle	: 'Storlek'
	},

	colorButton :
	{
		textColorTitle	: 'Textf채rg',
		bgColorTitle	: 'Bakgrundsf채rg',
		panelTitle		: 'F채rger',
		auto			: 'Automatisk',
		more			: 'Fler f채rger...'
	},

	colors :
	{
		'000' : 'Svart',
		'800000' : 'R철dbrun',
		'8B4513' : 'M철rkbrun',
		'2F4F4F' : 'Skiffergr책',
		'008080' : 'Kricka',
		'000080' : 'Marinbl책',
		'4B0082' : 'Indigo',
		'696969' : 'M철rkgr책',
		'B22222' : 'Tegelsten',
		'A52A2A' : 'Brun',
		'DAA520' : 'M철rk guld',
		'006400' : 'M철rkgr철n',
		'40E0D0' : 'Turkos',
		'0000CD' : 'Medium bl책',
		'800080' : 'Lila',
		'808080' : 'Gr책',
		'F00' : 'R철d',
		'FF8C00' : 'M철rkorange',
		'FFD700' : 'Guld',
		'008000' : 'Gr철n',
		'0FF' : 'Turkos',
		'00F' : 'Bl책',
		'EE82EE' : 'Violett',
		'A9A9A9' : 'Matt gr책',
		'FFA07A' : 'Laxrosa',
		'FFA500' : 'Orange',
		'FFFF00' : 'Gul',
		'00FF00' : 'Lime',
		'AFEEEE' : 'Ljusturkos',
		'ADD8E6' : 'Ljusbl책',
		'DDA0DD' : 'Plommon',
		'D3D3D3' : 'Ljusgr책',
		'FFF0F5' : 'Ljus lavender',
		'FAEBD7' : 'Antikvit',
		'FFFFE0' : 'Ljusgul',
		'F0FFF0' : 'Honung',
		'F0FFFF' : 'Azurbl책',
		'F0F8FF' : 'Alicebl책',
		'E6E6FA' : 'Lavender',
		'FFF' : 'Vit'
	},

	scayt :
	{
		title			: 'Stavningskontroll medan du skriver',
		opera_title		: 'St철ds ej av Opera',
		enable			: 'Aktivera SCAYT',
		disable			: 'Inaktivera SCAYT',
		about			: 'Om SCAYT',
		toggle			: 'V채xla SCAYT',
		options			: 'Inst채llningar',
		langs			: 'Spr책k',
		moreSuggestions	: 'Fler f철rslag',
		ignore			: 'Ignorera',
		ignoreAll		: 'Ignorera alla',
		addWord			: 'L채gg till ord',
		emptyDic		: 'Ordlistans namn f책r ej vara tomt.',
		noSuggestions	: 'F철rslag saknas',
		optionsTab		: 'Inst채llningar',
		allCaps			: 'Ignorera alla ord med enbart versaler',
		ignoreDomainNames : 'Ignorera dom채nnamn',
		mixedCase		: 'Ignorera ord med blandat shiftl채ge',
		mixedWithDigits	: 'Ignorera ord med nummer',

		languagesTab	: 'Spr책k',

		dictionariesTab	: 'Ordlistor',
		dic_field_name	: 'Ordlistans namn',
		dic_create		: 'Skapa',
		dic_restore		: '횇terst채ll',
		dic_delete		: 'Ta bort',
		dic_rename		: 'Byt namn',
		dic_info		: 'Inledningsvis lagras ordlistan i en cookie. N채r ordlista v채xer till en punkt d채r det inte kan lagras i en cookie, lagras den p책 v책r server. F철r att lagra din personliga ordlista p책 v책r server du ska ange ett namn f철r din ordbok. Om du redan har en lagrad ordbok, skriv namnet och klicka p책 knappen 횇terst채ll.',

		aboutTab		: 'Om'
	},

	about :
	{
		title		: 'Om CKEditor',
		dlgTitle	: 'Om CKEditor',
		help	: 'Check $1 for help.', // MISSING
		userGuide : 'CKEditor User\'s Guide', // MISSING
		moreInfo	: 'F철r information av licenciering bes철k v책r hemsida:',
		copy		: 'Copyright &copy; $1. Alla r채ttigheter reserverade.'
	},

	maximize : 'Maximera',
	minimize : 'Minimera',

	fakeobjects :
	{
		anchor		: 'Ankare',
		flash		: 'Flashanimation',
		iframe		: 'iFrame',
		hiddenfield	: 'G철mt f채lt',
		unknown		: 'Ok채nt objekt'
	},

	resize : 'Dra f철r att 채ndra storlek',

	colordialog :
	{
		title		: 'V채lj f채rg',
		options	:	'F채rgalternativ',
		highlight	: 'Markera',
		selected	: 'Vald f채rg',
		clear		: 'Rensa'
	},

	toolbarCollapse	: 'D철lj verktygsf채lt',
	toolbarExpand	: 'Visa verktygsf채lt',

	toolbarGroups :
	{
		document : 'Document', // MISSING
		clipboard : 'Clipboard/Undo', // MISSING
		editing : 'Editing', // MISSING
		forms : 'Forms', // MISSING
		basicstyles : 'Basic Styles', // MISSING
		paragraph : 'Paragraph', // MISSING
		links : 'Links', // MISSING
		insert : 'Insert', // MISSING
		styles : 'Styles', // MISSING
		colors : 'Colors', // MISSING
		tools : 'Tools' // MISSING
	},

	bidi :
	{
		ltr : 'Text riktning fr책n v채nster till h철ger',
		rtl : 'Text riktning fr책n h철ger till v채nster'
	},

	docprops :
	{
		label : 'Dokumentegenskaper',
		title : 'Dokumentegenskaper',
		design : 'Design', // MISSING
		meta : 'Metadata',
		chooseColor : 'V채lj',
		other : '<annan>',
		docTitle :	'Sidtitel',
		charset : 	'Teckenupps채ttningar',
		charsetOther : '횜vriga teckenupps채ttningar',
		charsetASCII : 'ASCII', // MISSING
		charsetCE : 'Central Europa',
		charsetCT : 'Traditionell Kinesisk (Big5)',
		charsetCR : 'Kyrillisk',
		charsetGR : 'Grekiska',
		charsetJP : 'Japanska',
		charsetKR : 'Koreanska',
		charsetTR : 'Turkiska',
		charsetUN : 'Unicode (UTF-8)', // MISSING
		charsetWE : 'V채st Europa',
		docType : 'Sidhuvud',
		docTypeOther : '횜vriga sidhuvuden',
		xhtmlDec : 'Inkludera XHTML deklaration',
		bgColor : 'Bakgrundsf채rg',
		bgImage : 'Bakgrundsbildens URL',
		bgFixed : 'Fast bakgrund',
		txtColor : 'Textf채rg',
		margin : 'Sidmarginal',
		marginTop : 'Topp',
		marginLeft : 'V채nster',
		marginRight : 'H철ger',
		marginBottom : 'Botten',
		metaKeywords : 'Sidans nyckelord',
		metaDescription : 'Sidans beskrivning',
		metaAuthor : 'F철rfattare',
		metaCopyright : 'Upphovsr채tt',
		previewHtml : '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
