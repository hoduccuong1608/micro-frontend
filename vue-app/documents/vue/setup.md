- Trong Vue.js 3, bạn có thể sử dụng Options API hoặc Composition API. Nếu bạn muốn sử dụng Composition API, bạn sẽ sử dụng phần setup trong thẻ **script** của component Vue. Dưới đây là một ví dụ đơn giản:

```
<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>This is a Vue 3 component with Composition API.</p>
    <button @click="changeGreeting">Change Greeting</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Sử dụng ref để tạo reactive data
    const greeting = ref('Hello, Vue 3!');

    // Hàm để thay đổi giá trị của greeting
    const changeGreeting = () => {
      greeting.value = 'Greetings from Vue 3!';
    };

    // Trả về các giá trị và phương thức mà bạn muốn sử dụng trong template
    return {
      greeting,
      changeGreeting
    };
  }
};
</script>

<style scoped>
/* Styles specific to this component */
</style>
```

Trong ví dụ trên, chúng ta sử dụng ref từ Composition API để tạo một biến greeting được gắn liền với dữ liệu của component. Hàm changeGreeting được tạo để thay đổi giá trị của greeting. Bạn có thể trả về mọi giá trị và phương thức mà bạn muốn sử dụng trong template từ hàm setup.

Lưu ý rằng Composition API là một tính năng mới được giới thiệu trong Vue.js 3 và mang lại sự linh hoạt và quản lý trạng thái tốt hơn trong các component lớn và phức tạp.

- Trong Vue.js 2, bạn sử dụng Options API để xây dựng các component. Dưới đây là một ví dụ cơ bản về cách sử dụng Options API:

```
<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>This is a Vue 2 component with Options API.</p>
    <button @click="changeGreeting">Change Greeting</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello, Vue 2!'
    };
  },
  methods: {
    changeGreeting() {
      this.greeting = 'Greetings from Vue 2!';
    }
  }
};
</script>

<style scoped>
/* Styles specific to this component */
</style>
```

Trong ví dụ trên:

Phần data chứa dữ liệu của component, trong trường hợp này là biến greeting.
Phần methods chứa các phương thức của component, trong trường hợp này là changeGreeting.
Các directive Vue như {{ greeting }} và @click được sử dụng trong phần template để tương tác với dữ liệu và logic của component.
Options API cung cấp một cách tiếp cận truyền thống cho việc xây dựng component Vue. Mặc dù nó mạnh mẽ và dễ sử dụng, nhưng khi ứng dụng của bạn phức tạp lên, nó có thể dẫn đến vấn đề quản lý trạng thái và logic phức tạp.

Trong Vue.js 3, Composition API đã được giới thiệu để giải quyết những vấn đề này và mang lại sự linh hoạt và hiệu suất tốt hơn.
