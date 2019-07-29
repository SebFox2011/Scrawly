import {connect} from "react-redux";
import {updateScrawl, updateTitle, updateDate} from "../actions/scrawly";
import FormEditScrawl from "../component/FormEditScrawl";

const mapStateToProps = state => {

    return {
        scrawl: state.scrawl,
        slug: state.scrawl.slug,
        id: state.scrawl["@id"],
        title: state.scrawl.title,
        newdate: state.scrawl.newdate,
        choise:  state.scrawl.choise,
        loading: state.scrawl.createScrawlLoading,
        error:   state.scrawl.error
    }
};

const mapDispatchToProps = dispatch => ({
    update: slug => dispatch(updateScrawl(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
    updateDate: choise => dispatch(updateDate(choise))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormEditScrawl)