import Config from 'react-native-config';
import { getLanguage } from 'utils/i18n';
import { Observable } from 'rxjs';
import { store } from 'index';
import { REFRESH_TOKEN } from 'actionTypes/userActionTypes';

export const API = Config.api;
const apiTimeout = 10000;
export const debounceTime = 400;
export const { apiKey } = Config;
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Accept-language': getLanguage(),
};

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }

  throw res;
};

const getRootUrl = (url, accountId) => {
  if (!accountId) return url;

  return `${url}/${accountId}`;
};

const parseJSON = res => {
  const token = res.headers.get('authorization');
  if (token && token !== store.getState().user.token) {
    store.dispatch({ type: REFRESH_TOKEN, payload: { token } });
  }
  return res.json();
};

export const getEpic = (url, defaultToken = '', accountId = '') => {
  const state = store.getState();
  const token =
    state && state.user && state.user.token ? state.user.token : defaultToken;

  const request = fetch(
    `${API}${getRootUrl(
      url,
      accountId !== '' ? accountId : state.user.userDatas.id,
    )}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        ...defaultHeaders,
      },
      method: 'GET',
    },
  )
    .then(res => checkStatus(res))
    .then(data => parseJSON(data));

  return Observable.fromPromise(request)
    .do(data => console.log('Get res', data))
    .timeout(apiTimeout);
};

export const postEpic = (url, body) => {
  console.log('Post content', body);
  const state = store.getState();
  const token = state && state.user ? state.user.token : '';

  const request = fetch(
    `${API}${getRootUrl(url, !token ? '' : state.user.userDatas.id)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        ...defaultHeaders,
      },
      method: 'POST',
      body: JSON.stringify(body),
    },
  )
    .then(res => checkStatus(res))
    .then(data => parseJSON(data));

  return Observable.fromPromise(request)
    .do(data => console.log('Post res', data))
    .timeout(apiTimeout);
};

export const putEpic = (url, body) => {
  const state = store.getState();
  const token = state && state.user ? state.user.token : '';
  console.log('Put body', body);

  const request = fetch(
    `${API}${getRootUrl(url, !token ? '' : state.user.userDatas.id)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        ...defaultHeaders,
      },
      method: 'PUT',
      body: JSON.stringify(body),
    },
  )
    .then(res => checkStatus(res))
    .then(data => parseJSON(data));

  return Observable.fromPromise(request)
    .do(data => console.log('Put res', data))
    .timeout(apiTimeout);
};

export const delEpic = url => {
  const state = store.getState();
  const token = state && state.user ? state.user.token : '';
  const request = fetch(
    `${API}${getRootUrl(url, !token ? '' : state.user.userDatas.id)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        ...defaultHeaders,
      },
      method: 'DELETE',
    },
  )
    .then(res => checkStatus(res))
    .then(checkedRes => parseJSON(checkedRes));

  return Observable.fromPromise(request)
    .do(data => console.log('Del res', data))
    .timeout(apiTimeout);
};
