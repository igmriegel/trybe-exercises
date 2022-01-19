import fs from 'fs'

const readfile = (path) => {
  const file = fs.readFileSync(path)

  console.log('teste usando es6')

  return file
}

export default readfile

// feat ainda com status de experimental na documentação do node.
// não usar!
