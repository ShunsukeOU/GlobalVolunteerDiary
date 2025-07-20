document.addEventListener("DOMContentLoaded", function() {
    // ヘッダーを読み込んで挿入
    fetch('_header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // フッターを読み込んで挿入
    fetch('_footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});