export default {
  id: 'S2',
  name: 'Überhitzung / Lüfter blockiert',
  storyTitle: 'Szenario: Überhitzung unter Last',
  storyText:
    'Der PC startet normal und zeigt den Desktop. Doch sobald Programme Leistung fordern, ' +
    'drosselt er stark oder schaltet sich nach kurzer Zeit ab. Finde die Ursache und stabilisiere das System.',
  hints: {
    h1: 'Der Fehler tritt erst nach einiger Zeit auf – was kannst du <b>ohne Werkzeuge</b> prüfen?',
    h2:
      '<ul class="hint">' +
      '<li><b>„Passiert der Fehler sofort oder nach einiger Zeit unter Last?“</b> Das spricht für thermische Ursachen.</li>' +
      '<li><b>Luftwege prüfen:</b> Dreht der Lüfter frei oder steckt Staub darin?</li>' +
      '<li><b>Wärmeleitpaste</b> nur bei Bedarf erneuern – zuerst muss die Kühlung mechanisch funktionieren.</li>' +
      '</ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    overheat: true,
    fanBlocked: true,
    thermalsStable: false
  }
};
