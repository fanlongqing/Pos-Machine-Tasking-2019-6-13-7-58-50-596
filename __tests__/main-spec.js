const {countProducts
     ,fetchProduct
     ,generateReceiptItems
     ,countTotalPrice
     ,assemble
} = require('../main');

it ('should count codes', () => {
    //given
    const codes=['0003','0003','0001'];
    //when
    const countCodes=countProducts(codes);
    console.log
    //then
    expect(countCodes[0].count).toBe(2);
});
// it ('should fetch product', () => {
//     const data=[
//         {"id": "0001", "name" : "Coca Cola", "price": 3},
//         {"id": "0002", "name" : "Diet Coke", "price": 4},
//         {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
//         {"id": "0004", "name" : "Mountain Dew", "price": 6},
//         {"id": "0005", "name" : "Dr Pepper", "price": 7},
//         {"id": "0006", "name" : "Sprite", "price": 8},
//         {"id": "0007", "name" : "Diet Pepsi", "price": 9},
//         {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
//         {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
//         {"id": "0010", "name" : "Fanta", "price": 12}
//     ]
//     //given
//     const codes=['0003','0003','0001'];
//     //when
//     const countCodes=countProducts(codes);
//     const countCodesProduct=fetchProduct(countCodes,data);
//     console.log(countCodesProduct);
//     //then
//     expect(countCodesProduct[0].price).toBe(3);
//     expect(countCodesProduct[1].price).toBe(5);
// });
it('结果验证',()=>{
    ////集成
    var codes=generateReceiptItems(['0003','0003','0001']);
    console.log('generateReceiptItems',codes);
    //输出
    // [
    //    {name:'Pepsi-Cola',price:5,count：2}，
    //     {name:'Coca Cola',price:3,count：1}
    
    // ]
    var countTotalPriceInput=[ 
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } 
    ];
    var totalPrice=countTotalPrice(countTotalPriceInput);
    console.log(totalPrice);
    var assembleInput=[
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } 
    ];
    var receipText=assemble(assembleInput,13);
    console.log(receipText);
})