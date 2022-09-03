const loadCategory = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
        .catch((error) => {
            console.log(error)
        });
}
const displayCategory = (categoryList) => {
    const categoryField = document.getElementById('category-list');

    // display all category
    let i=0;
    categoryList.forEach(category => {
        
        
        const categoryDiv = document.createElement('li');
        categoryDiv.classList.add('nav-item');
       
        categoryDiv.innerHTML = `
                                <a onclick="loadCategoryDetails('${category.category_id}')" id="item-${i}" class="nav-link active mx-2" aria-current="page" href="#">${category.category_name}</a>
                    `;
        i = i+1;
        categoryField.appendChild(categoryDiv);
        
    })
}
loadCategory();

