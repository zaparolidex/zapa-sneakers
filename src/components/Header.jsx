import { useEffect, useState } from 'react';
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
export default function Header({cartCount,onOpenCart}){
 const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false);
 useEffect(()=>{const fn=()=>setScrolled(scrollY>20); addEventListener('scroll',fn); return()=>removeEventListener('scroll',fn)},[]);
 const nav=[['Início','/'],['Sneakers','/catalogo'],['Novidades','/catalogo?ordem=novos'],['Coleções','/#colecoes']];
 return <>
 <div className="announcement">FRETE GRÁTIS ACIMA DE R$ 499 <span>•</span> 10X SEM JUROS <span>•</span> TROCA EM 30 DIAS</div>
 <header className={`header ${scrolled?'is-scrolled':''}`}>
  <Link className="brand" to="/">ZAPA<span>.</span><small>SNEAKERS</small></Link>
  <nav>{nav.map(([n,p])=><NavLink key={n} to={p}>{n}</NavLink>)}</nav>
  <div className="header-actions"><button aria-label="Buscar"><Search/></button><button aria-label="Favoritos"><Heart/></button><button className="bag" onClick={onOpenCart} aria-label="Carrinho"><ShoppingBag/><b>{cartCount}</b></button><button className="mobile-menu" onClick={()=>setOpen(true)}><Menu/></button></div>
 </header>
 <div className={`mobile-drawer ${open?'open':''}`}><button onClick={()=>setOpen(false)}><X/></button>{nav.map(([n,p])=><Link key={n} to={p} onClick={()=>setOpen(false)}>{n}</Link>)}</div>
 </>
}
