import {connect} from "react-redux";
import {updateScrawl, updateTitle} from "../actions/scrawly";
import FormEditScrawl from "../component/FormEditScrawl";

const mapStateToProps = state => {

    return {
        slug: state.scrawl.slug,
        id: state.scrawl["@id"],
        title: state.scrawl.title
    }
};

const mapDispatchToProps = dispatch => ({
    update: slug => dispatch(updateScrawl(slug)),
    updateTitle: title => dispatch(updateTitle(title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormEditScrawl)