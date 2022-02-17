<template>
  <div class="form-part">
    <span class="form-parts__title">寄送地址</span>
    <div class="form-part__address">
      <div class="form-row">
        <div class="form-group select-wrapper form-group-title">
          <label for="title">稱謂</label>
          <select name="title" id="title" v-model="title">
            <option value="" style="display: none">先生</option>
            <option value="">小姐</option>
          </select>
        </div>
        <div class="form-group form-group-name">
          <label for="name">姓名</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="name"
            v-model="name"
            placeholder="請輸入姓名"
            required
          />
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group form-group-tel">
          <label for="phone">電話</label>
          <input
            type="text"
            class="form-control"
            name="phone"
            id="phone"
            v-model="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="請輸入行動電話"
            required
          />
        </div>
        <div class="form-group form-group-email">
          <label for="email">Email</label>
          <input
            type="text"
            class="form-control"
            name="email"
            id="email"
            v-model="email"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>
      <div class="form-row-3">
        <div class="form-group form-group-city">
          <label for="city">縣市</label>
          <div class="select-wrapper">
            <select name="city" id="city">
              <option value="" selected disabled>請選擇縣市</option>
              <option value="">北部</option>
              <option value="">中部</option>
              <option value="">南部</option>
              <option value="">中部</option>
              <option value="">不拘</option>
            </select>
          </div>
        </div>
        <div class="form-group form-group-address">
          <label for="address">地址</label>
          <input
            type="text"
            class="form-control"
            name="address"
            id="address"
            v-model="address"
            placeholder="請輸入地址 "
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormAdress",
  data() {
    return {
      name: "",
      title: "",
      tel: "",
      email: "",
      city: "",
      address: "",
    };
  },
};
</script>