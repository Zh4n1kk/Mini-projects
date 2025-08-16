const itemContainer = document.getElementById('container') 
const ourItem = document.getElementById('item')  
const ourItemOne = document.getElementById('item_one') 
const ourItemTwo = document.getElementById('item_two') 
const ourItemThree = document.getElementById('item_three') 
const contentItem = document.getElementById('content-item')
const contentItemOne = document.getElementById('content-item-one')
const contentItemTwo = document.getElementById('content-item-two')
const contentItemThree = document.getElementById('content-item-three')
console.log(contentItem)
ourItem.addEventListener('click',() => {
    contentItem.style.display = 'block'
    contentItemOne.style.display = 'none'
    contentItemTwo.style.display = 'none'
    contentItemThree.style.display = 'none'
    ourItem.style.borderBottom = 'solid 1px black'
    ourItemOne.style.borderBottom = 'none'
    ourItemTwo.style.borderBottom = 'none'
    ourItemThree.style.borderBottom = 'none'
})
ourItemOne.addEventListener('click',() => {
    contentItem.style.display = 'none'
    contentItemOne.style.display = 'block'
    contentItemTwo.style.display = 'none'
    contentItemThree.style.display = 'none'
    ourItem.style.borderBottom = 'none'
    ourItemOne.style.borderBottom = 'solid 1px black'
    ourItemTwo.style.borderBottom = 'none'
    ourItemThree.style.borderBottom = 'none'
})
ourItemTwo.addEventListener('click',() => {
    contentItem.style.display = 'none'
    contentItemOne.style.display = 'none'
    contentItemTwo.style.display = 'block'
    contentItemThree.style.display = 'none'
    ourItem.style.borderBottom = 'none'
    ourItemOne.style.borderBottom = 'none'
    ourItemTwo.style.borderBottom = 'solid 1px black'
    ourItemThree.style.borderBottom = 'none'
})
ourItemThree.addEventListener('click',() => {
    contentItem.style.display = 'none'
    contentItemOne.style.display = 'none'
    contentItemTwo.style.display = 'none'
    contentItemThree.style.display = 'block'
    ourItem.style.borderBottom = 'none'
    ourItemOne.style.borderBottom = 'none'
    ourItemTwo.style.borderBottom = 'none'
    ourItemThree.style.borderBottom = 'solid 1px black'
})