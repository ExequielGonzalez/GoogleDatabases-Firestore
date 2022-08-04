import { onSnapshot } from 'firebase/firestore';
import { refs } from 'src/config/firebase/firestoreDatabase';

export async function setListenerTitleAPI() {
  const event = new CustomEvent('newTitleAPI');
  return onSnapshot(refs.titleListener(), (doc) => {
    event.title = doc.data();
    document.dispatchEvent(event);
  });
}
