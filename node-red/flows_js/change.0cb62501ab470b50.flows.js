const Node = {
  "id": "0cb62501ab470b50",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"sagsbehandler\": \"Rekvirent Navn - \" & payload.dq,\t    \"medarbejderCPR\": payload.cpr ~> $contains(\"-\") ? payload.cpr : ((payload.cpr ~> $substring(0, 6)) & \"-\" &  (payload.cpr ~> $substring(6, 8))),\t    \"attestType\": [ (payload.types[0] ? '0'), (payload.types[1] ? '1'), (payload.types[2] ? '2') ],\t    \"attestSubType\": payload.subtypes @ $type  # $index. (\t        true in $type ?\t        $type @ $subtype # $subindex . ( $subtype = true ?\t        {\t            \"attestType\": $index,\t            \"subType\": $subindex ~> $string()\t        } )\t    ),\t    \"samtykke\": \"true\"\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "rekvisitus",
      "pt": "msg",
      "to": "payload.medarbejderCPR",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "attestType",
      "pt": "msg",
      "to": "payload.attestType ~> $count() = 1 ? payload.attestType[0] ~> $number() : (payload.attestType @$at . ($at  ~> $number())) ",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 1460,
  "wires": [
    [
      "31d7e6d2c098310b",
      "bc4af2689a055a99"
    ]
  ]
}

module.exports = Node;