const bitcoin = document.querySelector("#price1");
const Ethereum = document.querySelector("#price2");
const liteCoin = document.querySelector("#price3");
const nameCoin = document.querySelector("#price4")
var typed = new Typed('#element', {
  strings: [' SELL Crypto.', '&amp;SELL Crypto.'],
  typeSpeed: 200,
});

const items2 = document.querySelector(".items2");
let open =document.querySelector("#open");
let close =  document.querySelector("#close");
function openNav(val) {
    if(val ==="open") {
        open.style.display ="none";
        close.style.display = "block"
        items2.classList.add("show")
        items2.style.height ="150px"
        items2.style.display ="block";        
    } if(val ==="close") {
        open.style.display ="block";
        close.style.display = "none";
        items2.style.height ="0px"
        items2.style.display ="none";     
        items2.classList.remove("show")
        items2.classList.add("hide") 
    }

}
const api= "https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000";
const api2 ="https://api.diadata.org/v1/assetQuotation/Ethereum/0x0000000000000000000000000000000000000000";
const api3 ="https://api.diadata.org/v1/quotation/LTC";
const api4 ="https://api.diadata.org/v1/quotation/DOGE";
async function apis() {
     let response = await fetch(api);
     let response2 = await fetch(api2);
     let response3 = await fetch(api3);
     let response4 = await fetch(api4);

     let data = await response.json();
     let data2 = await response2.json();
     let data3 = await response3.json();
     let data4 = await response4.json();

     console.log(data);
     console.log(data2);
     bitcoin.innerHTML =`$${data.Price.toFixed(2)}`;
     Ethereum.innerHTML =`$${data2.Price.toFixed(2)}`;
    liteCoin.innerHTML = `$${data3.Price.toFixed(2)}`;
    nameCoin.innerHTML = `$${data4.Price.toFixed(2)}`;
}
apis();
