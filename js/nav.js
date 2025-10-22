
const navList = {
    name: "Codewars函式刷題任務",
    nav: [
        {
            menu: "常用整理",
            page: [
                {
                    "title": "Math",
                    "link": "/summary/math.html"
                },
                {
                    "title": "Number",
                    "link": "/summary/number.html"
                },
                {
                    "title": "for",
                    "link": "/summary/for.html"
                }
            ]
        },
        {
            menu: "week1",
            page: [
                {
                    "title": "day1- + - * /",
                    "link": "/week1/day01.html"
                },
                {
                    "title": "day2-split(分割字串)、filter(篩選)、replace(取代)",
                    "link": "/week1/day02.html"
                },
                {
                    "title": "day3-split、filter、parseInt(轉整數)、join(合併)",
                    "link": "/week1/day03.html"
                },
                {
                    "title": "day4-String.prototype(擴充方法)、toUpperCase(轉大寫)、toLowerCase(轉小寫)",
                    "link": "/week1/day04.html"
                },
                {
                    "title": "day5-String.prototype、toUpperCase、slice(淺拷貝回傳陣列)",
                    "link": "/week1/day05.html"
                }
            ]
        },
        {
            menu: "week2",
            page: [
                {
                    "title": "day6-Switch",
                    "link": "/week2/day06.html"
                },
                {
                    "title": "day7-剪刀石頭布！",
                    "link": "/week2/day07.html"
                },
                {
                    "title": "day8-map(for of 回傳key : value)",
                    "link": "/week2/day08.html"
                },
                {
                    "title": "day9-forEach(僅跑迴圈)、map return key : value",
                    "link": "/week2/day09.html"
                },
                {
                    "title": "day10-%(取餘數)、find(找第一筆)、^(互斥)",
                    "link": "/week2/day10.html"
                }
            ]
        },
        {
            menu: "week3",
            page: [
                {
                    "title": "day11-奇數",
                    "link": "/week3/day11.html"
                },
                {
                    "title": "day12-filter、typeof(判斷型別)、Number.isInteger(是否為正負整數)",
                    "link": "/week3/day12.html"
                },
                {
                    "title": "day13-charCodeAt(UTF-16 Unicode 碼位)、charAt(第幾個字)、...(Spread Operator)、reduce(a累計值,b目前帶入運算值)、find",
                    "link": "/week3/day13.html"
                },
                {
                    "title": "day14-split、join、String.prototype.match(尋找符合回傳陣列)",
                    "link": "/week3/day14.html"
                },
                {
                    "title": "day15-split、reduce、count[s]?(三元運算)",
                    "link": "/week3/day15.html"
                }
            ]
        },
        {
            menu: "week4",
            page: [
                {
                    "title": "day16-filter、reduce、比對後三元運算塞陣列",
                    "link": "/week4/day16.html"
                },
                {
                    "title": "day17-forEach、reduce跟下一筆比對",
                    "link": "/week4/day17.html"
                },
                {
                    "title": "day18-split、filter、toLowerCase、一行比對方式",
                    "link": "/week4/day18.html"
                },
                {
                    "title": "day19-forEach、map、%、取個位數方式",
                    "link": "/week4/day19.html"
                },
                {
                    "title": "day20-split、map、join",
                    "link": "/week4/day20.html"
                }
            ]
        },
        {
            menu: "week5",
            page: [
                {
                    "title": "day21-while、Math.ceil(無條件進位)、Math.floor(無條件捨去)、String.prototype.repeat(重複字串)",
                    "link": "/week5/day21.html"
                },
                {
                    "title": "day22-Array.from、Math.pow",
                    "link": "/week5/day22.html"
                },
                {
                    "title": "day23-Math.pow、reduce",
                    "link": "/week5/day23.html"
                },
                {
                    "title": "day24",
                    "link": "/week5/day24.html"
                },
                {
                    "title": "day25",
                    "link": "/week5/day25.html"
                }
            ]
        }
    ]
};
const baseUrl = location.href.indexOf('127.0.0.1') > 0 || location.href.indexOf('localhost') > 0 ? "" : "/20250922_2";

const nav = document.createElement('nav');
nav.classList.add('navbar', 'bg-dark', 'navbar-expand-lg', 'sticky-top');
nav.setAttribute('data-bs-theme', 'dark');
document.body.prepend(nav);
const container_fluid = document.createElement('div');
container_fluid.classList.add('container-fluid');
nav.appendChild(container_fluid);

const brand = document.createElement('a');
brand.classList.add('navbar-brand');
brand.href = baseUrl + '/index.html';
brand.textContent = navList.name;
container_fluid.appendChild(brand);

const button = document.createElement('button');
button.classList.add('navbar-toggler');
button.type = 'button';
button.setAttribute('data-bs-toggle', 'collapse');
button.setAttribute('data-bs-target', '#navbarNavDropdown');
button.setAttribute('aria-controls', 'navbarNavDropdown');
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-label', 'Toggle navigation');
const span = document.createElement('span');
span.classList.add('navbar-toggler-icon');
button.appendChild(span);
container_fluid.appendChild(button);

const collapseDiv = document.createElement('div');
collapseDiv.classList.add('collapse', 'navbar-collapse');
collapseDiv.id = 'navbarNavDropdown';
container_fluid.appendChild(collapseDiv);
const navMenu = document.createElement('ul');
navMenu.classList.add('navbar-nav');
collapseDiv.appendChild(navMenu);

// 動態產生選單
navList.nav.forEach(item => {
    const dropdown = document.createElement('li');
    dropdown.classList.add('nav-item', 'dropdown');
    const dropdownToggle = document.createElement('a');
    dropdownToggle.classList.add('nav-link', 'dropdown-toggle');
    dropdownToggle.href = '#';
    dropdownToggle.role = 'button';
    dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
    dropdownToggle.setAttribute('aria-expanded', 'false');
    dropdownToggle.textContent = item.menu;

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdown-menu');

    item.page.forEach(page => {
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.classList.add('dropdown-item');
        linkItem.href = baseUrl + page.link;
        linkItem.textContent = page.title;

        listItem.appendChild(linkItem);
        dropdownMenu.appendChild(listItem);
    });

    dropdown.appendChild(dropdownToggle);
    dropdown.appendChild(dropdownMenu);
    navMenu.appendChild(dropdown);
});



