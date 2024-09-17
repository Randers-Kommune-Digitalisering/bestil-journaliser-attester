const Node = {
  "id": "95177c199a463199",
  "type": "change",
  "z": "da53ba55e6b4ce3b",
  "g": "23af5f5e18dfea7e",
  "name": "Sæt global.attestTyper",
  "rules": [
    {
      "t": "set",
      "p": "attestTyper",
      "pt": "global",
      "to": "[{\"id\":0,\"name\":\"Offentlig straffeattest\",\"url\":\"https://dsa.politi.dk/RequestPublic?style=PolitiDK\",\"subTypes\":[{\"id\":0,\"name\":\"Ansættelse i sociale servicefag\",\"description\":\"Personer der søger ansættelse eller er ansat til at yde indsats i hendhold til §§ 83 og 85 i lov om social service, samt for personer der søger ansættelse eller er ansat ved tilbud, hvor der ydes en sådan indsats.\"},{\"id\":1,\"name\":\"Ansættelse i folkeskolen\",\"description\":\"Personer der søger ansættelse i folkeskolen, og som led i ansættelsen har direkte kontakt med elever.\"},{\"id\":2,\"name\":\"Ansættelse som personlig hjælper\",\"description\":\"Personer der i medfør af lov om social service §§ 52, 54, 74 skal virke som personlig rådgiver, fast kontakt- eller støtteperson.\"},{\"id\":3,\"name\":\"Ansættelse ved dagtilbud for børn/unge\",\"description\":\"Personer der søger ansættelse ved dag/døgn/rådgivningstilbud for børn og unge.\"}]},{\"id\":1,\"name\":\"Privat straffeattest\",\"url\":\"https://dsa.politi.dk/RequestPrivateThirdParty?style=PolitiDK\"},{\"id\":2,\"name\":\"Offentlig børneattest\",\"url\":\"https://dsa.politi.dk/RequestChild?style=PolitiDK\",\"subTypes\":[{\"id\":0,\"name\":\"Ansættelse i børnefagligt område\",\"description\":\"Personer, der som led i ansættelsen eller beskæftigelsen har direkte kontakt med børn under 15 år, eller der som led i ansættelsen eller beskæftigelsen, færdes fast blandt børn under 15 år og derved har mulighed for at opnå direkte kotakt med disse.\"},{\"id\":1,\"name\":\"Pårørende til ansat i børnefagligt område\",\"description\":\"Pågældende personers ægtefæller, samlevere eller andre, hvis de har mulighed for via ansættelsen eller beskæftigelsen at opnå direkte kontakt med børn under 15 år.\"}]}]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 540,
  "y": 100,
  "wires": [
    []
  ]
}

module.exports = Node;