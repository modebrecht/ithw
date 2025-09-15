export default {
  id: 'L0',
  name: 'Der PC startet nicht',
  storyTitle: 'Szenario: Der PC, der nicht starten will',
  storyText: 'Du sitzt im Informatikraum und dein PC reagiert nicht: Du drückst den Power‑Knopf, aber es passiert nichts. Dein Ziel: In möglichst <b>wenigen Schritten</b> die Ursache finden.',
  hints: {
    h1: 'Was kannst du prüfen, <b>ohne den PC zu öffnen</b>?',
    h2: '<ul class="hint"><li><b>Stromversorgung:</b> Kabel/Leiste/Netzschalter prüfen.</li><li><b>Anzeige:</b> Monitor einschalten / richtigen Eingang wählen.</li></ul>'
  },
  start: { pcOn: false, monitorOn: false, signalOk: true }
};
