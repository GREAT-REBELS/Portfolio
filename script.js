const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;
const header = document.getElementById('mainHeader');

function setTheme(isDark) {
  if (isDark) {
    html.classList.add('dark');
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    setTheme(true);
  } else if (saved === 'light') {
    setTheme(false);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }
}

initTheme();

toggleBtn.addEventListener('click', () => {
  const isDark = html.classList.contains('dark');
  setTheme(!isDark);
});

const backTop = document.getElementById('backTop');

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const onScroll = () => {
  backTop.style.display = window.scrollY > 200 ? 'block' : 'none';

  if (window.scrollY > 50) {
    header.classList.remove('py-6');
    header.classList.add('py-3');
  } else {
    header.classList.remove('py-3');
    header.classList.add('py-6');
  }
};

window.addEventListener('scroll', debounce(onScroll, 50));

backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


