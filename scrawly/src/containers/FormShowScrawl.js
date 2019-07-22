import {connect} from "react-redux";
import {showSlug} from "../actions/scrawly";
import FormShowScrawl from "../component/FormShowScrawl";

const mapStateToProps = state => {

    return {
        slug: state.scrawl.slug
    }
};

const mapDispatchToProps = dispatch => ({
    show: slug => dispatch(showSlug(slug)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormShowScrawl)