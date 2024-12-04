// console.log('I am Inside in This Page');
let bagItems;
onLoad();
function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}
function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems' , JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    // console.log(itemsContainerElement);
    if (!itemsContainerElement) {
        return;
    }
    let innerHTML = '';
    items.forEach(item => {
        innerHTML +=
            ` <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item-image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div class="company-name">
                ${item.company}
            </div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount">(${item.discount}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick = "addToBag(${item.id});
            ">Add to Bag</button>
    </div>`
    });
    itemsContainerElement.innerHTML = innerHTML;
}
// let item = {
//     item_image: 'image/1.jpg',
//     rating: {
//         stars: 4.5,
//         noOfReviews: 1400,
//     },
//     company_name: 'Carlton London',
//     item_name: 'Rhodium-Plated CZ Floral Studs',
//     current_price: 606,
//     original_price: 1045,
//     discount: 42,
// }

// itemsContainerElement.innerHTML = innerHTML;
// `
// <div class="item-container">
//     <img class="item-image" src="${item.item_image}" alt="item-image">
//         <div class="rating">
//             ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
//         </div>
//         <div class="company-name">
//             ${item.company_name}
//         </div>
//         <div class="item-name">${item.item_name}</div>
//         <div class="price">
//             <span class="current-price">${item.current_price}</span>
//             <span class="original-price">${item.original_price}</span>
//             <span class="discount">(${item.discount}% OFF)</span>
//         </div>
//         <button class="btn-add-bag">Add to Bag</button>
// </div>`
//;