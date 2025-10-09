export default {
  id: 'M3',
  name: 'PC-Upgrade',
  storyTitle: 'Szenario 3: PC-Upgrade',
  storyText: 'Du hast kürzlich neue Komponenten in deinen PC integriert. Du schaltest den PC an und er läuft. Die Lüfter sind hörbar, LED leuchtet grün und der Monitor ist angeschaltet. Jedoch haben haben wir <i>kein Bild</i> (No Signal). Was ist ein häufig auftretender Fehler bei einem Komponenten-Upgrade? <b>Was prüfst du als Nächstes?</b>',
  hints: {
    h1: 'Vor dem Bild passiert der <b>POST</b>. Was verraten <b>Pieptöne/LEDs</b>?',
    h2: '<ul class="hint"><li><b>POST-Hinweise lesen:</b> DRAM-LED an? Beepcode für Speicher?</li><li><b>RAM prüfen:</b> Riegel korrekt eindrücken/einzeln testen.</li><li><b>Anzeige nur sekundär:</b> Monitor kann an sein, aber ohne POST gibt es kein Signal.</li></ul>'
  },
  start: { pcOn: true, monitorOn: true, signalOk: false }
};
