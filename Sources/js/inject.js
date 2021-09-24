console.log("让我们开始！")


// 慢点执行 js
document.onreadystatechange = function () {
    // 在 Blockly.Games 的顶部添加一个 DOM
    var TopBar = document.createElement("div");
    TopBar.innerHTML = 'THIS IS UCAS';
    TopBar.style.cssText = 'width:100%;background:rgb(192,192,192);';
    window.document.body.insertBefore(TopBar,window.document.body.firstChild);
}
