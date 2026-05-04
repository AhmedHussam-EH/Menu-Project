const menu = [
  {
    restaurantName: "Food Palace",
    menu: [
      {
        category: "breakfast",
        items: [
          {
            id: 1,
            title: "Pancakes",
            price: 15,
            img: "photoo/Pancakes.png",
            desc: "Sweet pancakes with syrup",
            origin: "USA"
          },
          {
            id: 2,
            title: "Omelette",
            price: 12,
            img: "photoo/Omelette.png",
            desc: "Egg omelette with cheese",
            origin: "France"
          },
          {
            id: 3,
            title: "French Toast",
            price: 14,
            img: "photoo/French-Toast.png",
            desc: "Toasted bread with honey",
            origin: "France"
          },
          {
            id: 4,
            title: "Waffles",
            price: 16,
            img: "photoo/Waffles.png",
            desc: "Crispy waffles with chocolate",
            origin: "Belgium"
          },
        ],
      },
      {
        category: "lunch",
        items: [
          {
            id: 5,
            title: "Chicken Burger",
            price: 22,
            img: "photoo/Chicken-Burger.png",
            desc: "Grilled chicken burger",
            origin: "USA"
          },
          {
            id: 6,
            title: "Beef Burger",
            price: 25,
            img: "photoo/Beef-Burger.png",
            desc: "Juicy beef burger",
            origin: "Germany (Hamburg)"
          },
          {
            id: 7,
            title: "Pizza Margherita",
            price: 30,
            img: "photoo/Pizza-Margherita.png",
            desc: "Classic cheese pizza",
            origin: "Italy (Naples)"
          },
          {
            id: 8,
            title: "Pasta Alfredo",
            price: 28.50,
            img: "photoo/Pasta-Alfredo.png",
            desc: "Creamy pasta",
            origin: "Italy (Rome)"
          },
        ],
      },
      {
        category: "dinner",
        items: [
          {
            id: 9,
            title: "Steak",
            price: 45,
            img: "photoo/Steak.png",
            desc: "Grilled steak",
            origin: "Argentina"
          },
          {
            id: 10,
            title: "Grilled Chicken",
            price: 35,
            img: "photoo/Grilled-Chicken.png",
            desc: "Healthy grilled chicken",
            origin: "Mediterranean"
          },
          {
            id: 11,
            title: "Fish Fillet",
            price: 38,
            img: "photoo/Fish-Fillet.png",
            desc: "Fried fish fillet",
            origin: "United Kingdom"
          },
          {
            id: 12,
            title: "Rice & Meat",
            price: 40,
            img: "photoo/meet.png",
            desc: "Rice with meat",
            origin: "Saudi Arabia (Kabsa)"
          },
        ],
      },
      {
        category: "shakes",
        items: [
          {
            id: 13,
            title: "Chocolate Shake",
            price: 12,
            img: "photoo/Chocolate-Shake.png",
            desc: "Chocolate milkshake",
            origin: "USA"
          },
          {
            id: 14,
            title: "Vanilla Shake",
            price: 11.10,
            img: "photoo/Vanilla-Shake.png",
            desc: "Vanilla milkshake",
            origin: "USA"
          },
          {
            id: 15,
            title: "Strawberry Shake",
            price: 13.99,
            img: "photoo/Strawberry-Shake.png",
            desc: "Strawberry milkshake",
            origin: "USA"
          },
        ],
      },
      {
        category: "desserts",
        items: [
          {
            id: 16,
            title: "Chocolate Cake",
            price: 18.33,
            img: "photoo/Chocolate-Cake.png",
            desc: "Rich chocolate cake",
            origin: "Austria (Vienna)"
          },
          {
            id: 17,
            title: "Ice Cream",
            price: 10.01,
            img: "photoo/Ice-cream.png",
            desc: "Cold ice cream",
            origin: "China / Italy"
          },
          {
            id: 18,
            title: "Brownie",
            price: 14.50,
            img: "photoo/Brownie.png",
            desc: "Chocolate brownie",
            origin: "USA (Chicago)"
          },
        ],
      },
      {
        category: "drinks",
        items: [
          {
            id: 19,
            title: "Orange Juice",
            price: 8.3,
            img: "photoo/Orange-Juice.png",
            desc: "Fresh juice",
            origin: "Spain"
          },
          {
            id: 20,
            title: "Coffee",
            price: 7.89,
            img: "photoo/Coffee.png",
            desc: "Hot coffee",
            origin: "Ethiopia / Yemen"
          },
          {
            id: 21,
            title: "Tea",
            price: 5.5,
            img: "photoo/Tea.png",
            desc: "Hot tea",
            origin: "China"
          },
          {
            id: 22,
            title: "Water",
            price: 3,
            img: "photoo/Water.png",
            desc: "Mineral water",
            origin: "Global"
          },
        ],
      },
    ],
  },
];

const menuItemTemplate = `
<section class="Item-menu" id="item-{{id}}">
    <div class="Item-img">
        <img src="{{img}}">
    </div>
    <div class="Item-Details">
        <div class ="Item-title">
            <h2>{{title}}</h2>
            <h3>{{price}}</h3>
        </div>
         <p class="Item-origin">{{origin}}</p>
        <p class="Item-desc">
           {{desc}}
        </p>
    </div>
</section>
`;

function populatePage() {
  const content = document.getElementById("Page-content");
  content.innerHTML = ""; // مهم عشان ما يكرر

  menu[0].menu.forEach((category) => {
    category.items.forEach((item) => {
      let itemCode = menuItemTemplate
        .replace("{{id}}", item.id)
        .replace("{{title}}", item.title)
        .replace("{{origin}}", item.origin)
        .replace("{{price}}", item.price + " $")
        .replace("{{desc}}", item.desc)
        .replace("{{img}}", item.img);

      content.innerHTML += itemCode;
    });
  });
}


function filterMenu(button) {
    const content = document.getElementById("Page-content");
    content.innerHTML = ""; // تنظيف الصفحة
    
    const btntext = button.innerHTML.toLowerCase();

    // نمر على كل الفئات في المنيو
    menu[0].menu.forEach((category) => {
        
        // نتحقق: هل الزر المضغطوط هو "all"؟ أو هل اسم الفئة يطابق نص الزر؟
        if (btntext === "all" || category.category === btntext) {
            
            // نمر على العناصر بداخل هذه الفئة فقط
            category.items.forEach((item) => {
                // نأخذ نسخة جديدة من القالب لكل عنصر
                let itemCode = menuItemTemplate
                    .replace("{{id}}", item.id)
                    .replace("{{title}}", item.title)
                    .replace("{{origin}}", item.origin)
                    .replace("{{price}}", item.price + " $")
                    .replace("{{desc}}", item.desc)
                    .replace("{{img}}", item.img);

                content.innerHTML += itemCode;
            });
        }
    });
}
