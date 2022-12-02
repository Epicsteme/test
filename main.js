('accordionOpened', (el) => {
    const openedItem = el;
    const offset = $(openedItem).offset().top;
    const navHeight = 56;
    const toolbarHeight = 48;
    const scrollTop = $(el).parents('.page-content').scrollTop();
    $(el).parents('.page-content').scrollTop((offset - navHeight - toolbarHeight + scrollTop), 300);

})