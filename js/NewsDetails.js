const loadCategoryDetails = (category_id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategoryDetails(data.data))
}
const displayCategoryDetails = (news) =>{
    const categoryDetails = document.getElementById('category-details');
    categoryDetails.textContent = '';
    let count=0;
    news.forEach(category =>{
       
        count++;
        const categoryDetailsDiv = document.createElement('div');
    categoryDetailsDiv.classList.add('card');
    categoryDetailsDiv.classList.add('mb-4');
    categoryDetailsDiv.innerHTML = `
    <div class="row">
    <div class="col-md-4">
                    <img src="${category.author.img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mb-2">
                      <h5 class="card-title">${category.title}</h5>
                      <p class="card-text text" >${category.details}</p>
                    </div>
                    <div class="d-flex  justify-content-evenly">
                        <div>
                        <h6>Name: ${category.author.name ? category.author.name : "No Name found"}</h6>
                        <p>${category.author.published_date}</p>
                        </div>
                        <div>
                            <p>${category.total_view ? category.total_view : "No Views Found"}</p>
                        </div>
                        <div>
                            <p>${category.rating.number}</p>
                        </div>
                        <div>
                            <button>Button</button>
                        </div>
                      </div>
                    </div>
    </div>
                    `;

    categoryDetails.appendChild(categoryDetailsDiv);
    })
    const countItem = document.getElementById('count-item')
    if(count!==0)
    {
        countItem.innerText=`${count} items found for category `
    }
    else
    {
        countItem.innerText = `No item Found`
    }
    console.log(count);
}
