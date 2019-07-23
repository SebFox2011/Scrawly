import {connect} from "react-redux";
import {updateScrawl} from "../actions/scrawly";
import FormEditScrawl from "../component/FormEditScrawl";

const mapStateToProps = state => {

    return {
        slug: state.scrawl.slug,
        id: state.scrawl["@id"]
    }
};

const mapDispatchToProps = dispatch => ({
    update: slug => dispatch(updateScrawl(slug)),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormEditScrawl)