const Node = {
  "id": "38a01a6bc03efad1",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "name": "Fix payload",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> | $ |\t{\t    \"dq\": col1 ~> $replace(\"\\u0000\", \"\") ~> $uppercase(),\t    \"rolle\": col5 ~> $replace(\"\\u0000\", \"\") ~> $replace(\"Stedfortraeder for Leder\", \"2\") ~> $replace(\"Leder\", \"1\") ~> $lowercase() \t},\t[\"col1\", \"col2\", \"col3\", \"col4\", \"col5\", \"col6\", \"col7\", \"col8\"] |",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $distinct()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "testDQ",
      "pt": "msg",
      "to": "TEST_DQ",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $append({ \"dq\": testDQ, \"rolle\": \"2\"})",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 750,
  "y": 360,
  "wires": [
    [
      "cfb139234dc1fef6"
    ]
  ]
}

module.exports = Node;