const jest = require('jest-cli')

const axios = require('axios')

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(data) {
          return resolve(data)
        } else {
          reject(new Error('error'))
        }
      }, 150)
    })
  }

  static async get(){
    try {
      const responce = await axios.get('https://jsonplaceholder.typecode.com/todos')
      return responce.data
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = Ajax

todos = [
  {id: 1, title: 'Todo 1', completed: false}
]
responce = {
  data: {
    todos
  }
}

console.log(jest)
jest.mock('axios')

axios.get.mockReturnValue(responce)
console.log(Ajax.get())
// return Ajax.get().then(data => {

//   console.log(Ajax.get())
// })
