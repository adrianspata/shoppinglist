import "./styles.scss";

type Item = {
  id: number;
  name: string;
};

type Category = {
  title: string;
  items: Item[]; // items ska vara en array av Item-objekt
};

const food: Category[] = [
  {
    title: "Food",
    items: [
      { id: 1, name: "Apples" },
      { id: 2, name: "Chicken" },
      { id: 3, name: "Broccoli" },
      { id: 4, name: "Rice" },
      { id: 5, name: "Tofu" },
      { id: 6, name: "Milk" },
      { id: 7, name: "Strawberries" },
      { id: 8, name: "Potatoes" },
      { id: 9, name: "Walnuts" },
      { id: 10, name: "Soy Sauce" },
    ],
  },
];

const shoe: Category[] = [
  {
    title: "Shoes",
    items: [
      { id: 1, name: "Nike, Air Max 90s" },
      { id: 2, name: "Adidas, Stan Smith" },
      { id: 3, name: "Puma, Speedcat" },
      { id: 4, name: "Paraboot, Michael Derby" },
      { id: 5, name: "Nike, Foamposit" },
      { id: 6, name: "Salomon, XT-6" },
      { id: 7, name: "Clarks, Wallabee" },
      { id: 8, name: "Converse, Chuck Taylor" },
      { id: 9, name: "Vans, Authentic" },
      { id: 10, name: "Salomon" },
    ],
  },
];

const home: Category[] = [
  {
    title: "Home",
    items: [
      { id: 1, name: "Find new sofa" },
      { id: 2, name: "New kitchen utils" },
      { id: 3, name: "Water mango tree" },
      { id: 4, name: "Fix new plants for Christmas" },
      { id: 5, name: "Christmas decor" },
    ],
  },
];

const createHtml = (array: Category[]) => {
  const listContainer = document.querySelector(".list-container");
  if (!listContainer) return;

  array.forEach((item) => {
    const section = document.createElement("section");
    const title = renderTitle(item.title);
    section.appendChild(title);
    const ul = document.createElement("ul");

    item.items.forEach((item) => {
      const li = renderLi();
      const checkbox = renderCheckbox();
      const para = renderPara(item.name);

      li.appendChild(checkbox);
      li.appendChild(para);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    listContainer.appendChild(section);
  });
};

const renderTitle = (item: string) => {
  const title = document.createElement("h2");
  title.innerHTML = item;
  return title;
};

const renderLi = () => {
  const li = document.createElement("li");
  return li;
};

const renderCheckbox = () => {
  const checkbox = document.createElement("div");
  checkbox.classList.add("checkbox");
  return checkbox;
};

const renderPara = (item: string) => {
  const para = document.createElement("p");
  para.innerHTML = item;
  return para;
};

createHtml(food);
createHtml(shoe);
createHtml(home);
