export default {
  id: 'B4',
  name: 'No bootable device (Bootfehler)',
  storyTitle: 'Szenario: "No bootable device" trotz laufendem PC',
  storyText:
    'Der PC startet, Monitor und Signal sind aktiv – doch es erscheint <b>"No bootable device"</b>. ' +
    'Dein Ziel: In wenigen, überlegten Schritten das richtige Startlaufwerk wählen oder die Bootreihenfolge korrigieren.',
  hints: {
    h1: 'Was hilft bei <b>Boot-Fehlern</b> ohne Hardware zu tauschen?',
    h2: '<ul class="hint"><li><b>USB entfernen:</b> Externe Sticks können vor der SSD landen.</li>' +
        '<li><b>Boot-Menü nutzen:</b> Temporär die SSD wählen, bevor du das BIOS änderst.</li>' +
        '<li><b>Reihenfolge speichern:</b> Dauerhafte Lösung erst sichern, wenn du sicher bist.</li></ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    bootError: true,
    activeSet: 'A',
    usbPresent: true,
    bootOrderChanged: false,
    bootOrderPersisted: false
  }
};
