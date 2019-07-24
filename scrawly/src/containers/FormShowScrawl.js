import {connect} from "react-redux";
import FormShowScrawl from "../component/FormShowScrawl";
import {showScrawl} from "../actions/scrawly";


const mapStateToProps = state => {
    return {
        scrawl: state.scrawl
    }
};

const mapDispatchToProps = dispatch => ({
    show: slug => dispatch(showScrawl(slug))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormShowScrawl)