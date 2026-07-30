import { Heart, Plus } from 'lucide-react'; import { Link } from 'react-router-dom';
const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export default function ProductCard({product,addToCart}){return <article className="product-card">
 <Link className="product-media" to={`/produto/${product.id}`}><img src={product.image} alt={product.name}/>{product.badge&&<span>{product.badge}</span>}<button className="favorite" aria-label="Favoritar" onClick={e=>e.preventDefault()}><Heart/></button></Link>
 <div className="product-copy"><div><p>{product.brand}</p><h3><Link to={`/produto/${product.id}`}>{product.name}</Link></h3><small>{product.category}</small></div><button className="quick-add" onClick={()=>addToCart(product,product.sizes[2])}><Plus/></button></div>
 <div className="price"><strong>{money(product.price)}</strong>{product.oldPrice&&<del>{money(product.oldPrice)}</del>}</div>
 </article>}
