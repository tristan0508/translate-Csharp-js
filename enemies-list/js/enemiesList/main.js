function main() {
  console.log("My Enemies List!")
  console.log("----------------")

  const enemies = [
    {
      FirstName: "Joshua",
      LastName: "Flowers",
      Offenses: ["Being a jerk to me in elemntary school","Not being nice to me in elemntary school"],
      isReallyHated: true
    },
    {
      FirstName: "Darth",
      LastName: "Vader",
      Offenses: ["Cut off Luke's hand","Murdered all those kids", "Unkind management practices"],
      isReallyHated: false
    },
    {
      FirstName: "Betty",
      LastName: "Rudelady",
      Offenses: ["Phone calls in the theater","Phone calls on the bus","Phone calls in line at the grocery store","Poor conversationalist"],
      isReallyHated: true
    },
    {
      FirstName: "Leon",
      LastName: "Peck",
      Offenses: ["Being a jerk to me in elemntary school","Not being nice to me in elemntary school"],
      isReallyHated: false
    },

  ]
  enemies.map(enemy => {
    if(enemy.isReallyHated){
      return console.log(`${enemy.FirstName} ${enemy.LastName} Really, really dislike!`)
    } else {
      return console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
  })

}

main();
