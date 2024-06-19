const Node = {
  "id": "b6fa57ad2a26bb4e",
  "type": "change",
  "z": "797d31130fc2a555",
  "name": "Flyt filer til msg.attachments",
  "rules": [
    {
      "t": "set",
      "p": "filedata",
      "pt": "msg",
      "to": "attachments.content",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "filenames",
      "pt": "msg",
      "to": "attachments.filename",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "attachments",
      "pt": "msg",
      "to": "filenames @ $name # $index . {\t    \"filename\": $name,\t    \"content\": $$.filedata[$index]\t}",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "filedata",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "filenames",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 720,
  "y": 80,
  "wires": [
    []
  ]
}

module.exports = Node;