var frontIMG=['res/ProductImg/2_Hashira.jpg',
'res/ProductImg/2_BakiHanma.jpg',
'res/ProductImg/2_Chopper.jpg',
'res/ProductImg/2_DemonSlayer.jpg',
'res/ProductImg/2_DemonSlayerWhite.jpg',
'res/ProductImg/2_Eren.jpg',
'res/ProductImg/2_Gear5.jpg',
'res/ProductImg/2_ItachixSasuke.jpg',
'res/ProductImg/2_Toji.jpg',
'res/ProductImg/2_jjk.jpg',
'res/ProductImg/2_Zoro.jpg']

var backIMG=['res/ProductImg/1_Hashira.jpg',
'res/ProductImg/1_BakiHanma.jpg',
'res/ProductImg/1_Chopper.jpg',
'res/ProductImg/1_DemonSlayer.jpg',
'res/ProductImg/1_DemonSlayerWhite.jpg',
'res/ProductImg/1_Eren.jpg',
'res/ProductImg/1_Gear5.jpg',
'res/ProductImg/1_ItachiXsasuke.jpg',
'res/ProductImg/1_Toji.jpg',
'res/ProductImg/1_jjk.jpg',
'res/ProductImg/1_Zoro.jpg']

var prices=[699,699,699,699,699,699,699,699,699,699,699]

var descriptions=['The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
'The stall in the projection at Parul University really showed us love of our community and filled us with joy and motivations to do further.',
]



var Name=['Hashira','Baki','Chopper','Demon Slayer','Demon Slayer White','Eren','Gear 5','Itachi X Sasuke','Toji','JJK','Zoro']



window.onload=function(){
    const id=new URL(document.URL).searchParams.get('id')
    var ProductDiv=document.createElement('div')
    ProductDiv.className='productImgs'
    var frontImage=document.createElement('img')
    var backImage=document.createElement('img')
    frontImage.src=backIMG[id]
    backImage.src=frontIMG[id]
    frontImage.className='image frontimage'
    frontImage.alt='productimage'
    backImage.className='image'
    backImage.alt='productimage'
    ProductDiv.appendChild(backImage)
    ProductDiv.appendChild(frontImage)
    var descriptionDiv=document.createElement('div')
    descriptionDiv.className='productdescriptions'
    var nameDiv=document.createElement('div')
    nameDiv.className='name'
    nameDiv.innerHTML=Name[id]
    var priceDiv=document.createElement('div')
    priceDiv.className='price'
    priceDiv.innerHTML='Rs. '+prices[id]
    var describedDiv=document.createElement('div')
    describedDiv.className='described'
    describedDiv.innerHTML=descriptions[id]
    descriptionDiv.appendChild(nameDiv)
    descriptionDiv.appendChild(priceDiv)
    descriptionDiv.appendChild(describedDiv)
    document.getElementById('pr').appendChild(ProductDiv)
    document.getElementById('pr').appendChild(descriptionDiv)

}
function chooseSize(n){
    var arr=['s','m','l','xl','xxl']
    for(let i in arr)
    {
        document.getElementById(arr[i]).style.backgroundColor="white"
    }
    document.getElementById(n).style.backgroundColor='lightgreen'

}
