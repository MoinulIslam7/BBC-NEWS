const loadEveryNewsDetails = (news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => detailsOfNews(data.data[0]))
}

const detailsOfNews = (newses) => {
    console.log(newses)
    const modalTitle = document.getElementById('newsDetailModalLabel');
    modalTitle.innerText = newses.title;
    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = `
    <p>Is trending: ${newses.others_info.is_trending
        ? newses.others_info.is_trending : 'No result found'}</p>
    <p>Is todays pick: ${newses.others_info.is_todays_pick
        ? newses.others_info.is_todays_pick : 'false'}</p>
    <p>Rating Badge: ${newses.rating.badge
        ? newses.rating.badge : 'No rating badge found'}</p>`;
}

