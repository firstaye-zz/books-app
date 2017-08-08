// This is used to hold the json file and return to the service.

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = 
      {
        "status":"success",
        "data": {
            "author":"arthritis-foundation",
            "birthday":"September 13, 1916",
            "birthPlace":"Cardiff, United Kingdom",
            "books": [{
            "title":"The BFG",
            "PublishDate":"1982",
            "purchaseLink":"https://www.amazon.com/BFG-Roald-Dahl/dp/0142410381/ref=sr_1_3?ie=UTF8&qid=1501899423&sr=8-3&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/51oQX1lEFAL._AC_US218_.jpg"
            },
            { 
            "title":"James and the Giant Peach",
            "PublishDate":"1961",
            "purchaseLink":"https://www.amazon.com/James-Giant-Peach-Roald-Dahl/dp/0142410365/ref=sr_1_4?ie=UTF8&qid=1501899423&sr=8-4&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/51bXpL9GKBL._AC_US218_.jpg"
            },
            {
            "title":"The Witches",
            "PublishDate":"1983",
            "purchaseLink":"https://www.amazon.com/Witches-Roald-Dahl/dp/014241011X/ref=sr_1_5?ie=UTF8&qid=1501899423&sr=8-5&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/51pFu3LWzgL._AC_US218_.jpg"
            },
            {
            "title":"Matilda",
            "PublishDate":"1988",
            "purchaseLink":"https://www.amazon.com/Matilda-Roald-Dahl/dp/0142410373/ref=sr_1_6?ie=UTF8&qid=1501899423&sr=8-6&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/51p-Bvu0-ML._AC_US218_.jpg"
            },
            {
            "title":"Fantastic Mr. Fox",
            "PublishDate":"1970",
            "purchaseLink":"https://www.amazon.com/Fantastic-Mr-Fox-Roald-Dahl/dp/0142410349/ref=sr_1_8?ie=UTF8&qid=1501899423&sr=8-8&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/51mP2DpHkML._AC_US218_.jpg"
            },
            {
            "title":"The Wonderful Story of Henry Sugar",
            "PublishDate":"1977",
            "purchaseLink":"https://www.amazon.com/Wonderful-Story-Henry-Sugar/dp/0141304707/ref=sr_1_9?ie=UTF8&qid=1501899423&sr=8-9&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/51d+XfreIuL._AC_US218_.jpg"
            },
            {
            "title":"Charlie and the Great Glass Elevator",
            "PublishDate":"1972",
            "purchaseLink":"https://www.amazon.com/Charlie-Great-Glass-Elevator-Roald/dp/0142410322/ref=sr_1_14?ie=UTF8&qid=1501899423&sr=8-14&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/517iuJrajoL._AC_US218_.jpg"
            },
            {
            "title":"Charlie and the Chocolate Factory",
            "PublishDate":"1961",
            "purchaseLink":"https://www.amazon.com/Charlie-Chocolate-Factory-Roald-Dahl/dp/0142410314/ref=sr_1_19?ie=UTF8&qid=1501899833&sr=8-19&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/51zCsplvpgL._AC_US218_.jpg"
            },
            {
            "title":"George's Marvelous Medicine",
            "PublishDate":"1981",
            "purchaseLink":"https://www.amazon.com/Georges-Marvelous-Medicine-Roald-Dahl/dp/0142410357/ref=sr_1_18?ie=UTF8&qid=1501899833&sr=8-18&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/511Y4VSpSaL._AC_US218_.jpg"
            },
            {
            "title":"The Enormous Crocodile",
            "PublishDate":"1978",
            "purchaseLink":"https://www.amazon.com/Enormous-Crocodile-Roald-Dahl/dp/0142414530/ref=sr_1_17?ie=UTF8&qid=1501899833&sr=8-17&keywords=roald+dahl",
            "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/51vx5hDAFyL._AC_US218_.jpg"
            }]
        }
        }
    
    return {data};
  }
}