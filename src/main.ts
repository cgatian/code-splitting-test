import 'rxjs';

console.log('Yay!');
declare let require: any; 

require.ensure(['test-package/index'], (req) => {
    console.log(req.module);
});

// require.ensure(['./modules/a.ts'], (req) => {
//     console.log(req.module);
// });
// require.ensure(['./modules/b.ts'], (req) => {
//     console.log(req.module);
// });
// require.ensure(['./modules/c.ts'], (req) => {
//     console.log(req.module);
// });
