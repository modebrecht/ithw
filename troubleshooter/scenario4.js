export default {
  id: 'K1',
  name: 'Tastatur reagiert nicht',
  storyTitle: 'Szenario: Tastatur reagiert nicht',
  storyText:
    'Der PC ist gestartet, doch deine Tastatur reagiert nicht: Du willst dich anmelden, aber keine Taste wird erkannt. ' +
    'Finde den schnellen Weg, damit die Tastatur wieder reagiert.',
  hints: {
    h1: 'Welche Schritte brauchst du, bevor du Hardware austauschst?',
    h2:
      '<ul class="hint">' +
      '<li><b>Kabel pruefen:</b> Steckt der USB-Stecker fest oder hilft ein anderer Port?</li>' +
      '<li><b>Andere Geraete?</b> Maus funktioniert, Anzeige steht stabil.</li>' +
      '<li><b>Software-Reset:</b> Ein sauberer Neustart initialisiert die Eingabegeraete neu.</li>' +
      '</ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    keyboardResponsive: false
  }
};

