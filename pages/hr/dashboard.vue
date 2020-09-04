<template>
  <div>
    <form class="form-inline space">
      <input
        class="search form-control form-control-sm"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <i class="fas fa-search icon" aria-hidden="true"></i>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'hr',
}
</script>

<style scoped>
.space {
  margin-left: 250px;
}
.icon {
  padding-left: 10px;
}

::-webkit-input-placeholder {
  text-align: center;
}

.search {
  width: 200px;
}

.fas {
  color: #0880ae;
}
</style>