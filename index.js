const items = document.querySelector(".items");
const input = document.querySelector('.input-form');
const form = document.querySelector('form');
const closeSvg = document.querySelector('.close-svg');
const searchSvg = document.querySelector('.search-svg');

const url = `https://api.unsplash.com/search/photos?query=dog&per_page=30&orientation=landscape&client_id=0zy9jABOkjRorrwoSALUoDt6xLR6WeXBHH_6GxhmpEA&page=1`;

getData(url);

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    render(data.results);
    console.log(data)
}

function clear(){
    items.innerHTML=''
}

function render(data) {
    clear();
    data.map(function(item){
        const a = document.createElement('a');
        const img = document.createElement('img');
        const p = document.createElement('p');
        a.href=`${item.urls.regular}`;
        a.target=`_blank`;
        a.classList.add('gallery');
        p.classList.add('desc');
        p.innerHTML=`${item.alt_description}`
        img.classList.add('gallery-img');
        img.src = `${item.urls.regular}`;
        img.alt = `image`;
        items.append(a);
        a.append(img);
        a.append(p);
    })
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const apiSearchUrl = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&orientation=landscape&client_id=0zy9jABOkjRorrwoSALUoDt6xLR6WeXBHH_6GxhmpEA&page=1`;
    if (input.value) {
    getData(apiSearchUrl);
  }
});

input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
    const apiSearchUrl = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&orientation=landscape&client_id=0zy9jABOkjRorrwoSALUoDt6xLR6WeXBHH_6GxhmpEA&page=1`;
    if (input.value) {
    getData(apiSearchUrl);
    }
    event.preventDefault()
  }
});

closeSvg.addEventListener("click", () => {
        input.value='';
});

const images = document.querySelectorAll('.gallery');

function addDesc(event) {
    if (event.target.classList.contains('gallery')) {
       images.forEach((element) => element.classList.remove('button-hover-light'))
    } else {
        portfolioBtn.forEach((element) => element.classList.remove('button-hover'))
        event.target.classList.add('button-hover')
    }
}

items.addEventListener('hover', addDesc);