let products = document.querySelector('#products')
let productsList = [
    {
        name : '4 SEASONS EMULSION MATT EXT BASE',
        detail : 'โฟร์ซีซันส์ สีน้ำ ด้าน ภายนอก เบส',
        price : 12000,
        img : './img/products/1.png'
    },
    {
        name : 'SUPERSHIELD EMULSION EXT ALKALI PRIMER',
        detail : 'ซุปเปอร์ชิลด์ สีรองพื้นปูนใหม่',
        price : 10000,
        img : './img/products/2.png'
    },
    {
        name : 'DURACLEAN EMULSION CONTACT PRIMER WB',
        detail : 'ราคลีน น้ำยารองพื้นปูนเก่า สูตรน้ำ',
        price : 9000,
        img : './img/products/3.png'
    },
    {
        name : 'DURACLEAN EMULSION MATT INT',
        detail : 'ดูราคลีน สีน้ำ ด้าน ภายใน',
        price : 2000,
        img : './img/products/4.png'
    },
    {
        name : 'SUPERSHIELD AQUA GLOSS PRIMER WB',
        detail : 'ซุปเปอร์ชิลด์ อะควา กลอส สีรองพื้น',
        price : 1200,
        img : './img/products/5.png'
    },
    {
        name : 'TOA ROOFSEAL SUN BLOCK',
        detail : 'โฟร์ซีซันส์ สีน้ำ ด้าน ภายนอก เบส',
        price : 10000,
        img : './img/products/6.png'
    },
    {
        name : 'DURACLEAN A PLUS EMULSION SEMI GLOSS',
        detail : 'ดูราคลีน เอ พลัส สีน้ำ กึ่งเงา ภายใน',
        price : 9000,
        img : './img/products/7.png'
    },
    {
        name : 'TOA HYDRO QUICK PRIMER WB',
        detail : 'ทีโอเอ ไฮโดรควิก ไพรเมอร์ สูตรน้ำ',
        price : 2000,
        img : './img/products/8.png'
    }
]

function initApp (x){
    x.forEach((value,key) => {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div id="card" class="card border-0 m-2" style="width: 18rem;">
                <img src="${value.img}" class="card-img-top bg-light rounded-3" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${value.name}</h5>
                  <p class="card-text overflow-hidden mb-2" style="height: 20px;">${value.detail}</p>
                  <p><strong class="fw-bold">ราคา : </strong>${value.price}</p>
                  <div class="star mb-2">
                    <i class="fa-solid fa-star" style="color: #f5e20f;"></i>
                    <i class="fa-solid fa-star" style="color: #f5e20f;"></i>
                    <i class="fa-solid fa-star" style="color: #f5e20f;"></i>
                    <i class="fa-solid fa-star" style="color: #f5e20f;"></i>
                    <i class="fa-solid fa-star" style="color: #f5e20f;"></i>
                  </div>
                  <a href="./detailProduct.html" class="btn btn-add-to-cart px-3 p-1">Add to Cart</a>
                </div>
              </div>
        `
        products.appendChild(newDiv)
    })
    
}   
initApp(productsList)

filterArr = []

// function search product by click btn ID Search

    document.querySelector('#search').addEventListener('keyup', () => {
    let text = document.querySelector('#search').value
    filterArr = productsList.filter((a) => {
        if(a.name.includes(text)) {
            console.log(a.name)
            return a.name
        }
    })
    console.log(filterArr)
    if(filterArr.length === 8) {
        filterArr = [] 
        console.log(filterArr)
        
    } else {
        initApp(filterArr)
        console.log('ไม่เท่ากัน')
    }
    // if(this.value = ""){
    //     initApp(productsList)
    // } else {
    //     if(filterArr == ""){
    //         document.getElementsByClassName('card').innerHTML = " "
    //     } else {
    //         initApp(filterArr)
    //     }
    // }
})