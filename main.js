const db=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]

function countProducts (codes) {
    let countCodes=[];
    var map=new Map();
    for (let i = 0; i < codes.length; i++) {
        var code=codes[i];
        if(!map.has(code)){
            var item={
                code:code,
                count:1
            };
            map.set(code,item);
        }
        else{
            var item=map.get(code);
            item.count++;
            map.set(code,item);
        }
       
    }
    // console.log(map);
    map.forEach(function(item)
    {
         countCodes.push(item);
    })
    // console.log(countCodes);
  return countCodes;
}
// function fetchProduct(countCodes,data) {
//     let result=[];
//     for (let i = 0; i < data.length; i++) {
//         for (let j = 0; j < countCodes.length; j++) {
//             if (data[i].id===countCodes[j].code) {
//                 result.push({name:data[i].name,
//                     price:data[i].price,
//                     count:countCodes[j].count})
               
//             }
            
//         }
        
       
//     }
//     return result;
   
// }
function fetchProduct(code){
    for (let index = 0; index < db.length; index++) {
    if(db[index].id===code){
    console.log(db[index]);
    return {
    name:db[index].name,
    price:db[index].price
    }
} 
    }
    }
function generateReceiptItems (codes) {
    let receiptItems=[];
    let countCodes=countProducts(codes);
    countCodes.forEach(function(item){
        var product =fetchProduct(item.code);
        receiptItems.push({
            name:product.name,
            price:product.price,
            count:item.count
        })
    })
    return receiptItems;
    // console.log(countCodes);
    // let result=[];
    // for (let j = 0; j < countCodes.length; j++) {
    //     let receiptItems=fetchProduct(countCodes[j].code,db);
    //     result.push({name:receiptItems.name,price:receiptItems.price,count:countCodes[j].count});
    // }
    // return result;
   
}
function countTotalPrice (countTotalPriceInput) {
    let toatalPrice=0;
    for (let index = 0; index < countTotalPriceInput.length; index++) {
        toatalPrice+=countTotalPriceInput[index].price*countTotalPriceInput[index].count;
        
    }
    return toatalPrice;
    countTotalPriceInput.forEach(function(item)
    {
        toatalPrice+=item.price*item.count;
    });
   
}
function assemble (assembleInput,toatalPrice) {
    let receipText="Receipts\n";
    receipText+='------------------------------\n';
    for (let index = 0; index < assembleInput.length; index++) {
        receipText+=assembleInput[index].name+'\t';
        receipText+=assembleInput[index].price+'\t';
        receipText+=assembleInput[index].count+'\n';
    }
    receipText+='------------------------------\n';
    receipText+='Price:'+toatalPrice;
    return receipText;
}

function generateReceipts (codes) {
    let receiptItems=generateReceiptItems(codes);
    let toatalPrice=countTotalPrice(receiptItems);
    let receipText=assemble(receiptItems,toatalPrice);
    return receipText;
}

module.exports ={countProducts
     ,fetchProduct
     ,generateReceiptItems
     ,countTotalPrice
     ,assemble
     ,generateReceipts
};