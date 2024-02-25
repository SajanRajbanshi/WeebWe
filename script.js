window.onload=function() {
    var i=0
    while(i<10)
    {
        var ProductDiv=document.createElement('div')
        ProductDiv.className='product'
        var ButtonDiv=document.createElement('button')
        ButtonDiv.className='OrderButton'
        ButtonDiv.innerText='Order now'
        var SpanDiv=document.createElement('span')
        SpanDiv.className='productDescriptions'
        SpanDiv.innerText="product name"
        var LinkDiv=document.createElement('a')
        LinkDiv.href='product.html?id='+i
        var ImageDiv=document.createElement('img')
        ImageDiv.src='res/IMG_20240216_112351~2.jpg'
        ImageDiv.alt='productImage'
        ImageDiv.className='productImg'
        LinkDiv.appendChild(ImageDiv)
        ProductDiv.appendChild(LinkDiv)
        ProductDiv.appendChild(SpanDiv)
        ProductDiv.appendChild(ButtonDiv)
        document.getElementsByClassName('gridView')[0].appendChild(ProductDiv)
        console.log("it is working may be")
        i++
    }
}


