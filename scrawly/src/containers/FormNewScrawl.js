import {connect} from "react-redux";
import {updateSlug, updateTitle,createScrawl} from "../actions/scrawly";
import FormNewScrawl from "../component/FormNewScrawl";

const mapStateToProps = state => {
    return {
        slug: state.scrawl.slug,
        title: state.scrawl.title,
        id:state.scrawl["@id"],
        loading: state.createScrawlLoading
    }
};

const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
    createScrawl:scrawl => dispatch(createScrawl(scrawl))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormNewScrawl)