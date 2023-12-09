

const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['eng', 'ukr', 'esp', 'ita', 'fra', 'deu', 'pol', 'kaz', 'uzb'];

document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#' + lang;
    location.reload();
  }
  select.value = hash;

  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

// Add event listeners to all links on the page to append the selected language hash
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', addLanguageHashToLink);
});

function addLanguageHashToLink(event) {
  const lang = select.value;
  const href = event.target.getAttribute('href');
  if (href) {
    event.target.setAttribute('href', href + '#' + lang);
  }
}

changeLanguage();

    
  
