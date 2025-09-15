export default {
  id: 'E1',
  name: 'No Signal (falsche Quelle)',
  storyTitle: 'Szenario: PC läuft, kein Bild',
  storyText: 'Der PC läuft (Lüfter/LED), aber wir haben kein Bild. <b>Was überprüfst du als Erstes?</b>',
  hints: {
    h1: 'Was beeinflusst das <b>Bild</b>, ohne den PC zu öffnen?',
    h2: '<ul class="hint"><li><b>Anzeige:</b> Monitor einschalten.</li><li><b>Quelle/Kabel:</b> HDMI/DP richtig wählen oder Kabel fest einstecken.</li></ul>'
  },
  start: { pcOn: true, monitorOn: false, signalOk: false }
};
