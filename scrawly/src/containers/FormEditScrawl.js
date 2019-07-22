import {connect} from "react-redux";
import {updateSlug} from "../actions/scrawly";
import FormEditScrawl from "../component/FormEditScrawl";

const mapStateToProps = state => {

    return {
        slug: state.scrawl.slug
    }
};

const mapDispatchToProps = dispatch => ({
    update: slug => dispatch(updateSlug(slug)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormEditScrawl)