function job() {
  return new Promise((tacno, netacno) => {
    setTimeout(() => {
      tacno("Hello world");
    }, 2000);
  });
}
job().then((res) => {
  console.log(res);
});
