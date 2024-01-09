# Computed

- Trong Vue.js, computed là một phần quan trọng của dữ liệu tính toán. Các thuộc tính computed được sử dụng để tính toán giá trị dựa trên dữ liệu khác trong Vue instance mà không cần phải ghi lại logic tính toán trong các phương thức hoặc template. Các giá trị được tính toán bởi computed được cache và chỉ tính toán lại khi các giá trị phụ thuộc thay đổi.

- Dưới đây là một ví dụ đơn giản về cách sử dụng computed trong một component Vue:

```
<template>

  <div>
    <p>{{ message }}</p>
    <p>{{ reversedMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  computed: {
    // computed property sử dụng để đảo ngược chuỗi message
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
};
</script>
```
