import { reducer } from '../src/reducers';
import { expect } from 'chai';

let initialState = {
  leaderboard: [{
    name: 'Champions',
    clicks: 510
  },
  {
    name: 'Losers',
    clicks: 1
  }],
  fetchingLeaderboard: false,
  session: {
    id: 'veryrandom',
    team: 'Champions',
    sessionClicks: 10
  }
}

describe('Testing reducer', () => {
  it('REQUEST_LEADERBOARD should set fetchingLeaderboard to true', () => {
    expect(reducer(initialState, {
      type: 'REQUEST_LEADERBOARD',
    })).to.deep.equal({
      leaderboard: [{
        name: 'Champions',
        clicks: 510
      },
      {
        name: 'Losers',
        clicks: 1
      }],
      fetchingLeaderboard: true,
      session: {
        id: 'veryrandom',
        team: 'Champions',
        sessionClicks: 10
      }
    });
  });

  it('RECEIVE_LEADERBOARD should set fetchingLeaderboard to false and update leaderboard',
    () => {
    expect(reducer(initialState, {
      type: 'RECEIVE_LEADERBOARD',
      leaderboard: [{
        name: 'New team',
        clicks: 100
      }]
    })).to.deep.equal({
      leaderboard: [{
        name: 'New team',
        clicks: 100
      }],
      fetchingLeaderboard: false,
      session: {
        id: 'veryrandom',
        team: 'Champions',
        sessionClicks: 10
      }
    });
  });

  it('SET_SESSION should update session',
    () => {
    expect(reducer(initialState, {
      type: 'SET_SESSION',
      id: 'muchrandom',
      team: 'New team'
    })).to.deep.equal({
      leaderboard: [{
        name: 'Champions',
        clicks: 510
      },
      {
        name: 'Losers',
        clicks: 1
      }],
      fetchingLeaderboard: false,
      session: {
        id: 'muchrandom',
        team: 'New team',
        sessionClicks: 0
      }
    });
  });

  it('REQUEST_CLICK should update leaderboard and session clicks when equal',
    () => {
    expect(reducer(initialState, {
      type: 'REQUEST_CLICK',
      team: 'Champions',
      session: 'veryrandom'
    })).to.deep.equal({
      leaderboard: [{
        name: 'Champions',
        clicks: 511
      },
      {
        name: 'Losers',
        clicks: 1
      }],
      fetchingLeaderboard: false,
      session: {
        id: 'veryrandom',
        team: 'Champions',
        sessionClicks: 11
      }
    });
  });

  it('REQUEST_CLICK should create team in leaderboard when click is on new team',
    () => {
    expect(reducer(initialState, {
      type: 'REQUEST_CLICK',
      team: 'New team',
      session: 'asdf'
    })).to.deep.equal({
      leaderboard: [{
        name: 'Champions',
        clicks: 510
      },
      {
        name: 'Losers',
        clicks: 1
      },
      {
        name: 'New team',
        clicks: 1
      }
      ],
      fetchingLeaderboard: false,
      session: {
        id: 'veryrandom',
        team: 'Champions',
        sessionClicks: 10
      }
    });
  });

  it('ERROR_CLICK should reroll the click', () => {
    expect(reducer(initialState, {
      type: 'ERROR_CLICK',
      team: 'Champions',
      session: 'veryrandom'
    })).to.deep.equal({
      leaderboard: [{
        name: 'Champions',
        clicks: 509
      },
      {
        name: 'Losers',
        clicks: 1
      }],
      fetchingLeaderboard: false,
      session: {
        id: 'veryrandom',
        team: 'Champions',
        sessionClicks: 9
      }
    });
  });

  it('ERROR_CLICK should remove new team on reroll', () => {
    expect(reducer(initialState, {
      type: 'ERROR_CLICK',
      team: 'Losers',
      session: 'asdf'
    })).to.deep.equal({
      leaderboard: [{
        name: 'Champions',
        clicks: 510
      }],
      fetchingLeaderboard: false,
      session: {
        id: 'veryrandom',
        team: 'Champions',
        sessionClicks: 10
      }
    });
  });

  it('RECEIVE_CLICK should do nothing in optimistic updating', () => {
    expect(reducer(initialState, {
      type: 'RECEIVE_CLICK'
    })).to.deep.equal(initialState);
  });

});
