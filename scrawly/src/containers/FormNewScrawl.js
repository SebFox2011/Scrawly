import {connect} from "react-redux";
import {updateSlug, updateTitle} from "../actions/scrawly";
import FormNewScrawl from "../component/FormNewScrawl";

const mapStateToProps = state => {

    return {
        slug: state.scrawl.slug,
        title: state.scrawl.title,
        id:state.scrawl.id
    }
};

const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormNewScrawl)