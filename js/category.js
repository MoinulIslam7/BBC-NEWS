const loadCategory = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category));
}
const displayCategory = (categoryList) => {
    const categoryField = document.getElementById('category-list');

    // display all category
    categoryList.forEach(category => {
        console.log(category)
        const categoryDiv = document.createElement('li');
        categoryDiv.classList.add('nav-item');
        categoryDiv.innerHTML = `
                                <a class="nav-link active mx-2" aria-current="page" href="#">${category.category_name}</a>

                    `;

        categoryField.appendChild(categoryDiv);
    })
}

loadCategory();
