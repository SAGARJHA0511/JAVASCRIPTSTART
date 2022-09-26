class Acc {
    Balance = 500
    get_Acc_Details() {
        console.log("Acc Class - get_Acc_Details")
    }
}
class Savings_Acc extends Acc {
    withdraw() {
        console.log("oggy, have fun")
    }
}
class Current_Acc extends Acc {
    pay_Bill() {
        console.log("Pay now ")
    }
}

let sa1 = new Savings_Acc()
console.log(sa1.Bal)
sa1.get_Acc_Details()

let ca1 = new Current_Acc();
ca1.get_Acc_Details()