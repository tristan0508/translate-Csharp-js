
const main = () => {

  const names = [ "Nashville", "Hong Kong", "The back yard", "Earth",
  "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]
  console.log("All Place Names")

  names.map(name => console.log(name))
  
  console.log("")

  console.log("'The' Place Names")
  const a = names.filter(a => a.startsWith("The"))
  a.map(name => console.log(name))

}

main();