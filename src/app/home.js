const $ = selector => document.getElementById(selector)

const form = $("createDb")

const isJSON = (json) => {
  try {
    JSON.parse(json)
  } catch (error) {
    return false
  }
  return true
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = $("name")
  const example = $("example")

  if (isJSON(example.value)) {
    const data = { name: name.value, dataExample: JSON.parse(example.value) }

    if (!data.name || !data.dataExample) {
      alert("Por favor, completa el formulario, no debén existir campos vacíos...")
    } else {
      fetch('api/db/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
    }
  } else {
    console.log("No es JSON");
  }



})