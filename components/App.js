import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibilityTodoList from '../containers/VisibilityTodoList'
import Footer from './Footer'
// import { PropTypes } from 'prop-types'

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AddTodo />
                <VisibilityTodoList />
                <Footer />
            </div>
        );
    }
}

export default App;


// const App = () => (
//     <div>
//         <AddTodo />
//         <VisibilityTodoList />
//         <Footer />
//     </div>
// )
