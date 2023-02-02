// 投稿関数
const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  //リクエストを送信する処理
  // idの名前指定
  const submit = document.getElementById("submit");
  // クリックした時のアクション
  submit.addEventListener("click", (e) => {
    // ブラウザリクエストをキャンセル
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

    // レスポンス受信
    XHR.onload = () => {
      // ステータスコード 200成功 200以外エラー
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };

      const list = document.getElementById("list");
      // フォーム内容を変数へ
      const formText = document.getElementById("content");
      // htmlの要素に挿入
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      // フォーム内リセット 連続投稿不可
      formText.value = "";
    };
  });
};
 
window.addEventListener('load', post);