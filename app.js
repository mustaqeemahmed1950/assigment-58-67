//OBJECT 1(i)

var a=document.getElementById("main-content")

//OBJECT 1(ii)


var b=a.childNodes()
console.log(b)

//OBJECT 1(iii)

var c=document.getElementsByClassName("render")
var d=c.innerHTML
alert(d)

//OBJECT 1(iv)

var e=document.getElementById("first-name")
e.value="Mustaqeem Ahmed"

var f=document.getElementById("last-name")
e.value="Mushtaq Ahmed"

var g=document.getElementById("emaill")
e.value="abc93@gmail"

//OBJECT 2(i)
var form=document.getElementById("form-content")
console.log(form.nodeType)

//OBJECT 2(ii)

var node=document.getElementById("lastName")
console.log(node.nodeType)
console.log(node.childNodes)

//OBJECT 2(iv)

console(a.firstChild)
console(a.lastChild)

//OBJECT 2(v)
console(node.nextSibling)
console(node.previousSibling)

//OBJECT 2(vi)

console(g.parentNode)
console(g.nodeType)