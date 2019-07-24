import {connect} from "react-redux";
import FormShowScrawl from "../component/FormShowScrawl";

const mapStateToProps = state => {
    return {
        scrawl: state.scrawl
    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormShowScrawl)