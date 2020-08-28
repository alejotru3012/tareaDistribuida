import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_Nuf3aYUbt',
  ClientId: '7b5k60d3m13ar26tbto3mmhe8b'
};

export default new CognitoUserPool(poolData);