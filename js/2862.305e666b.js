"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[2862,5692,9581],{62862:function(e,t,n){n.r(t);var i=n(2566);t["default"]=i.Ay.mergeDeep({fields:n(14490)},n(99581),n(45692))},45692:function(e){e.exports=JSON.parse('{"authConfig":{"description":""},"fields":{}}')},99581:function(e){e.exports=JSON.parse('{"actions":{"openIn":"Öffne in {service}"},"additionalActions":"Weitere Aktionen","additionalResources":"Zusätzliche Ressourcen","anonymized":{"title":"Anonymisiert"},"assets":{"alternate":{"main":"Bevorzugt"},"copyUrl":{"generic":"Kopiere Adresse","withSource":"Kopiere Adresse für {source}"},"currentlyShown":"Dieses Asset wird derzeit angezeigt.","download":{"generic":"Herunterladen","withSource":"Herunterladen von {source}"},"inItems":"Datei in Unterelementen | Dateien in Unterelementen","role":{"data":"Daten","metadata":"Metadaten"},"showOnMap":"Auf Karte anzeigen","showThumbnail":"Zeige Vorschaubild","shown":"angezeigt"},"authentication":{"button":{"login":"Anmelden","logout":"Abmelden","title":"Anmeldedaten bereitstellen oder aktualisieren"},"chooseMethod":"Wähle Anmeldemethode","description":"Die angefragte Seite erfordert eine Anmeldung. Bitte die Anmeldedaten unten in das Textfeld eingeben.","loggedOut":"Sie wurden erfolgreich abgemeldet. Sie können das Fenster nun schließen.","password":"Passwort","required":"Anmeldung erforderlich","schemeTypes":{"http":"HTTP {scheme}","s3":"S3","signedUrl":"Signierte URL","oauth2":"OAuth 2","apiKey":"API-Schlüssel","openIdConnect":"OpenID Connect"},"title":"Anmelden","unauthorized":"Sie haben keine Berechtigung um diese Daten abzurufen. Bitte melden Sie sich an.","unsupported":"Nicht unterstützt","unsupportedLong":"Die Anmeldemethode {method} wird von STAC Browser leider nicht unterstützt.","user":"Benutzer"},"browse":"Erkunden","cancel":"Abbrechen","catalog":{"license":"Lizenz","temporalExtent":"Zeitliche Ausdehnung"},"catalogs":{"filterByTitle":"Kataloge anhand des Titels filtern","filterByTitleAndMore":"Kataloge anhand von Titel, Beschreibung oder Schlüsselwörtern filtern","loadMore":"Lade mehr...","noMatches":"Keiner der Kataloge entspricht den Suchkriterien."},"checkbox":{"false":"Nein","true":"Ja"},"copy":"Kopieren","default":"Standardeinstellung","defaultWithValue":"Standardeinstellung ({value})","deprecated":"Abgekündigt","deprecation":{"fallbackTitle":"Anzeigen","latestVersion":"Neueste Version:","otherVersionsNotice":"Dies ist *nicht* abgekündigt, aber andere Versionen sind verfügbar:","otherVersionsTitle":"Andere Versionen verfügbar","outdatedTitle":"Veraltet","predecessorVersion":"Vorherige Version:","successorVersion":"Nächste Version:","warning":"Wir weisen darauf hin, dass dies abgekündigt wurde und potenziell jederzeit entfernt werden kann. Die Benutzung sollte so schnell wie möglich eingestellt werden. Die Verwendung in neuen Projekten sollte unterlassen werden."},"description":"Beschreibung","errors":{"authFailed":"Die Anfrage ist fehlgeschlagen, die angegebenen Anmeldedaten sind möglicherweise fehlerhaft.","badRequest":"Die Anfrage ist ungültig. Dies kann an ungültigen Parametern liegen, z.B. in einer Suchanfrage, oder ein Fehler im STAC Browser sein.","contactProvider":"Bitte wenden Sie sich an den Dienstanbieter, um dieses Problem zu lösen.","default":"Die angeforderte Seite konnte nicht geladen werden.","forbidden":"Die für diese Anfrage angegebenen Anmeldedaten sind ungültig, bspw. ein abgelaufener oder ungültiger API-Schlüssel. Bitte geben Sie andere Anmeldedaten an und versuchen Sie es erneut.","invalidJsonObject":"Die Antwort des Dienstanbieters ist kein gültiges JSON-Objeckt.","invalidStacCollections":"Die Antwort des Dienstanbieters ist keine gültige Liste mit Katalogen.","invalidStacItems":"Die Antwort des Dienstanbieters ist keine fültige Liste mit Elementen.","labels":{"cause":"Ursache:","code":"Fehlercode:","reason":"Grund:","requestURL":"Anfrageadresse:"},"loadApiCollectionsFailed":"Die Kataloge des Dienstanbieters konnten nicht geladen werden.","loadApiItemsFailed":"Die Elemente des Dienstanbieters konnten nicht geladen werden.","loadFilteredItems":"Das Laden einer gefilterten Liste von Elementen ist leider fehlgeschlagen.","loadItems":"Das Laden der Liste der Elemente ist leider fehlgeschlagen.","networkError":"Dieses Problem kann auftreten, wenn Server den externen Zugriff über Webbrowser nicht zulassen (bspw. wenn keine CORS-Kopfzeilen vorhanden sind). @:errors.contactProvider","noExternalAccess":"Der Zugriff auf externe Kataloge ist nicht erlaubt!","notFound":"Die angeforderte Seite existiert nicht. @:errors.contactProvider","serverError":"Auf dem Server ist ein Problem aufgetreten. @:errors.contactProvider","unauthorized":"Der Anfrage fehlen die Anmeldedaten, bspw. ein API-Schlüssel. Bitte geben Sie Ihre Anmeldedaten an und versuchen Sie es erneut."},"featureExperimental":"Diese Funktion ist noch experimentell und kann unerwartete Ergebnisse verursachen!","fullscreen":{"exit":"Verlasse den Vollbild-Modus","show":"Zeige im Vollbild-Modus"},"goBack":{"description":"Gehe zurück zu: {type}","label":"Zurück"},"goToCollection":{"description":"Gehe zum dazugehörigen Katalog","descriptionWithTitle":"@:goToCollection.description: {title}","label":"Katalog"},"goToParent":{"description":"Gehe ein Level hoch","descriptionWithTitle":"@:goToParent.description: {title}","label":"Hoch"},"in":"in {catalog}","index":{"api":"API","catalog":"Katalog","load":"Laden","selectStacIndex":"... oder wähle von {stacIndex}:","specifyCatalog":"Bitte gib einen STAC Katalog oder eine STAC API an...","urlInvalid":"Die Adresse ist ungültig.","urlMissingHost":"Der Adresse fehlt ein Host.","urlMissingProtocol":"Der Adresse fehlt ein Protokoll."},"items":{"filter":"Filter","hideFilter":"Verstecke Filter","noTime":"Keine Zeit angegeben","noneAvailableForCollection":"Für diesen Katalog sind keine Elemente verfügbar.","showFilter":"Zeige Filter"},"leaflet":{"close":"Schließen","noFeatureProperties":"Keine weiteren Daten verfügbar für dieses Element.","stayLayer":{"error":"Entschuldigung, die Daten auf der Karte anzuzeigen ist fehlgeschlagen."},"zoom":{"in":{"description":"Vergrößern","label":"+"},"out":{"description":"Verkleinern","label":"-"}}},"loading":"Lade...","map":"Karte","messageForSchemaError":"{message}, für Schema {schemaPath}","metadata":{"general":"Allgemeines","title":"Metadaten"},"multiselect":{"andMore":"und {count} weitere","deselectLabel":"Enter zum Entfernen","keywordsPlaceholder":"Schlüsselwörter auswählen","placeholder":"Option auswählen","selectLabel":"Enter zum Selektieren","selectedLabel":"Selektiert"},"open":"Öffnen","pagination":{"first":"« Anfang","last":"Ende »","next":"Nächste ›","previous":"‹ Vorherige"},"poweredBy":"Generiert von {link}","protocol":{"azure":"Microsoft Azure","file":"Dateisystem (lokal)","ftp":"FTP","gcs":"Google Cloud","oss":"Alibaba Cloud","s3":{"amazonaws.com":"Amazon S3","default":"S3"}},"providers":{"email":"E-Mail senden","homepage":"Gehe zur Internetseite","role":{"host":"Anbieter","licensor":"Lizenzgeber","processor":"Verarbeiter","producer":"Erzeuger"},"title":"Anbieter"},"read":{"less":"Zeige weniger","more":"Zeige mehr"},"reset":"Zurücksetzen","search":{"addCollections":"Hinzufügen mittels Enter-Taste","addFilter":"Filter hinzufügen","addItemIds":"Element-Identifikationsnummern hinzufügen mittels Enter-Taste","addSearchTerm":"Suchbegriff hinzufügen mittels Enter-Taste","additionalFilters":"Weitere Filter","dateDescription":"Alle Zeiten in koordinierter Weltzeit (UTC).","enterCollections":"Gebe Katalog-Identifikationsnummern ein...","enterItemIds":"Gebe Element-Identifikationsnummern ein...","enterSearchTerms":"Gebe Suchbegriffe ein...","equalTo":"entspricht genau","filterBySpatialExtent":"Filtern nach räumlicher Ausdehnung","filterCollection":"Im Katalog filtern","freeText":"Suchbegriffe","freeTextDescription":"Suche nach mindestens einem der angegebene Begriffen in Feldern wie dem Titel und der Beschreibung.","greaterThan":"größer als","greaterThanEqual":"größer als oder entspricht","itemIds":"Element-Identifikationsnummern","itemsPerPage":"Elemente pro Seite","itemsPerPageDescription":"Anzahl der Elemente die pro Seite angefragft wird, maximal {maxItems} Elemente.","lessThan":"kleiner als","lessThanEqual":"kleiner als oder entspricht","likeOperatorDescription":"Platzhalterzeichen können verwendet werden. `_` entspricht einem einzelnen Zeichen, `%` entspricht einer beliebigen Anzahl an Zeichen. Um nach einem Platzhalterzeichen selber zu suchen, müssen ein `\\\\` vor das Zeichen gesetzt werden.","logical":{"and":"Berücksichtige alle Filter (und)","or":"Berücksichtige mindestens einen der Filter (oder)"},"matches":"enthält etwa","metaDescription":"Durchsuche die angebotenen Daten von {title}.","modifyCriteria":"Bitte die Suchkriterien ändern.","noFurtherItemsFound":"Keine weiteren Elemente verfügbar.","noItemsFound":"Keine Elemente gefunden für die angegebenen Filter.","noOptions":"Noch nichts eingegeben","notEqualTo":"entspricht nicht","notFullySupported":"Eventuell werden nicht alle Optionen unterstützt.","notSupported":"Suchen wird von dem Diensteanbieter nicht unterstützt.","placeholder":"Suchen...","selectCollections":"Wähle Kataloge...","selectForItemSearch":"Markiere für Elementsuche","sortOptions":{"datetime":"Datum und Zeit","id":"Identifikationsnummer","title":"Titel"},"spatialExtent":"Räumliche Ausdehnung","tabs":{"collections":"Kataloge durchsuchen","items":"Elemente durchsuchen"},"temporalExtent":"Zeitliche Ausdehnung","title":"Suche","useInItemSearch":"Nutze Katalog in Elementsuche | Nutze {count} Kataloge in Elementsuche"},"showMore":"Zeige mehr...","sidebar":{"switchCatalog":"Wechsle den Katalog"},"sort":{"asc":{"label":"Aufsteigend","title":"In aufsteigender Reihenfolge sortieren (A-Z)"},"desc":{"label":"Absteigend","title":"In absteigender Reihenfolge sortieren (Z-A)"},"title":"Sortieren"},"source":{"conformanceClasses":"Konformitätsklasse","detailsAboutSource":"Details über die STAC-Datenquelle","extension":"Erweiterung","fileFormat":"Dateiformat","id":"Identifikationsnummer","invalid":"Nicht konform","label":"Datenquelle","language":{"label":"Sprache: {currentLanguage}","onlyData":"Nur die Daten sind in dieser Sprache verfügbar!","onlyUI":"Nur die Benutzeroberfläsche ist in dieser Sprache verfügbar!","switch":"Ändern der Sprache"},"locatedAt":"Die Datei mit den STAC-Metadaten befindet sich unter:","share":{"bsky":"Bluesky","email":"E-Mail","label":"Teilen","mastodon":"Mastodon.social","message":"{title} ist verfügbar unter {url}","sharePageWithOthers":"Teile die Adresse dieser Seite:","title":"Teilen","x":"X (Twitter)","withOthers":"Teile diese Seite mit anderen"},"stacExtension":"STAC-Erweiterung","stacVersion":"STAC-Version","statistics":"Statistiken","title":"Datenquelle","valid":"Konform","validating":"Validiere...","validationNA":"nicht verfügbar","validationParams":{"additionalProperty":"zusätzliches Attribut","allowedValue":"erlaubter Wert","allowedValues":"erlaubte Werte","comparison":"Vergleich","depsCount":"Anzahl","exclusive":"exklusive der Grenze","failingKeyword":"nicht konforme Schemata","format":"Format","i":"erstes Element","j":"zweites Element","limit":"Grenze","maxContains":"enthält höchstens","minContains":"enthält mindestens","missingProperty":"fehlendes Attribut","multipleOf":"Vielfaches von","passingSchemas":"konforme Schemata","pattern":"Muster","property":"Attribut","propertyName":"Attributname","type":"Datentyp"},"validationReport":{"disclaimer":"Der Konformitätsbericht wird auf der Grundlage von Schemata erstellt, die oft nicht vollständig sind. Sie decken daher möglicherweise nicht alle Aspekte der STAC-Spezifikation und ihrer Erweiterungen ab. Der Konformitätsbericht ist keine Garantie dafür, dass die STAC-Daten vollständig mit der Spezifikation und ihren Erweiterungen konform ist.","result":"Ergebnis","title":"Konformitätsbericht"}},"stacAssets":"Datei | Dateien","stacCatalog":"Katalog | Kataloge","stacCollection":"Katalog | Kataloge","stacItem":"Element | Elemente","submit":"Absenden","table":{"emptyFilteredText":"Es gibt keine Einträge die dem Filter entsprechen","emptyText":"Keine Einträge verfügbar","sort":{"asc":"Klicke um aufsteigend zu sortieren","clear":"Klicke um die Sortierung aufzuheben","desc":"Klicke um absteigend zu sortieren"}},"thumbnails":"Vorschaubilder","tree":{"moreCollectionPagesAvailable":"Mehre Katalog-Seiten verfügbar","noChildren":"Keine Unterpunkte verfügbar."},"view":{"list":{"label":"Liste","title":"Anzeigen als Liste"},"tiles":{"label":"Kacheln","title":"Anzeigen als Kacheln"},"title":"Anzeigeoptionen"}}')}}]);
//# sourceMappingURL=2862.305e666b.js.map