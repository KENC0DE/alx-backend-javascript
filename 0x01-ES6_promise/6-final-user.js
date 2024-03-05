import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((ans) => {
    const response = [];
    if (ans.status === 'fulfilled') {
      response.push(ans);
    } else {
      response.push({
        status: ans.status,
        value: `Error: ${ans[1].reason.message}`,
      });
    }
    return response;
  });
}
