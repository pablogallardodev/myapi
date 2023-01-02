const fs = require('fs')
const path = require('path')

const createDatabase = (req, res) => {
  const { name, dataExample } = req.body

  if (!name || !dataExample) {
    res.status(400).send({ status: 'FAILED', data: { error: 'Alguna de las siguientes claves, no existe o está vacía en el cuerpo de la solicitud: "name", "dataExample"' } })
  }

  const data = {}
  data[name] = [dataExample]
  data.keys = Object.keys(dataExample)

  try {
    fs.writeFileSync(path.join(__dirname, `../database/${name}.json`), JSON.stringify(data, null, 2))
    res.status(201).send({ status: "OK", data: { message: 'Base de datos creada correctamente.' } })
  } catch (error) {
    res.status(400).send({ status: 'FAILED', data: { error } })
  }
}

const getAllDatabase = (req, res) => {
  const limit = req.params.limit // TODO: considerar el limite a mostrar opcional

  try {
    const files = fs.readdirSync(path.join(__dirname, `../database`))
      .map(db => {
        const obj = {}
        const name = db.split('.')[0]
        obj.name = name
        obj.url = `http://localhost:3000/api/${name}/`

        return obj
      })

    if (files.length > 0) {
      res.status(200).send({ status: "OK", data: { dataBases: files } })
    } else {
      res.status(200).send({ status: "OK", data: { message: 'No hay bases de datos disponibles.' } })
    }
  } catch (error) {
    res.status(400).send({ status: 'FAILED', data: { error: error.message.split(',')[0] } })
  }

}

module.exports = {
  createDatabase,
  getAllDatabase
}