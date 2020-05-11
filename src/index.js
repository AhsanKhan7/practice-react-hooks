import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import NoteApp from './components/NoteApp'




// const App = (props) => {
//    const [count, setCount] = useState(props.count)
//    const [text, setText] = useState('')

//   const [state, setState] = useState({
//     count: props.count,
//     text: ''
//   })

//   return (
//     <div>
//         <p>the value of {state.text || 'count'} {state.count}</p>
//         <button onClick={() => setState({count: state.count + 1})}>+1</button>
//         <button onClick={() => setState({count: state.count - 1})}>-1</button>
//         <button onClick={() => setState({count: props.count})}>reset</button>
//         <input value={state.text} onChange={(e) => setState({text: e.target.value})}/>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }



// const App = (props) => {
//   const [count, setCount] = useState(props.count)
//   const [text, setText] = useState('')

//   useEffect(() => {
//     console.log('this could run only once')
//   }, [])

//   useEffect(() => {
//     console.log('ran')
//     document.title = count
//   })

//   return (
//     <div>
//         <p>the value of {text || 'count'} {count}</p>
//         <button onClick={() => setCount(count + 1)}>+1</button>
//         <button onClick={() => setCount(count - 1)}>-1</button>
//         <button onClick={() => setCount(props.count)}>reset</button>
//         <input value={text} onChange={(e) => setText(e.target.value)}/>
//     </div>
    
//   )
// }

// App.defaultProps = {
//   count: 0
// }

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
