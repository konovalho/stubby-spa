import React from 'react';

import Verify from './Verify';

import * as thunks from 'models/user/thunks';
import { useThunkWithPayload } from 'hooks/useAction';

const VerifyContainer = () => {
  const handleVerify = useThunkWithPayload(thunks.verify);

  return <Verify onVerify={handleVerify} />;
};

export default VerifyContainer;
