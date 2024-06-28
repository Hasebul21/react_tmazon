import { useSelector } from 'react-redux';

export default function ViewNumber() {
  const count = useSelector(state => state.count);
  const toggle = useSelector(state => state.showCounter);

  return (
    <div>
      {toggle && <h1>Hello this is {count}</h1>} {!toggle && <h1>Its Hidden</h1>}
    </div>
  );
}
