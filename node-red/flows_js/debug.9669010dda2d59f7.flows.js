const Node = {
  "id": "9669010dda2d59f7",
  "type": "debug",
  "z": "da7be20cd0c704b6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"action\": \"attempting to retrieve missing names\",\t    \"cprs\": cprs @$cpr . (($cpr ~> $substring(0, 6)) & \"-XXXX\"),\t    \"count\": rekvisition ~> $count()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 960,
  "y": 1120,
  "wires": []
}

module.exports = Node;