class News {
    articleList;
    newsItemsList;
    fragment;
        constructor() { 
        this.newsItemsList = document.getElementById("NewsItemsList");
    }

    getArticleList(channelName) {
        this.newsItemsList.innerHTML="";
        const apiName = `https://newsapi.org/v1/articles?source=${channelName}&apiKey=b93fd4308dbf445b8a8cdca1f1213172`;

        fetch(apiName)
            .then(response => response.json())
            .then(articleList => {
                this.createNewsFragment(articleList);
            });
    }
    createNewsFragment(articleList) {
        this.fragment = document.createDocumentFragment();
        let newsItems = articleList.articles.map(this.getNewsItemsList);
        // this.fragment.appendChild(...newsItems);
        newsItems.forEach(this.addNewsItem.bind(this));
    }

    getNewsItemsList(article){
        var newsItem = document.createElement('section');
        newsItem.innerHTML = `
            <img
                src="${article.urlToImage}">
            <h3 class="title">${article.title}</h3>
            <p class="description">${article.description}</p>
            <em class="foot">-${article.author}</em>
            `;
        newsItem.classList.add('news-item');
        return newsItem;
    }

    addNewsItem(newsItem){
        this.newsItemsList.appendChild(newsItem);
    }
}

const news = new News();


