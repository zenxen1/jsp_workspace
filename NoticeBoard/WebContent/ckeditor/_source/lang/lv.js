/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Latvian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['lv'] =
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
	editorTitle : 'Bag훮tin훮t훮 teksta redaktors, %1',
	editorHelp : 'Pal카dz카bai, nospiediet ALT 0 ',

	// ARIA descriptions.
	toolbars	: 'Redaktora r카kjoslas',
	editor		: 'Bag훮tin훮t훮 teksta redaktors',

	// Toolbar buttons without dialogs.
	source			: 'HTML kods',
	newPage			: 'Jauna lapa',
	save			: 'Saglab훮t',
	preview			: 'Priek큄skat카t',
	cut				: 'Izgriezt',
	copy			: 'Kop휆t',
	paste			: 'Iel카m휆t',
	print			: 'Druk훮t',
	underline		: 'Pasv카trots',
	bold			: 'Treknin훮ts',
	italic			: 'Kurs카vs',
	selectAll		: 'Iez카m휆t visu',
	removeFormat	: 'No흨emt stilus',
	strike			: 'P훮rsv카trots',
	subscript		: 'Apak큄rakst훮',
	superscript		: 'Aug큄rakst훮',
	horizontalrule	: 'Ievietot horizont훮lu Atdal카t훮jsv카tru',
	pagebreak		: 'Ievietot lapas p훮rtraukumu drukai',
	pagebreakAlt		: 'Lapas p훮rnesums',
	unlink			: 'No흨emt hipersaiti',
	undo			: 'Atcelt',
	redo			: 'Atk훮rtot',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Skat카t servera saturu',
		url				: 'URL',
		protocol		: 'Protokols',
		upload			: 'Aug큄upiel훮d휆t',
		uploadSubmit	: 'Nos큰t카t serverim',
		image			: 'Att휆ls',
		flash			: 'Flash',
		form			: 'Forma',
		checkbox		: 'Izv휆les r큰ti흨a',
		radio			: 'Radio poga',
		textField		: 'Teksta rinda',
		textarea		: 'Teksta laukums',
		hiddenField		: 'Pasl휆pts lauks',
		button			: 'Poga',
		select			: 'Iez카m휆큄anas lauks',
		imageButton		: 'Att휆lpoga',
		notSet			: '<nav iestat카ts>',
		id				: 'Id',
		name			: 'Nosaukums',
		langDir			: 'Valodas las카큄anas virziens',
		langDirLtr		: 'No kreis훮s uz labo (LTR)',
		langDirRtl		: 'No lab훮s uz kreiso (RTL)',
		langCode		: 'Valodas kods',
		longDescr		: 'Gara apraksta Hipersaite',
		cssClass		: 'Stilu saraksta klases',
		advisoryTitle	: 'Konsultat카vs virsraksts',
		cssStyle		: 'Stils',
		ok				: 'Apstiprin훮t',
		cancel			: 'Atcelt',
		close			: 'Aizv휆rt',
		preview			: 'Priek큄skat카jums',
		generalTab		: 'Visp훮r카gi',
		advancedTab		: 'Izv휆rstais',
		validateNumberFailed : '힋카 v휆rt카ba nav skaitlis',
		confirmNewPage	: 'Jebkuras nesaglab훮t훮s izmai흨as tiks zaud휆tas. Vai tie큄훮m v휆laties atv휆rt jaunu lapu?',
		confirmCancel	: 'Da탑i no uzst훮d카jumiem ir main카ti. Vai tie큄훮m v휆laties aizv휆rt 큄o dialogu?',
		options			: 'Uzst훮d카jumi',
		target			: 'M휆r캠is',
		targetNew		: 'Jauns logs (_blank)',
		targetTop		: 'Virs휆jais logs (_top)',
		targetSelf		: 'Tas pats logs (_self)',
		targetParent	: 'Avota logs (_parent)',
		langDirLTR		: 'Kreisais uz Labo (LTR)',
		langDirRTL		: 'Labais uz Kreiso (RTL)',
		styles			: 'Stils',
		cssClasses		: 'Stilu klases',
		width			: 'Platums',
		height			: 'Augstums',
		align			: 'L카dzin훮jums',
		alignLeft		: 'Pa kreisi',
		alignRight		: 'Pa labi',
		alignCenter		: 'Centr휆ti',
		alignTop		: 'Aug큄훮',
		alignMiddle		: 'Pa vidu',
		alignBottom		: 'Apak큄훮',
		invalidValue	: 'Nekorekta v휆rt카ba',
		invalidHeight	: 'Augstumam j훮b큰t skaitlim.',
		invalidWidth	: 'Platumam j훮b큰t skaitlim',
		invalidCssLength	: 'Laukam "%1" nor훮d카tajai v휆rt카bai j훮b큰t pozit카vam skaitlim ar vai bez korekt훮m CSS m휆rvien카b훮m (px, %, in, cm, mm, em, ex, pt, vai pc).',
		invalidHtmlLength	: 'Laukam "%1" nor훮d카tajai v휆rt카bai j훮b큰t pozit카vam skaitlim ar vai bez korekt훮m HTML m휆rvien카b훮m (px vai %).',
		invalidInlineStyle	: 'Iek캬autaj훮 stil훮 nor훮d카tajai v휆rt카bai j훮sast훮v no viena vai vair훮kiem p훮riem p휆c forma\'ta "nosaukums: v휆rt카ba", atdal카tiem ar semikolu.',
		cssLengthTooltip	: 'Ievadiet v휆rt카bu pikse캬os vai skaitli ar der카gu CSS m휆rvien카bu (px, %, in, cm, mm, em, ex, pt, vai pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, nav pieejams</span>'
	},

	contextmenu :
	{
		options : 'Uznirsto큄훮s izv휆lnes uzst훮d카jumi'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Ievietot speci훮lo simbolu',
		title		: 'Ievietot 카pa큄u simbolu',
		options : 'Speci훮lo simbolu uzst훮d카jumi'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Ievietot/Labot hipersaiti',
		other 		: '<cits>',
		menu		: 'Labot hipersaiti',
		title		: 'Hipersaite',
		info		: 'Hipersaites inform훮cija',
		target		: 'M휆r캠is',
		upload		: 'Aug큄upiel훮d휆t',
		advanced	: 'Izv휆rstais',
		type		: 'Hipersaites tips',
		toUrl		: 'Adrese',
		toAnchor	: 'Iez카me 큄aj훮 lap훮',
		toEmail		: 'E-pasts',
		targetFrame		: '<ietvars>',
		targetPopup		: '<uznirsto큄훮 log훮>',
		targetFrameName	: 'M휆r캠a ietvara nosaukums',
		targetPopupName	: 'Uznirsto큄훮 loga nosaukums',
		popupFeatures	: 'Uznirsto큄훮 loga nosaukums 카pa큄카bas',
		popupResizable	: 'M휆rogojams',
		popupStatusBar	: 'Statusa josla',
		popupLocationBar: 'Atra큄an훮s vietas josla',
		popupToolbar	: 'R카ku josla',
		popupMenuBar	: 'Izv휆lnes josla',
		popupFullScreen	: 'Piln훮 ekr훮n훮 (IE)',
		popupScrollBars	: 'Ritjoslas',
		popupDependent	: 'Atkar카gs (Netscape)',
		popupLeft		: 'Kreis훮 koordin훮te',
		popupTop		: 'Aug큄휆j훮 koordin훮te',
		id				: 'ID',
		langDir			: 'Valodas las카큄anas virziens',
		langDirLTR		: 'No kreis훮s uz labo (LTR)',
		langDirRTL		: 'No lab훮s uz kreiso (RTL)',
		acccessKey		: 'Pieejas tausti흨큄',
		name			: 'Nosaukums',
		langCode			: 'Valodas kods',
		tabIndex			: 'Ci캬흨u indekss',
		advisoryTitle		: 'Konsultat카vs virsraksts',
		advisoryContentType	: 'Konsultat카vs satura tips',
		cssClasses		: 'Stilu saraksta klases',
		charset			: 'Pievienot훮 resursa kod휆jums',
		styles			: 'Stils',
		rel			: 'Rel훮cija',
		selectAnchor		: 'Izv휆l휆ties iez카mi',
		anchorName		: 'P휆c iez카mes nosaukuma',
		anchorId			: 'P휆c elementa ID',
		emailAddress		: 'E-pasta adrese',
		emailSubject		: 'Zi흨as t휆ma',
		emailBody		: 'Zi흨as saturs',
		noAnchors		: '(힋aj훮 dokument훮 nav iez카mju)',
		noUrl			: 'L큰dzu nor훮di hipersaiti',
		noEmail			: 'L큰dzu nor훮di e-pasta adresi'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ievietot/Labot iez카mi',
		menu		: 'Labot iez카mi',
		title		: 'Iez카mes uzst훮d카jumi',
		name		: 'Iez카mes nosaukums',
		errorName	: 'L큰dzu nor훮diet iez카mes nosaukumu',
		remove		: 'No흨emt iez카mi'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Numur휆ta saraksta uzst훮d카jumi',
		bulletedTitle		: 'Vienk훮r큄a saraksta uzst훮d카jumi',
		type				: 'Tips',
		start				: 'S훮kt',
		validateStartNumber				:'Saraksta s훮kuma numuram j훮b큰t veselam skaitlim',
		circle				: 'Aplis',
		disc				: 'Disks',
		square				: 'Kvadr훮ts',
		none				: 'Nekas',
		notset				: '<nav nor훮d카ts>',
		armenian			: 'Arm휆흨u skait캬i',
		georgian			: 'Gruz카흨u skait캬i (an, ban, gan, utt)',
		lowerRoman			: 'Mazie rom훮흨u (i, ii, iii, iv, v, utt)',
		upperRoman			: 'Lielie rom훮흨u (I, II, III, IV, V, utt)',
		lowerAlpha			: 'Mazie alfab휆ta (a, b, c, d, e, utt)',
		upperAlpha			: 'Lielie alfab휆ta (A, B, C, D, E, utt)',
		lowerGreek			: 'Mazie grie캠u (alfa, beta, gamma, utt)',
		decimal				: 'Decim훮lie (1, 2, 3, utt)',
		decimalLeadingZero	: 'Decim훮lie ar nulli (01, 02, 03, utt)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Mekl휆t un aizvietot',
		find				: 'Mekl휆t',
		replace				: 'Nomain카t',
		findWhat			: 'Mekl휆t:',
		replaceWith			: 'Nomain카t uz:',
		notFoundMsg			: 'Nor훮d카t훮 fr훮ze netika atrasta.',
		findOptions			: 'Mekl휆t uzst훮d카jumi',
		matchCase			: 'Re친istrj큰t카gs',
		matchWord			: 'J훮sakr카t piln카b훮',
		matchCyclic			: 'Sakrist cikliski',
		replaceAll			: 'Aizvietot visu',
		replaceSuccessMsg	: '%1 gad카jums(i) aizvietoti'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabula',
		title		: 'Tabulas 카pa큄카bas',
		menu		: 'Tabulas 카pa큄카bas',
		deleteTable	: 'Dz휆st tabulu',
		rows		: 'Rindas',
		columns		: 'Kolonnas',
		border		: 'R훮mja izm휆rs',
		widthPx		: 'pikse캬os',
		widthPc		: 'procentu훮li',
		widthUnit	: 'platuma m휆rvien카ba',
		cellSpace	: 'R큰ti흨u atstatums',
		cellPad		: 'R큰ti흨u nob카de',
		caption		: 'Le친enda',
		summary		: 'Anot훮cija',
		headers		: 'Virsraksti',
		headersNone		: 'Nekas',
		headersColumn	: 'Pirm훮 kolona',
		headersRow		: 'Pirm훮 rinda',
		headersBoth		: 'Abi',
		invalidRows		: 'Rindu skaitam j훮b큰t liel훮kam par 0',
		invalidCols		: 'Kolonu skaitam j훮b큰t liel훮kam par 0',
		invalidBorder	: 'R훮mju izm휆ram j훮b큰t skaitlim',
		invalidWidth	: 'Tabulas platumam j훮b큰t skaitlim',
		invalidHeight	: 'Tabulas augstumam j훮b큰t skaitlim',
		invalidCellSpacing	: '힋큰nu atstarp휆m j훮b큰t pozit카vam skaitlim',
		invalidCellPadding	: '힋큰nu atk훮p휆m j훮b큰t pozit카vam skaitlim',

		cell :
		{
			menu			: '힋큰na',
			insertBefore	: 'Pievienot 큄큰nu pirms',
			insertAfter		: 'Pievienot 큄큰nu p휆c',
			deleteCell		: 'Dz휆st r큰ti흨as',
			merge			: 'Apvienot r큰ti흨as',
			mergeRight		: 'Apvieno pa labi',
			mergeDown		: 'Apvienot uz leju',
			splitHorizontal	: 'Sadal카t 큄큰nu horizont훮li',
			splitVertical	: 'Sadal카t 큄큰nu vertik훮li',
			title			: '힋큰nas uzst훮d카jumi',
			cellType		: '힋큰nas tips',
			rowSpan			: 'Apvienotas rindas',
			colSpan			: 'Apvienotas kolonas',
			wordWrap		: 'V훮rdu p훮rnese',
			hAlign			: 'Horizont훮lais novietojums',
			vAlign			: 'Vertik훮lais novietojums',
			alignBaseline	: 'Pamatrinda',
			bgColor			: 'Fona kr훮sa',
			borderColor		: 'R훮mja kr훮sa',
			data			: 'Dati',
			header			: 'Virsraksts',
			yes				: 'J훮',
			no				: 'N휆',
			invalidWidth	: '힋큰nas platumam j훮b큰t skaitlim',
			invalidHeight	: '힋큰nas augstumam j훮b큰t skaitlim',
			invalidRowSpan	: 'Apvienojamo rindu skaitam j훮b큰t veselam skaitlim',
			invalidColSpan	: 'Apvienojamo kolonu skaitam j훮b큰t veselam skaitlim',
			chooseColor		: 'Izv휆l휆ties'
		},

		row :
		{
			menu			: 'Rinda',
			insertBefore	: 'Ievietot rindu pirms',
			insertAfter		: 'Ievietot rindu p휆c',
			deleteRow		: 'Dz휆st rindas'
		},

		column :
		{
			menu			: 'Kolonna',
			insertBefore	: 'Ievietot kolonu pirms',
			insertAfter		: 'Ievieto kolonu p휆c',
			deleteColumn	: 'Dz휆st kolonnas'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Pogas 카pa큄카bas',
		text		: 'Teksts (v휆rt카ba)',
		type		: 'Tips',
		typeBtn		: 'Poga',
		typeSbm		: 'Nos큰t카t',
		typeRst		: 'Atcelt'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Atz카m휆큄anas kast카tes 카pa큄카bas',
		radioTitle	: 'Izv휆les poga 카pa큄카bas',
		value		: 'V휆rt카ba',
		selected	: 'Iez카m휆ts'
	},

	// Form Dialog.
	form :
	{
		title		: 'Formas 카pa큄카bas',
		menu		: 'Formas 카pa큄카bas',
		action		: 'Darb카ba',
		method		: 'Metode',
		encoding	: 'Kod휆jums'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Iez카m휆큄anas lauka 카pa큄카bas',
		selectInfo	: 'Inform훮cija',
		opAvail		: 'Pieejam훮s iesp휆jas',
		value		: 'V휆rt카ba',
		size		: 'Izm휆rs',
		lines		: 'rindas',
		chkMulti	: 'At캬aut vair훮kus iez카m휆jumus',
		opText		: 'Teksts',
		opValue		: 'V휆rt카ba',
		btnAdd		: 'Pievienot',
		btnModify	: 'Veikt izmai흨as',
		btnUp		: 'Aug큄up',
		btnDown		: 'Lejup',
		btnSetValue : 'Noteikt k훮 iez카m휆to v휆rt카bu',
		btnDelete	: 'Dz휆st'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Teksta laukuma 카pa큄카bas',
		cols		: 'Kolonnas',
		rows		: 'Rindas'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Teksta rindas  카pa큄카bas',
		name		: 'Nosaukums',
		value		: 'V휆rt카ba',
		charWidth	: 'Simbolu platums',
		maxChars	: 'Simbolu maksim훮lais daudzums',
		type		: 'Tips',
		typeText	: 'Teksts',
		typePass	: 'Parole'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Pasl휆pt훮s teksta rindas 카pa큄카bas',
		name	: 'Nosaukums',
		value	: 'V휆rt카ba'
	},

	// Image Dialog.
	image :
	{
		title		: 'Att휆la 카pa큄카bas',
		titleButton	: 'Att휆lpogas 카pa큄카bas',
		menu		: 'Att휆la 카pa큄카bas',
		infoTab		: 'Inform훮cija par att휆lu',
		btnUpload	: 'Nos큰t카t serverim',
		upload		: 'Aug큄upiel훮d휆t',
		alt			: 'Alternat카vais teksts',
		lockRatio	: 'Nemain카ga Augstuma/Platuma attiec카ba',
		resetSize	: 'Atjaunot s훮kotn휆jo izm휆ru',
		border		: 'R훮mis',
		hSpace		: 'Horizont훮l훮 telpa',
		vSpace		: 'Vertik훮l훮 telpa',
		alertUrl	: 'L큰dzu nor훮d카t att휆la hipersaiti',
		linkTab		: 'Hipersaite',
		button2Img	: 'Vai v휆laties p훮rveidot izv휆l휆to att휆la pogu uz att휆la?',
		img2Button	: 'Vai v휆laties p훮rveidot izv휆l휆to att휆lu uz att휆la pogas?',
		urlMissing	: 'Tr큰kst att휆la atra큄an훮s adrese.',
		validateBorder	: 'Apmalei j훮b큰t veselam skaitlim',
		validateHSpace	: 'HSpace j훮b큰t veselam skaitlim',
		validateVSpace	: 'VSpace j훮b큰t veselam skaitlim'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash 카pa큄카bas',
		propertiesTab	: 'Uzst훮d카jumi',
		title			: 'Flash 카pa큄카bas',
		chkPlay			: 'Autom훮tiska atska흨o큄ana',
		chkLoop			: 'Nep훮rtraukti',
		chkMenu			: 'At캬aut Flash izv휆lni',
		chkFull			: 'Pilnekr훮ns',
 		scale			: 'Main카t izm휆ru',
		scaleAll		: 'R훮d카t visu',
		scaleNoBorder	: 'Bez r훮mja',
		scaleFit		: 'Prec카zs izm휆rs',
		access			: 'Skripta pieeja',
		accessAlways	: 'Vienm휆r',
		accessSameDomain: 'Tas pats dom휆ns',
		accessNever		: 'Nekad',
		alignAbsBottom	: 'Absol큰ti apak큄훮',
		alignAbsMiddle	: 'Absol큰ti vertik훮li centr휆ts',
		alignBaseline	: 'Pamatrind훮',
		alignTextTop	: 'Teksta aug큄훮',
		quality			: 'Kvalit훮te',
		qualityBest		: 'Lab훮k훮',
		qualityHigh		: 'Augsta',
		qualityAutoHigh	: 'Autom훮tiski Augsta',
		qualityMedium	: 'Vid휆ja',
		qualityAutoLow	: 'Autom훮tiski Zema',
		qualityLow		: 'Zema',
		windowModeWindow: 'Logs',
		windowModeOpaque: 'Necaursp카d카gs',
		windowModeTransparent : 'Caursp카d카gs',
		windowMode		: 'Loga re탑카ms',
		flashvars		: 'Flash main카gie',
		bgcolor			: 'Fona kr훮sa',
		hSpace			: 'Horizont훮l훮 telpa',
		vSpace			: 'Vertik훮l훮 telpa',
		validateSrc		: 'L큰dzu nor훮di hipersaiti',
		validateHSpace	: 'Hspace j훮b큰t skaitlim',
		validateVSpace	: 'Vspace j훮b큰t skaitlim'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Pareizrakst카bas p훮rbaude',
		title			: 'P훮rbaud카t gramatiku',
		notAvailable	: 'Atvainojiet, bet serviss 큄obr카d nav pieejams.',
		errorLoading	: 'K캬큰da iel훮d휆jot aplik훮cijas servisa adresi: %s.',
		notInDic		: 'Netika atrasts v훮rdn카c훮',
		changeTo		: 'Nomain카t uz',
		btnIgnore		: 'Ignor휆t',
		btnIgnoreAll	: 'Ignor휆t visu',
		btnReplace		: 'Aizvietot',
		btnReplaceAll	: 'Aizvietot visu',
		btnUndo			: 'Atcelt',
		noSuggestions	: '- Nav ieteikumu -',
		progress		: 'Notiek pareizrakst카bas p훮rbaude...',
		noMispell		: 'Pareizrakst카bas p훮rbaude pabeigta: k캬큰das netika atrastas',
		noChanges		: 'Pareizrakst카bas p훮rbaude pabeigta: nekas netika labots',
		oneChange		: 'Pareizrakst카bas p훮rbaude pabeigta: 1 v훮rds izmain카ts',
		manyChanges		: 'Pareizrakst카bas p훮rbaude pabeigta: %1 v훮rdi tika main카ti',
		ieSpellDownload	: 'Pareizrakst카bas p훮rbaud카t훮js nav pievienots. Vai v휆laties to lejupiel훮d휆t tagad?'
	},

	smiley :
	{
		toolbar	: 'Smaidi흨i',
		title	: 'Ievietot smaidi흨u',
		options : 'Smaidi흨u uzst훮d카jumi'
	},

	elementsPath :
	{
		eleLabel : 'Elementa ce캬큄',
		eleTitle : '%1 elements'
	},

	numberedlist	: 'Numur휆ts saraksts',
	bulletedlist	: 'Pievienot/No흨emt vienk훮r큄u sarakstu',
	indent			: 'Palielin훮t atk훮pi',
	outdent			: 'Samazin훮t atk훮pi',

	justify :
	{
		left	: 'Izl카dzin훮t pa kreisi',
		center	: 'Izl카dzin훮t pret centru',
		right	: 'Izl카dzin훮t pa labi',
		block	: 'Izl카dzin훮t malas'
	},

	blockquote : 'Bloka cit훮ts',

	clipboard :
	{
		title		: 'Ievietot',
		cutError	: 'J큰su p훮rl큰kprogrammas dro큄카bas iestat카jumi nepie캬auj redaktoram autom훮tiski veikt izgriez큄anas darb카bu.  L큰dzu, izmantojiet (Ctrl/Cmd+X), lai veiktu 큄o darb카bu.',
		copyError	: 'J큰su p훮rl큰kprogrammas dro큄카bas iestat카jumi nepie캬auj redaktoram autom훮tiski veikt kop휆큄anas darb카bu.  L큰dzu, izmantojiet (Ctrl/Cmd+C), lai veiktu 큄o darb카bu.',
		pasteMsg	: 'L큰dzu, ievietojiet tekstu 큄aj훮 laukum훮, izmantojot klaviat큰ru (<STRONG>Ctrl/Cmd+V</STRONG>) un apstipriniet ar <STRONG>Dar카ts!</STRONG>.',
		securityMsg	: 'J큰su p훮rl큰ka dro큄카bas uzst훮d카jumu d휆캬, nav iesp휆jams tie큄i piek캬큰t j큰su starpliktuvei. Jums j훮iel카m휆 atk훮rtoti 큄aj훮 log훮.',
		pasteArea	: 'Iel카m휆큄anas zona'
	},

	pastefromword :
	{
		confirmCleanup	: 'Teksts, kuru v휆laties iel카m휆t, izskat훮s ir nokop휆ts no Word. Vai v휆laties to izt카r카t pirms iel카m휆큄anas?',
		toolbar			: 'Ievietot no Worda',
		title			: 'Ievietot no Worda',
		error			: 'Iek큄휆jas k캬큰das d휆캬, neizdev훮s izt카r카t iel카m휆tos datus.'
	},

	pasteText :
	{
		button	: 'Ievietot k훮 vienk훮r큄u tekstu',
		title	: 'Ievietot k훮 vienk훮r큄u tekstu'
	},

	templates :
	{
		button			: 'Sagataves',
		title			: 'Satura sagataves',
		options : 'Sagataves uzst훮d카jumi',
		insertOption	: 'Aizvietot pa큄reiz휆jo saturu',
		selectPromptMsg	: 'L큰dzu, nor훮diet sagatavi, ko atv휆rt editor훮<br>(patreiz휆jie dati tiks zaud휆ti):',
		emptyListMsg	: '(Nav nor훮d카tas sagataves)'
	},

	showBlocks : 'Par훮d카t blokus',

	stylesCombo :
	{
		label		: 'Stils',
		panelTitle	: 'Format휆큄anas stili',
		panelTitle1	: 'Bloka stili',
		panelTitle2	: 'iek캬autie stili',
		panelTitle3	: 'Objekta stili'
	},

	format :
	{
		label		: 'Form훮ts',
		panelTitle	: 'Form훮ts',

		tag_p		: 'Norm훮ls teksts',
		tag_pre		: 'Format휆ts teksts',
		tag_address	: 'Adrese',
		tag_h1		: 'Virsraksts 1',
		tag_h2		: 'Virsraksts 2',
		tag_h3		: 'Virsraksts 3',
		tag_h4		: 'Virsraksts 4',
		tag_h5		: 'Virsraksts 5',
		tag_h6		: 'Virsraksts 6',
		tag_div		: 'Rindkopa (DIV)'
	},

	div :
	{
		title				: 'Izveidot div konteineri',
		toolbar				: 'Izveidot div konteineri',
		cssClassInputLabel	: 'Stilu klases',
		styleSelectLabel	: 'Stils',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'Valodas kods',
		inlineStyleInputLabel	: 'Iek캬autais stils',
		advisoryTitleInputLabel	: 'Konsultat카vs virsraksts',
		langDirLabel		: 'Valodas virziens',
		langDirLTRLabel		: 'Kreisais uz Labo (LTR)',
		langDirRTLLabel		: 'Labais uz kreiso (RTL)',
		edit				: 'Labot Div',
		remove				: 'No흨emt Div'
  	},

	iframe :
	{
		title		: 'IFrame uzst훮d카jumi',
		toolbar		: 'IFrame',
		noUrl		: 'Nor훮diet iframe adresi',
		scrolling	: 'At캬aut ritjoslas',
		border		: 'R훮d카t r훮mi'
	},

	font :
	{
		label		: '힋rifts',
		voiceLabel	: 'Fonts',
		panelTitle	: '힋rifts'
	},

	fontSize :
	{
		label		: 'Izm휆rs',
		voiceLabel	: 'Fonta izme흿s',
		panelTitle	: 'Izm휆rs'
	},

	colorButton :
	{
		textColorTitle	: 'Teksta kr훮sa',
		bgColorTitle	: 'Fona kr훮sa',
		panelTitle		: 'Kr훮sa',
		auto			: 'Autom훮tiska',
		more			: 'Pla큄훮ka palete...'
	},

	colors :
	{
		'000' : 'Melns',
		'800000' : 'Sarkanbr큰ns',
		'8B4513' : 'Sedlu br큰ns',
		'2F4F4F' : 'Tum큄as t훮feles pel휆ks',
		'008080' : 'Zili-za캬큄',
		'000080' : 'J큰ras',
		'4B0082' : 'Indigo',
		'696969' : 'Tum큄i pel휆ks',
		'B22222' : '캘ie친e캬sarkans',
		'A52A2A' : 'Br큰ns',
		'DAA520' : 'Zelta',
		'006400' : 'Tum큄i za캬큄',
		'40E0D0' : 'Tirk카zs',
		'0000CD' : 'Vid휆ji zils',
		'800080' : 'Purpurs',
		'808080' : 'Pel휆ks',
		'F00' : 'Sarkans',
		'FF8C00' : 'Tum큄i oran탑s',
		'FFD700' : 'Zelta',
		'008000' : 'Za캬큄',
		'0FF' : 'Tum큄zils',
		'00F' : 'Zils',
		'EE82EE' : 'Violets',
		'A9A9A9' : 'Pel휆ks',
		'FFA07A' : 'Gai큄i la큄kr훮sas',
		'FFA500' : 'Oran탑s',
		'FFFF00' : 'Dzeltens',
		'00FF00' : 'Laima',
		'AFEEEE' : 'Gai큄i tirk카za',
		'ADD8E6' : 'Gai큄i zils',
		'DDA0DD' : 'Pl큰mju',
		'D3D3D3' : 'Gai큄i pel휆ks',
		'FFF0F5' : 'Lavandas s훮rts',
		'FAEBD7' : 'Ant카ki balts',
		'FFFFE0' : 'Gai큄i dzeltens',
		'F0FFF0' : 'Meduspile',
		'F0FFFF' : 'Debesszils',
		'F0F8FF' : 'Alises zils',
		'E6E6FA' : 'Lavanda',
		'FFF' : 'Balts'
	},

	scayt :
	{
		title			: 'P훮rbaud카t gramatiku rakstot',
		opera_title		: 'Opera neatbalsta',
		enable			: 'Iesl휆gt SCAYT',
		disable			: 'Atsl휆gt SCAYT',
		about			: 'Par SCAYT',
		toggle			: 'P훮rsl휆gt SCAYT',
		options			: 'Uzst훮d카jumi',
		langs			: 'Valodas',
		moreSuggestions	: 'Vair훮k ieteikumi',
		ignore			: 'Ignor휆t',
		ignoreAll		: 'Ignor휆t visu',
		addWord			: 'Pievienot v훮rdu',
		emptyDic		: 'V훮rdn카cas nosaukums nevar b큰t tuk큄s.',
		noSuggestions	: 'No suggestions', // MISSING
		optionsTab		: 'Uzst훮d카jumi',
		allCaps			: 'Ignor휆t v훮rdus ar lielajiem burtiem',
		ignoreDomainNames : 'Ignor휆t dom휆nu nosaukumus',
		mixedCase		: 'Ignor휆t v훮rdus ar jauktu re친istru burtiem',
		mixedWithDigits	: 'Ignor휆t v훮rdus ar skait캬iem',

		languagesTab	: 'Valodas',

		dictionariesTab	: 'V훮rdn카cas',
		dic_field_name	: 'V훮rdn카cas nosaukums',
		dic_create		: 'Izveidot',
		dic_restore		: 'Atjaunot',
		dic_delete		: 'Dz휆st',
		dic_rename		: 'P훮rsaukt',
		dic_info		: 'S훮kum훮 lietot훮ja v훮rdn카ca tiek glab훮ta Cookie. Diem탑휆l, Cookie ir ierobe탑ots izm휆rs. Kad v훮rdn카ca sasniegs izm휆ru, ka to vairs nevar glab훮t Cookie, t훮 tiks noglab훮ta uz servera. Lai saglab훮tu person카go v훮rdn카cu uz j큰su servera, jums j훮nor훮da t훮s nosaukums. Ja j큰s jau esiet noglab훮ju큄i v훮rdn카cu, l큰dzu ierakstiet t훮s nosaukum un nospiediet Atjaunot pogu.',

		aboutTab		: 'Par'
	},

	about :
	{
		title		: 'Par CKEditor',
		dlgTitle	: 'Par CKEditor',
		help	: 'P훮rbaudiet $1 pal카dz카bai.',
		userGuide : 'CKEditor Lietot훮ja pam훮c카ba',
		moreInfo	: 'Inform훮cijai par licenz휆큄anu apmekl휆jiet m큰su m훮jas lapu:',
		copy		: 'Kop휆큄anas ties카bas &copy; $1. Visas ties카bas rezerv휆tas.'
	},

	maximize : 'Maksimiz휆t',
	minimize : 'Minimiz휆t',

	fakeobjects :
	{
		anchor		: 'Iez카me',
		flash		: 'Flash anim훮cija',
		iframe		: 'Iframe',
		hiddenfield	: 'Sl휆pts lauks',
		unknown		: 'Nezin훮ms objekts'
	},

	resize : 'Velciet lai m휆rogotu',

	colordialog :
	{
		title		: 'Izv휆lies kr훮su',
		options	:	'Kr훮sas uzst훮d카jumi',
		highlight	: 'Paraugs',
		selected	: 'Izv휆l휆t훮 kr훮sa',
		clear		: 'Not카r카t'
	},

	toolbarCollapse	: 'Aizv휆rt r카kjoslu',
	toolbarExpand	: 'Atv휆rt r카kjoslu',

	toolbarGroups :
	{
		document : 'Dokuments',
		clipboard : 'Starpliktuve/Atcelt',
		editing : 'Labo큄ana',
		forms : 'Formas',
		basicstyles : 'Pamata stili',
		paragraph : 'Paragr훮fs',
		links : 'Saites',
		insert : 'Ievietot',
		styles : 'Stili',
		colors : 'Kr훮sas',
		tools : 'R카ki'
	},

	bidi :
	{
		ltr : 'Teksta virziens no kreis훮s uz labo',
		rtl : 'Teksta virziens no lab훮s uz kreiso'
	},

	docprops :
	{
		label : 'Dokumenta 카pa큄카bas',
		title : 'Dokumenta 카pa큄카bas',
		design : 'Dizains',
		meta : 'META dati',
		chooseColor : 'Izv휆l휆ties',
		other : '<cits>',
		docTitle :	'Dokumenta virsraksts <Title>',
		charset : 	'Simbolu kod휆jums',
		charsetOther : 'Cits simbolu kod휆jums',
		charsetASCII : 'ASCII',
		charsetCE : 'Centr훮leiropas',
		charsetCT : '캘카nie큄u tradicion훮l훮 (Big5)',
		charsetCR : 'Kirilica',
		charsetGR : 'Grie캠u',
		charsetJP : 'Jap훮흨u',
		charsetKR : 'Korejie큄u',
		charsetTR : 'Turku',
		charsetUN : 'Unikods (UTF-8)',
		charsetWE : 'Rietumeiropas',
		docType : 'Dokumenta tips',
		docTypeOther : 'Cits dokumenta tips',
		xhtmlDec : 'Ietvert XHTML deklar훮cijas',
		bgColor : 'Fona kr훮sa',
		bgImage : 'Fona att휆la hipersaite',
		bgFixed : 'Fona att휆ls ir fiks휆ts',
		txtColor : 'Teksta kr훮sa',
		margin : 'Lapas robe탑as',
		marginTop : 'Aug큄훮',
		marginLeft : 'Pa kreisi',
		marginRight : 'Pa labi',
		marginBottom : 'Apak큄훮',
		metaKeywords : 'Dokumentu apraksto큄i atsl휆gv훮rdi (atdal카ti ar komatu)',
		metaDescription : 'Dokumenta apraksts',
		metaAuthor : 'Autors',
		metaCopyright : 'Autorties카bas',
		previewHtml : '<p>힋is ir <strong>parauga teksts</strong>. J큰s izmantojiet <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
