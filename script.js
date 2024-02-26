// // import data from 'productDetails.json'
// // console.log(data);
// const dataJson = require('productDetails.json');
// console.log(typeof dataJson);
// console.log(dataJson);
frontIMG=['res/ProductImg/2_Hashira.jpg',
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

backIMG=['res/ProductIMG/1_Hashira.jpg',
'res/ProductIMG/1_BakiHanma.jpg',
'res/ProductIMG/1_Chopper.jpg',
'res/ProductIMG/1_DemonSlayer.jpg',
'res/ProductIMG/1_DemonSlayerWhite.jpg',
'res/ProductIMG/1_Eren.jpg',
'res/ProductImg/1_Gear5.jpg',
'res/ProductImg/1_ItachiXsasuke.jpg',
'res/ProductImg/1_Toji.jpg',
'res/ProductImg/1_jjk.jpg',
'res/ProductImg/1_Zoro.jpg']

Name=['Hashira','Baki','Chopper','Demon Slayer','Demon Slayer White','Eren','Gear 5','Itachi X Sasuke','Toji','JJK','Zoro']


window.onload=function() {
    for(let i=0;i<Name.length;i++)
    {
        var ProductDiv=document.createElement('div')
        ProductDiv.className='product'
        var ButtonDiv=document.createElement('button')
        ButtonDiv.className='OrderButton'
        ButtonDiv.innerText='Order now'
        var SpanDiv=document.createElement('span')
        SpanDiv.className='productDescriptions'
        SpanDiv.innerText=Name[i]
        var LinkDiv=document.createElement('a')
        LinkDiv.href='product.html?id='+i
        var ImageDiv=document.createElement('div')
        ImageDiv.className='productImgs'
        var FrontImage=document.createElement('img')
        FrontImage.className='image frontimage'
        FrontImage.src=backIMG[i]
        FrontImage.alt="prodctImage"
        var BackImage=document.createElement('img')
        BackImage.className='image'
        BackImage.src=frontIMG[i]
        BackImage.alt='productImage'
        ImageDiv.appendChild(FrontImage)
        ImageDiv.appendChild(BackImage)
        LinkDiv.appendChild(ImageDiv)
        ProductDiv.appendChild(LinkDiv)
        ProductDiv.appendChild(SpanDiv)
        ProductDiv.appendChild(ButtonDiv)
        document.getElementsByClassName('gridView')[0].appendChild(ProductDiv)
        console.log("it is working may be")
    }
}

