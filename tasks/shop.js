const valiuta = "EUR";
const prekes = [
    {
        name: "Bananas",
        price: 2,
        inStock: 10,
    },
    {
        name: "Agurkas",
        price: 3,
        inStock: 10,
    },
    {
        name: "Pomidoras",
        price: 1.57,
        inStock: 30,
    },
];

function shop(products, currency) {
    let totalValue = 0;
    console.log("MUSU PARDUOTUVE");
    console.log("----------------");
    for (let i = 0; i < products.length; i++) {
        console.log(` ${i + 1}) ${products[i].name} kainuoja ${products[i].price.toFixed(2)} ${currency} ir turime jų ${products[i].inStock} vienetų.`);
        totalValue += products[i].price * products[i].inStock;
    }
    console.log("------------------------");
    console.log(`Viso asortimento kaina: ${totalValue.toFixed(2)} ${currency}`);
}

shop(prekes, valiuta);

/* console.log('MUSU PARDUOTUVE');
console.log('----------------');
console.log(` 1) Bananas kainuoja 2.00 EUR ir turime jų 10 vienetų.`);
console.log(` 2) Agurkas kainuoja 3.00 EUR ir turime jų 10 vienetų.`);
console.log(` 3) Pomidoras kainuoja 1.57 EUR ir turime jų 30 vienetų.`);
console.log('------------------------');
console.log(`Viso asortimento kaina: 97.10 EUR`);
 */
