// sem usar done()
// test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//   }, 500);
// });

// utilizando done() para aguardar a promise
test("Não deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});
