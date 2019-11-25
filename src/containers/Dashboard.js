import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { addCar, removeCar } from '../redux/actions'
// import { removeCar } action here
 
const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
        removeCar: (index) => dispatch(removeCar(index))
    }
}
// add mapDispatchToProps function here

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)