const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;
const header = document.getElementById('mainHeader');
toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");
    toggleBtn.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
  });

const backTop = document.getElementById('backTop');
    window.addEventListener('scroll',() => {
    backTop.style.display = window.scrollY > 200 ? 'block' : 'none';
  })

backTop.addEventListener('click',() => window.scrollTo({top:0,behavior:"smooth"}));

//Header shrink on scroll
window.addEventListener("scroll",() => {
  if(window.scrollY > 50){
    header.classList.remove('py-6');
    header.classList.add('py-3');
  }else{
    header.classList.remove('py-3');
    header.classList.add('py-6');
  }
});
