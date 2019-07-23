import {connect} from "react-redux";
import {showScrawl, updateScrawl} from "../actions/scrawly";
import FormAccueil from "../component/FormAccueil"

const mapStateToProps = state => {
    return {
        slug: state.scrawl.slug
    }
};

const mapDispatchToProps = dispatch => ({
    update: slug => dispatch(updateScrawl(slug)),
    show:slug => dispatch(showScrawl(slug))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormAccueil)