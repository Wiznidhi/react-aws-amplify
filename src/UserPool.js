import { CognitoUserPool } from "amazon-cognito-identity-js";

 const poolData = {
     UserPoolId: "us-east-1_AvMC801Qj",
     ClientId: "5ba4f1jacg9jg7siddtlit5bbo"
 }
 
 export default new CognitoUserPool(poolData); 