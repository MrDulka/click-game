import { requestClick, receiveClick, errorClick, requestLeaderboard,
  receiveLeaderboard, setSession } from '../src/actions';
import { expect } from 'chai';

describe('Testing synchronous actions', () => {
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
