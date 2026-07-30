import { Link } from 'react-router-dom';
export default function NotFound(){return <div className="container not-found"><span>404</span><h1>Essa página saiu de cena.</h1><p>Volte para a loja e encontre seu próximo sneaker.</p><Link className="button primary" to="/">Voltar ao início</Link></div>}
