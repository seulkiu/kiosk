let menuCoffee = [ //커피메뉴
    {
        id: 1,
        name: '아메리카노',
        price: 3000,
    },
    {
        id: 2,
        name: '아이스 아메리카노',
        price: 3500,
    },
    {
        id: 3,
        name: '카페라떼',
        price: 4000,
    },
    {
        id: 4,
        name: '아이스 카페라떼',
        price: 4500,
    },
    {
        id: 5,
        name: '바닐라빈라떼',
        price: 4500,
    },
    {
        id: 6,
        name: '아이스 바닐라빈라떼',
        price: 5000,
    },
    {
        id: 7,
        name: '캐러멜라떼',
        price: 4500,
    },
    {
        id: 8,
        name: '아이스 캐러멜라떼',
        price: 5000,
    },
    {
        id: 9,
        name: '카페모카',
        price: 4500,
    },
    {
        id: 10,
        name: '아이스 카페모카',
        price: 5000,
    }
]

let menuTea = [ //티 메뉴
    {
        id: 11,
        name: '얼그레이',
        price: 3000,
    },
    {
        id: 12,
        name: '아이스 얼그레이',
        price: 3500,
    },
    {
        id: 13,
        name: '잉글리쉬브랙퍼스트',
        price: 3000,
    },
    {
        id: 14,
        name: '아이스 잉글리쉬브랙퍼스트',
        price: 3500,
    },
    {
        id: 15,
        name: '애플티',
        price: 3000,
    },
    {
        id: 16,
        name: '아이스 애플티',
        price: 3500,
    },
    {
        id: 17,
        name: '캐모마일',
        price: 3000,
    },
    {
        id: 18,
        name: '아이스 캐모마일',
        price: 3500,
    },
    {
        id: 19,
        name: '루이보스',
        price: 3000,
    },
    {
        id: 20,
        name: '아이스 루이보스',
        price: 3500,
    },
    {
        id: 21,
        name: '진저레몬',
        price: 3000,
    },
    {
        id: 22,
        name: '아이스 진저레몬',
        price: 3500,
    },
    {
        id: 23,
        name: '핫초콜릿',
        price: 3000,
    },
    {
        id: 24,
        name: '아이스 초콜릿',
        price: 3500,
    }
]

let menuSandwich = [{
        id: 25,
        name: '잠봉뵈르',
        price: 6000,
    },
    {
        id: 26,
        name: '치킨클럽샌드위치',
        price: 6500,
    },
    {
        id: 27,
        name: 'BLT샌드위치',
        price: 6500,
    }
]

// 기본 커피메뉴 보여주기
// 함수 만들기

function menuDraw(menu) {
    let menuArea = document.getElementById('menu_area');
    while (menuArea.hasChildNodes()) {
        menuArea.removeChild(menuArea.firstChild);
    }
    // 메뉴를 화면에 그려줌
    menu.forEach((e) => {
        let html = `<li class="menu" onclick="selectMenu(${e.id})"><p class="menu_name"><span>${e.name}</span></p><p class="menu_price">${e.price.toLocaleString()}원</p></li>`;
        menuArea.insertAdjacentHTML("beforeend", html);
    });

    // for (const key in menu) {
    //     let li = document.createElement('li');
    //     li.className = 'menu';
    //     let menuName = document.createElement('p');
    //     menuName.className = 'menu_name';
    //     menuName.innerText = menu[key].name;
    //     li.appendChild(menuName);

    //     let price = document.createElement('p');
    //     price.className = 'menu_price';
    //     price.innerText = menu[key].price;
    //     li.appendChild(price)

    //     document.getElementById('menu_area').appendChild(li);
    // }
}

// coffee, tea, sandwich 탭 누르면 해당 리스트 보여주기
let tab = 0;
const selectTab = (tabNum) => {
    switch (tabNum) {
        case 1:
            tab = tabNum;
            menuDraw(menuCoffee);
            break;
        case 2:
            tab = tabNum;
            menuDraw(menuTea);
            break;
        case 3:
            tab = tabNum;
            menuDraw(menuSandwich);
            break;
    }
}


window.onload = () => {
    tab = 1;
    menuDraw(menuCoffee);
};





// 슬롬꺼 따라해보기
let orderMenu = [];
let totalCount = 0;
let totalPrice = 0;



// 토탈 상품 갯수, 토탈 금액 리프레시
const orderInfoRefresh = () => {
    totalCount = 0;
    totalPrice = 0;
    orderMenu.forEach((e) => {
        totalCount += e.count;
        totalPrice += e.price * e.count;
    });
    document.getElementById('totalQuantitySpan').innerText = totalCount;
    document.getElementById('totalPriceSpan').innerText = `${totalPrice.toLocaleString()}원`;
}


//  메뉴에서 선택
const selectMenu = (id) => {
    let selectMenu;
    if (tab === 1) {
        selectMenu = menuCoffee.find((e) => e.id === id);
    } else if (tab === 2) {
        selectMenu = menuTea.find((e) => e.id === id);
    } else {
        selectMenu = menuSandwich.find((e) => e.id === id);
    }
    let orderMenuItem = orderMenu.find((e) => e.id === id);
    if (orderMenuItem === undefined) {
        selectMenu['count'] = 1;
        orderMenu.push(selectMenu);
        viewSelectMenu(selectMenu);
    } else {
        orderMenuItem.count++;
        document.getElementById(`order_${id}`).innerText = orderMenuItem.count;
        document.getElementById(`order_price_${id}`).innerText = `${(orderMenuItem.price * orderMenuItem.count).toLocaleString()}원`;
    }
    orderInfoRefresh();
}

// 선택한 메뉴를 화면에 뿌림
const viewSelectMenu = (menu) => {
    let cartArea = document.getElementById('cart_area');
    let html = `<div class="cart_item" id="cart_item_${menu.id}">
    <div class="top">
        <span>${menu.name}</span>
        <button type="button" class="delete" onclick="orderDelete(${menu.id})">X</button>
    </div>
    <div class="middle">
        <span>수량</span>
        <div class="wrap__quantity">
            <button type="button" class="plus" onclick="add(${menu.id})">+</button>
            <span class="item_quantity" id="order_${menu.id}">${menu.count}</span>
            <button type="button" class="minus" onclick="minus(${menu.id})">-</button>
        </div>
    </div>
    <div class="bottom">
        <span>가격</span>
        <span id="order_price_${menu.id}">${menu.price.toLocaleString()}원</span>
    </div>
</div>`;
    cartArea.insertAdjacentHTML("beforeend", html);
}

// 주문 리스트에서 수량 증가
const add = (id) => {
    let item = orderMenu.find((e) => e.id === id);
    item.count++;
    document.getElementById(`order_${id}`).innerText = item.count;
    document.getElementById(`order_price_${id}`).innerText = `${(item.price * item.count).toLocaleString()}원`;
    orderInfoRefresh();
}

// 주문 리스트에서 수량 감소
const minus = (id) => {
    let item = orderMenu.find((e) => e.id === id);
    if(item.count > 1) {
        item.count--;
        document.getElementById(`order_${id}`).innerText = item.count;
        document.getElementById(`order_price_${id}`).innerText = `${(item.price * item.count).toLocaleString()}원`;
        orderInfoRefresh();
    }
}

// 주문 리스트에서 삭제
const orderDelete = (id) => {
    orderMenu = orderMenu.filter((e) => e.id != id);
    document.getElementById(`cart_item_${id}`).remove();
    orderInfoRefresh();
}