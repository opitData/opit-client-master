import {useEffect} from 'react';
import DevService from '../../services/dev.service';
import {connect} from 'react-redux';

function InitComponent() {
  useEffect(() => {
    DevService.setDevOption();
  }, []);

  return null;
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {};
  },
)(InitComponent);
