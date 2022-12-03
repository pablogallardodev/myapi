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

module.exports = {
  createDatabase
}