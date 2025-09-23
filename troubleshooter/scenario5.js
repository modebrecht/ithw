export default {
  id: 'N1',
  name: 'Domänen-Login scheitert',
  storyTitle: 'Szenario: Domänen-Login scheitert',
  storyText:
    'Windows ist gestartet und der Login-Bildschirm erscheint – doch beim Domänen-Login meldet der PC: <b>Profil nicht verfügbar</b> oder <b>Server nicht erreichbar</b>. ' +
    'Finde den Fehler und sorge dafür, dass die Anmeldung wieder klappt.',
  hints: {
    h1: 'Anmeldung scheitert – was prüfst du <b>außerhalb des PCs</b> zuerst?',
    h2:
      '<ul class="hint">' +
      '<li><b>LAN-Verbindung:</b> Sitzt das Netzwerkkabel richtig? Passt die Dose?</li>' +
      '<li><b>Link-LED:</b> Am Switch/Port muss eine LED blinken. Ohne Link kommt keine Domänenverbindung.</li>' +
      '<li><b>Nur als Notlösung:</b> Offline/anderer Account verwenden – aber Kabelproblem trotzdem beheben.</li>' +
      '</ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    networkConnected: false,
    switchLedOn: false
  }
};
