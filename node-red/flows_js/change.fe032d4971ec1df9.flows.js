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
      "to": "{\t   \"rekvirentNavn\": (bestilling.sagsbehandler ~> $split(\"-\"))[0] ~> $trim(),\t   \"rekvirentDQ\": (bestilling.sagsbehandler ~> $split(\"-\"))[1] ~> $trim(),\t   \"rekvisitus\": bestilling.medarbejderCPR,\t   \"attestType\": bestilling.attestType ~> $split(\", \"),\t   \"straffeattestType\": bestilling.straffeattestType,\t   \"borneattestType\": bestilling.borneattestType\t}",
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
  ]
}

module.exports = Node;