const footerText = document.querySelector('.footer-text');
const technologyArr = ['HTML', 'CSS', 'JavaScript'];

const createText = () => {
  let index = 0;
  let text = 'This page was built using: ';

  while (index <= technologyArr.length - 1) {
    const current = technologyArr[index];
  
    if (technologyArr.length === 1) {
      text = `${text} ${current}.`;
    } else if (index === technologyArr.length - 2) {
      text = `${text} ${current} `;
    } else if (index === technologyArr.length - 1) {
      text = `${text} and ${current}.`;
    } else {text = `${text} ${current}, `;}

    index = index + 1;
  }

  return text;
};

if (technologyArr.length > 0) {
  footerText.innerText = createText();
};
