const form = document.getElementById("createDb")
const name = document.getElementById("name")
const example = document.getElementById("example")

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

  if (isJSON(example.value)) {
    console.log("Es JSON");
    const data = { name: name.value, dataExample: JSON.parse(example.value) }
    console.log(data);
  } else {
    console.log("No es JSON");
  }

  // fetch('api/db/', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })

})