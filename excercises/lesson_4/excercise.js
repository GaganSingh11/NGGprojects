// Ex1

function mul(a,b) {
    result = 0
    for (i=1; i <= a; i++) {
      // console.log(i)
      result = result + b
    }
    console.log(result)
  }
  
  mul(3,5) 
  
  // Ex2
  
  function fruit_ninga(fruit, i_like) {
    if (i_like === true) {
      console.log(`I like ${fruit}!`)
    } else {
      console.log(`I don't like ${fruit}`)
    }
  }
  
  fruit_ninga("apple", false)
  
  // Ex3