const shopping = document.querySelector('.shopping')
const showBtnfive = document.querySelector('#show_five')
const showBtnAll = document.querySelector('#show_all')
const totalGoods = document.querySelector('#total__goods')
const goodsBaskets = document.querySelector('.goods__baskets')


const modalBtns = document.querySelectorAll('[data-modal]')
const modalBtnsClose = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

modalBtns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})


modalBtnsClose.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('show')
    }
})

const saved = []


showBtnfive.onclick = () => {
    reboot(arr.slice(0, 5))
    showBtnfive.style.add
}

showBtnAll.onclick = () => {
    reboot(arr)
}

reboot(arr)
function reboot(goods) {
    shopping.innerHTML = ""
    for (let items of goods) {


        const box = document.createElement('div');
        box.classList.add('box');
        const goodsImgDiv = document.createElement('div')
        const goodsImg = document.createElement('img')
        goodsImgDiv.classList.add('goods__img')
        goodsImg.setAttribute('src', items.image)
        const goodInfo = document.createElement('div')
        const productName = document.createElement('h2')
        const goodsFeatures = document.createElement('p')

        const goodsRates = document.createElement('div')
        const goodsItem = document.createElement('div')
        const goodsItem2 = document.createElement('div')
        const goodsItem3 = document.createElement('div')
        const goodsItemImg = document.createElement('img')
        const goodsItemImg2 = document.createElement('img')
        const goodsItemImg3 = document.createElement('img')
        const goodsItemSpan = document.createElement('span')
        const goodsItemSpan2 = document.createElement('span')
        const goodsItemSpan3 = document.createElement('span')
        const cantBtn = document.createElement('button')


        goodInfo.classList.add('good__info')
        productName.classList.add('product__name')
        productName.innerHTML = items.title
        goodsFeatures.classList.add('goods__features')

        goodsFeatures.innerHTML = items.description
        goodsRates.classList.add('goods__rates')
        goodsItem.classList.add('goods__item')
        goodsItem2.classList.add('goods__item')
        goodsItem3.classList.add('goods__item')
        goodsItemSpan.classList.add('indicators')
        goodsItemSpan2.classList.add('indicators')
        goodsItemSpan3.classList.add('indicators')
        goodsItemSpan.innerHTML = ` ${items.price}`
        goodsItemSpan2.innerHTML = ` ${items.rating.rate}`
        goodsItemSpan3.innerHTML = ` ${items.rating.count}`
        goodsItemImg.setAttribute('src', './img/Group 7.svg')
        goodsItemImg2.setAttribute('src', './img/Group 10.svg')
        goodsItemImg3.setAttribute('src', './img/Group 9.svg')
        cantBtn.classList.add('cant__btn')
        cantBtn.innerHTML = 'В избранное'


        shopping.append(box);
        box.append(goodsImgDiv, goodInfo);

        goodsImgDiv.append(goodsImg);
        goodInfo.append(productName, goodsFeatures, goodsRates, cantBtn);
        goodsRates.append(goodsItem)
        goodsRates.append(goodsItem2)
        goodsRates.append(goodsItem3)
        goodsItem.append(goodsItemImg, goodsItemSpan)
        goodsItem2.append(goodsItemImg2, goodsItemSpan2)
        goodsItem3.append(goodsItemImg3, goodsItemSpan3)


        cantBtn.onclick = () => {
            if (saved.includes(items.id)) {
                const idx = saved.indexOf(items.id);
                saved.splice(idx, 1);
                cantBtn.classList.remove('save-btn');
                cantBtn.innerHTML = 'В избранное'
            } else {
                cantBtn.classList.add('save-btn');
                cantBtn.innerHTML = 'Добавлен в ибранное'
                saved.push(items.id);
            }
            goodsBaskets.innerHTML = `В корзине: ${totalGoods.innerHTML = saved.length} товаров`
        };


       
    }
}