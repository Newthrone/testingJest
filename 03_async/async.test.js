const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')
console.dir(jest)

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const result = await Ajax.echo('some data')
    expect(result).toBe('some data')
  })

  test('should return value with promise', () => {
    Ajax.echo('some data')
      .then((data) => { expect(data).toBe('some data')
    })
  })

  test('should catch error with promise', () => {
    Ajax.echo()
      .catch((data) => { expect(data).toBeInstanceOf(Error)
    })
  })

  test('should catch error async', async () => {
    try {
      await Ajax.echo()
    } catch(e) {
      expect(e.message).toBe('error')
      expect(e).toBeInstanceOf(Error)
    }
  })
})

describe('Ajax: GET', () => {

  let responce
  let todos = []

  beforeEach(() => {
    todos = [
      {id: 1, title: 'Todo 1', completed: false}
    ]

    responce = {
      data: {
        todos
      }
    }
  })

  test('should return data from backend', () => {
      axios.get.mockReturnValue(responce)

      return Ajax.get().then(data => {
        expect(data.todos).toEqual(todos)
      })
  })
})
