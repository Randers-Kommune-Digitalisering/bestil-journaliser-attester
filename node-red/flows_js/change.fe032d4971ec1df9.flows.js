const Node = {
  "id": "fe032d4971ec1df9",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "f111898069b32afc",
  "name": "Formatér bestilling \\n inden lagring",
  "rules": [
    {
      "t": "set",
      "p": "bestilling",
      "pt": "msg",
      "to": "{\t   \"sagsbehandlerNavn\": (bestilling.sagsbehandler ~> $split(\"-\"))[0] ~> $trim(),\t   \"sagsbehandlerDQ\": (bestilling.sagsbehandler ~> $split(\"-\"))[1] ~> $trim(),\t   \"cpr\": bestilling.medarbejderCPR,\t   \"erStraffeattest\": bestilling.attestType = \"Straffeattest\" or bestilling.attestType = \"\",\t   \"erBorneattest\": bestilling.attestType = \"Børneattest\" or bestilling.attestType = \"\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 360,
  "wires": [
    [
      "95ab33f2dec2f897"
    ]
  ],
  "_order": 90
}

module.exports = Node;