- Conditional rendering trong Vue.js là quá trình hiển thị hoặc ẩn phần tử hoặc nội dung của một component dựa trên điều kiện logic. Điều này giúp bạn linh hoạt trong việc kiểm soát giao diện người dùng dựa trên trạng thái, dữ liệu, hoặc các điều kiện khác trong ứng dụng Vue của bạn. Dưới đây là một số cách thực hiện conditional rendering:

**1. Sử dụng v-if và v-else:**

```
<template>
  <div>
    <p v-if="isLoggedIn">Welcome, User!</p>
    <p v-else>Login to continue.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>
```

**2. Sử dụng v-show:**

```
<template>
  <div>
    <p v-show="isVisible">This paragraph is visible.</p>
    <button @click="toggleVisibility">Toggle Visibility</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
```

**3. Sử dụng v-for để lặp qua danh sách:**

```
<template>
  <div>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3']
    };
  }
};
</script>
```

**4. Sử dụng v-if với điều kiện phức tạp:**

```
<template>
  <div>
    <p v-if="userRole === 'admin' && isAuthenticated">Welcome, Admin!</p>
    <p v-else-if="isAuthenticated">Welcome, User!</p>
    <p v-else>Login to continue.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userRole: 'user',
      isAuthenticated: true
    };
  }
};
</script>
```

Conditional rendering là một khía cạnh quan trọng của Vue.js giúp bạn quản lý hiển thị và ẩn các phần tử dựa trên điều kiện logic, trạng thái của ứng dụng và dữ liệu.
