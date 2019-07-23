import {connect} from "react-redux";
import {scrawlAdd} from "../actions/scrawly";
import FormNewScrawl from "../component/FormNewScrawl";

const mapStateToProps = state => {

    return {
        slug: state.scrawl.slug
    }
};

const mapDispatchToProps = dispatch => ({
    add: slug => dispatch(scrawlAdd(slug)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormNewScrawl)