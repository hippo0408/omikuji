'use strict';
{
    const btn=document.getElementById("btn");
    
    

btn.addEventListener('click', () => {
    const results = [ "イズ★ミン", "部長","荒木","あらた","なべ","テンボス","大林",
    "さく","まっすー","ホリ","りょう","齋藤","洋乳郎", "大輔","藤谷","リョウスケ",
    "ケン★ちゃん","シンゴ","イナ","ブラックさん","まっちゃん","アツシ","コバ",
    "山口","姫ちゃん","姉御"];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
  });
}