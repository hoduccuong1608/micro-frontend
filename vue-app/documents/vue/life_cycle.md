Vue.js có một vòng đời (lifecycle) rất quan trọng, giúp bạn theo dõi và tương tác với các sự kiện quan trọng trong quá trình một component Vue được khởi tạo, cập nhật, và hủy bỏ. Dưới đây là một tóm tắt về vòng đời của một component Vue:

1. **BeforeCreate**: Trước khi component được tạo, dữ liệu (data) và sự kiện (event) chưa được khởi tạo.

2. **Created**: Sau khi component được tạo, dữ liệu đã được khởi tạo, nhưng DOM và sự kiện chưa được truy xuất.

3. **BeforeMount**: Trước khi component được gắn kết vào DOM.

4. **Mounted**: Sau khi component được gắn kết vào DOM. Lúc này, bạn có thể truy xuất DOM và thực hiện các tác vụ sau khi component đã được hiển thị.

5. **BeforeUpdate**: Trước khi component được cập nhật khi có sự thay đổi trong dữ liệu.

6. **Updated**: Sau khi component đã được cập nhật sau khi có sự thay đổi trong dữ liệu.

7. **BeforeDestroy**: Trước khi component bị hủy bỏ.

8. **Destroyed**: Sau khi component đã bị hủy bỏ. Lúc này, tất cả các sự kiện và giảm tham chiếu đối tượng có thể được thực hiện để giải phóng bộ nhớ.

Dưới đây là một ví dụ về cách bạn có thể sử dụng các hàm vòng đời trong một component Vue:

```
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  }
};
</script>
```

#### Hình ảnh vòng đời component

![Vòng đời](../images/lifecycle.png)
