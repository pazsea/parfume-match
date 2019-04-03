import { STORIES_ADD } from '../constants/actionTypes';

const bigSize = stories => ({
  type: STORIES_ADD,
  stories,
});

export { doAddStories };
