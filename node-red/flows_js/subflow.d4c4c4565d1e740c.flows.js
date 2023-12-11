const Node = {
  "id": "d4c4c4565d1e740c",
  "type": "subflow",
  "name": "Database connector",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "3576edeecbbb87af"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1250,
      "y": 100,
      "wires": [
        {
          "id": "bab9102c9ce6a406",
          "port": 0
        },
        {
          "id": "4f4086d3fdf571db",
          "port": 0
        },
        {
          "id": "076ff355c5b536f3",
          "port": 0
        },
        {
          "id": "258b8355268c9ff7",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "inputLabels": [
    "Query input"
  ],
  "outputLabels": [
    "Result output"
  ],
  "icon": "node-red/db.svg",
  "status": {
    "x": 1260,
    "y": 260,
    "wires": [
      {
        "id": "076ff355c5b536f3",
        "port": 0
      },
      {
        "id": "9ca16ae19abcd889",
        "port": 0
      }
    ]
  },
  "_order": 4
}

module.exports = Node;