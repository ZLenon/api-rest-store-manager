const AllItens = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

const oneIten =   {
    "id": 2,
    "name": "Traje de encolhimento"
  }
const twoIten = [
  {
    "id": 5,
    "name": "Capaçete dos professor X"
  },
  {
    "id": 6,
    "name": "Oculos do ciclop"
  }
]
const newIten =  {
    "id": 4,
    "name": "Excalibur"
}
  
const requestModel = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 5,
    info: '',
    serverStatus: 2,
    warningStatus: 0
  }
]

const reqBody = [
  {
    "productId": 2,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];
const reqBodyResolves = {
  "id": 10,
  "itemsSold": [
    {
      "productId": 2,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
};

module.exports = {
  AllItens,
  oneIten,
  newIten,
  requestModel,
  twoIten,
  reqBody,
  reqBodyResolves,
};