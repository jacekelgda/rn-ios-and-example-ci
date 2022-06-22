/**
 * note: seeResponseValidByCallback expect https://www.chaijs.com/api/bdd
 */

const { I } = inject();

When('I pause', () => {
  pause();
});

