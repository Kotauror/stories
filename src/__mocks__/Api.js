import axios from 'axios';

class Api {

  static makeRequest() {
    return new Promise(function(resolve, reject) {
      resolve([{
        title: "title",
        content: "content",
        author: "uathor"
      },
      {
        title: "title2",
        content: "content2",
        author: "uathor2"
      }
      ])
    })
  }
}

export default Api