const config = window.SITE_CONFIG;
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {const open = nav.classList.toggle('open');menu.setAttribute('aria-expanded', String(open));menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const safeUrl = value => {try {const u=new URL(value);return ['https:','http:'].includes(u.protocol) ? u.href : null;} catch {return null;}};
const dialog = document.querySelector('#notice');
document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', () => {const book=config.livros.find(b=>b.id===button.dataset.book);const url=safeUrl(book.compra);if(url){window.open(url,'_blank','noopener,noreferrer');return;}document.querySelector('#notice-title').textContent=book.titulo;dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.querySelector('a').addEventListener('click',()=>dialog.close());
const socials=document.querySelector('#socials');
['instagram','linkedin','github'].forEach(key=>{const url=safeUrl(config[key]);if(!url)return;const a=document.createElement('a');a.href=url;a.textContent={instagram:'Instagram',linkedin:'LinkedIn',github:'GitHub'}[key];a.target='_blank';a.rel='noopener noreferrer';socials.append(a);});
const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email);
if(hasEmail){const a=document.createElement('a');a.href='mailto:'+config.email;a.textContent='Email';socials.append(a);}
document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault();const status=document.querySelector('#form-status');if(!hasEmail){status.textContent='O email de contato estará disponível em breve. Você também pode conversar pelo LinkedIn.';return;}const data=new FormData(event.currentTarget);const body=`Nome: ${data.get('nome')}\nEmail: ${data.get('email')}\n\n${data.get('mensagem')}`;window.location.href=`mailto:${config.email}?subject=${encodeURIComponent(data.get('assunto'))}&body=${encodeURIComponent(body)}`;status.textContent='Confira e envie a mensagem no seu aplicativo de email.';});
