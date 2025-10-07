export default {
  id: 'N1',
  name: 'Netzwerk/Login-Spezial (Mittel)',
  storyTitle: 'Szenario: Domänen-Login scheitert',
  storyText:
    'Der PC ist gestartet, der Login-Bildschirm erscheint – doch dein Domänenkonto meldet: ' +
    '"<b>Profil nicht verfügbar / Server nicht erreichbar</b>". ' +
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
