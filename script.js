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
const newsGallery = document.getElementById('news-modal-gallery');
const newsPlaceholder = document.getElementById('news-modal-placeholder');
const newsBody = document.getElementById('news-modal-body');
const newsRows = document.querySelectorAll('.news-row[data-news-title]');

function parseNewsImages(value) {
  return (value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function openNewsModal(row) {
  const date = row.dataset.newsDate || '';
  const title = row.dataset.newsTitle || '';
  const images = parseNewsImages(row.dataset.newsImage);
  const body = row.dataset.newsBody || '';

  newsDate.textContent = date;
  newsTitle.textContent = title;
  newsBody.textContent = body;
  newsGallery.innerHTML = '';

  if (images.length) {
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = images.length > 1 ? `${title} (${index + 1})` : title;
      newsGallery.appendChild(img);
    });
    newsGallery.hidden = false;
    newsPlaceholder.hidden = true;
  } else {
    newsGallery.hidden = true;
    newsPlaceholder.hidden = false;
  }

  newsModal.hidden = false;
  document.body.classList.add('modal-open');
  newsModal.querySelector('.news-modal-close')?.focus();
}

function closeNewsModal() {
  newsModal.hidden = true;
  document.body.classList.remove('modal-open');
  newsGallery.innerHTML = '';
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
