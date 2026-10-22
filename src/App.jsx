import React,{useState}from'react';
import{Routes,Route,Link,NavLink,useParams}from'react-router-dom';
import{ArrowRight,ArrowUpRight,ArrowDownRight,Headphones,Menu,X,Mail,Clock3,MapPin,Radio,Play,CheckCircle2}from'lucide-react';


const shows=[{id:'midnight-postcards',number:'01',category:'AUDIO DRAMA',title:'Midnight Postcards',description:'A late-night radio host receives letters that seem to arrive from another time.',length:'6 episodes',year:'2025',tone:'A quiet mystery',color:'from-stone-300 to-zinc-500'},{id:'the-long-way-home',number:'02',category:'DOCUMENTARY',title:'The Long Way Home',description:'Small-town voices, old photographs, and the places that stay with us.',length:'4 episodes',year:'2024',tone:'Human stories',color:'from-neutral-300 to-stone-500'},{id:'frequency-1987',number:'03',category:'MUSICAL FICTION',title:'Frequency 1987',description:'One mysterious broadcast brings a whole neighbourhood together.',length:'8 episodes',year:'2025',tone:'Retro and electric',color:'from-zinc-300 to-neutral-500'}];


function Header(){const[open,setOpen]=useState(false);
return <header className="sticky top-0 z-50 border-b border-black/10 bg-mermaid-paper/90 backdrop-blur-xl">
<div className="container-wide flex h-[74px] items-center justify-between">
<Link to="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
<span className="grid h-9 w-9 place-items-center rounded-full bg-mermaid-ink text-white">
<Radio size={18}/>
</span>
<b className="tracking-[.2em]">MERMAID.</b>
</Link>
<nav className="hidden items-center gap-8 md:flex">{[['/','Home'],['/catalogue','Catalogue'],['/contact','Contact']].map(([to,label])=>
<NavLink key={to} to={to} className={({isActive})=>`text-sm ${isActive?'font-bold':'text-mermaid-ink/65'}`}>{label}</NavLink>)}<Link
    to="/catalogue" className="flex items-center gap-2 rounded-full bg-mermaid-ink px-5 py-3 text-sm font-semibold text-white hover:bg-mermaid-grey">Explore
    shows <ArrowUpRight size={15}/>
</Link>
</nav>
<button className="p-2 md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
</div>{open&&<nav className="container-wide grid gap-1 pb-4 md:hidden">{[['/','Home'],['/catalogue','Catalogue'],['/contact','Contact']].map(([to,label])=>
<Link key={to} to={to} onClick={()=>setOpen(false)} className="rounded-xl p-3 hover:bg-black/5">{label}</Link>)}</nav>}</header>}

function Footer(){return <footer className="bg-mermaid-ink text-white">
<div className="container-wide grid gap-8 py-12 md:grid-cols-3">
<div>
<Link to="/" className="font-bold tracking-[.2em]">MERMAID.</Link>
<p className="mt-3 max-w-xs text-sm leading-6 text-white/55">Homemade radio stories for curious minds and sentimental hearts.</p>
</div>
<div>
<p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-white/40">Explore</p>
<div className="grid gap-3 text-sm text-white/70">
<Link to="/catalogue">Show catalogue</Link>
<Link to="/contact">Customer support</Link>
<Link to="/privacy">Privacy policy</Link>
</div>
</div>
<div>
<p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-white/40">Stay in the loop</p>
<p className="text-sm text-white/60">Questions, collaborations, or a story to share?</p>
<Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Talk to our team <ArrowRight size={15}/>
</Link>
</div>
</div>
<div className="border-t border-white/10">
<div className="container-wide flex flex-col justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
<span>© {new Date().getFullYear()} Mermaid Radio. All rights reserved.</span>
<span>Made with care, heard everywhere.</span>
</div>
</div>
</footer>}

function Artwork({s,large=false}){return <div className={`relative isolate flex ${large?'min-h-[390px]':'min-h-[235px]'} overflow-hidden rounded-2xl bg-gradient-to-br ${s.color} p-5`}>
<div className="absolute inset-0 -z-10 grain opacity-50"/>
<div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border border-white/50"/>
<div className="absolute -right-1 top-8 h-44 w-44 rounded-full border border-white/35"/>
<div className="flex w-full flex-col justify-between">
<div className="flex justify-between">
<span className="rounded-full border border-white/45 bg-white/20 px-3 py-1 text-[10px] font-bold tracking-widest">{s.category}</span>
<span className="text-sm font-semibold text-black/45">{s.number} / 03</span>
</div>
<div>
<div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-white/25">
<Headphones size={21}/>
</div>
<h3 className="display-font max-w-[280px] text-3xl leading-tight sm:text-4xl">{s.title}</h3>
<p className="mt-4 text-xs font-medium text-black/60">{s.length} · {s.year}</p>
</div>
</div>
</div>}

function Heading({eyebrow,title,text}){return <div className="max-w-2xl">
<p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-mermaid-grey">{eyebrow}</p>
<h2 className="display-font text-4xl leading-tight sm:text-5xl">{title}</h2>{text&&<p className="mt-5 max-w-xl leading-7 text-mermaid-ink/60">{text}</p>}</div>}

function Home(){return <>
<section className="border-b border-black/5">
<div className="container-wide grid min-h-[610px] items-center gap-12 py-16 md:grid-cols-[1.05fr_.95fr]">
<div>
<div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-xs font-semibold text-black/60">
<span className="h-2 w-2 rounded-full bg-mermaid-grey"/> Independent radio. Made by hand.</div>
<h1 className="display-font max-w-[680px] text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">Stories
    worth <span className="italic text-mermaid-grey">tuning</span> into.</h1>
<p className="mt-7 max-w-lg text-base leading-8 text-black/60 sm:text-lg">We make thoughtful, homemade radio shows
    that bring the warmth of yesterday into the sound of today.</p>
<div className="mt-9 flex flex-wrap items-center gap-4">
<Link to="/catalogue" className="inline-flex items-center gap-3 rounded-full bg-mermaid-ink px-6 py-4 text-sm font-semibold text-white hover:bg-mermaid-grey">Explore
    the catalogue <ArrowUpRight size={16}/>
</Link>
<a href="#our-values" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-black/65">What
    we believe <ArrowDownRight size={16}/>
</a>
</div>
<div className="mt-12 border-t border-black/10 pt-6 text-xs leading-5 text-black/55">
<b className="text-mermaid-ink">Made with care.</b>
<br/>Shared with listeners everywhere.</div>
</div>
<div className="relative mx-auto w-full max-w-[510px]">
<div className="absolute -inset-5 rounded-[2rem] bg-mermaid-mist blur-2xl"/>
<div className="relative rotate-2 rounded-[2rem] border border-white bg-white/60 p-3 shadow-soft">
<div className="hero-orb relative flex min-h-[450px] flex-col justify-between overflow-hidden rounded-[1.5rem] p-6 sm:p-8">
<div className="absolute -right-12 -top-14 h-64 w-64 rounded-full border border-white/40"/>
<div className="flex justify-between text-xs font-bold tracking-widest text-white/80">
<span>MERMAID RADIO</span>
<span>EST. WITH CARE</span>
</div>
<div className="relative z-10 mx-auto flex w-full max-w-[310px] flex-col items-center rounded-3xl border border-white/40 bg-white/20 p-7 text-center shadow-xl backdrop-blur">
<div className="mb-6 grid h-24 w-24 place-items-center rounded-full border border-white/60 bg-white/25 text-white">
<Radio size={42} strokeWidth={1.2}/>
</div>
<p className="display-font text-4xl leading-tight text-white">A little<br/>sound of home.</p>
<p className="mt-4 text-xs uppercase tracking-[.2em] text-white/75">Stories · Sound · Memory</p>
<div className="mt-7 flex items-center gap-1.5">{Array.from({length:17},(_,i)=>
<span key={i} className="w-1 rounded-full bg-white/75" style={{height:`${10+Math.abs(Math.sin(i*1.7))*28}px`}}/>)}</div>
</div>
<div className="flex items-end justify-between text-xs text-white/75">
<span>Turn the dial.<br/>Find a feeling.</span>
<span className="grid h-10 w-10 place-items-center rounded-full border border-white/40">
<Play size={15} fill="currentColor"/>
</span>
</div>
</div>
</div>
<div className="absolute -bottom-7 -left-4 rounded-2xl border border-black/5 bg-mermaid-paper px-5 py-4 shadow-soft sm:-left-10">
<p className="text-[10px] font-bold uppercase tracking-widest text-mermaid-grey">The Mermaid feeling</p>
<p className="display-font mt-1 text-xl">Familiar, never ordinary.</p>
</div>
</div>
</div>
<div className="container-wide flex flex-wrap justify-between gap-3 border-t border-black/5 py-5 text-[10px] font-bold uppercase tracking-[.2em] text-black/45">
<span>Homemade audio stories</span>
<span>For the curious</span>
<span>Available worldwide</span>
<span>Always worth a listen</span>
</div>
</section>
<section className="container-wide py-24">
<div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
<Heading eyebrow="A few favourites" title="Find your next favourite frequency." text="Small-batch stories, made with heart. Start with one of the shows our listeners keep coming back to."/>
<Link to="/catalogue" className="inline-flex shrink-0 items-center gap-2 border-b border-black/25 pb-2 text-sm font-semibold">View
    full catalogue <ArrowRight size={16}/>
</Link>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-3">{shows.map(s=>
<Link key={s.id} to={`/products/${s.id}`} className="group">
<Artwork s={s}/>
<div className="flex items-start justify-between gap-3 px-1 pt-5">
<div>
<p className="text-[10px] font-bold tracking-widest text-mermaid-grey">{s.category}</p>
<h3 className="display-font mt-2 text-2xl">{s.title}</h3>
<p className="mt-2 text-sm leading-6 text-black/60">{s.description}</p>
</div>
<span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 transition group-hover:bg-mermaid-ink group-hover:text-white">
<ArrowUpRight size={16}/>
</span>
</div>
</Link>)}</div>
</section>
<section id="our-values" className="bg-mermaid-mist/70 py-24">
<div className="container-wide">
<Heading eyebrow="Our values" title="Made by people. Meant to be felt." text="We believe the best stories don't need to shout. They need honesty, care, and a little room for imagination."/>
<div className="mt-14 grid gap-4 md:grid-cols-3">{[{n:'01',title:'Handmade, always',text:'Every show begins with a human idea and is shaped with attention, patience, and a love of sound.'},{n:'02',title:'Nostalgia with purpose',text:'We celebrate familiar voices and old-school radio, while telling stories for right now.'},{n:'03',title:'Open to everyone',text:'Stories should travel. We work to make our catalogue easy to discover and available worldwide.'}].map(v=>
<article key={v.n} className="rounded-2xl border border-black/10 bg-mermaid-paper/70 p-7 sm:p-8">
<p className="text-xs font-bold tracking-widest text-mermaid-grey">{v.n} / VALUE</p>
<h3 className="display-font mt-10 text-2xl">{v.title}</h3>
<p className="mt-4 text-sm leading-7 text-black/60">{v.text}</p>
</article>)}</div>
</div>
</section>
<section className="container-wide py-24">
<div className="relative overflow-hidden rounded-[2rem] bg-mermaid-ink px-7 py-12 text-white sm:px-14 sm:py-16">
<div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/10"/>
<div className="relative max-w-2xl">
<p className="text-xs font-bold uppercase tracking-[.2em] text-white/45">Your next listen is waiting</p>
<h2 className="display-font mt-5 text-4xl sm:text-5xl">A good story stays with you.</h2>
<p className="mt-5 max-w-lg text-sm leading-7 text-white/60">Browse our collection of handcrafted radio shows and
    find the voice, world, or memory you want to spend time with.</p>
<Link to="/catalogue" className="mt-8 inline-flex items-center gap-3 rounded-full bg-mermaid-paper px-6 py-4 text-sm font-bold text-mermaid-ink">Get
    to the catalogue <ArrowUpRight size={16}/>
</Link>
</div>
</div>
</section>
<section className="border-t border-black/10">
<div className="container-wide flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-center">
<div>
<b>Need a hand?</b>
<p className="mt-1 text-sm text-black/60">Questions about a show or your order? We're here to help.</p>
</div>
<Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold">Visit customer support <ArrowRight size={16}/>
</Link>
</div>
</section>
</>}

function Catalogue(){return <main className="container-wide min-h-[65vh] py-16 sm:py-24">
<p className="text-xs font-bold uppercase tracking-[.2em] text-mermaid-grey">The Mermaid collection</p>
<h1 className="display-font mt-4 text-5xl sm:text-6xl">The catalogue.</h1>
<p className="mt-5 max-w-xl leading-7 text-black/60">Audio drama, human stories, and unexpected frequencies. Find
    a show that sounds like you.</p>
<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{shows.map(s=>
<Link key={s.id} to={`/products/${s.id}`} className="group">
<Artwork s={s}/>
<p className="mt-5 text-[10px] font-bold tracking-widest text-mermaid-grey">{s.category} · {s.length}</p>
<h2 className="display-font mt-2 text-2xl">{s.title}</h2>
<p className="mt-3 text-sm leading-6 text-black/60">{s.description}</p>
<span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">View show <ArrowRight size={15}/>
</span>
</Link>)}</div>
<div className="mt-16 rounded-2xl border border-black/10 bg-white/50 p-7 sm:p-10">
<h2 className="display-font text-2xl">Can't find what you're looking for?</h2>
<p className="mt-2 text-sm text-black/60">Our support team can help you find the right show.</p>
<Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-mermaid-ink px-5 py-3 text-sm font-semibold text-white">Contact
    support <ArrowRight size={15}/>
</Link>
</div>
</main>}

function Product(){const{id}=useParams();

const s=shows.find(x=>x.id===id);
if(!s)return <NotFound/>;
return <main className="container-wide py-14 sm:py-20">
<Link to="/catalogue" className="mb-8 inline-block text-sm text-black/60">← Back to catalogue</Link>
<div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
<Artwork s={s} large/>
<div>
<p className="text-xs font-bold tracking-widest text-mermaid-grey">{s.category} · {s.year}</p>
<h1 className="display-font mt-4 text-5xl leading-tight">{s.title}</h1>
<p className="mt-6 text-lg leading-8 text-black/60">{s.description}</p>
<div className="mt-7 grid grid-cols-2 gap-3">
<div className="rounded-xl border border-black/10 p-4">
<p className="text-xs text-black/50">Format</p>
<b className="mt-1 block">{s.length}</b>
</div>
<div className="rounded-xl border border-black/10 p-4">
<p className="text-xs text-black/50">Mood</p>
<b className="mt-1 block">{s.tone}</b>
</div>
</div>
<p className="mt-7 text-sm leading-7 text-black/60">Made in small batches with care, this Mermaid production is
    created for listeners who love thoughtful storytelling and the familiar warmth of radio. Contact our team for
    availability and listening options.</p>
<Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-mermaid-ink px-6 py-4 text-sm font-semibold text-white">Ask
    about this show <ArrowUpRight size={16}/>
</Link>
</div>
</div>
</main>}

function Contact(){const[form,setForm]=useState({name:'',email:'',topic:'Show or catalogue question',message:''});
const[sent,setSent]=useState(false);

const update=e=>setForm({...form,[e.target.name]:e.target.value});
return <main className="container-wide py-16 sm:py-24">
<div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
<div>
<p className="text-xs font-bold uppercase tracking-[.2em] text-mermaid-grey">Customer support</p>
<h1 className="display-font mt-4 text-5xl sm:text-6xl">Let's talk.</h1>
<p className="mt-5 leading-7 text-black/60">Questions about a show, the catalogue, or working with Mermaid? Send
    us a note and we'll help point you in the right direction.</p>
<div className="mt-10 space-y-5">{[[Mail,'Email support','Add your official support email before launch.'],[Clock3,'Response time','We aim to respond within two business days.'],[MapPin,'Worldwide listeners','Wherever you are tuning in from.']].map(([Icon,title,desc])=>
<div key={title} className="flex gap-4">
<span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mermaid-mist">
<Icon size={18}/>
</span>
<div>
<b>{title}</b>
<p className="mt-1 text-sm text-black/60">{desc}</p>
</div>
</div>)}</div>
</div>
<div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-soft sm:p-9">{sent?<div className="py-12 text-center">
<CheckCircle2 size={42} className="mx-auto text-mermaid-grey"/>
<h2 className="display-font mt-5 text-3xl">Thanks for reaching out.</h2>
<p className="mt-3 text-sm leading-6 text-black/60">This demo form does not send or store messages. Connect a backend
    or form service before launch.</p>
<button onClick={()=>setSent(false)} className="mt-6 text-sm font-bold underline">Send another message</button>
</div>:<form onSubmit={e=>{e.preventDefault();
setSent(true)}} className="space-y-5">
<div>
<label className="mb-2 block text-sm font-semibold" htmlFor="name">Your name</label>
<input id="name" name="name" required value={form.name} onChange={update} className="w-full rounded-xl border border-black/10 bg-mermaid-paper px-4 py-3 outline-none focus:border-mermaid-grey"
    placeholder="Name"/>
</div>
<div>
<label className="mb-2 block text-sm font-semibold" htmlFor="email">Email address</label>
<input id="email" name="email" type="email" required value={form.email} onChange={update} className="w-full rounded-xl border border-black/10 bg-mermaid-paper px-4 py-3 outline-none focus:border-mermaid-grey"
    placeholder="you@example.com"/>
</div>
<div>
<label className="mb-2 block text-sm font-semibold" htmlFor="topic">What can we help with?</label>
<select id="topic" name="topic" value={form.topic} onChange={update} className="w-full rounded-xl border border-black/10 bg-mermaid-paper px-4 py-3 outline-none focus:border-mermaid-grey">
<option>Show or catalogue question</option>
<option>Order or availability</option>
<option>Accessibility feedback</option>
<option>Press or partnership</option>
<option>Something else</option>
</select>
</div>
<div>
<label className="mb-2 block text-sm font-semibold" htmlFor="message">Your message</label>
<textarea id="message" name="message" required rows="5" value={form.message} onChange={update} className="w-full resize-y rounded-xl border border-black/10 bg-mermaid-paper px-4 py-3 outline-none focus:border-mermaid-grey"
    placeholder="How can we help?"/>
</div>
<button className="flex w-full items-center justify-center gap-2 rounded-full bg-mermaid-ink px-6 py-4 text-sm font-semibold text-white hover:bg-mermaid-grey">Send
    message <ArrowRight size={16}/>
</button>
<p className="text-xs text-black/45">Demo only: no message is transmitted or stored.</p>
</form>}</div>
</div>
</main>}

function Privacy(){return <main className="container-wide max-w-4xl py-16 sm:py-24">
<p className="text-xs font-bold uppercase tracking-[.2em] text-mermaid-grey">The fine print</p>
<h1 className="display-font mt-4 text-5xl sm:text-6xl">Privacy policy.</h1>
<p className="mt-5 text-sm text-black/50">Starter template — review before launch.</p>
<div className="mt-10 space-y-8 text-sm leading-7 text-black/70">{[['1. Overview','This is a starter privacy policy for the Mermaid website concept. Replace it with a policy that accurately reflects your business, applicable laws, and services before publishing.'],['2. Information you provide','If you contact Mermaid, you may choose to provide your name, email address, and message. The demo contact form does not transmit or store information.'],['3. How information may be used','A live version may use contact details to answer questions, provide support, manage requests, and maintain security. Specify the actual purposes and lawful basis that apply.'],['4. Cookies and analytics','This starter project does not intentionally implement analytics or advertising cookies. If you add analytics, embedded media, checkout, or third-party tools, update this section and any required consent controls.'],['5. Sharing and retention','Explain which service providers receive personal information, how long it is retained, and what safeguards are used.'],['6. Your choices and contact','Add accurate information about applicable privacy rights, how users can make requests, and Mermaid’s official contact details. Obtain appropriate legal review.']].map(([h,p])=>
<section key={h}>
<h2 className="display-font text-2xl text-mermaid-ink">{h}</h2>
<p className="mt-3">{p}</p>
</section>)}<div className="rounded-2xl border border-black/10 bg-mermaid-mist/60 p-5">
<b className="text-mermaid-ink">Launch reminder</b>
<p className="mt-2">This is placeholder copy, not legal advice. Confirm your real data practices and legal requirements
    before publishing.</p>
</div>
</div>
</main>}

function NotFound(){return <main className="container-wide grid min-h-[60vh] place-items-center py-20 text-center">
<div>
<p className="text-xs font-bold tracking-widest text-mermaid-grey">404 · OFF AIR</p>
<h1 className="display-font mt-4 text-5xl">This frequency is quiet.</h1>
<p className="mt-4 text-black/60">We couldn't find that page.</p>
<Link to="/" className="mt-7 inline-flex gap-2 rounded-full bg-mermaid-ink px-5 py-3 text-sm font-semibold text-white">Back
    home <ArrowRight size={15}/>
</Link>
</div>
</main>}

export default 
function App(){return <>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/catalogue" element={<Catalogue/>}/>
<Route path="/products/:id" element={<Product/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/privacy" element={<Privacy/>}/>
<Route path="*" element={<NotFound/>}/>
</Routes>
<Footer/>
</>}
