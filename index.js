let seatCount = 0;
let seatLeft = 8;
let totalPrices = 0;


const seatList = document.querySelectorAll('.seats');

for(const seat of seatList) {
    seat.addEventListener('click', function() {
        seat.style.background = 'Green';
        seatCount += 1;
        seatLeft -= 1;

      const seatName = document.querySelector('.seats').innerText;
      const ecoNomy = document.querySelector('.economy').innerText;
      const priceList = document.querySelector('.price-list').innerText;

      // const carted = seat.childNodes[2].innerText;
      // console.log(carted)
      // const price = parseInt(carted.querySelector('#prices-list').innerText);
      // console.log(price)
      
      const titleContainer = document.getElementById('seat-container');
      const p = document.createElement('p')
      p.innerText = seatName + " " + ecoNomy + " " + priceList;      
      titleContainer.appendChild(p)      
    
      totalPrices += priceList;
      document.getElementById('total-price').innerText = totalPrices;


      document.getElementById('grand-total').innerText = totalPrices;
      // totalPrice('total-price',parseInt(price))




      
        setInnerText('seat-increase', seatCount);
        setInnerText('seat-left', seatLeft);
    })


    
}


const btn = document.getElementById('apply-btn');

btn.addEventListener('click', function () {
  const couponCode = document.getElementById('input-field').value;
  const couponCodeText = couponCode.split(" ").join("").toUpperCase();
  // console.log(couponCodeText)

  if (couponCodeText === "NEW15") {
    return ("15% Okay")
  
  }
   else if (couponCodeText === "COUPLE20") {
    return ("20% Okay")
  }

  else {
    alert("invalid")
  }


})



const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', function () {
   const modal = document.getElementById('modal');
   modal.classList.remove('hidden')
})



// function totalPrice(id, value){
//   const totalPrice =  document.getElementById(id).innerText;
//   const totalPriceConvert = parseInt(totalPrice);
//   const sum = totalPriceConvert + parseInt(value);
//   setInnerText('total-price', sum)
// }

// function grandTotal(id, value){
//     const grandTotal =  document.getElementById(id).innerText;
//     const grandTotalConvert = parseInt(grandTotal);
//     const sum = grandTotalConvert + parseInt(value);
//     setInnerText('grand-total', sum)
//   }

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}