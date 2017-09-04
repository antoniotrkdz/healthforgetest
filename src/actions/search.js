import axios from 'axios';
import {SET_TERM, FETCH_PATIENT} from '../constants/action_types.js';

export const fetchPatient = searchTerm => dispatch => {
  dispatch({
    type: FETCH_PATIENT,
    status: 'pending',
  });

  axios
    .get('https://api.interview.healthforge.io/api/patient', {
      params: {searchTerm: searchTerm},
    })
    .then(response => {
      dispatch({
        type: FETCH_PATIENT,
        status: 'success',
        response: response.data,
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PATIENT,
        status: 'error',
        error: err,
      });
    });
};

export const setTerm = Searchterm => dispatch => {
  dispatch({
    type: SET_TERM,
    response: Searchterm,
  });
};
