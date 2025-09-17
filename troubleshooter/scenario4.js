export default {
  id: 'S4',
  name: 'No bootable device (Bootfehler)',
  storyTitle: 'Szenario: "No bootable device" trotz Start',
  storyText:
    'Der PC startet, Monitor und Signal sind aktiv – doch statt Windows erscheint sofort <b>NO BOOTABLE DEVICE</b>. ' +
    'Finde den Fehler und bringe das System wieder bis zum Login.',
  hints: {
    h1: '<b>Externes Medium?</b> Bootet der PC vielleicht vom falschen Gerät (USB-Stick)?',
    h2:
      '<ul class="hint">' +
      '<li><b>Boot-Menü nutzen:</b> Mit F12 das richtige Startlaufwerk (SSD) wählen – reversibel und schnell.</li>' +
      '<li><b>USB-Geräte entfernen:</b> Sticks können die Bootreihenfolge überlagern. Danach <b>neu starten</b>.</li>' +
      '<li><b>Nur wenn nötig:</b> Bootreihenfolge im BIOS dauerhaft ändern und speichern.</li>' +
      '</ul>'
  },
  start: {
    pcOn: true,
    monitorOn: true,
    signalOk: true,
    bootError: true,
    activeSet: 'A',
    bootMenuOpen: false,
    usbPresent: true,
    bootOrderChanged: false,
    bootOrderPersisted: false
  }
};
