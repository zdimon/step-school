import { from } from 'rxjs';
import { range } from 'rxjs';
import { toArray, map, switchMap, filter } from 'rxjs/operators';

const CONST1 = 120;
const CONST2 = 60;

const stream1 = range(1,CONST1)
.pipe(
    toArray(),
    map(arr=>arr.sort((a,b) => b-a)),
    switchMap( (rez) => from(rez)
                        .pipe(filter((el: any) => CONST1%el === 0))
    )
);

const stream2 = range(1,CONST2)
.pipe(
    toArray(),
    map(arr=>arr.sort((a,b) => b-a)),
    switchMap( (rez) => from(rez)
                        .pipe(filter((el: any) => CONST2%el === 0))
    )
);

stream1.pipe(
    switchMap((el1) => stream2.pipe(filter((el2) => el2 === el1))),
    toArray()
).subscribe((el) => {
    console.log(Math.max(...el));
})
