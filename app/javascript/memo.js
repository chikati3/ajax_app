function post (){
  //リクエストを送信する処理
  // idの名前指定
  const submit = document.getElementById("submit");
  // クリックした時のアクション
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    // フォーム内容取得
    const formData = new FormData(form);
    // サーバーとHTTP通信を行う
    const XHR = new XMLHttpRequest();
    // HTTP, パス, 非同期通信のON/OFF
    XHR.open("POST", "/posts", true);
    // レスポンスをjsonで返す
    XHR.responseType = "json";
    // リクエスト送信
    XHR.send(formData);
  });
};
 
window.addEventListener('load', post);