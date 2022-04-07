

let menuCoffee = [ //커피메뉴
    {name: '아메리카노', price: 3000, 수량: 1},
    {name: '아이스 아메리카노', price: 3500, 수량: 1},
    {name: '카페라떼', price: 4000, 수량: 1},
    {name: '아이스 카페라떼', price: 4500, 수량: 1},
    {name: '바닐라빈라떼', price: 4500, 수량: 1},
    {name: '아이스 바닐라빈라떼', price: 5000, 수량: 1},
    {name: '캐러멜라떼', price: 4500, 수량: 1},
    {name: '아이스 캐러멜라떼', price: 5000, 수량: 1},
    {name: '카페모카', price: 5000, 수량: 1}
]

let menuTea = [ //티 메뉴
    {name: '얼그레이', price: 3000, 수량: 1},
    {name: '아이스 얼그레이', price: 3500, 수량: 1},
    {name: '잉글리쉬브랙퍼스트', price: 3000, 수량: 1},
    {name: '아이스 잉글리쉬브랙퍼스트', price: 3500, 수량: 1},
    {name: '애플티', price: 3000, 수량: 1},
    {name: '아이스 애플티', price: 3500, 수량: 1},
    {name: '캐모마일', price: 3000, 수량: 1},
    {name: '아이스 캐모마일', price: 3500, 수량: 1},
    {name: '루이보스', price: 3000, 수량: 1},
    {name: '아이스 루이보스', price: 3500, 수량: 1},
    {name: '진저레몬', price: 3000, 수량: 1},
    {name: '아이스 진저레몬', price: 3500, 수량: 1},
    {name: '핫초콜릿', price: 3000, 수량: 1},
    {name: '아이스 초콜릿', price: 3500, 수량: 1}
]

let menuSandwich = [
    {name: '잠봉뵈르', price: 6000, 수량: 1},
    {name: '치킨클럽샌드위치', price: 6500, 수량: 1},
    {name: 'BLT샌드위치', price: 6500, 수량: 1}
]

let menuArea = document.getElementById('menu');
let tab = document.getElementsByClassName('tab');

// document.querySelector('.tab').addEventListener('click', showMenu);



for (const key in menuCoffee) {
    for (let i = 0; i < menuCoffee.length; i++){
    let li = document.createElement('li');
    li.className = 'menu';
    let p = document.createElement('p');
    p.className = 'menu_name';
    p.innerText = menuCoffee[key];
    li.appendChild(p);
    }
    document.getElementById('menu').innerHTML = menuCoffee;
}

