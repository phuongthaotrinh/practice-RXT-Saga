# Redux saga note


## Phân biệt Effect vs Effect Creator
   ### Effect :
      Là một javascript object có chứa thông tin để saga middleware biết cần phải làm

   ### Effect Creator :
      - Là một function trả về một Effect. Và nó ko thực thi cái Effect này, người thực thi là
         saga middlewar

      - Các hàm dùng trong Redux Saga: takeEvery, takeLatest, ... đây là những Effect Creator.

## Effect Creator  => Trả về effect chứa thông tin giúp middleware biết phải làm gì

### `takeEvery(pattern, saga,..args)`

Chạy saga mỗi khi có action  `pattern` được dispatch, dispatch bao nhiêu sẽ chạy bấy nhiêu saga

### `takeLastes(pattern, saga,..args)`

Chạy `saga` nhưng mỗi khi có action `pattern` mới được dispatch, thì cái `saga trước đó` sẽ bị `cancel`
=> lấy thằng cuối

### `takeLeading(pattern, saga,..args)`

Chạy `saga` khi action `pattern` được dispatch, những action tiếp theo sẽ bị cancel cho đến khi action trước đó chạy xong
=> lấy thằng đầu
### `put(action)`

Dispatch action từ saga

### `call(fn,...args)`

gọi hàm `fn` và truyền tham số `args` vào hàm đó

### `all([...effects])`

Chạy tất cả effects cùng một lúc

### `take(pattern)` and `fork(fn,...args)`

Mô hình watcher, ...worker, đợi dispatch action `pattern` sẽ thực hiện một cái task nào đó

### `throttle(ms, pattern, saga,...args)` 

throttle cái action `pattern`, `đảm bảo chỉ chạy saga 1 lần` trong khoảng thời gian `ms`

### `debounce(ms, pattern, saga,...args)` 

debounce cái action `pattern`, `đảm bảo chỉ chạy saga 1 lần` sau khi đã đợi  khoảng thời gian `ms`

### `retry(maxTries, delay, fn,...args)` 

Cố gắng gọi lại hàm `fn` nếu failed, sau mỗi lần `delay` milliseconds, và tối đa chỉ thử `maxTries` lần



