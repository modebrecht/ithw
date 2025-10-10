export default {
  id: 'N1',
  name: 'Domänen-Login',
  storyTitle: 'Szenario 6: Domänen-Login scheitert',
  storyText:
    'Der PC ist gestartet, du versuchst dich einzuloggen und dann erscheint die Meldung: ' +
    '"<b>Domäne nicht verfügbar</b>". ' +
    'Finde die Ursache und ermögliche den Login.',
  hints: {
    h1: 'Domänen-Login schlägt fehl – was sagt das über die <b>Netzwerkverbindung</b>?',
    h2:
      '<ul class="hint">' +
      '<li><b>LAN-Kabel verfolgen:</b> Steckt es richtig? Link-LED am Switch leuchtet?</li>' +
      '<li><b>Domäne braucht Netzwerk:</b> Ohne Verbindung klappt nur ein <b>lokales Konto</b> (Notlösung).</li>' +
      '<li><b>Hardware-Overkill vermeiden:</b> BIOS, CPU oder RAM helfen hier nicht – Fokus auf Netzwerk.</li>' +
      '</ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    lanConnected: false,
    switchLedOn: false
  }
};
