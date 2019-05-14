import React from 'react';

import { withFirebase } from '../Firebase';
import { SignoutBtn } from './styles';

const SignOutButton = ({ firebase }) => (
  <SignoutBtn type="button" onClick={firebase.doSignOut}>
    Sign Out <i class="fas fa-sign-out-alt fa-lg" />
  </SignoutBtn>
);

export default withFirebase(SignOutButton);
