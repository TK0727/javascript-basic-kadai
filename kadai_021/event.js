const btn=document.getElementById('btn');

btn.addEventListener('click',()=>{

setTimeout(()=>{
    console.log(document.getElementById('text').textContent='ボタンをクリックしました');
},2000);
});
