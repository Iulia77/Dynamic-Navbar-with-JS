let menuItems = [
  {
    title: "BRAND",
  },
  {
    title: "+123456789",
  },
  {
    title: "Services",
  },
  {
    title: "Products",
  },
  {
    title: "Team",
  },
  {
    title: "Policy",
  },
  {
    title: "Contacts",
  },
];

const checkVisible = (items) => {
  // HW2: use debugger & step by step trace
  const charactertWidth = 12; // px
  let itemsWidth = 0;
  for (let i = 0; i < items.length; i++) {
    let currentItemWidth = items[i].title.length * charactertWidth;
    if (itemsWidth + currentItemWidth >= innerWidth) {
      i--;
      return i;
    }
    itemsWidth += currentItemWidth;
  }
  return items.length - 1;
};

const renderNavbar = (navWrapperSelector, items) => {
  let wrapper = document.querySelector(navWrapperSelector);
  let htmlItems = "";
  let visibleItems = checkVisible(menuItems);
  console.log(visibleItems);

  //HW1: rewrite this loop using Array.forEach()

  menuItems.forEach((visibleItems, i = 0) => {
    htmlItems += `<li><a href="">${items[i].title}</a></li>`;
  });

  //for (let i = 0; i <= visibleItems; i++) {
  //  htmlItems += `<li><a href="">${items[i].title}</a></li>`;
  // }

  let html = ` 
    <nav class="navbar">
    <ul>
    ${htmlItems}
    </ul>
  </nav>
  `;
  wrapper.innerHTML = html;
};

// ##############################################
renderNavbar(".navbar-wrapper", menuItems);

window.onresize = () => {
  renderNavbar(".navbar-wrapper", menuItems);
};
