export default {
  id: 'M3',
  name: 'Kein Bild trotz Start (POST)',
  storyTitle: 'Szenario: Kein Bild trotz Start',
  storyText: 'Der PC läuft (Lüfter/LED), der Monitor ist an – doch es erscheint <i>kein Bild</i> (No Signal). <b>Was prüfst du als Nächstes?</b>',
  hints: {
    h1: 'Vor dem Bild passiert der <b>POST</b>. Was verraten <b>Pieptöne/LEDs</b>?',
    h2: '<ul class="hint"><li><b>POST-Hinweise lesen:</b> DRAM-LED an? Beepcode für Speicher?</li><li><b>RAM prüfen:</b> Riegel korrekt eindrücken/einzeln testen.</li><li><b>Anzeige nur sekundär:</b> Monitor kann an sein, aber ohne POST gibt es kein Signal.</li></ul>'
  },
  start: { pcOn: true, monitorOn: true, signalOk: false }
};
