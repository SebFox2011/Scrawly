import {connect} from "react-redux";
import {showScrawl} from "../actions/scrawly";
import FormShowScrawl from "../component/FormShowScrawl";

const mapStateToProps = state => {

    return {
        slug: state.scrawl.slug
    }
};

const mapDispatchToProps = dispatch => ({
    show: slug => dispatch(showScrawl(slug)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormShowScrawl)