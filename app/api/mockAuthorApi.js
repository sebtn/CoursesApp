import delay from 'delay'

const authors = [
  {
    id: 'Seb-machines',
    firstName: 'Seb'
    lastName: 'Ag'
  },
  {
    id: 'Cat-machines',
    firstName: 'ignu'
    lastName: 'Fire'
  },
  {
    id: 'Lil-machines',
    firstName: 'Lil'
    lastName: 'Ch'
  }
]

const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase()
}

class AuthorApi {
  //getall
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], authors))
      }, delay)
    })
  }
  //save
  static saveAuthor(author) {
    author = Object.assign({}, author)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //server side validation mock
        const minAuthorNameLength = 3
        if (author.firstName.length < minAuthorNameLength) {
          reject(`Fist name shuold be at least ${minAuthorNameLength} chars`)
        }
        if (author.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }
        if (author.id) {
          const existingAuthorIndex = authors.findIndex(a => a.id == author.id)
          authors.splice(existingAuthorIndex, 1, author)
        } else {
        //Just simulating creation here.
        //The server would generate ids for new authors in a real app.
        //Cloning so copy returned is passed by value rather than by reference.
          author.id = generateId(author)
          authors.push(author)
        }
        resolve(author)
      }, delay)
    })
  }
  // delete
  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = authors.findIndex(author => {
          author.id === authorId
        })
        authors.splice(indexOfAuthorToDelete, 1)
        resolve()
      }, delay)
    })
  }  
}

export default AuthorApi
