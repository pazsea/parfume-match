import { doAddStories } from './story';

describe('story action', () => {
  it('adds stories', () => {
    const stories = ['a', 'heej'];

    const expectedAction = {
      type: 'STORIES_ADD',
      stories,
    };
    const action = doAddStories(stories);

    expect(action).toEqual(expectedAction);
  });
});
