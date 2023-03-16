const accordionElement = document.querySelector('[data-accordion="element"]');
const accordionButton = document.querySelector('[data-accordion="button"]');

const accordionButtonToggler = () => {
  if (!accordionElement.classList.contains('is-active')) {
    accordionButton.textContent = 'свернуть';
  } else {
    accordionButton.textContent = 'подробнее';
  }
};

const changeTextButton = () => {
  accordionButton.addEventListener('click', accordionButtonToggler);
};

export {changeTextButton};
