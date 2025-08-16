document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('add-item-btn')
    const container = document.getElementById('container')
    btn.addEventListener("click", addElement)
    
    function addElement() {
        const elem = document.createElement('div')
        elem.innerText = 'Element'
        container.append(elem)
    }  
})


