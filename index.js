//copy the attached json file content and paste it into index.js (store in a const in your code)
const Data_In_JsonFlie = [{
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.78,
    "batters": {
        "batter": [
            { "id": "1001", "type": "Regular" },
            { "id": "1002", "type": "Chocolate" },
            { "id": "1003", "type": "Blueberry" },
            { "id": "1004", "type": "Devil's Food" }
        ]
    },
    "topping": [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
    ]
},
{
    "id": "0002",
    "type": "donut",
    "name": "Raised",
    "ppu": 0.55,
    "batters": {
        "batter": [
            { "id": "1001", "type": "Regular" }
        ]
    },
    "topping": [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
    ]
},
{
    "id": "0003",
    "type": "donut",
    "name": "Old Fashioned",
    "ppu": 0.26,
    "batters": {
        "batter": [
            { "id": "1001", "type": "Regular" },
            { "id": "1002", "type": "Chocolate" }
        ]
    },
    "topping": [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
    ]
}
];



//create Function to compute All topping types
function All_topping_types() {
    let list = [];


    for (i = 0; i < Data_In_JsonFlie.length; i++) {
        for (j = 0; j < Data_In_JsonFlie[i].topping.length; j++) {
            list.push(Data_In_JsonFlie[i].topping[j].type);
        }
    }
    let unique = list.filter((v, i, a) => a.indexOf(v) === i);
    return unique;
}



//create Function to compute All batter types
function All_batter_types() {
    let list = [];


    for (i = 0; i < Data_In_JsonFlie.length; i++) {
        for (j = 0; j < Data_In_JsonFlie[i].batters.batter.length; j++) {
            list.push(Data_In_JsonFlie[i].batters.batter[j].type);

        }
    }
    let unique = list.filter((v, i, a) => a.indexOf(v) === i);
    return unique;
}



//create Function to compute Ppu Average
function Ppu_Average() {
    let avg = 0;
    for (var i in Data_In_JsonFlie) {
        avg += Data_In_JsonFlie[i].ppu;

    }
    return avg / (Data_In_JsonFlie.length);
}



//create Function to compute Ppu Sum
function Ppu_Sum() {
    let sum = 0;
    for (var i in Data_In_JsonFlie) {
        sum += Data_In_JsonFlie[i].ppu;

    }
    return sum;
}



//create Function to compute All Mentioned IDs
function All_Mentioned_IDs() {
    let list = [];
    for (i in Data_In_JsonFlie) {
        list.push(Data_In_JsonFlie[i].id);
    }

    for (i = 0; i < Data_In_JsonFlie.length; i++) {
        for (j = 0; j < Data_In_JsonFlie[i].topping.length; j++) {
            list.push(Data_In_JsonFlie[i].topping[j].id);
        }
    }
    for (i = 0; i < Data_In_JsonFlie.length; i++) {
        for (j = 0; j < Data_In_JsonFlie[i].batters.batter.length; j++) {
            list.push(Data_In_JsonFlie[i].batters.batter[j].id);

        }
    }

    let unique = list.filter((v, i, a) => a.indexOf(v) === i);
    return unique;
}


//log these data in console using "console.log"
console.log("All topping types is: " + All_topping_types());
console.log("All batter types is: " + All_batter_types());
console.log("Ppu average is: " + Ppu_Average());
console.log("Ppu sum is: " + Ppu_Sum());
console.log("All mentioned IDs is: " + All_Mentioned_IDs());