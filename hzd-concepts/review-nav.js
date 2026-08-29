const link = document.createElement('a')
link.href = '/hzd-concepts/'
link.textContent = '← 返回五个方案'
link.setAttribute('aria-label', '返回五个视觉方案总览')
Object.assign(link.style, {
  position: 'fixed', left: '18px', bottom: '18px', zIndex: '9999',
  padding: '11px 15px', border: '1px solid rgba(255,255,255,.32)',
  borderRadius: '999px', background: 'rgba(8,8,8,.82)', color: '#fff',
  boxShadow: '0 8px 30px rgba(0,0,0,.22)', backdropFilter: 'blur(12px)',
  font: '11px/1.2 Arial, sans-serif', letterSpacing: '.08em', textDecoration: 'none'
})
document.body.append(link)
