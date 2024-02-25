window.onload=function(){
    const id=new URL(document.URL).searchParams.get('id')
    console.log(id)
}
function chooseSize(n){
    var arr=['s','m','l','xl','xxl']
    for(let i in arr)
    {
        document.getElementById(arr[i]).style.backgroundColor="white"
    }
    document.getElementById(n).style.backgroundColor='lightgreen'

}
