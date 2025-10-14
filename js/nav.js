
const navList = {
    name: "Codewars函式刷題任務",
    nav: [
        {
            menu: "week1",
            page: [
                {
                    "title": "day1-基礎運算符號",
                    "link": "../week1/day01.html"
                },
                {
                    "title": "day2-移除字串中的空格",
                    "link": "../week1/day02.html"
                },
                {
                    "title": "day3-清除字串中數字",
                    "link": "../week1/day03.html"
                },
                {
                    "title": "day4-判斷是否為大寫",
                    "link": "../week1/day04.html"
                },
                {
                    "title": "day5-英文首字大轉寫",
                    "link": "../week1/day05.html"
                }
            ]
        },
        {
            menu: "week2",
            page: [
                {
                    "title": "day6-Switch語法",
                    "link": "../week2/day06.html"
                },
                {
                    "title": "day7-剪刀石頭布！",
                    "link": "../week2/day07.html"
                },
                {
                    "title": "day8-多數值判斷",
                    "link": "../week2/day08.html"
                },
                {
                    "title": "day9-forEach、map、array應用",
                    "link": "../week2/day09.html"
                },
                {
                    "title": "day10-餘數、奇數語法",
                    "link": "../week2/day10.html"
                }
            ]
        },
        {
            menu: "week3",
            page: [
                {
                    "title": "day11-奇數數量",
                    "link": "../week3/day11.html"
                },
                {
                    "title": "day12-filter篩選數字",
                    "link": "../week3/day12.html"
                },
                {
                    "title": "day13-charCodeAt應用",
                    "link": "../week3/day13.html"
                },
                {
                    "title": "day14-字串分割、變大寫、合併",
                    "link": "../week3/day14.html"
                },
                {
                    "title": "day15-",
                    "link": "../week3/day15.html"
                }
            ]
        },
        {
            menu: "week4",
            page: [
                {
                    "title": "day16-",
                    "link": "../week4/day16.html"
                },
                {
                    "title": "day17-",
                    "link": "../week4/day17.html"
                },
                {
                    "title": "day18-",
                    "link": "../week4/day18.html"
                },
                {
                    "title": "day19-",
                    "link": "../week4/day19.html"
                },
                {
                    "title": "day20-",
                    "link": "../week4/day20.html"
                }
            ]
        }
    ]
};

const nav = document.createElement('nav');
nav.classList.add('navbar','bg-dark', 'navbar-expand-lg','sticky-top');
nav.setAttribute('data-bs-theme', 'dark'); 
document.body.prepend(nav);
const container_fluid = document.createElement('div');
container_fluid.classList.add('container-fluid');
nav.appendChild(container_fluid);   

const brand = document.createElement('a');
brand.classList.add('navbar-brand');
brand.href = 'index.html';
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
        linkItem.href = page.link;
        linkItem.textContent = page.title;

        listItem.appendChild(linkItem);
        dropdownMenu.appendChild(listItem);
    });

    dropdown.appendChild(dropdownToggle);
    dropdown.appendChild(dropdownMenu);
    navMenu.appendChild(dropdown);
});



