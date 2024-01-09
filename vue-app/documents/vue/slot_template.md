- **slot** trong component Vue để truyền nội dung từ component cha vào component con, bạn có thể bổ sung thẻ **slot** trong phần template của component con. Dưới đây là một ví dụ:

```
<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>This is a Vue component template.</p>
    <button @click="changeGreeting">Change Greeting</button>

    <!-- Thẻ slot để chứa nội dung từ component cha -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello, Vue!'
    };
  },
  methods: {
    changeGreeting() {
      this.greeting = 'Greetings from Vue!';
    }
  }
};
</script>

<style scoped>
/* Styles specific to this component */
</style>
```

- Trong component trên, thẻ <slot></slot> là nơi mà nội dung từ component cha sẽ được chèn vào. Khi sử dụng component này trong một component cha, bạn có thể chèn nội dung bằng cách sử dụng thẻ <template> và đặt nội dung trong thẻ <slot>:

```
<template>
  <div>
    <YourComponent>
      <template v-slot:default>
        <!-- Nội dung từ component cha -->
        <p>Content from parent component.</p>
      </template>
    </YourComponent>
  </div>
</template>

<script>
import YourComponent from './YourComponent.vue';

export default {
  components: {
    YourComponent
  }
};
</script>
```

Ở đây, v-slot:default là một cách sử dụng tên mặc định cho slot, và nội dung bên trong <template> là nội dung sẽ được chèn vào thẻ <slot> của YourComponent.
