const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

items.forEach((item) => observer.observe(item));

const newsModal = document.getElementById('news-modal');
const newsDate = document.getElementById('news-modal-date');
const newsTitle = document.getElementById('news-modal-title');
const newsImage = document.getElementById('news-modal-image');
const newsPlaceholder = document.getElementById('news-modal-placeholder');
const newsBody = document.getElementById('news-modal-body');
const newsRows = document.querySelectorAll('.news-row[data-news-title]');

function openNewsModal(row) {
  const date = row.dataset.newsDate || '';
  const title = row.dataset.newsTitle || '';
  const image = (row.dataset.newsImage || '').trim();
  const body = row.dataset.newsBody || '';

  newsDate.textContent = date;
  newsTitle.textContent = title;
  newsBody.textContent = body;

  if (image) {
    newsImage.src = image;
    newsImage.alt = title;
    newsImage.hidden = false;
    newsPlaceholder.hidden = true;
  } else {
    newsImage.removeAttribute('src');
    newsImage.alt = '';
    newsImage.hidden = true;
    newsPlaceholder.hidden = false;
  }

  newsModal.hidden = false;
  document.body.classList.add('modal-open');
  newsModal.querySelector('.news-modal-close')?.focus();
}

function closeNewsModal() {
  newsModal.hidden = true;
  document.body.classList.remove('modal-open');
  newsImage.removeAttribute('src');
}

newsRows.forEach((row) => {
  row.addEventListener('click', () => openNewsModal(row));
});

newsModal?.querySelectorAll('[data-news-close]').forEach((el) => {
  el.addEventListener('click', closeNewsModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && newsModal && !newsModal.hidden) {
    closeNewsModal();
  }
});
