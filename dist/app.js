"use strict";

// class News {
//     articleList;
//     constructor() { 
//         // this.NewsItemsList = document.getElementById("NewsItemsList");
//     }

//     getArticleList(channelName) {
//         const apiName = `https://newsapi.org/v1/articles?source=${channelName}&apiKey=b93fd4308dbf445b8a8cdca1f1213172`;

//         fetch(apiName)
//             .then(response => response.json())
//             .then(articleList => {
//                 this.createNewsFragment(articleList);
//             });
//     }
//     createNewsFragment(articleList) {
//         const fragment = document.createDocumentFragment();
//         for (let i = 0; i < articleList.articles.length; i++) {
//             var newsItem = document.createElement('section');
//             document.getElementById("NewsItemsList").innerHTML = "";
//             newsItem.innerHTML = `
//                 <img
//                     src="${articleList.articles[i].urlToImage}">
//                 <h3 class="title">${articleList.articles[i].title}</h3>
//                 <p class="description">${articleList.articles[i].description}</p>
//                 <em class="foot">-${articleList.articles[i].author}</em>
//                 `;
//             newsItem.classList.add('news-item');
//             fragment.appendChild(newsItem);

//         }
//         document.getElementById('NewsItemsList').appendChild(fragment);
//     }

// }

// const news = new News();
var nums = [1, 2, 3];
var doubleNums = nums.map(function (e) {
  return e * 2;
});