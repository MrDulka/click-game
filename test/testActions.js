import { doClick, setLeaderboard, setSession } from '../src/actions/index';
import { expect } from 'chai';

describe('Testing actions', () => {
  it('doClick should create a CLICK action', () => {
    expect(doClick('Best team', 'iamsorandomlol')).to.deep.equal({
      type: 'CLICK',
      team: 'Best team',
      session: 'iamsorandomlol'
    });
  });

  it('setLeaderboard should create a SET_LEADERBOARD action', () => {
    expect(setLeaderboard([{name: "Your mom's team"}])).to.deep.equal({
      type: 'SET_LEADERBOARD',
      leaderboard: [{name: "Your mom's team"}]
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
