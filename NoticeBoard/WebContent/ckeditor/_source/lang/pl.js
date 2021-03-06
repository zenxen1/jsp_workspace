/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object for the
 * Polish language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['pl'] =
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
	editorTitle : 'Edytor tekstu sformatowanego, %1',
	editorHelp : 'W celu uzyskania pomocy naci힄nij ALT 0',

	// ARIA descriptions.
	toolbars	: 'Paski narz휌dzi edytora',
	editor		: 'Edytor tekstu sformatowanego',

	// Toolbar buttons without dialogs.
	source			: '탁r처d흢o dokumentu',
	newPage			: 'Nowa strona',
	save			: 'Zapisz',
	preview			: 'Podgl훳d',
	cut				: 'Wytnij',
	copy			: 'Kopiuj',
	paste			: 'Wklej',
	print			: 'Drukuj',
	underline		: 'Podkre힄lenie',
	bold			: 'Pogrubienie',
	italic			: 'Kursywa',
	selectAll		: 'Zaznacz wszystko',
	removeFormat	: 'Usu흦 formatowanie',
	strike			: 'Przekre힄lenie',
	subscript		: 'Indeks dolny',
	superscript		: 'Indeks g처rny',
	horizontalrule	: 'Wstaw poziom훳 lini휌',
	pagebreak		: 'Wstaw podzia흢 strony',
	pagebreakAlt		: 'Wstaw podzia흢 strony',
	unlink			: 'Usu흦 odno힄nik',
	undo			: 'Cofnij',
	redo			: 'Pon처w',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Przegl훳daj',
		url				: 'Adres URL',
		protocol		: 'Protok처흢',
		upload			: 'Wy힄lij',
		uploadSubmit	: 'Wy힄lij',
		image			: 'Obrazek',
		flash			: 'Flash',
		form			: 'Formularz',
		checkbox		: 'Pole wyboru (checkbox)',
		radio			: 'Przycisk opcji (radio)',
		textField		: 'Pole tekstowe',
		textarea		: 'Obszar tekstowy',
		hiddenField		: 'Pole ukryte',
		button			: 'Przycisk',
		select			: 'Lista wyboru',
		imageButton		: 'Przycisk graficzny',
		notSet			: '<nie ustawiono>',
		id				: 'Id',
		name			: 'Nazwa',
		langDir			: 'Kierunek tekstu',
		langDirLtr		: 'Od lewej do prawej (LTR)',
		langDirRtl		: 'Od prawej do lewej (RTL)',
		langCode		: 'Kod j휌zyka',
		longDescr		: 'Adres URL d흢ugiego opisu',
		cssClass		: 'Nazwa klasy CSS',
		advisoryTitle	: 'Opis obiektu docelowego',
		cssStyle		: 'Styl',
		ok				: 'OK',
		cancel			: 'Anuluj',
		close			: 'Zamknij',
		preview			: 'Podgl훳d',
		generalTab		: 'Og처lne',
		advancedTab		: 'Zaawansowane',
		validateNumberFailed : 'Ta warto힄훶 nie jest liczb훳.',
		confirmNewPage	: 'Wszystkie niezapisane zmiany zostan훳 utracone. Czy na pewno wczyta훶 now훳 stron휌?',
		confirmCancel	: 'Pewne opcje zosta흢y zmienione. Czy na pewno zamkn훳훶 okno dialogowe?',
		options			: 'Opcje',
		target			: 'Obiekt docelowy',
		targetNew		: 'Nowe okno (_blank)',
		targetTop		: 'Okno najwy탉ej w hierarchii (_top)',
		targetSelf		: 'To samo okno (_self)',
		targetParent	: 'Okno nadrz휌dne (_parent)',
		langDirLTR		: 'Od lewej do prawej (LTR)',
		langDirRTL		: 'Od prawej do lewej (RTL)',
		styles			: 'Style',
		cssClasses		: 'Klasy arkusza styl처w',
		width			: 'Szeroko힄훶',
		height			: 'Wysoko힄훶',
		align			: 'Wyr처wnaj',
		alignLeft		: 'Do lewej',
		alignRight		: 'Do prawej',
		alignCenter		: 'Do 힄rodka',
		alignTop		: 'Do g처ry',
		alignMiddle		: 'Do 힄rodka',
		alignBottom		: 'Do do흢u',
		invalidValue	: 'Invalid value.', // MISSING
		invalidHeight	: 'Wysoko힄훶 musi by훶 liczb훳.',
		invalidWidth	: 'Szeroko힄훶 musi by훶 liczb훳.',
		invalidCssLength	: 'Warto힄훶 podana dla pola "%1" musi by훶 liczb훳 dodatni훳 bez jednostki lub z poprawn훳 jednostk훳 d흢ugo힄ci zgodn훳 z CSS (px, %, in, cm, mm, em, ex, pt lub pc).',
		invalidHtmlLength	: 'Warto힄훶 podana dla pola "%1" musi by훶 liczb훳 dodatni훳 bez jednostki lub z poprawn훳 jednostk훳 d흢ugo힄ci zgodn훳 z HTML (px lub %).',
		invalidInlineStyle	: 'Warto힄훶 podana dla stylu musi sk흢ada훶 si휌 z jednej lub wi휌kszej liczby krotek w formacie "nazwa : warto힄훶", rozdzielonych 힄rednikami.',
		cssLengthTooltip	: 'Wpisz liczb휌 dla warto힄ci w pikselach lub liczb휌 wraz z jednostk훳 d흢ugo힄ci zgodn훳 z CSS (px, %, in, cm, mm, em, ex, pt lub pc).',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, niedost휌pne</span>'
	},

	contextmenu :
	{
		options : 'Opcje menu kontekstowego'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Wstaw znak specjalny',
		title		: 'Wybierz znak specjalny',
		options : 'Opcje znak처w specjalnych'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Wstaw/edytuj odno힄nik',
		other 		: '<inny>',
		menu		: 'Edytuj odno힄nik',
		title		: 'Odno힄nik',
		info		: 'Informacje ',
		target		: 'Obiekt docelowy',
		upload		: 'Wy힄lij',
		advanced	: 'Zaawansowane',
		type		: 'Typ odno힄nika',
		toUrl		: 'Adres URL',
		toAnchor	: 'Odno힄nik wewn훳trz strony (kotwica)',
		toEmail		: 'Adres e-mail',
		targetFrame		: '<ramka>',
		targetPopup		: '<wyskakuj훳ce okno>',
		targetFrameName	: 'Nazwa ramki docelowej',
		targetPopupName	: 'Nazwa wyskakuj훳cego okna',
		popupFeatures	: 'W흢a힄ciwo힄ci wyskakuj훳cego okna',
		popupResizable	: 'Skalowalny',
		popupStatusBar	: 'Pasek statusu',
		popupLocationBar: 'Pasek adresu',
		popupToolbar	: 'Pasek narz휌dzi',
		popupMenuBar	: 'Pasek menu',
		popupFullScreen	: 'Pe흢ny ekran (IE)',
		popupScrollBars	: 'Paski przewijania',
		popupDependent	: 'Okno zale탉ne (Netscape)',
		popupLeft		: 'Pozycja w poziomie',
		popupTop		: 'Pozycja w pionie',
		id				: 'Id',
		langDir			: 'Kierunek tekstu',
		langDirLTR		: 'Od lewej do prawej (LTR)',
		langDirRTL		: 'Od prawej do lewej (RTL)',
		acccessKey		: 'Klawisz dost휌pu',
		name			: 'Nazwa',
		langCode			: 'Kod j휌zyka',
		tabIndex			: 'Indeks kolejno힄ci',
		advisoryTitle		: 'Opis obiektu docelowego',
		advisoryContentType	: 'Typ MIME obiektu docelowego',
		cssClasses		: 'Nazwa klasy CSS',
		charset			: 'Kodowanie znak처w obiektu docelowego',
		styles			: 'Styl',
		rel			: 'Relacja',
		selectAnchor		: 'Wybierz kotwic휌',
		anchorName		: 'Wg nazwy',
		anchorId			: 'Wg identyfikatora',
		emailAddress		: 'Adres e-mail',
		emailSubject		: 'Temat',
		emailBody		: 'Tre힄훶',
		noAnchors		: '(W dokumencie nie zdefiniowano 탉adnych kotwic)',
		noUrl			: 'Podaj adres URL',
		noEmail			: 'Podaj adres e-mail'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Wstaw/edytuj kotwic휌',
		menu		: 'W흢a힄ciwo힄ci kotwicy',
		title		: 'W흢a힄ciwo힄ci kotwicy',
		name		: 'Nazwa kotwicy',
		errorName	: 'Wpisz nazw휌 kotwicy',
		remove		: 'Usu흦 kotwic휌'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'W흢a힄ciwo힄ci list numerowanych',
		bulletedTitle		: 'W흢a힄ciwo힄ci list wypunktowanych',
		type				: 'Typ punktora',
		start				: 'Pocz훳tek',
		validateStartNumber				:'List휌 musi rozpoczyna훶 liczba ca흢kowita.',
		circle				: 'Ko흢o',
		disc				: 'Okr훳g',
		square				: 'Kwadrat',
		none				: 'Brak',
		notset				: '<nie ustawiono>',
		armenian			: 'Numerowanie arme흦skie',
		georgian			: 'Numerowanie gruzi흦skie (an, ban, gan itd.)',
		lowerRoman			: 'Ma흢e cyfry rzymskie (i, ii, iii, iv, v itd.)',
		upperRoman			: 'Du탉e cyfry rzymskie (I, II, III, IV, V itd.)',
		lowerAlpha			: 'Ma흢e litery (a, b, c, d, e itd.)',
		upperAlpha			: 'Du탉e litery (A, B, C, D, E itd.)',
		lowerGreek			: 'Ma흢e litery greckie (alpha, beta, gamma itd.)',
		decimal				: 'Liczby (1, 2, 3 itd.)',
		decimalLeadingZero	: 'Liczby z pocz훳tkowym zerem (01, 02, 03 itd.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Znajd탄 i zamie흦',
		find				: 'Znajd탄',
		replace				: 'Zamie흦',
		findWhat			: 'Znajd탄:',
		replaceWith			: 'Zast훳p przez:',
		notFoundMsg			: 'Nie znaleziono szukanego has흢a.',
		findOptions			: 'Opcje wyszukiwania',
		matchCase			: 'Uwzgl휌dnij wielko힄훶 liter',
		matchWord			: 'Ca흢e s흢owa',
		matchCyclic			: 'Cykliczne dopasowanie',
		replaceAll			: 'Zamie흦 wszystko',
		replaceSuccessMsg	: '%1 wyst훳pie흦 zast훳pionych.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabela',
		title		: 'W흢a힄ciwo힄ci tabeli',
		menu		: 'W흢a힄ciwo힄ci tabeli',
		deleteTable	: 'Usu흦 tabel휌',
		rows		: 'Liczba wierszy',
		columns		: 'Liczba kolumn',
		border		: 'Grubo힄훶 obramowania',
		widthPx		: 'piksele',
		widthPc		: '%',
		widthUnit	: 'jednostka szeroko힄ci',
		cellSpace	: 'Odst휌p pomi휌dzy kom처rkami',
		cellPad		: 'Dope흢nienie kom처rek',
		caption		: 'Tytu흢',
		summary		: 'Podsumowanie',
		headers		: 'Nag흢처wki',
		headersNone		: 'Brak',
		headersColumn	: 'Pierwsza kolumna',
		headersRow		: 'Pierwszy wiersz',
		headersBoth		: 'Oba',
		invalidRows		: 'Liczba wierszy musi by훶 wi휌ksza ni탉 0.',
		invalidCols		: 'Liczba kolumn musi by훶 wi휌ksza ni탉 0.',
		invalidBorder	: 'Warto힄훶 obramowania musi by훶 liczb훳.',
		invalidWidth	: 'Szeroko힄훶 tabeli musi by훶 liczb훳.',
		invalidHeight	: 'Wysoko힄훶 tabeli musi by훶 liczb훳.',
		invalidCellSpacing	: 'Odst휌p pomi휌dzy kom처rkami musi by훶 liczb훳 dodatni훳.',
		invalidCellPadding	: 'Dope흢nienie kom처rek musi by훶 liczb훳 dodatni훳.',

		cell :
		{
			menu			: 'Kom처rka',
			insertBefore	: 'Wstaw kom처rk휌 z lewej',
			insertAfter		: 'Wstaw kom처rk휌 z prawej',
			deleteCell		: 'Usu흦 kom처rki',
			merge			: 'Po흢훳cz kom처rki',
			mergeRight		: 'Po흢훳cz z kom처rk훳 z prawej',
			mergeDown		: 'Po흢훳cz z kom처rk훳 poni탉ej',
			splitHorizontal	: 'Podziel kom처rk휌 poziomo',
			splitVertical	: 'Podziel kom처rk휌 pionowo',
			title			: 'W흢a힄ciwo힄ci kom처rki',
			cellType		: 'Typ kom처rki',
			rowSpan			: 'Scalenie wierszy',
			colSpan			: 'Scalenie kom처rek',
			wordWrap		: 'Zawijanie s흢처w',
			hAlign			: 'Wyr처wnanie poziome',
			vAlign			: 'Wyr처wnanie pionowe',
			alignBaseline	: 'Linia bazowa',
			bgColor			: 'Kolor t흢a',
			borderColor		: 'Kolor obramowania',
			data			: 'Dane',
			header			: 'Nag흢처wek',
			yes				: 'Tak',
			no				: 'Nie',
			invalidWidth	: 'Szeroko힄훶 kom처rki musi by훶 liczb훳.',
			invalidHeight	: 'Wysoko힄훶 kom처rki musi by훶 liczb훳.',
			invalidRowSpan	: 'Scalenie wierszy musi by훶 liczb훳 ca흢kowit훳.',
			invalidColSpan	: 'Scalenie kom처rek musi by훶 liczb훳 ca흢kowit훳.',
			chooseColor		: 'Wybierz'
		},

		row :
		{
			menu			: 'Wiersz',
			insertBefore	: 'Wstaw wiersz powy탉ej',
			insertAfter		: 'Wstaw wiersz poni탉ej',
			deleteRow		: 'Usu흦 wiersze'
		},

		column :
		{
			menu			: 'Kolumna',
			insertBefore	: 'Wstaw kolumn휌 z lewej',
			insertAfter		: 'Wstaw kolumn휌 z prawej',
			deleteColumn	: 'Usu흦 kolumny'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'W흢a힄ciwo힄ci przycisku',
		text		: 'Tekst (Warto힄훶)',
		type		: 'Typ',
		typeBtn		: 'Przycisk',
		typeSbm		: 'Wy힄lij',
		typeRst		: 'Wyczy힄훶'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'W흢a힄ciwo힄ci pola wyboru (checkbox)',
		radioTitle	: 'W흢a힄ciwo힄ci przycisku opcji (radio)',
		value		: 'Warto힄훶',
		selected	: 'Zaznaczone'
	},

	// Form Dialog.
	form :
	{
		title		: 'W흢a힄ciwo힄ci formularza',
		menu		: 'W흢a힄ciwo힄ci formularza',
		action		: 'Akcja',
		method		: 'Metoda',
		encoding	: 'Kodowanie'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'W흢a힄ciwo힄ci listy wyboru',
		selectInfo	: 'Informacje',
		opAvail		: 'Dost휌pne opcje',
		value		: 'Warto힄훶',
		size		: 'Rozmiar',
		lines		: 'wierszy',
		chkMulti	: 'Wielokrotny wyb처r',
		opText		: 'Tekst',
		opValue		: 'Warto힄훶',
		btnAdd		: 'Dodaj',
		btnModify	: 'Zmie흦',
		btnUp		: 'Do g처ry',
		btnDown		: 'Do do흢u',
		btnSetValue : 'Ustaw jako zaznaczon훳',
		btnDelete	: 'Usu흦'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'W흢a힄ciwo힄ci obszaru tekstowego',
		cols		: 'Liczba kolumn',
		rows		: 'Liczba wierszy'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'W흢a힄ciwo힄ci pola tekstowego',
		name		: 'Nazwa',
		value		: 'Warto힄훶',
		charWidth	: 'Szeroko힄훶 w znakach',
		maxChars	: 'Szeroko힄훶 maksymalna',
		type		: 'Typ',
		typeText	: 'Tekst',
		typePass	: 'Has흢o'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'W흢a힄ciwo힄ci pola ukrytego',
		name	: 'Nazwa',
		value	: 'Warto힄훶'
	},

	// Image Dialog.
	image :
	{
		title		: 'W흢a힄ciwo힄ci obrazka',
		titleButton	: 'W흢a힄ciwo힄ci przycisku graficznego',
		menu		: 'W흢a힄ciwo힄ci obrazka',
		infoTab		: 'Informacje o obrazku',
		btnUpload	: 'Wy힄lij',
		upload		: 'Wy힄lij',
		alt			: 'Tekst zast휌pczy',
		lockRatio	: 'Zablokuj proporcje',
		resetSize	: 'Przywr처훶 rozmiar',
		border		: 'Obramowanie',
		hSpace		: 'Odst휌p poziomy',
		vSpace		: 'Odst휌p pionowy',
		alertUrl	: 'Podaj adres obrazka.',
		linkTab		: 'Hiper흢훳cze',
		button2Img	: 'Czy chcesz przekonwertowa훶 zaznaczony przycisk graficzny do zwyk흢ego obrazka?',
		img2Button	: 'Czy chcesz przekonwertowa훶 zaznaczony obrazek do przycisku graficznego?',
		urlMissing	: 'Podaj adres URL obrazka.',
		validateBorder	: 'Warto힄훶 obramowania musi by훶 liczb훳 ca흢kowit훳.',
		validateHSpace	: 'Warto힄훶 odst휌pu poziomego musi by훶 liczb훳 ca흢kowit훳.',
		validateVSpace	: 'Warto힄훶 odst휌pu pionowego musi by훶 liczb훳 ca흢kowit훳.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'W흢a힄ciwo힄ci obiektu Flash',
		propertiesTab	: 'W흢a힄ciwo힄ci',
		title			: 'W흢a힄ciwo힄ci obiektu Flash',
		chkPlay			: 'Autoodtwarzanie',
		chkLoop			: 'P휌tla',
		chkMenu			: 'W흢훳cz menu',
		chkFull			: 'Zezw처l na pe흢ny ekran',
 		scale			: 'Skaluj',
		scaleAll		: 'Poka탉 wszystko',
		scaleNoBorder	: 'Bez obramowania',
		scaleFit		: 'Dok흢adne dopasowanie',
		access			: 'Dost휌p skrypt처w',
		accessAlways	: 'Zawsze',
		accessSameDomain: 'Ta sama domena',
		accessNever		: 'Nigdy',
		alignAbsBottom	: 'Do do흢u',
		alignAbsMiddle	: 'Do 힄rodka w pionie',
		alignBaseline	: 'Do linii bazowej',
		alignTextTop	: 'Do g처ry tekstu',
		quality			: 'Jako힄훶',
		qualityBest		: 'Najlepsza',
		qualityHigh		: 'Wysoka',
		qualityAutoHigh	: 'Auto wysoka',
		qualityMedium	: '힃rednia',
		qualityAutoLow	: 'Auto niska',
		qualityLow		: 'Niska',
		windowModeWindow: 'Okno',
		windowModeOpaque: 'Nieprzezroczyste',
		windowModeTransparent : 'Przezroczyste',
		windowMode		: 'Tryb okna',
		flashvars		: 'Zmienne obiektu Flash',
		bgcolor			: 'Kolor t흢a',
		hSpace			: 'Odst휌p poziomy',
		vSpace			: 'Odst휌p pionowy',
		validateSrc		: 'Podaj adres URL',
		validateHSpace	: 'Odst휌p poziomy musi by훶 liczb훳.',
		validateVSpace	: 'Odst휌p pionowy musi by훶 liczb훳.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Sprawd탄 pisowni휌',
		title			: 'Sprawd탄 pisowni휌',
		notAvailable	: 'Przepraszamy, ale us흢uga jest obecnie niedost휌pna.',
		errorLoading	: 'B흢훳d wczytywania hosta aplikacji us흢ugi: %s.',
		notInDic		: 'S흢owa nie ma w s흢owniku',
		changeTo		: 'Zmie흦 na',
		btnIgnore		: 'Ignoruj',
		btnIgnoreAll	: 'Ignoruj wszystkie',
		btnReplace		: 'Zmie흦',
		btnReplaceAll	: 'Zmie흦 wszystkie',
		btnUndo			: 'Cofnij',
		noSuggestions	: '- Brak sugestii -',
		progress		: 'Trwa sprawdzanie...',
		noMispell		: 'Sprawdzanie zako흦czone: nie znaleziono b흢휌d처w',
		noChanges		: 'Sprawdzanie zako흦czone: nie zmieniono 탉adnego s흢owa',
		oneChange		: 'Sprawdzanie zako흦czone: zmieniono jedno s흢owo',
		manyChanges		: 'Sprawdzanie zako흦czone: zmieniono %l s흢처w',
		ieSpellDownload	: 'S흢ownik nie jest zainstalowany. Czy chcesz go pobra훶?'
	},

	smiley :
	{
		toolbar	: 'Emotikony',
		title	: 'Wstaw emotikona',
		options : 'Opcje emotikon처w'
	},

	elementsPath :
	{
		eleLabel : '힃cie탉ka element처w',
		eleTitle : 'element %1'
	},

	numberedlist	: 'Lista numerowana',
	bulletedlist	: 'Lista wypunktowana',
	indent			: 'Zwi휌ksz wci휌cie',
	outdent			: 'Zmniejsz wci휌cie',

	justify :
	{
		left	: 'Wyr처wnaj do lewej',
		center	: 'Wy힄rodkuj',
		right	: 'Wyr처wnaj do prawej',
		block	: 'Wyjustuj'
	},

	blockquote : 'Cytat',

	clipboard :
	{
		title		: 'Wklej',
		cutError	: 'Ustawienia bezpiecze흦stwa Twojej przegl훳darki nie pozwalaj훳 na automatyczne wycinanie tekstu. U탉yj skr처tu klawiszowego Ctrl/Cmd+X.',
		copyError	: 'Ustawienia bezpiecze흦stwa Twojej przegl훳darki nie pozwalaj훳 na automatyczne kopiowanie tekstu. U탉yj skr처tu klawiszowego Ctrl/Cmd+C.',
		pasteMsg	: 'Wklej tekst w poni탉szym polu, u탉ywaj훳c skr처tu klawiaturowego (<STRONG>Ctrl/Cmd+V</STRONG>), i kliknij <STRONG>OK</STRONG>.',
		securityMsg	: 'Zabezpieczenia przegl훳darki uniemo탉liwiaj훳 wklejenie danych bezpo힄rednio do edytora. Prosz휌 ponownie wklei훶 dane w tym oknie.',
		pasteArea	: 'Obszar wklejania'
	},

	pastefromword :
	{
		confirmCleanup	: 'Tekst, kt처ry chcesz wklei훶, prawdopodobnie pochodzi z programu Microsoft Word. Czy chcesz go wyczy힄ci훶 przed wklejeniem?',
		toolbar			: 'Wklej z programu MS Word',
		title			: 'Wklej z programu MS Word',
		error			: 'Wyczyszczenie wklejonych danych nie by흢o mo탉liwe z powodu wyst훳pienia b흢휌du.'
	},

	pasteText :
	{
		button	: 'Wklej jako czysty tekst',
		title	: 'Wklej jako czysty tekst'
	},

	templates :
	{
		button			: 'Szablony',
		title			: 'Szablony zawarto힄ci',
		options : 'Opcje szablon처w',
		insertOption	: 'Zast훳p obecn훳 zawarto힄훶',
		selectPromptMsg	: 'Wybierz szablon do otwarcia w edytorze<br>(obecna zawarto힄훶 okna edytora zostanie utracona):',
		emptyListMsg	: '(Brak zdefiniowanych szablon처w)'
	},

	showBlocks : 'Poka탉 bloki',

	stylesCombo :
	{
		label		: 'Styl',
		panelTitle	: 'Style formatuj훳ce',
		panelTitle1	: 'Style blokowe',
		panelTitle2	: 'Style liniowe',
		panelTitle3	: 'Style obiektowe'
	},

	format :
	{
		label		: 'Format',
		panelTitle	: 'Format',

		tag_p		: 'Normalny',
		tag_pre		: 'Tekst sformatowany',
		tag_address	: 'Adres',
		tag_h1		: 'Nag흢처wek 1',
		tag_h2		: 'Nag흢처wek 2',
		tag_h3		: 'Nag흢처wek 3',
		tag_h4		: 'Nag흢처wek 4',
		tag_h5		: 'Nag흢처wek 5',
		tag_h6		: 'Nag흢처wek 6',
		tag_div		: 'Normalny (DIV)'
	},

	div :
	{
		title				: 'Utw처rz pojemnik Div',
		toolbar				: 'Utw처rz pojemnik Div',
		cssClassInputLabel	: 'Klasy arkusza styl처w',
		styleSelectLabel	: 'Styl',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'Kod j휌zyka',
		inlineStyleInputLabel	: 'Style liniowe',
		advisoryTitleInputLabel	: 'Opis obiektu docelowego',
		langDirLabel		: 'Kierunek tekstu',
		langDirLTRLabel		: 'Od lewej do prawej (LTR)',
		langDirRTLLabel		: 'Od prawej do lewej (RTL)',
		edit				: 'Edytuj pojemnik Div',
		remove				: 'Usu흦 pojemnik Div'
  	},

	iframe :
	{
		title		: 'W흢a힄ciwo힄ci elementu IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Podaj adres URL elementu IFrame',
		scrolling	: 'W흢훳cz paski przewijania',
		border		: 'Poka탉 obramowanie obiektu IFrame'
	},

	font :
	{
		label		: 'Czcionka',
		voiceLabel	: 'Czcionka',
		panelTitle	: 'Czcionka'
	},

	fontSize :
	{
		label		: 'Rozmiar',
		voiceLabel	: 'Rozmiar czcionki',
		panelTitle	: 'Rozmiar'
	},

	colorButton :
	{
		textColorTitle	: 'Kolor tekstu',
		bgColorTitle	: 'Kolor t흢a',
		panelTitle		: 'Kolory',
		auto			: 'Automatycznie',
		more			: 'Wi휌cej kolor처w...'
	},

	colors :
	{
		'000' : 'Czarny',
		'800000' : 'Kasztanowy',
		'8B4513' : 'Czekoladowy',
		'2F4F4F' : 'Ciemnografitowy',
		'008080' : 'Morski',
		'000080' : 'Granatowy',
		'4B0082' : 'Indygo',
		'696969' : 'Ciemnoszary',
		'B22222' : 'Czerwie흦 탉elazowa',
		'A52A2A' : 'Br훳zowy',
		'DAA520' : 'Ciemnoz흢oty',
		'006400' : 'Ciemnozielony',
		'40E0D0' : 'Turkusowy',
		'0000CD' : 'Ciemnoniebieski',
		'800080' : 'Purpurowy',
		'808080' : 'Szary',
		'F00' : 'Czerwony',
		'FF8C00' : 'Ciemnopomara흦czowy',
		'FFD700' : 'Z흢oty',
		'008000' : 'Zielony',
		'0FF' : 'Cyjan',
		'00F' : 'Niebieski',
		'EE82EE' : 'Fioletowy',
		'A9A9A9' : 'Przygaszony szary',
		'FFA07A' : '흟ososiowy',
		'FFA500' : 'Pomara흦czowy',
		'FFFF00' : '탈처흢ty',
		'00FF00' : 'Limonkowy',
		'AFEEEE' : 'Bladoturkusowy',
		'ADD8E6' : 'Jasnoniebieski',
		'DDA0DD' : '힃liwkowy',
		'D3D3D3' : 'Jasnoszary',
		'FFF0F5' : 'Jasnolawendowy',
		'FAEBD7' : 'Kremowobia흢y',
		'FFFFE0' : 'Jasno탉처흢ty',
		'F0FFF0' : 'Bladozielony',
		'F0FFFF' : 'Jasnolazurowy',
		'F0F8FF' : 'Jasnob흢휌kitny',
		'E6E6FA' : 'Lawendowy',
		'FFF' : 'Bia흢y'
	},

	scayt :
	{
		title			: 'Sprawd탄 pisowni휌 podczas pisania (SCAYT)',
		opera_title		: 'Funkcja nie jest obs흢ugiwana przez przegl훳dark휌 Opera',
		enable			: 'W흢훳cz SCAYT',
		disable			: 'Wy흢훳cz SCAYT',
		about			: 'Informacje o SCAYT',
		toggle			: 'Prze흢훳cz SCAYT',
		options			: 'Opcje',
		langs			: 'J휌zyki',
		moreSuggestions	: 'Wi휌cej sugestii',
		ignore			: 'Ignoruj',
		ignoreAll		: 'Ignoruj wszystkie',
		addWord			: 'Dodaj s흢owo',
		emptyDic		: 'Nazwa s흢ownika nie mo탉e by훶 pusta.',
		noSuggestions	: 'Brak sugestii',
		optionsTab		: 'Opcje',
		allCaps			: 'Ignoruj wyrazy pisane du탉ymi literami',
		ignoreDomainNames : 'Ignoruj nazwy domen',
		mixedCase		: 'Ignoruj wyrazy pisane du탉ymi i ma흢ymi literami',
		mixedWithDigits	: 'Ignoruj wyrazy zawieraj훳ce cyfry',

		languagesTab	: 'J휌zyki',

		dictionariesTab	: 'S흢owniki',
		dic_field_name	: 'Nazwa s흢ownika',
		dic_create		: 'Utw처rz',
		dic_restore		: 'Przywr처훶',
		dic_delete		: 'Usu흦',
		dic_rename		: 'Zmie흦 nazw휌',
		dic_info		: 'Pocz훳tkowo s흢ownik u탉ytkownika przechowywany jest w cookie. Pliki cookie maj훳 jednak ograniczon훳 pojemno힄훶. Je힄li s흢ownik u탉ytkownika przekroczy wielko힄훶 dopuszczaln훳 dla pliku cookie, mo탉liwe jest przechowanie go na naszym serwerze. W celu zapisania s흢ownika na serwerze niezb휌dne jest nadanie mu nazwy. Je힄li s흢ownik zosta흢 ju탉 zapisany na serwerze, wystarczy poda훶 jego nazw휌 i nacisn훳훶 przycisk Przywr처훶.',

		aboutTab		: 'Informacje o SCAYT'
	},

	about :
	{
		title		: 'Informacje o programie CKEditor',
		dlgTitle	: 'Informacje o programie CKEditor',
		help	: 'Pomoc znajdziesz w $1.',
		userGuide : 'podr휌czniku u탉ytkownika programu CKEditor',
		moreInfo	: 'Informacje na temat licencji mo탉na znale탄훶 na naszej stronie:',
		copy		: 'Copyright &copy; $1. Wszelkie prawa zastrze탉one.'
	},

	maximize : 'Maksymalizuj',
	minimize : 'Minimalizuj',

	fakeobjects :
	{
		anchor		: 'Kotwica',
		flash		: 'Animacja Flash',
		iframe		: 'IFrame',
		hiddenfield	: 'Pole ukryte',
		unknown		: 'Nieznany obiekt'
	},

	resize : 'Przeci훳gnij, aby zmieni훶 rozmiar',

	colordialog :
	{
		title		: 'Wybierz kolor',
		options	:	'Opcje koloru',
		highlight	: 'Zaznacz',
		selected	: 'Wybrany',
		clear		: 'Wyczy힄훶'
	},

	toolbarCollapse	: 'Zwi흦 pasek narz휌dzi',
	toolbarExpand	: 'Rozwi흦 pasek narz휌dzi',

	toolbarGroups :
	{
		document : 'Dokument',
		clipboard : 'Schowek/Wstecz',
		editing : 'Edycja',
		forms : 'Formularze',
		basicstyles : 'Style podstawowe',
		paragraph : 'Akapit',
		links : 'Hiper흢훳cza',
		insert : 'Wstawianie',
		styles : 'Style',
		colors : 'Kolory',
		tools : 'Narz휌dzia'
	},

	bidi :
	{
		ltr : 'Kierunek tekstu od lewej strony do prawej',
		rtl : 'Kierunek tekstu od prawej strony do lewej'
	},

	docprops :
	{
		label : 'W흢a힄ciwo힄ci dokumentu',
		title : 'W흢a힄ciwo힄ci dokumentu',
		design : 'Projekt strony',
		meta : 'Znaczniki meta',
		chooseColor : 'Wybierz',
		other : 'Inne',
		docTitle :	'Tytu흢 strony',
		charset : 	'Kodowanie znak처w',
		charsetOther : 'Inne kodowanie znak처w',
		charsetASCII : 'ASCII',
		charsetCE : '힃rodkowoeuropejskie',
		charsetCT : 'Chi흦skie tradycyjne (Big5)',
		charsetCR : 'Cyrylica',
		charsetGR : 'Greckie',
		charsetJP : 'Japo흦skie',
		charsetKR : 'Korea흦skie',
		charsetTR : 'Tureckie',
		charsetUN : 'Unicode (UTF-8)',
		charsetWE : 'Zachodnioeuropejskie',
		docType : 'Definicja typu dokumentu',
		docTypeOther : 'Inna definicja typu dokumentu',
		xhtmlDec : 'Uwzgl휌dnij deklaracje XHTML',
		bgColor : 'Kolor t흢a',
		bgImage : 'Adres URL obrazka t흢a',
		bgFixed : 'T흢o nieruchome (nieprzewijaj훳ce si휌)',
		txtColor : 'Kolor tekstu',
		margin : 'Marginesy strony',
		marginTop : 'G처rny',
		marginLeft : 'Lewy',
		marginRight : 'Prawy',
		marginBottom : 'Dolny',
		metaKeywords : 'S흢owa kluczowe dokumentu (oddzielone przecinkami)',
		metaDescription : 'Opis dokumentu',
		metaAuthor : 'Autor',
		metaCopyright : 'Prawa autorskie',
		previewHtml : '<p>To jest <strong>przyk흢adowy tekst</strong>. Korzystasz z programu <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
