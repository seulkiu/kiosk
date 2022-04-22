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

    for (const key in menu) {
        let li = document.createElement('li');
        li.className = 'menu';
        let menuName = document.createElement('p');
        menuName.className = 'menu_name';
        menuName.innerText = menu[key].name;
        li.appendChild(menuName);

        let price = document.createElement('p');
        price.className = 'menu_price';
        price.innerText = menu[key].price;
        li.appendChild(price)

        document.getElementById('menu_area').appendChild(li);
    }
}

// coffee, tea, sandwich 탭 누르면 해당 리스트 보여주기
const selectTab = (tabNum) => {
    switch (tabNum) {
        case 1:
            menuDraw(menuCoffee);
            break;
        case 2:
            menuDraw(menuTea);
            break;
        case 3:
            menuDraw(menuSandwich);
            break;
    }
}


window.onload = () => {
    menuDraw(menuCoffee);
};





// 슬롬꺼 따라해보기


//
const goPaymentPage = () => {
    // 결제 페이지로 이동할 때  order리스트를 보관하기 위래 로컬스토리지 사용
    if (orderMenu.length === 0) {
        alert('메뉴가 선택되지 않았습니다.');
        return;
    }
    localStorage.setItem('orderMenu', JSON.stringify(orderMenu));
    //결제 페이지 이동
    location.href = 'payment.html';
}