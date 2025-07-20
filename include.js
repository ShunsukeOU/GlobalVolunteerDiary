// include.js

document.addEventListener("DOMContentLoaded", function() {

    // --- ヘッダーの読み込み ---
    fetch('_header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // --- フッターの読み込み ---
    fetch('_footer.html')
        .then(response => response.text())
        .then(data => {
            // 1. まずフッターのHTMLをページに挿入
            document.getElementById('footer-placeholder').innerHTML = data;
            
            // 2. HTMLの挿入後、カウンターを動かす関数を呼び出す
            getVisitorCount(); 
        });
});

/**
 * 訪問者カウンターを取得して表示する関数
 */
function getVisitorCount() {
    const apiUrl = 'https://api.countapi.xyz/hit/shunsukeou.github.io/MyDiary-Nepal/visits';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const countElement = document.getElementById('visitor-count');
            if (countElement) {
                countElement.textContent = Number(data.value).toLocaleString();
            }
        })
        .catch(error => {
            console.error('Visitor counter failed to load:', error);
            const countElement = document.getElementById('visitor-count');
            if (countElement) {
                countElement.textContent = 'N/A';
            }
        });
}