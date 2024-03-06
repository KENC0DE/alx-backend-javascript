import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((ans) => {
    const response = [];
    if (ans.status === 'fulfilled') {
      response.push({
        status: ans.status,
        value: ans.value,
      });
    } else {
      response.push({
        status: ans.status,
        value: ans.reason.toString(),
      });
    }
    return response;
  });
}