const footerSubstackForm = document.querySelector('.footer-substack__form');
const footerSubstackMessage = document.querySelector('.footer-substack__message');

if (footerSubstackForm && footerSubstackMessage) {
  footerSubstackForm.addEventListener('submit', () => {
    footerSubstackForm.hidden = true;
    footerSubstackMessage.textContent = 'Almost done — check your inbox to confirm.';
    footerSubstackMessage.hidden = false;
  });
}
