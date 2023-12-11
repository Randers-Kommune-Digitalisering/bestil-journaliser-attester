const Node = {
  "id": "fe032d4971ec1df9",
  "type": "change",
  "z": "c715449c21b1a61f",
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
  "x": 190,
  "y": 480,
  "wires": [
    [
      "bd3191f24c7a2057"
    ]
  ],
  "_order": 69
}

module.exports = Node;