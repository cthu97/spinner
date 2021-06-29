const animation = ['|', '/', '-', '\\', '|', '/', '-', '\\    \n']
let timer = 100

for (let item of animation){
setTimeout(() => {process.stdout.write(`\r${item}`)}, timer)
  timer += 200;
};
