const btn = document.getElementById('btn-main')
const bo = new MutationObserver(() => btn.click())
bo.observe(btn, { attributes: true, childList: false, subtree: false, })
