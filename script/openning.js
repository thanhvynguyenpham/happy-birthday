
const delay = ms => new Promise(res => setTimeout(res, ms)); 

const main = async () => {
  await delay(7000);
  const clickhere = document.getElementsByClassName("link")[0];
  clickhere.hidden = false;
};

main();