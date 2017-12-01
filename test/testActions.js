import { requestClick, receiveClick, errorClick, requestLeaderboard,
  receiveLeaderboard, setSession, fetchLeaderboard, postClick }
  from '../src/actions';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('Testing synchronous action creators', () => {
  it('requestClick should create a REQUEST_CLICK action', () => {
    expect(requestClick('Best team', 'iamsorandomlol')).to.deep.equal({
      type: 'REQUEST_CLICK',
      team: 'Best team',
      session: 'iamsorandomlol'
    });
  });

  it('receiveClick should create a RECEIVE_CLICK action', () => {
    expect(receiveClick(510, 10, 'Marvelous team', 'random-string'))
    .to.deep.equal({
      type: 'RECEIVE_CLICK',
      team: 'Marvelous team',
      session: 'random-string',
      teamClicks: 510,
      sessionClicks: 10
    });
  });

  it('errorClick should create a ERROR_CLICK action', () => {
    expect(errorClick('Awesome team', 'random')).to.deep.equal({
      type: 'ERROR_CLICK',
      team: 'Awesome team',
      session: 'random'
    });
  });

  it('requestLeaderboard should create a REQUEST_LEADERBOARD action',
    () => {
    expect(requestLeaderboard()).to.deep.equal({
      type: 'REQUEST_LEADERBOARD'
    });
  });

  it('receiveLeaderboard should create a RECEIVE_LEADERBOARD action',
    () => {
    expect(receiveLeaderboard([{name: 'My team', clicks: 1000}]))
    .to.deep.equal({
      type: 'RECEIVE_LEADERBOARD',
      leaderboard: [{name: 'My team', clicks: 1000}]
    });
  });

  it('setSession should create a SET_SESSION action', () => {
    expect(setSession('What a team, wow', 'asdfg')).to.deep.equal({
      type: 'SET_SESSION',
      team: 'What a team, wow',
      id: 'asdfg'
    });
  });

});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Testing asynchronous action creators', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  });


  it('fetchLeaderboard should create request and receive', () => {
    fetchMock.get('*', [{ team: 'dabest', clicks:1000 }]);
    const store = mockStore({});

    const expectedActions = [
      { type: 'REQUEST_LEADERBOARD' },
      {
        type: 'RECEIVE_LEADERBOARD',
        leaderboard: [{
          clicks: 1000,
          name: 'dabest'
        }]
      }
    ];

    return store.dispatch(fetchLeaderboard())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('postClick success should create request and receive', () => {
    fetchMock.post('*', { your_clicks: 10, team_clicks: 500});
    const store = mockStore({});

    const expectedActions = [
      {
        type: 'REQUEST_CLICK',
        team: 'No1',
        session: 'random'
      },
      {
        type: 'RECEIVE_CLICK',
        teamClicks: 500,
        sessionClicks: 10,
        team: 'No1',
        session: 'random'
      }
    ];

    return store.dispatch(postClick('No1', 'random'))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('postClick error should create request and error', () => {
    fetchMock.post('*', { throws: 'Error happened'});
    const store = mockStore({});

    const expectedActions = [
      {
        type: 'REQUEST_CLICK',
        team: 'No1',
        session: 'random'
      },
      {
        type: 'ERROR_CLICK',
        team: 'No1',
        session: 'random'
      }
    ];

    return store.dispatch(postClick('No1', 'random'))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

});
