export default {
  id: 'S2',
  name: 'Überhitzung / Lüfter blockiert',
  storyTitle: 'Szenario: Überhitzung unter Last',
  storyText:
    'Der PC startet normal und bleibt im Idle stabil. Doch sobald du ihn forderst, ' +
    'tritt nach kurzer Zeit <b>Throttling oder ein Abschalten</b> auf. ' +
    'Finde die Ursache und stelle den stabilen Betrieb wieder her.',
  hints: {
    h1: 'Thermik-Frage: <b>Passiert der Fehler sofort oder nach einiger Zeit unter Last?</b>',
    h2:
      '<ul class="hint">' +
      '<li><b>Frage klären:</b> „Passiert der Fehler sofort oder nach einiger Zeit unter Last?“ → deutet stark auf Thermik.</li>' +
      '<li><b>Symptome beobachten:</b> Lasttest laufen lassen und auf Temperatur-/Lüfterverhalten achten.</li>' +
      '<li><b>Lüfter blockiert?</b> Seitenwand öffnen, Kabel oder Staub entfernen, Lüfter frei drehen lassen.</li>' +
      '<li><b>Nach der Reinigung:</b> Temperaturen mit Monitoring prüfen; Wärmeleitpaste nur bei Bedarf als Zusatz erwähnen.</li>' +
      '</ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    fanBlocked: true,
    dustCleared: false,
    tempsStable: true,
    overheatObserved: false
  }
};
