import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  photo.then((valp) => {
    user.then((val) => {
      console.log(`${valp.body} ${val.firstName} ${val.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
  }).catch(() => {
    console.log(Error('Signup system offline'));
  });
}
