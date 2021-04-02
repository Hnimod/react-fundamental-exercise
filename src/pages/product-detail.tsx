import { Link } from 'react-router-dom';

const ProductDetail = (props: any) => {
  return (
    <ul style={{ textAlign: 'center', listStyle: 'none' }}>
      <li>{props.location.state ? props.location.state.id : 'No id'}</li>
      <li>{props.location.state ? props.location.state.name : 'No data'}</li>
      <li>
        Sales {props.location.search ? props.location.search.split('=')[1] : 0}%
      </li>
      <Link to={{ pathname: '/' }}>Back to list</Link>
    </ul>
  );
};

export default ProductDetail;
