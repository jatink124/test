import MyContext from './context';

export default function Provider(props) {
  return (
    <MyContext.Provider value={props.value}>
      {props.children}
    </MyContext.Provider>
  );
}
