import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { feedTypes, getFeed } from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockFeed = {
  rss: {
    channel: {
      item: [
        {
          title: 'title1',
          link: 'link1',
          description: 'description1',
          guid: '1',
        },
        {
          title: 'title2',
          link: 'link2',
          description: 'description2',
          guid: '2',
        },
      ],
    },
  },
};

jest.mock('../../library/network', () =>
  ({
    getFeedFromCloud: jest.fn(() => (Promise.resolve(mockFeed))),
  })
);

describe('rss feed actions', () => {
  it('dispatches INIT_FEED when retrieving rss feed is done', () => {
    const expectedActions = [
      {
        type: feedTypes.INIT_FEED,
        payload: mockFeed,
      },
    ];

    const store = mockStore({ rssFeed: null });

    return store.dispatch((getFeed())).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
