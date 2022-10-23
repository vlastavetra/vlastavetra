const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const mapIframe = document.querySelector('.map-iframe');
const sliderText = document.querySelector('.about-slider-text');
const mapLinks = [
  {
    id: 1,
    text: 'I was born in Moscow, Russia',
    link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71848.76359171064!2d37.543883208041215!3d55.75374469076883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50572f4fcf%3A0x93c550c909653dd8!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQsNC00LzQuNC90LjRgdGC0YDQsNGC0LjQstC90YvQuSDQvtC60YDRg9CzLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1664636900670!5m2!1sru!2sil'
  },
  {
    id: 2,
    text: 'I live in Ramat Gan, Israel',
    link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42734.94804254642!2d34.790186817779826!3d32.07595708678704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2z0KDQsNC80LDRgi3Qk9Cw0L0!5e0!3m2!1sru!2sil!4v1664636574192!5m2!1sru!2sil'
  },
  {
    id: 3,
    text: 'I\'m in love with Berlin, Germany',
    link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.59372131803!2d13.2846494887879!3d52.50697037951591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2z0JHQtdGA0LvQuNC9LCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sil!4v1664636743848!5m2!1sru!2sil'
  },
]

let currentlySelected = 0;

const sliderChanger = (btn) => {
  sliderText.innerText = mapLinks[currentlySelected].text;
  mapIframe.src = mapLinks[currentlySelected].link;

  btn.disabled = false;
};

if (currentlySelected <= 0) {
  prevBtn.disabled = true;
}

prevBtn.addEventListener('click', function() {
  currentlySelected--;
  sliderChanger(nextBtn);

  if (currentlySelected <= 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener('click', function() {
  currentlySelected++;
  sliderChanger(prevBtn);

  if (mapLinks.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});

