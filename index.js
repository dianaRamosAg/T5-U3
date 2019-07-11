
const request = require('request-promise'); 

const id = '2924398794242532';  
const access_token = 'EAAFgRFrd6tEBAL2i4ilwwLqCZBzyrS8ue9JlbMk6sSfjNXZBUwjQ8JrY3A83bNabGdCVTZBd9QfigzThyVyfeyPb7EQNVzPr8sdA21sFq56fmoDvAnuXblCvxj94kbLyH87PZAm8mKZBgjQmCwE08oNTYvZC9NqRQdmWS8PTbmm1UXUAJZCiZBVlduFO6Y82ltrs1lTCJsKZAhwZDZD';

const postTextOptions = {  
  method: 'POST',
  uri: `https://graph.facebook.com/v3.3/${id}/feed`,
  qs: {
    access_token: access_token,
    message: 'Hello world!'
  }
};
request(postTextOptions); 