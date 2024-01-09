- Trong Vue.js, ref là một cơ chế cho phép bạn truy cập trực tiếp đến một phần tử DOM hoặc một instance của một component con từ một component cha. ref giúp bạn tương tác với các phần tử hoặc component con một cách trực tiếp, mà không cần thông qua cơ chế truyền dữ liệu giữa các components.

Dưới đây là một số điểm quan trọng về ref:

**1. Sử dụng ref trong Template**:

Trong template của một component, bạn có thể sử dụng ref để liên kết một phần tử DOM hoặc một component con.

```
<template>
  <div>
    <input ref="myInput" type="text">
    <button @click="focusInput">Focus Input</button>
  </div>
</template>

<script>
export default {
  methods: {
    focusInput() {
      this.$refs.myInput.focus();
    }
  }
}
</script>
```

Trong ví dụ trên, ref="myInput" liên kết đến phần tử input, và khi phương thức focusInput được gọi, chúng ta sử dụng this.$refs.myInput để truy cập trực tiếp đến phần tử input và gọi phương thức focus().

**2. Sử Dụng ref trong JavaScript**:

Bạn cũng có thể sử dụng ref trong phần logic JavaScript của component.

```
<template>
  <div>
    <input ref="myInput" type="text">
    <button @click="focusInput">Focus Input</button>
  </div>
</template>

<script>
export default {
  mounted() {
    // Truy cập trực tiếp đến phần tử input khi component được mounted
    this.$refs.myInput.value = 'Hello, Vue!';
  },
  methods: {
    focusInput() {
      this.$refs.myInput.focus();
    }
  }
}
</script>
```

Trong ví dụ trên, chúng ta sử dụng this.$refs.myInput để truy cập và thao tác trực tiếp với phần tử input khi component được mounted.

**3. ref với Component Con**:

Bạn cũng có thể sử dụng ref để truy cập instance của một component con.

```
<template>
  <div>
    <button @click="callChildMethod">Call Child Method</button>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  methods: {
    callChildMethod() {
      this.$refs.childComponent.childMethod();
    }
  }
}
</script>
```

Trong ví dụ trên, ref="childComponent" liên kết đến instance của ChildComponent, và khi nút được click, chúng ta gọi phương thức childMethod của component con.

Lưu ý rằng việc sử dụng ref thường cần được thực hiện cẩn thận để tránh việc truy cập trực tiếp và làm giảm tính tương tác giữa các components, vì điều này có thể làm giảm tính tương tác và tái sử dụng.
