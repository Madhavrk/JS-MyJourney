const accountId = 144553
let accountEmail = "mad@mad.com"
var acc_password = "12345"
accountCity = "Kerala"

let accountState

// accountId = 2 // cannot change const value

accountEmail = "MAdhav@mad.com"
acc_password = "987654"
accountCity = "Karnataka"


console.table([accountId, accountEmail, acc_password, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/
