
const navList = {
    name: "Codewars函式刷題任務",
    nav: [
        {
            menu: "常用整理",
            page: [
                {
                    "title": "Value、Function properties",
                    "link": "/summary/vfproperties.html"
                },
                {
                    "title": "Number",
                    "link": "/summary/number.html"
                },
                {
                    "title": "Date",
                    "link": "/summary/date.html"
                },
                {
                    "title": "Math",
                    "link": "/summary/math.html"
                },
                {
                    "title": "String",
                    "link": "/summary/string.html"
                },
                {
                    "title": "for",
                    "link": "/summary/for.html"
                },
                {
                    "title": "Array",
                    "link": "/summary/array.html"
                },
                {
                    "title": "JSON",
                    "link": "/summary/json.html"
                }

            ]
        },
        {
            menu: "week1",
            page: [
                {
                    "title": "day1-Basic Mathematical Operations - 基礎運算符號",
                    "link": "/week1/day01.html"
                },
                {
                    "title": "day2-Remove String Spaces - 移除字串中的空格",
                    "link": "/week1/day02.html"
                },
                {
                    "title": "day3-String cleaning - 清掃字串",
                    "link": "/week1/day03.html"
                },
                {
                    "title": "day4-Is the string uppercase? - 字串是大寫的嗎？",
                    "link": "/week1/day04.html"
                },
                {
                    "title": "day5-Jaden Casing Strings - 首字大寫",
                    "link": "/week1/day05.html"
                }
            ]
        },
        {
            menu: "week2",
            page: [
                {
                    "title": "day6-Training JS #8: Conditional statement--switch - Switch 語法",
                    "link": "/week2/day06.html"
                },
                {
                    "title": "day7-Rock Paper Scissors! - 剪刀石頭布！",
                    "link": "/week2/day07.html"
                },
                {
                    "title": "day8-Categorize New Member - 分類新成員",
                    "link": "/week2/day08.html"
                },
                {
                    "title": "day9-Testing 1-2-3 - 測試 1-2-3",
                    "link": "/week2/day09.html"
                },
                {
                    "title": "day10-Find the odd int - 找尋奇數整數^(互斥)",
                    "link": "/week2/day10.html"
                }
            ]
        },
        {
            menu: "week3",
            page: [
                {
                    "title": "day11-Count Odd Numbers below n - 找尋 n 以下的偶數數量",
                    "link": "/week3/day11.html"
                },
                {
                    "title": "day12-List Filtering - 清單過濾",
                    "link": "/week3/day12.html"
                },
                {
                    "title": "day13-Love vs friendship - 愛與友情",
                    "link": "/week3/day13.html"
                },
                {
                    "title": "day14-V A P O R C O D E",
                    "link": "/week3/day14.html"
                },
                {
                    "title": "day15-Count characters in your string - 記數字串中的字元",
                    "link": "/week3/day15.html"
                }
            ]
        },
        {
            menu: "week4",
            page: [
                {
                    "title": "day16-Count of positives / sum of negatives - 算正整數與負總數合",
                    "link": "/week4/day16.html"
                },
                {
                    "title": "day17-Likes Vs Dislikes - 喜歡與不喜歡",
                    "link": "/week4/day17.html"
                },
                {
                    "title": "day18-Exes and Ohs - X 與 O",
                    "link": "/week4/day18.html"
                },
                {
                    "title": "day19-Incrementer - 加法器",
                    "link": "/week4/day19.html"
                },
                {
                    "title": "day20-Break camelCase - 打斷駝峰命名",
                    "link": "/week4/day20.html"
                }
            ]
        },
        {
            menu: "week5",
            page: [
                {
                    "title": "day21-Training JS #9: loop statement --while and do..while - 基礎迴圈",
                    "link": "/week5/day21.html"
                },
                {
                    "title": "day22-Squares sequence - 平方序列",
                    "link": "/week5/day22.html"
                },
                {
                    "title": "day23-Sum of odd numbers 奇數的加總",
                    "link": "/week5/day23.html"
                },
                {
                    "title": "day24-String Scramble - 重組字串",
                    "link": "/week5/day24.html"
                },
                {
                    "title": "day25-Make the Deadfish Swim - 讓死魚游",
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



