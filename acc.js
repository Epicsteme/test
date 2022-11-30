const accordionItems = document.querySelectorAll('.accordion-collapse')

accordionItems.forEach((el)=>{
    el.addEventListener('shown.bs.collapse',(e)=>{
        let accordionItem = el.closest('.accordion-item');
        window.scrollTo({
            top: accordionItem.offsetTop - 74,
            left: 0,
            behavior: 'smooth'
        });
    })
})