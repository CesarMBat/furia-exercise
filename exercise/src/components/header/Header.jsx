import './header.css'
import furia from '../../assets/furia.png'

const Header = ({onItemClick}) => {



  return (
    <div>
      <header className="header">
        <div style={{display: 'inline-flex', alignItems: 'center'}}>
          <img src={furia} height={'50vh'} />
          <h1 className="h1-header" onClick={() => onItemClick('item0')}>FURIA</h1>
        </div>
        <ul className="ul-header">
          <li className="li-header" onClick={() => onItemClick('item1')}>Moletons</li>
          <li className="li-header" onClick={() => onItemClick('item2')}>Camisas</li>
          <li className="li-header" onClick={() => onItemClick('item3')}>Acessórios</li>
        </ul>
      </header>
    </div>
  )
}

export default Header
