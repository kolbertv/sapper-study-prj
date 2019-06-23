import { writable } from 'svelte/store';

const meetups = writable([
  // {
  //   id: 'm1',
  //   title: 'Coding Bootcamp',
  //   subtitle: 'Learn to code in 2 hours',
  //   description:
  //     'In this meetup, we will have some experts that teach you how to code!',
  //   imageUrl:
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG',
  //   address: '27th Nerd Road, 32523 New York',
  //   contactEmail: 'code@test.com',
  //   isFavorite: false
  // },
  // {
  //   id: 'm2',
  //   title: 'Swim Together',
  //   subtitle: "Let's go for some swimming",
  //   description: 'We will simply swim some rounds!',
  //   imageUrl:
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg',
  //   address: '27th Nerd Road, 32523 New York',
  //   contactEmail: 'swim@test.com',
  //   isFavorite: false
  // }
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  setMeetups: meetupsArray => {
    meetups.set(meetupsArray);
  },
  addMeetup: meetupData => {
    const newMeetup = {
      ...meetupData
      // id: Math.random().toString()
      // isFavorite: false
    };
    meetups.update(items => {
      return [newMeetup, ...items];
    });
  },
  removeMeetup: id => {
    meetups.update(items => {
      return items.filter(i => i.id !== id);
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const meetupIndex = items.findIndex(i => i.id === id);
      const updateMeetup = { ...items[meetupIndex], ...meetupData };
      const updateMeetups = [...items];
      updateMeetups[meetupIndex] = updateMeetup;
      console.log(updateMeetup);
      return updateMeetups;
    });
  },
  toggleFavorite: id => {
    meetups.update(items => {
      const updateMeetup = { ...items.find(m => m.id === id) };
      updateMeetup.isFavorite = !updateMeetup.isFavorite;
      const meetupIndex = items.findIndex(m => m.id === id);
      const updateMeetups = [...items];
      updateMeetups[meetupIndex] = updateMeetup;
      return updateMeetups;
    });
  }
};

export default customMeetupsStore;
