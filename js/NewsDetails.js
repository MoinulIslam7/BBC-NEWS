const loadCategoryDetails = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryDetails(data.data))
}


const displayCategoryDetails = (news) => {
    const categoryDetails = document.getElementById('category-details');
    categoryDetails.textContent = '';


    const countItem = document.getElementById('count-item')
    countItem.innerText = '';
    let count = 0;
    

    news.forEach(category => {

        // console.log(category.total_view)
        // console.log(Object.keys(category.total_view).sort());
       

        
        const categoryDetailsDiv = document.createElement('div');
        categoryDetailsDiv.classList.add('card');
        categoryDetailsDiv.classList.add('mb-4');
        categoryDetailsDiv.innerHTML = `
    <div class="row">
    <div class="col-md-4">
                    <img src="${category.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mb-2">
                      <h5 class="card-title">${category.title}</h5>
                      <div>
                      <p class="card-text text" >${category.details}</p>
                      </div>
                    </div>
                    <div class="d-flex  justify-content-evenly">
                    <img src="${category.author.img}" class="img-fluid rounded-circle image" alt="...">
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
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal "onclick="loadEveryNewsDetails('${category._id}')" >Details</button>
                        </div>
                      </div>
                    </div>
    </div>
                    `;

        categoryDetails.appendChild(categoryDetailsDiv);
        count++;

    })
    if (count === 0) {
        countItem.innerText = `No News Found`;
    }
    else {
        countItem.innerText = `${count} News found`
    }

}