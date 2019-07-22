import {connect} from "react-redux";
import {updateSlug} from "../actions/scrawly";
import FormAccueil from "../component/FormAccueil"

const mapStateToProps = state => {
    console.log(state)
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
)(FormAccueil)