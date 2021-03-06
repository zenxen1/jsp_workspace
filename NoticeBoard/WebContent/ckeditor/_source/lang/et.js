/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Estonian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['et'] =
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
	editorTitle : 'Vormindatud teksti redaktor %1',
	editorHelp : 'Abi saamiseks vajuta ALT 0',

	// ARIA descriptions.
	toolbars	: 'Redaktori t철철riistaribad',
	editor		: 'Rikkalik tekstiredaktor',

	// Toolbar buttons without dialogs.
	source			: 'L채htekood',
	newPage			: 'Uus leht',
	save			: 'Salvestamine',
	preview			: 'Eelvaade',
	cut				: 'L천ika',
	copy			: 'Kopeeri',
	paste			: 'Aseta',
	print			: 'Printimine',
	underline		: 'Allajoonitud',
	bold			: 'Paks',
	italic			: 'Kursiiv',
	selectAll		: 'K천ige valimine',
	removeFormat	: 'Vormingu eemaldamine',
	strike			: 'L채bijoonitud',
	subscript		: 'Allindeks',
	superscript		: '횥laindeks',
	horizontalrule	: 'Horisontaaljoone sisestamine',
	pagebreak		: 'Lehevahetuskoha sisestamine',
	pagebreakAlt		: 'Lehevahetuskoht',
	unlink			: 'Lingi eemaldamine',
	undo			: 'Tagasiv천tmine',
	redo			: 'Toimingu kordamine',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Serveri sirvimine',
		url				: 'URL',
		protocol		: 'Protokoll',
		upload			: 'Laadi 체les',
		uploadSubmit	: 'Saada serverisse',
		image			: 'Pilt',
		flash			: 'Flash',
		form			: 'Vorm',
		checkbox		: 'M채rkeruut',
		radio			: 'Raadionupp',
		textField		: 'Tekstilahter',
		textarea		: 'Tekstiala',
		hiddenField		: 'Varjatud lahter',
		button			: 'Nupp',
		select			: 'Valiklahter',
		imageButton		: 'Piltnupp',
		notSet			: '<m채채ramata>',
		id				: 'ID',
		name			: 'Nimi',
		langDir			: 'Keele suund',
		langDirLtr		: 'Vasakult paremale (LTR)',
		langDirRtl		: 'Paremalt vasakule (RTL)',
		langCode		: 'Keele kood',
		longDescr		: 'Pikk kirjeldus URL',
		cssClass		: 'Stiilistiku klassid',
		advisoryTitle	: 'Soovituslik pealkiri',
		cssStyle		: 'Laad',
		ok				: 'OK',
		cancel			: 'Loobu',
		close			: 'Sulge',
		preview			: 'Eelvaade',
		generalTab		: '횥ldine',
		advancedTab		: 'T채psemalt',
		validateNumberFailed : 'See v채채rtus pole number.',
		confirmNewPage	: 'K천ik salvestamata muudatused l채hevad kaotsi. Kas oled kindel, et tahad laadida uue lehe?',
		confirmCancel	: 'M천ned valikud on muudetud. Kas oled kindel, et tahad dialoogi sulgeda?',
		options			: 'Valikud',
		target			: 'Sihtkoht',
		targetNew		: 'Uus aken (_blank)',
		targetTop		: 'K천ige 체lemine aken (_top)',
		targetSelf		: 'Sama aken (_self)',
		targetParent	: 'Vanemaken (_parent)',
		langDirLTR		: 'Vasakult paremale (LTR)',
		langDirRTL		: 'Paremalt vasakule (RTL)',
		styles			: 'Stiili',
		cssClasses		: 'Stiililehe klassid',
		width			: 'Laius',
		height			: 'K천rgus',
		align			: 'Joondus',
		alignLeft		: 'Vasak',
		alignRight		: 'Paremale',
		alignCenter		: 'Kesk',
		alignTop		: '횥les',
		alignMiddle		: 'Keskele',
		alignBottom		: 'Alla',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'K천rgus peab olema number.',
		invalidWidth	: 'Laius peab olema number.',
		invalidCssLength	: '"%1" v채lja jaoks m채채ratud v채채rtus peab olema positiivne t채isarv CSS 체hikuga (px, %, in, cm, mm, em, ex, pt v천i pc) v천i ilma.',
		invalidHtmlLength	: '"%1" v채lja jaoks m채채ratud v채채rtus peab olema positiivne t채isarv HTML 체hikuga (px v천i %) v천i ilma.',
		invalidInlineStyle	: 'Reasisese stiili m채채rangud peavad koosnema paarisv채채rtustest (tuples), mis on semikoolonitega eraldatult j채rgnevas vormingus: "nimi : v채채rtus".',
		cssLengthTooltip	: 'Sisesta v채채rtus pikslites v천i number koos sobiva CSS-i 체hikuga (px, %, in, cm, mm, em, ex, pt v천i pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, pole saadaval</span>'
	},

	contextmenu :
	{
		options : 'Kontekstimen체체 valikud'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Erim채rgi sisestamine',
		title		: 'Erim채rgi valimine',
		options : 'Erim채rkide valikud'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Lingi lisamine/muutmine',
		other 		: '<muu>',
		menu		: 'Muuda linki',
		title		: 'Link',
		info		: 'Lingi info',
		target		: 'Sihtkoht',
		upload		: 'Lae 체les',
		advanced	: 'T채psemalt',
		type		: 'Lingi liik',
		toUrl		: 'URL',
		toAnchor	: 'Ankur sellel lehel',
		toEmail		: 'E-post',
		targetFrame		: '<raam>',
		targetPopup		: '<h체pikaken>',
		targetFrameName	: 'Sihtm채rk raami nimi',
		targetPopupName	: 'H체pikakna nimi',
		popupFeatures	: 'H체pikakna omadused',
		popupResizable	: 'Suurust saab muuta',
		popupStatusBar	: 'Olekuriba',
		popupLocationBar: 'Aadressiriba',
		popupToolbar	: 'T철철riistariba',
		popupMenuBar	: 'Men체체riba',
		popupFullScreen	: 'T채isekraan (IE)',
		popupScrollBars	: 'Kerimisribad',
		popupDependent	: 'S천ltuv (Netscape)',
		popupLeft		: 'Vasak asukoht',
		popupTop		: '횥lemine asukoht',
		id				: 'ID',
		langDir			: 'Keele suund',
		langDirLTR		: 'Vasakult paremale (LTR)',
		langDirRTL		: 'Paremalt vasakule (RTL)',
		acccessKey		: 'Juurdep채채su v천ti',
		name			: 'Nimi',
		langCode			: 'Keele suund',
		tabIndex			: 'Tab indeks',
		advisoryTitle		: 'Juhendav tiitel',
		advisoryContentType	: 'Juhendava sisu t체체p',
		cssClasses		: 'Stiilistiku klassid',
		charset			: 'Lingitud ressursi m채rgistik',
		styles			: 'Laad',
		rel			: 'Suhe',
		selectAnchor		: 'Vali ankur',
		anchorName		: 'Ankru nime j채rgi',
		anchorId			: 'Elemendi id j채rgi',
		emailAddress		: 'E-posti aadress',
		emailSubject		: 'S천numi teema',
		emailBody		: 'S천numi tekst',
		noAnchors		: '(Selles dokumendis pole ankruid)',
		noUrl			: 'Palun kirjuta lingi URL',
		noEmail			: 'Palun kirjuta e-posti aadress'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ankru sisestamine/muutmine',
		menu		: 'Ankru omadused',
		title		: 'Ankru omadused',
		name		: 'Ankru nimi',
		errorName	: 'Palun sisesta ankru nimi',
		remove		: 'Eemalda ankur'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Numberloendi omadused',
		bulletedTitle		: 'Punktloendi omadused',
		type				: 'Liik',
		start				: 'Algus',
		validateStartNumber				:'Loendi algusnumber peab olema t채isarv.',
		circle				: 'Ring',
		disc				: 'T채pp',
		square				: 'Ruut',
		none				: 'Puudub',
		notset				: '<pole m채채ratud>',
		armenian			: 'Armeenia numbrid',
		georgian			: 'Gruusia numbrid (an, ban, gan, jne)',
		lowerRoman			: 'V채iksed rooma numbrid (i, ii, iii, iv, v, jne)',
		upperRoman			: 'Suured rooma numbrid (I, II, III, IV, V, jne)',
		lowerAlpha			: 'V채iket채hed (a, b, c, d, e, jne)',
		upperAlpha			: 'Suurt채hed (A, B, C, D, E, jne)',
		lowerGreek			: 'Kreeka v채iket채hed (alpha, beta, gamma, jne)',
		decimal				: 'Numbrid (1, 2, 3, jne)',
		decimalLeadingZero	: 'Numbrid algusnulliga (01, 02, 03, jne)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Otsimine ja asendamine',
		find				: 'Otsi',
		replace				: 'Asenda',
		findWhat			: 'Otsitav:',
		replaceWith			: 'Asendus:',
		notFoundMsg			: 'Otsitud teksti ei leitud.',
		findOptions			: 'Otsingu valikud',
		matchCase			: 'Suur- ja v채iket채htede eristamine',
		matchWord			: 'Ainult terved s천nad',
		matchCyclic			: 'J채tkatakse algusest',
		replaceAll			: 'Asenda k천ik',
		replaceSuccessMsg	: '%1 vastet asendati.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabel',
		title		: 'Tabeli omadused',
		menu		: 'Tabeli omadused',
		deleteTable	: 'Kustuta tabel',
		rows		: 'Read',
		columns		: 'Veerud',
		border		: 'Joone suurus',
		widthPx		: 'pikslit',
		widthPc		: 'protsenti',
		widthUnit	: 'laiuse 체hik',
		cellSpace	: 'Lahtri vahe',
		cellPad		: 'Lahtri t채idis',
		caption		: 'Tabeli tiitel',
		summary		: 'Kokkuv천te',
		headers		: 'P채ised',
		headersNone		: 'Puudub',
		headersColumn	: 'Esimene tulp',
		headersRow		: 'Esimene rida',
		headersBoth		: 'M천lemad',
		invalidRows		: 'Ridade arv peab olema nullist suurem.',
		invalidCols		: 'Tulpade arv peab olema nullist suurem.',
		invalidBorder	: '횆채rise suurus peab olema number.',
		invalidWidth	: 'Tabeli laius peab olema number.',
		invalidHeight	: 'Tabeli k천rgus peab olema number.',
		invalidCellSpacing	: 'Lahtrite vahe peab olema positiivne arv.',
		invalidCellPadding	: 'Lahtrite polsterdus (padding) peab olema positiivne arv.',

		cell :
		{
			menu			: 'Lahter',
			insertBefore	: 'Sisesta lahter enne',
			insertAfter		: 'Sisesta lahter peale',
			deleteCell		: 'Eemalda lahtrid',
			merge			: '횥henda lahtrid',
			mergeRight		: '횥henda paremale',
			mergeDown		: '횥henda alla',
			splitHorizontal	: 'Poolita lahter horisontaalselt',
			splitVertical	: 'Poolita lahter vertikaalselt',
			title			: 'Lahtri omadused',
			cellType		: 'Lahtri liik',
			rowSpan			: 'Ridade vahe',
			colSpan			: 'Tulpade vahe',
			wordWrap		: 'S천nade murdmine',
			hAlign			: 'Horisontaalne joondus',
			vAlign			: 'Vertikaalne joondus',
			alignBaseline	: 'Baasjoon',
			bgColor			: 'Tausta v채rv',
			borderColor		: '횆채rise v채rv',
			data			: 'Andmed',
			header			: 'P채is',
			yes				: 'Jah',
			no				: 'Ei',
			invalidWidth	: 'Lahtri laius peab olema number.',
			invalidHeight	: 'Lahtri k천rgus peab olema number.',
			invalidRowSpan	: 'Ridade vahe peab olema t채isarv.',
			invalidColSpan	: 'Tulpade vahe peab olema t채isarv.',
			chooseColor		: 'Vali'
		},

		row :
		{
			menu			: 'Rida',
			insertBefore	: 'Sisesta rida enne',
			insertAfter		: 'Sisesta rida peale',
			deleteRow		: 'Eemalda read'
		},

		column :
		{
			menu			: 'Veerg',
			insertBefore	: 'Sisesta veerg enne',
			insertAfter		: 'Sisesta veerg peale',
			deleteColumn	: 'Eemalda veerud'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Nupu omadused',
		text		: 'Tekst (v채채rtus)',
		type		: 'Liik',
		typeBtn		: 'Nupp',
		typeSbm		: 'Saada',
		typeRst		: 'L채htesta'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'M채rkeruudu omadused',
		radioTitle	: 'Raadionupu omadused',
		value		: 'V채채rtus',
		selected	: 'M채rgitud'
	},

	// Form Dialog.
	form :
	{
		title		: 'Vormi omadused',
		menu		: 'Vormi omadused',
		action		: 'Toiming',
		method		: 'Meetod',
		encoding	: 'Kodeering'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Valiklahtri omadused',
		selectInfo	: 'Info',
		opAvail		: 'V천imalikud valikud:',
		value		: 'V채채rtus',
		size		: 'Suurus',
		lines		: 'ridu',
		chkMulti	: 'V천imalik mitu valikut',
		opText		: 'Tekst',
		opValue		: 'V채채rtus',
		btnAdd		: 'Lisa',
		btnModify	: 'Muuda',
		btnUp		: '횥les',
		btnDown		: 'Alla',
		btnSetValue : 'M채채ra vaikimisi',
		btnDelete	: 'Kustuta'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Tekstiala omadused',
		cols		: 'Veerge',
		rows		: 'Ridu'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Tekstilahtri omadused',
		name		: 'Nimi',
		value		: 'V채채rtus',
		charWidth	: 'Laius (t채hem채rkides)',
		maxChars	: 'Maksimaalselt t채hem채rke',
		type		: 'Liik',
		typeText	: 'Tekst',
		typePass	: 'Parool'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Varjatud lahtri omadused',
		name	: 'Nimi',
		value	: 'V채채rtus'
	},

	// Image Dialog.
	image :
	{
		title		: 'Pildi omadused',
		titleButton	: 'Piltnupu omadused',
		menu		: 'Pildi omadused',
		infoTab		: 'Pildi info',
		btnUpload	: 'Saada serverisse',
		upload		: 'Lae 체les',
		alt			: 'Alternatiivne tekst',
		lockRatio	: 'Lukusta kuvasuhe',
		resetSize	: 'L채htesta suurus',
		border		: 'Joon',
		hSpace		: 'H. vaheruum',
		vSpace		: 'V. vaheruum',
		alertUrl	: 'Palun kirjuta pildi URL',
		linkTab		: 'Link',
		button2Img	: 'Kas tahad teisendada valitud pildiga nupu tavaliseks pildiks?',
		img2Button	: 'Kas tahad teisendada valitud tavalise pildi pildiga nupuks?',
		urlMissing	: 'Pildi l채hte-URL on puudu.',
		validateBorder	: '횆채rise laius peab olema t채isarv.',
		validateHSpace	: 'Horisontaalne vaheruum peab olema t채isarv.',
		validateVSpace	: 'Vertikaalne vaheruum peab olema t채isarv.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flashi omadused',
		propertiesTab	: 'Omadused',
		title			: 'Flashi omadused',
		chkPlay			: 'Automaatne start ',
		chkLoop			: 'Korduv',
		chkMenu			: 'Flashi men체체 lubatud',
		chkFull			: 'T채isekraan lubatud',
 		scale			: 'Mastaap',
		scaleAll		: 'N채idatakse k천ike',
		scaleNoBorder	: '횆채rist ei ole',
		scaleFit		: 'T채pne sobivus',
		access			: 'Skriptide ligip채채s',
		accessAlways	: 'K천igile',
		accessSameDomain: 'Samalt domeenilt',
		accessNever		: 'Mitte 체helegi',
		alignAbsBottom	: 'Abs alla',
		alignAbsMiddle	: 'Abs keskele',
		alignBaseline	: 'Baasjoonele',
		alignTextTop	: 'Tekstist 체les',
		quality			: 'Kvaliteet',
		qualityBest		: 'Parim',
		qualityHigh		: 'K천rge',
		qualityAutoHigh	: 'Automaatne k천rge',
		qualityMedium	: 'Keskmine',
		qualityAutoLow	: 'Automaatne madal',
		qualityLow		: 'Madal',
		windowModeWindow: 'Aken',
		windowModeOpaque: 'L채bipaistmatu',
		windowModeTransparent : 'L채bipaistev',
		windowMode		: 'Akna re탑iim',
		flashvars		: 'Flashi muutujad',
		bgcolor			: 'Tausta v채rv',
		hSpace			: 'H. vaheruum',
		vSpace			: 'V. vaheruum',
		validateSrc		: 'Palun kirjuta lingi URL',
		validateHSpace	: 'H. vaheruum peab olema number.',
		validateVSpace	: 'V. vaheruum peab olema number.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '횛igekirjakontroll',
		title			: '횛igekirjakontroll',
		notAvailable	: 'Kahjuks ei ole teenus praegu saadaval.',
		errorLoading	: 'Viga rakenduse teenushosti laadimisel: %s.',
		notInDic		: 'Puudub s천nastikust',
		changeTo		: 'Muuda',
		btnIgnore		: 'Ignoreeri',
		btnIgnoreAll	: 'Ignoreeri k천iki',
		btnReplace		: 'Asenda',
		btnReplaceAll	: 'Asenda k천ik',
		btnUndo			: 'V천ta tagasi',
		noSuggestions	: '- Soovitused puuduvad -',
		progress		: 'Toimub 천igekirja kontroll...',
		noMispell		: '횛igekirja kontroll sooritatud: 천igekirjuvigu ei leitud',
		noChanges		: '횛igekirja kontroll sooritatud: 체htegi s천na ei muudetud',
		oneChange		: '횛igekirja kontroll sooritatud: 체ks s천na muudeti',
		manyChanges		: '횛igekirja kontroll sooritatud: %1 s천na muudetud',
		ieSpellDownload	: '횛igekirja kontrollija ei ole paigaldatud. Soovid sa selle alla laadida?'
	},

	smiley :
	{
		toolbar	: 'Emotikon',
		title	: 'Sisesta emotikon',
		options : 'Emotikonide valikud'
	},

	elementsPath :
	{
		eleLabel : 'Elementide asukoht',
		eleTitle : '%1 element'
	},

	numberedlist	: 'Numberloend',
	bulletedlist	: 'Punktloend',
	indent			: 'Taande suurendamine',
	outdent			: 'Taande v채hendamine',

	justify :
	{
		left	: 'Vasakjoondus',
		center	: 'Keskjoondus',
		right	: 'Paremjoondus',
		block	: 'R철철pjoondus'
	},

	blockquote : 'Blokktsitaat',

	clipboard :
	{
		title		: 'Asetamine',
		cutError	: 'Sinu veebisirvija turvaseaded ei luba redaktoril automaatselt l천igata. Palun kasutage selleks klaviatuuri klahvikombinatsiooni (Ctrl/Cmd+X).',
		copyError	: 'Sinu veebisirvija turvaseaded ei luba redaktoril automaatselt kopeerida. Palun kasutage selleks klaviatuuri klahvikombinatsiooni (Ctrl/Cmd+C).',
		pasteMsg	: 'Palun aseta tekst j채rgnevasse kasti kasutades klaviatuuri klahvikombinatsiooni (<STRONG>Ctrl/Cmd+V</STRONG>) ja vajuta seej채rel <STRONG>OK</STRONG>.',
		securityMsg	: 'Sinu veebisirvija turvaseadete t천ttu ei oma redaktor otsest ligip채채su l천ikelaua andmetele. Sa pead asetama need uuesti siia aknasse.',
		pasteArea	: 'Asetamise ala'
	},

	pastefromword :
	{
		confirmCleanup	: 'Tekst, mida tahad asetada n채ib p채rinevat Wordist. Kas tahad selle enne asetamist puhastada?',
		toolbar			: 'Asetamine Wordist',
		title			: 'Asetamine Wordist',
		error			: 'Asetatud andmete puhastamine ei olnud sisemise vea t천ttu v천imalik'
	},

	pasteText :
	{
		button	: 'Asetamine tavalise tekstina',
		title	: 'Asetamine tavalise tekstina'
	},

	templates :
	{
		button			: 'Mall',
		title			: 'Sisumallid',
		options : 'Malli valikud',
		insertOption	: 'Praegune sisu asendatakse',
		selectPromptMsg	: 'Palun vali mall, mis avada redaktoris<br />(praegune sisu l채heb kaotsi):',
		emptyListMsg	: '(횥htegi malli ei ole defineeritud)'
	},

	showBlocks : 'Blokkide n채itamine',

	stylesCombo :
	{
		label		: 'Stiil',
		panelTitle	: 'Vormindusstiilid',
		panelTitle1	: 'Blokkstiilid',
		panelTitle2	: 'Reasisesed stiilid',
		panelTitle3	: 'Objektistiilid'
	},

	format :
	{
		label		: 'Vorming',
		panelTitle	: 'Vorming',

		tag_p		: 'Tavaline',
		tag_pre		: 'Vormindatud',
		tag_address	: 'Aadress',
		tag_h1		: 'Pealkiri 1',
		tag_h2		: 'Pealkiri 2',
		tag_h3		: 'Pealkiri 3',
		tag_h4		: 'Pealkiri 4',
		tag_h5		: 'Pealkiri 5',
		tag_h6		: 'Pealkiri 6',
		tag_div		: 'Tavaline (DIV)'
	},

	div :
	{
		title				: 'Div-konteineri loomine',
		toolbar				: 'Div-konteineri loomine',
		cssClassInputLabel	: 'Stiililehe klassid',
		styleSelectLabel	: 'Stiil',
		IdInputLabel		: 'ID',
		languageCodeInputLabel	: ' Keelekood',
		inlineStyleInputLabel	: 'Reasisene stiil',
		advisoryTitleInputLabel	: 'Soovitatav pealkiri',
		langDirLabel		: 'Keele suund',
		langDirLTRLabel		: 'Vasakult paremale (LTR)',
		langDirRTLLabel		: 'Paremalt vasakule (RTL)',
		edit				: 'Muuda Div',
		remove				: 'Eemalda Div'
  	},

	iframe :
	{
		title		: 'IFrame omadused',
		toolbar		: 'IFrame',
		noUrl		: 'Vali iframe URLi liik',
		scrolling	: 'Kerimisribade lubamine',
		border		: 'Raami 채채rise n채itamine'
	},

	font :
	{
		label		: 'Kiri',
		voiceLabel	: 'Kiri',
		panelTitle	: 'Kiri'
	},

	fontSize :
	{
		label		: 'Suurus',
		voiceLabel	: 'Kirja suurus',
		panelTitle	: 'Suurus'
	},

	colorButton :
	{
		textColorTitle	: 'Teksti v채rv',
		bgColorTitle	: 'Tausta v채rv',
		panelTitle		: 'V채rvid',
		auto			: 'Automaatne',
		more			: 'Rohkem v채rve...'
	},

	colors :
	{
		'000' : 'Must',
		'800000' : 'Kastanpruun',
		'8B4513' : 'Sadulapruun',
		'2F4F4F' : 'Tume paehall',
		'008080' : 'Sinakasroheline',
		'000080' : 'Meresinine',
		'4B0082' : 'Indigosinine',
		'696969' : 'Tumehall',
		'B22222' : '힋amottkivi',
		'A52A2A' : 'Pruun',
		'DAA520' : 'Kuldkollane',
		'006400' : 'Tumeroheline',
		'40E0D0' : 'T체rkiissinine',
		'0000CD' : 'Keskmine sinine',
		'800080' : 'Lilla',
		'808080' : 'Hall',
		'F00' : 'Punanae',
		'FF8C00' : 'Tumeoran탑',
		'FFD700' : 'Kuldne',
		'008000' : 'Roheline',
		'0FF' : 'Ts체aniidsinine',
		'00F' : 'Sinine',
		'EE82EE' : 'Violetne',
		'A9A9A9' : 'Tuhm hall',
		'FFA07A' : 'Hele l천he',
		'FFA500' : 'Oran탑',
		'FFFF00' : 'Kollane',
		'00FF00' : 'Lubja hall',
		'AFEEEE' : 'Kahvatu t체rkiis',
		'ADD8E6' : 'Helesinine',
		'DDA0DD' : 'Ploomililla',
		'D3D3D3' : 'Helehall',
		'FFF0F5' : 'Lavendlipunane',
		'FAEBD7' : 'Antiikvalge',
		'FFFFE0' : 'Helekollane',
		'F0FFF0' : 'Meloniroheline',
		'F0FFFF' : 'Taevasinine',
		'F0F8FF' : 'Beebisinine',
		'E6E6FA' : 'Lavendel',
		'FFF' : 'Valge'
	},

	scayt :
	{
		title			: '횛igekirjakontroll kirjutamise ajal',
		opera_title		: 'Operas pole toetatud',
		enable			: 'SCAYT lubatud',
		disable			: 'SCAYT keelatud',
		about			: 'SCAYT-ist l채hemalt',
		toggle			: 'SCAYT sisse/v채lja l체litamine',
		options			: 'Valikud',
		langs			: 'Keeled',
		moreSuggestions	: 'Veel soovitusi',
		ignore			: 'Eira',
		ignoreAll		: 'Eira k천iki',
		addWord			: 'Lisa s천na',
		emptyDic		: 'S천naraamatu nimi ei tohi olla t체hi.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: 'Valikud',
		allCaps			: 'L채bivate suurt채htedega s천nade eiramine',
		ignoreDomainNames : 'Domeeninimede eiramine',
		mixedCase		: 'Tavap채ratu t천stuga s천nade eiramine',
		mixedWithDigits	: 'Numbreid sisaldavate s천nade eiramine',

		languagesTab	: 'Keeled',

		dictionariesTab	: 'S천naraamatud',
		dic_field_name	: 'S천naraamatu nimi',
		dic_create		: 'Loo',
		dic_restore		: 'Taasta',
		dic_delete		: 'Kustuta',
		dic_rename		: 'Nimeta 체mber',
		dic_info		: 'Alguses s채ilitatakse kasutaja s천naraamatut k체psises. K체psise suurus on piiratud. P채rast s천naraamatu kasvamist nii suureks, et see k체psisesse ei mahu, v천ib s천naraamatut hoida meie serveris. Oma isikliku s천naraamatu hoidmiseks meie serveris pead andma sellele nime. Kui sa juba oled s천naraamatu salvestanud, sisesta selle nimi ja kl천psa taastamise nupule.',

		aboutTab		: 'L채hemalt'
	},

	about :
	{
		title		: 'CKEditorist',
		dlgTitle	: 'CKEditorist',
		help	: 'Abi jaoks vaata $1.',
		userGuide : 'CKEditori kasutusjuhendit',
		moreInfo	: 'Litsentsi andmed leiab meie veebilehelt:',
		copy		: 'Copyright &copy; $1. K천ik 천igused kaitstud.'
	},

	maximize : 'Maksimeerimine',
	minimize : 'Minimeerimine',

	fakeobjects :
	{
		anchor		: 'Ankur',
		flash		: 'Flashi animatsioon',
		iframe		: 'IFrame',
		hiddenfield	: 'Varjatud v채li',
		unknown		: 'Tundmatu objekt'
	},

	resize : 'Suuruse muutmiseks lohista',

	colordialog :
	{
		title		: 'V채rvi valimine',
		options	:	'V채rvi valikud',
		highlight	: 'N채idis',
		selected	: 'Valitud v채rv',
		clear		: 'Eemalda'
	},

	toolbarCollapse	: 'T철철riistariba peitmine',
	toolbarExpand	: 'T철철riistariba n채itamine',

	toolbarGroups :
	{
		document : 'Dokument',
		clipboard : 'L천ikelaud/tagasiv천tmine',
		editing : 'Muutmine',
		forms : 'Vormid',
		basicstyles : 'P천histiilid',
		paragraph : 'L천ik',
		links : 'Lingid',
		insert : 'Sisesta',
		styles : 'Stiilid',
		colors : 'V채rvid',
		tools : 'T철철riistad'
	},

	bidi :
	{
		ltr : 'Teksti suund vasakult paremale',
		rtl : 'Teksti suund paremalt vasakule'
	},

	docprops :
	{
		label : 'Dokumendi omadused',
		title : 'Dokumendi omadused',
		design : 'Disain',
		meta : 'Meta andmed',
		chooseColor : 'Vali',
		other : '<muu>',
		docTitle :	'Lehek체lje tiitel',
		charset : 	'M채rgistiku kodeering',
		charsetOther : '횥lej채채nud m채rgistike kodeeringud',
		charsetASCII : 'ASCII',
		charsetCE : 'Kesk-Euroopa',
		charsetCT : 'Hiina traditsiooniline (Big5)',
		charsetCR : 'Kirillisa',
		charsetGR : 'Kreeka',
		charsetJP : 'Jaapani',
		charsetKR : 'Korea',
		charsetTR : 'T체rgi',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'L채채ne-Euroopa',
		docType : 'Dokumendi t체체pp채is',
		docTypeOther : 'Teised dokumendi t체체pp채ised',
		xhtmlDec : 'Arva kaasa XHTML deklaratsioonid',
		bgColor : 'Taustav채rv',
		bgImage : 'Taustapildi URL',
		bgFixed : 'Mittekeritav tagataust',
		txtColor : 'Teksti v채rv',
		margin : 'Lehek체lje 채채rised',
		marginTop : '횥laserv',
		marginLeft : 'Vasakserv',
		marginRight : 'Paremserv',
		marginBottom : 'Alaserv',
		metaKeywords : 'Dokumendi v천tmes천nad (eraldatud komadega)',
		metaDescription : 'Dokumendi kirjeldus',
		metaAuthor : 'Autor',
		metaCopyright : 'Autori천igus',
		previewHtml : '<p>See on <strong>n채idistekst</strong>. Sa kasutad <a href="javascript:void(0)">CKEditori</a>.</p>'
	}
};
