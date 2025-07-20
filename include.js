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
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
