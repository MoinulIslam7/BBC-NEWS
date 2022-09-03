const loadEveryNewsDetails = (news_id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => detailsOfNews(data.data))
}

const detailsOfNews = (newses) =>{
    const modalTitle = document.getElementById('newsDetailModalLabel');
    newses.forEach(news =>{
    modalTitle.innerText = news.author.name;
    console.log(news.author);
    const newsDetails = document.getElementById('news-details');
    
    
    })
}