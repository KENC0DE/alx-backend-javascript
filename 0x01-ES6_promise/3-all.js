import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  Promise.all([photo, user]).then((data) => {
    console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
  }).catch(() => {
    console.log(Error('Signup system offline'));
  });
}
