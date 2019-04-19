class News {
    articleList;
    newsItemsList;
    constructor() { 
        this.newsItemsList = document.getElementById("NewsItemsList");
    }

    getArticleList(channelName) {
        const apiName = `https://newsapi.org/v1/articles?source=${channelName}&apiKey=b93fd4308dbf445b8a8cdca1f1213172`;

        fetch(apiName)
            .then(response => response.json())
            .then(articleList => {
                this.createNewsFragment(articleList);
            });
    }
    createNewsFragment(articleList) {
        const fragment = document.createDocumentFragment();
        this.newsItemsList = articleList.map(getNewsItemsList);

        for (let i = 0; i < articleList.articles.length; i++) {
            var newsItem = document.createElement('section');
            this.newsItemsList.innerHTML = "";
            newsItem.innerHTML = `
                <img
                    src="${articleList.articles[i].urlToImage}">
                <h3 class="title">${articleList.articles[i].title}</h3>
                <p class="description">${articleList.articles[i].description}</p>
                <em class="foot">-${articleList.articles[i].author}</em>
                `;
            newsItem.classList.add('news-item');
            fragment.appendChild(newsItem);

        }
        this.newsItemsList.appendChild(fragment);
    }

    getNewsItemsList(article){

    }
}

const news = new News();
// var nums = [1,2,3];
// var doubleNums = nums.map((e) => e * 2);


