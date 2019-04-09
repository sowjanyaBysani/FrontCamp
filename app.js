class News {
    articleList;
    
    constructor() {

    }
    
//    getChannelList(){
//     var channelList = [{name: 'CNN'},{name:'bbc-news'}]
//     var fragment = document.createDocumentFragment();
//     var channel = document.createElement('li');
//     for (var i = 0; i < channelList.length; i++) {
//         console.log(channelList[i].name);
//         channel.innerHTML =  `<a onclick="news.getArticleList('${channelList[i].name}')">CNN</a>`; // news-channel-list
//        fragment.appendChild(channel);
//     }
//     document.getElementById('NewsChannelsList').appendChild(fragment);
//    }

    getArticleList(channelName) {
        //articleList= "";
        fetch('https://newsapi.org/v1/articles?source=' + channelName + '&apiKey=b93fd4308dbf445b8a8cdca1f1213172')
            .then(function (response) {
                return response.json();
            })
            .then(function (articleList) {
                var fragment = document.createDocumentFragment();
                console.log(JSON.stringify(articleList.articles));
                //var newsItem = document.createElement('section');
                for (var i = 0; i < articleList.articles.length; i++) {
                    var newsItem = document.createElement('section');
                    document.getElementById("NewsItemsList").innerHTML = "";
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
                
                document.getElementById('NewsItemsList').appendChild(fragment);
               
                return articleList;
                
            });
    }

}
// document.getElementById('NewsItemsList').appendChild(fragment);  add  
const news = new News();



