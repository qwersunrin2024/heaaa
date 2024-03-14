const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on dd')
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');

});

app.get('/sec', function(요청, 응답){
    응답.sendFile(__dirname + '/sec.html');
});

app.get('/pet', function(요청, 응답){
    응답.send("팻용품 페이지입니다");
}); 


app.get('/teampl', function(요청, 응답){
    응답.sendFile(__dirname + '/teampl.html');
});
function saveWord() {
    var wordInput = document.getElementById('word');
    var meaningInput = document.getElementById('meaning');
    var word = wordInput.value;
    var meaning = meaningInput.value;
  
    // 입력된 단어와 뜻을 저장
    words.push({word: word, meaning: meaning});
    
    // 로컬 스토리지에 저장
    localStorage.setItem('words', JSON.stringify(words));
    localStorage.setItem('meanings', JSON.stringify(meanings));

    localStorage.getItem('words', JSON.stringify(words));
    localStorage.getItem('meanings', JSON.stringify(meanings));
    // 저장된 단어들을 화면에 업데이트
    displayWords();
    
    // 입력 필드 초기화
    wordInput.value = '';
    meaningInput.value = '';
  }
  
  // 페이지 로드 시 로컬 스토리지에서 저장된 단어 불러오기
  window.onload = function() {
    var savedWords = localStorage.getItem('words');
    if (savedWords) {
      words = JSON.parse(savedWords);
      displayWords();
    }
  };
  