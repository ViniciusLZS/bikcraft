function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'active';
  
  if(accordionList.length){

    function activeAccordeon(){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) =>{
      item.addEventListener('click', activeAccordeon);
    });
  }
}
initAccordion();