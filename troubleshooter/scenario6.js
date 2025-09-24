export default {
  id: 'S2',
  name: 'Überhitzung / Lüfter blockiert',
  storyTitle: 'Szenario: Überhitzung unter Last',
  storyText:
    'Der PC startet normal, im Idle wirkt alles ok – doch unter Last throttelt er und schaltet sich sogar ab. ' +
    'Du hörst, dass der Lüfter kaum dreht. Finde die Ursache und stelle den stabilen Betrieb wieder her.',
  hints: {
    h1: 'Symptom eingrenzen: <b>Wann</b> passiert der Absturz?',
    h2:
      '<ul class="hint">' +
      '<li><b>Hinweis:</b> Passiert der Fehler sofort oder nach einiger Zeit unter Last? Das weist auf die Kühlung hin.</li>' +
      '<li><b>Lüfterprüfung:</b> Gehäuse öffnen, Lüfter frei drehen lassen (simuliert) und Staub entfernen.</li>' +
      '<li><b>Thermals checken:</b> Nach der Reinigung unter Last testen. Wärmeleitpaste nur bei Bedarf erneuern.</li>' +
      '</ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    fanBlocked: true,
    thermalsStable: false
  }
};
