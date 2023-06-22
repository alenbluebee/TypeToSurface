// 定数を設定
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const textLength = 10;
let depth = 300;
let oxygen = 100;
let time = 60;

// ランダムなテキストを生成する関数
function generateRandomText() {
    let randomText = '';
    for (let i = 0; i < textLength; i++) {
        randomText += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return randomText;
}

// ゲームの状態を更新する関数
function updateGame() {
    // 深度と酸素を更新
    // この例では、ユーザーが正解するたびに深度が10減少、酸素が1減少します
    depth -= 10;
    oxygen -= 1;
    // 新しいランダムテキストを生成
    let newText = generateRandomText();
    // HTML要素を更新
    document.getElementById('depth').textContent = '現在の深度：' + depth + 'm';
    document.getElementById('oxygen').textContent = '酸素残量：' + oxygen + '%';
    document.getElementById('randomText').textContent = 'ランダムテキスト: ' + newText;
    // 深度が0になったらゲームに勝利
    if (depth <= 0) {
        alert('おめでとうございます、あなたはゲームに勝ちました！');
        clearInterval(gameInterval);
    }
}

// ユーザーの入力をチェックする関数
function checkInput() {
    // ユーザーの入力を取得
    let userInput = document.getElementById('inputBox').value;
    // ランダムテキストを取得
    let randomText = document.getElementById('randomText').textContent.slice(12);
    // ユーザーの入力がランダムテキストと一致するかを確認
    if (userInput === randomText) {
        // 一致する場合、ゲームの状態を更新
        updateGame();
    }
    // テキストボックスをクリア
    document.getElementById('inputBox').value = '';
}

// ゲームの時間を管理する関数
function manageTime() {
    time -= 1;
    document.getElementById('time').textContent = '残り時間：' + time + '秒';
    // 時間が0になったらゲームオーバー
    if (time <= 0) {
        alert('時間切れです、ゲ申し訳ありません、上記のメッセージは途中で切れてしまいました。時間が0になった場合のゲームオーバーのメッセージと、ゲームの開始時に`manageTime`関数を呼び出す部分を補います：

```javascript
    if (time <= 0) {
        alert('時間切れです、ゲームオーバーです。');
        clearInterval(gameInterval);
    }
}

// ゲームを開始する
let gameInterval = setInterval(manageTime, 1000);
