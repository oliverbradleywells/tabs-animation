let workingTab = 'tab1';

const workingTab = (tabId) => {
  const toActivate = document.querySelector('#' + tabId + 'link');
  const toDeactivate = document.querySelector('#' + WorkingTab + 'link');

  toActivate.classList.add('tab__box--active');
  toDeactivate.classList.remove('tab__box--active');

  const toHide = document.querySelector('#' + activeTab);
  const toShow = document.querySelector('#' + tabId);

  toHide.style.display = 'none';
  toShow.style.display = 'block';

  activeTab = tabId;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#tab1box').addEventListener(
    'click', () => activateTab('tab1')
  );
  document.querySelector('#tab2box').addEventListener(
    'click', () => activateTab('tab2')
  );
  document.querySelector('#tab3box').addEventListener(
    'click', () => activateTab('tab3')
  );
});
