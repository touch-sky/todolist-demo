import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList'

const getVisibileTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibileTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onTodoClick: (id)=>{
            dispatch(toggleTodo(id))
        }
    } 
}

const VisibilityTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibilityTodoList