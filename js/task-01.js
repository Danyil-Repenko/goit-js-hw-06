const categoriesEls = document.querySelectorAll('ul#categories .item');

const showCategories = () => {
    console.log('Number of categories: ', categoriesEls.length);

    categoriesEls.forEach(category => {
        const categoryName = category.querySelector('h2');
        console.log('Category: ', categoryName.textContent);

        const categoryElementsList = category.querySelector('ul');
        console.log('Elements: ', categoryElementsList.children.length);
    });

}

showCategories();