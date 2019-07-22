import {connect} from "react-redux";
import {newSlug} from "../actions/scrawly";
import FormNewScrawl from "../component/FormNewScrawl";

const mapStateToProps = state => {

    return {
        slug: state.scrawl.slug
    }
};

const mapDispatchToProps = dispatch => ({
    new: slug => dispatch(newSlug(slug)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormNewScrawl)