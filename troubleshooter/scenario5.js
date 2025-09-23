export default {
  id: 'N1',
  name: 'Domänen-Login scheitert',
  storyTitle: 'Szenario: Domänen-Login scheitert',
  storyText:
    'Der PC startet und zeigt das Windows-Login. Beim Versuch, sich an der Domäne anzumelden, erscheint «Profil nicht verfügbar».' +
    ' Stelle die Netzwerkverbindung wieder her, damit der Login klappt.',
  hints: {
    h1: 'Domänen-Login fehlgeschlagen? Prüfe zuerst das <b>Netzwerk</b>.',
    h2:
      '<ul class="hint">' +
      '<li><b>Netzwerkkabel:</b> Sitzt der Stecker korrekt? Richtiges Patchfeld/Dose nutzen.</li>' +
      '<li><b>Link-LED am Switch:</b> Blinkt sie? Kein Licht = kein Link.</li>' +
      '<li><b>Notlösung:</b> Bei längeren Ausfällen allenfalls mit lokalem Account/Offline weiterarbeiten.</li>' +
      '</ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    networkOk: false,
    loginError: true
  }
};
