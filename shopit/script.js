const icon = document.getElementById('toggle');
const popup = document.getElementById('popup');
const deleted = document.getElementById('delete');

icon.addEventListener('click', () => {
    if (popup.style.display === 'block') {
    popup.style.display = 'none';
    } else {
    popup.style.display = 'block';
    }
});

// view-more
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM fully loaded!");
  const viewMoreBtn = document.getElementById('view-more-btn');
  console.log("DOM fully loaded!");
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function () {
      // Select hidden product rows
      const hiddenProducts = document.querySelectorAll('.prod-row.hide');

      if (hiddenProducts.length > 0) {
        hiddenProducts.forEach(function (prod) {
          prod.classList.remove('hide'); // Remove 'hide' class to make them visible
        });

        // Optionally hide the "View More" button if no hidden elements remain
        if (document.querySelectorAll('.prod-row.hide').length === 0) {
          viewMoreBtn.style.display = 'none';
        }
      } else {
        console.error("No hidden products found.");
      }
    });
  } else {
    console.error("View More button not found.");
  }
});


// tab
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// heart
document.addEventListener('DOMContentLoaded', function () {
  const heartIcon = document.getElementById('heartIcon');
  if (heartIcon) {
    heartIcon.addEventListener('click', function () {
      if (heartIcon.src.includes('heart.svg')) {
        heartIcon.src = '/assets/images/heart-filled.svg';
      } else {
        heartIcon.src = '/assets/images/heart.svg';
      }
    });
  } else {
    console.error("heartIcon not found");
  }
});
