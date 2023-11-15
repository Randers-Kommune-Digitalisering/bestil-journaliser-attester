const Node = {
  "id": "8ac8b6ae12fa6595",
  "type": "inject",
  "z": "971a7ae6df987a48",
  "name": "Test-data",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "\"Der er modtaget flg. Digital Post besked. Beskeden kan ikke besvares.\\n\\n________________________________\\nModtager CVR: 29189668\\nAfsender CVR: 17143611\\nAfsender: Rigspolitiet\\nAtt: NY_MEDARBEJDER, slotoe@gmail.com<mailto:slotoe@gmail.com>, Digitalisering\\nInholdsinformation\\nPersondata - CPR-nummer: 1234567890\\nEmne: Digitalpost (29189668): Straffeatt. Søren Thomassen (1234567)\\nBeskedens indhold:\\n________________________________\\nDer er ikke skrevet nogen besked. Henvendelsen er vedhæftet som pdf.\\n________________________________\\n\"",
  "payloadType": "jsonata",
  "x": 200,
  "y": 320,
  "wires": [
    [
      "fed891ea3703430c"
    ]
  ],
  "_order": 11
}

module.exports = Node;